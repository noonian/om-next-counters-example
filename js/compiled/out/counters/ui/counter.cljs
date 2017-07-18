(ns counters.ui.counter
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as sab :refer-macros [html]]))

(defn make-counter [id]
  {:id id
   :count 0})

(defn inc-counter!
  [c id]
  (om/transact! c `[(counter/inc! ~{:id id})]))

(defn reset-counter!
  [c id]
  (om/transact! c `[(counter/reset! ~{:id id})]))

(defn color-class [id]
  (let [n (if (number? id) id 5)] ;hack to color global/counter differently
    (str "color-" (mod n 6))))

(defui Counter
  static om/Ident
  (ident [this props]
    [:counter/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :count])
  Object
  (render [this]
    (let [{:keys [id count]} (om/props this)
          {:keys [target]} (om/get-computed this)
          ;; By allowing a parent component to pass itself as the
          ;; target for transactions, we can make this component
          ;; generic but still have a parent update when our state
          ;; changes.
          target (or target this)]
      (html
       [:div.counter {:class (color-class id)}
        [:h4 "Counter id: " (str id)]
        [:h2 "The current count is: " count "."]
        [:button {:on-click #(inc-counter! target id)} "Increment it!"]
        [:button {:on-click #(reset-counter! target id)} "Reset"]]))))

(def counter (om/factory Counter {:keyfn :id}))
