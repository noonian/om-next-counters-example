(ns counters.ui.core
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as sab :refer-macros [html]]
            [counters.parser :as parser]
            [counters.ui.counter :as counter]))

(defui RootView
  static om/IQuery
  (query [this]
    [{:global/counter (om/get-query counter/Counter)}
     {:other/counters (om/get-query counter/Counter)}
     {:sorted/counters (om/get-query counter/Counter)}])
  Object
  (render [this]
    (let [{:keys [:global/counter :other/counters] :as props} (om/props this)
          ;; When the counter transacts it will use this component as
          ;; the target to om/transact! so that the sorted list
          ;; re-renders.
          render-counter (fn [props]
                           (counter/counter
                            (om/computed props {:target this})))]
      (html
       [:div
        [:header
         [:h1 "Om Next Counter"]
         [:h4 ":other/counters and :sorted/counters are backed by the same data"]]
        [:div.counters
         [:header
          [:h3 ":global/counter"]
          "These counters are backed by the same data"]
         [:div (render-counter counter)]
         [:div (render-counter counter)]]
        [:div.counters
         [:header
          [:h3 ":other/counters"]
          "The order of these counters will remain constant"]
         (map render-counter counters)]
        [:div.counters
         [:header
          [:h3 ":sorter/counters"]
          "These counters will be ordered by the value of their count"]
         (map render-counter (:sorted/counters props))]]))))
