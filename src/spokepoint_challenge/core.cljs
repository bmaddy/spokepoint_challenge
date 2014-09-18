(ns spokepoint-challenge.core
  (:require [clojure.string :as s]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def raw-data "Outlet name
First name
Last name
Pitch Angle
Relevance
Reach
Replied?
Business Insider
Caroline
Moss
tech
4
3
N
TechCrunch
Darrell
Etherington
tech
4
3
N
Mashable
Samantha
Murphy Kelly
tech
4
3
Y
Mashable
Fran
Berkman
tech
4
3
N
RetailMeNot
Tricia
Romano
tech
3
1
N
CNBC
Cadie
Thompson
boredom
3
4
N
New York Times
Mike
Hendricks
tech
3
4
Y
SFGate
Angela
Swartz
tech
3
3
Y
Gizmodo
Anna Jane
Grossman
boredom
3
3
Y
LifeHacker
Walter
Glenn
boredom
4
2
N
USA Today
Edward C.
Baig
boredom
2
4
Y
")

(def columns [:outlet-name :first-name :last-name :pitch-angle :relevance :reach :replied?])
(def column-converters [str str str str #(.parseInt js/Number %) #(.parseInt js/Number %) {"Y" true "N" false}])

(def data (->> (s/split raw-data #"\n")
               (partition 7)
               rest
               (map (fn [values] (map #(%1 %2) column-converters values)))
               (map #(zipmap columns %))))

(def app-state (atom {:text "Hello world!"}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text app)))))
  app-state
  {:target (. js/document (getElementById "app"))})
