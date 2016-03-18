(require '[figwheel-sidecar.repl-api :as figwheel]
         '[figwheel-sidecar.config :as config])

(def repl-build "dev")
(def enabled-builds ["dev"])

(defn browse! [url]
  (.browse (java.awt.Desktop/getDesktop)
           (java.net.URI. url)))

(defn start-figwheel! []
  (-> (config/fetch-config)
      (assoc :build-ids enabled-builds)
      (figwheel/start-figwheel!)))

(defn open-browser-tabs! []
  (browse! "http://localhost:3449/index.html"))

(defn doit! []
  (start-figwheel!)
  (open-browser-tabs!)
  (when repl-build
    (figwheel/cljs-repl repl-build)))

(doit!)
