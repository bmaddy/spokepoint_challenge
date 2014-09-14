(defproject spokepoint-challenge "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "spokepoint-challenge"
              :source-paths ["src"]
              :compiler {
                :output-to "spokepoint_challenge.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
