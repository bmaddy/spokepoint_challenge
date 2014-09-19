(defproject spokepoint-challenge "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.3"]
                 [sablono "0.2.22"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]

  :source-paths ["src"]

  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.5"]]
                   :cljsbuild {
                               :builds [{:id "spokepoint-challenge"
                                         :source-paths ["src"]
                                         :compiler {
                                                    :output-to "spokepoint_challenge.js"
                                                    :output-dir "out"
                                                    :optimizations :simple
                                                    ;:source-map true
                                                    }}]}}}
  ;:repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  
  )

(comment
  ;; start cljs repl
  M-x cider-jack-in
  (cemerick.austin/start-server 9000)
  (def repl-env (cemerick.austin/repl-env :session-id "1"))
  (cemerick.austin.repls/cljs-repl repl-env)

  lein trampoline cljsbuild auto
  load index.html
  cljs> (js/alert "foo") ; this works great
  cljs> (in-ns 'spokepoint-challenge.core)
  cljs> (hello)
  ;=> "Error evaluating:" (hello) :as "spokepoint_challenge.core.hello.call(null);\n"
  ;=> #<ReferenceError: spokepoint_challenge is not defined>
  )
