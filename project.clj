(defproject noonian/om-next-counters-example "0.1.0-SNAPSHOT"
  :description "A minimal Om.next example"
  :url "http://github.com/noonian/om-next-counters-example"
  :license {:name "MIT License"
            :url "https://opensource.org/licenses/MIT"
            :year 2016
            :key "mit"}
  :min-lein-version "2.5.3"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]
                 [sablono "0.6.2"]
                 [org.omcljs/om "1.0.0-beta1"]]
  :profiles {:dev {:source-paths ["src/main"]
                   :test-paths ["src/test"]
                   :dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.0-6"]
                                  [devcards "0.2.1"]]
                   :plugins [[lein-cljsbuild "1.1.3"
                              :exclusions [[org.clojure/clojure]]]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :aliases {"figwheel" ["run" "-m" "clojure.main/main" "bin/figwheel.clj"]}
  :clean-targets ^{:protect false} ["target"
                                    "resources/public/js/compiled"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/main"]
                :figwheel {:on-jsload "counters.core/on-js-reload"}
                :compiler {:main counters.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/counters.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               {:id "min"
                :source-paths ["src/main"]
                :compiler {:main counters.core
                           ;; Named counters.js to avoid complexity in
                           ;; renaming the src script in index.html
                           :output-to "resources/public/js/compiled/counters.js"
                           :optimizations :advanced
                           :pretty-print false}}]}
  :figwheel {:css-dirs ["resources/public/css"]})
