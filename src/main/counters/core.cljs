(ns counters.core
  (:require [om.next :as om]
            [om.dom :as dom] ;include for cljsjs ReactDOM dependency
            [counters.parser :as parser]
            [counters.ui.core :as ui]
            [counters.ui.counter :as counter]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(def initial-state
  "Initial denormalized application state."
  {:global/counter (counter/make-counter :global/counter)
   :other/counters (mapv counter/make-counter (range 5))})

(defonce
  ^{:doc "Contains bookkeeping and configuration for Om."}
  reconciler
  (om/reconciler
   {:state initial-state
    :parser parser/parser}))

(defn mount-root-view!
  "Render the root react component in the application render tree
   and initialize Om. This function is safe to call multiple times.
   This function will force a render if the root component is
   already mounted."
  []
  (om/add-root! reconciler ui/RootView (.getElementById js/document "app")))

;; This function is called from a script tag in resources/public/index.html
(defn ^:export setup!
  "Initialize the application."
  []
  (mount-root-view!))

(defn on-js-reload
  "Called when figwheel reloads any code."
  []
  (mount-root-view!))
