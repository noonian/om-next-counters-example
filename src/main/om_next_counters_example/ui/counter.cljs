(ns counters.ui.counter
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as sab :refer-macros [html]]))

(defn make-counter [id]
  {:id id
   :count 0})

(defn inc-counter! [c]
  (om/transact! c `[(counter/inc! {:counter ~(om/get-ident c)})
                    :sorted/counters]))

(defn reset-counter! [c]
  (om/transact! c `[(counter/reset! {:counter ~(om/get-ident c)})
                    :sorted/counters]))

(defui Counter
  static om/Ident
  (ident [this props]
    [:counter/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :count])
  Object
  (render [this]
    (let [{:keys [count]} (om/props this)]
      (html
       [:div.counter
        [:h2 "The current count is: " count "."]
        [:button {:on-click #(inc-counter! this)} "Increment it!"]
        [:button {:on-click #(reset-counter! this)} "Reset"]]))))

(def counter (om/factory Counter {:keyfn :id}))
