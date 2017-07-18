(ns user
  (:require [clojure.java.io :as io]
            [clojure.repl :refer :all]
            [figwheel-sidecar.repl-api :as figwheel]))

(comment

  (figwheel/start-figwheel!)
  (figwheel/stop-figwheel!)
  (figwheel/cljs-repl "dev")

  )
