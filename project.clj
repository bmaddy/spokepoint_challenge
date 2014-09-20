(defproject spokepoint-challenge "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.3"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [weasel "0.4.0-SNAPSHOT"]
                 [sablono "0.2.22"]]

  :hooks [leiningen.cljsbuild]

  :source-paths ["src"]

  :profiles {:dev {:plugins [[jarohen/simple-brepl "0.1.1"]
                             [lein-cljsbuild "1.0.3-SNAPSHOT"]
                             [lein-figwheel "0.1.4-SNAPSHOT"]]
                   :cljsbuild {:builds [{:id "spokepoint-challenge"
                                         :source-paths ["src"]
                                         :compiler {:output-to "resources/public/js/app.js"
                                                    :output-dir "resources/public/js/out"
                                                    :optimizations :none
                                                    :pretty-print true
                                                    :source-map true}}]}
                   :figwheel {:http-server-root "public"
                              :port 3449}}})
