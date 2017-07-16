(ns counters.parser
  (:require [om.next :as om]
            [om.util :as om-util]
            [counters.ui.counter :as counter]
            [cljs.pprint :refer [pprint]])
  (:refer-clojure :exclude [read]))

(defmulti read om/dispatch)
(defmulti mutate om/dispatch)

(def parser (om/parser {:read read :mutate mutate}))

(defmethod read :default
  [{:keys [parser state query]} key params]
  #_(println "read called with key:" key
           "and query:" (with-out-str (pprint query)))
  (let [st @state
        denorm (if query #(om/db->tree query % st) identity)
        val-or-ident (get st key)
        val (cond

              (om-util/ident? val-or-ident)
              (om/db->tree query (get-in st val-or-ident) st)

              (and (vector? val-or-ident) (every? om-util/ident? val-or-ident))
              (mapv  #(om/db->tree query (get-in st %) st) val-or-ident)

              :else (denorm val-or-ident))]
    (if val
      {:value val}
      {:value :not-found})))

(defmethod read :sorted/counters
  [{:keys [state query]} key params]
  (let [st @state
        normalized-counters (:other/counters st)
        counters (mapv #(om/db->tree query % st) normalized-counters)
        sorted-counters (into [] (sort-by :count counters))]
    {:value sorted-counters}))

;; add ident to the list
;; add normalized data to the table
(def last-id (atom 0))

(defmethod mutate 'counter/add!
  [{:keys [state]} key params]
  (let [id (str "new-counter-" (swap! last-id inc))
        ident [:counter/by-id id]
        counter (counter/make-counter id)]
    {:action
     #(swap! state
        (fn [st]
          (-> st
              (update-in [:other/counters] conj ident)
              (assoc-in [:counter/by-id id] counter))))}))

(defmethod mutate 'counter/inc!
  [{:keys [state]} key {:keys [counter]}]
  {:action
   #(swap! state update-in (conj counter :count) inc)})

(defmethod mutate 'counter/reset!
  [{:keys [state]} key {:keys [counter]}]
  {:action
   #(swap! state assoc-in (conj counter :count) 0)})
