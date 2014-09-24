(ns spokepoint-challenge.core
  (:require [clojure.string :as s]
            ;;[cljs.core.async :as async :refer [>! <! put! take! chan close!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [weasel.repl :as ws-repl]
            [figwheel.client :as fw :include-macros true]
            ))

(enable-console-print!)

(defonce brepl (do (ws-repl/connect "ws://localhost:9001" :verbose true)
                   true))

(defn hello []
  (js/alert "Hello"))

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
Business Insider
Megan
Rose Dickey
tech
4
3
N
The Independent
Sally
Newall
boredom
2
3
N
Gizmodo
Andrew
Liszewski
boredom
2
3
Y
ABC News
Becky
Worley
tech
1
4
Y
TechCrunch
Catherine
Shu

1
3
N
Wired
Bryan


1
4
N
NY Times
Nick
Wingfield
boredom
1
4
N
Ian
Bush
KYW-AM
tech
2
1
Y
Laura
Sydell
NPR News
tech
2
1
N
TechCrunch
Mike
Butcher
tech
2
3
Y
TechCrunch
Natasha
Lomas
tech
3
3
Y
Examiner
Eve-Angeline
Mitchell
tech
4
4
N
Business Insider
Dylan
Love
tech
3
3
N
SFGate
Julie
Balise
local press
3
3
N")

(def columns ["Outlet name" "First name" "Last name" "Pitch Angle" "Relevance" "Reach" "Replied?"])
(def column-converters [str str str str #(js/parseInt %) #(js/parseInt %) str])
(def sort-glyphicon {:asc "glyphicon-sort-by-attributes-alt"
                     :desc "glyphicon-sort-by-attributes"})

(def data (->> (s/split raw-data #"\n")
               (partition 7)
               rest
               (map (fn [values] (map #(%1 %2) column-converters values)))
               (map #(zipmap columns %))))

(def app-state (atom {:selected-tab "Outlet name" :sort-col "Relevance" :sort-dir :desc}))

(defn apply-sort [data {:keys [sort-col sort-dir]}]
  (case sort-dir
    :none data
    :desc (sort-by #(% sort-col) data)
    :asc (reverse (sort-by #(% sort-col) data))))

(defn update-sort [{:keys [sort-col sort-dir] :as state} column]
  (assoc state
    :sort-col column
    :sort-dir (if (not= sort-col column)
                :desc
                (first (rest (drop-while #(not= % sort-dir) (cycle [:desc :asc :none])))))))

(defn build-graph [selector column]
  (let [svg (dimple.newSvg selector 590 450)
        counted-data (map #(assoc % "Contacts" 1) data)]
    (doto (dimple.chart. svg (clj->js counted-data))
      (.setBounds 60 30 530 310)
      (.addCategoryAxis "x" column)
      (.addMeasureAxis "y" "Contacts")
      (.addSeries nil dimple.plot.bar)
      (.draw))
    svg))

(defn graph-view [app-data owner]
  (reify
    om/IInitState
    (init-state [this] {:chart (atom nil)})
    om/IDidMount
    (did-mount [this]
      (reset! (om/get-state owner :chart) (build-graph ".chart" (:selected-tab app-data))))
    om/IDidUpdate
    (did-update [this next-props next-state]
      (let [chart (om/get-state owner :chart)]
        (.remove @chart)
        (reset! chart (build-graph ".chart" (:selected-tab app-data)))))
    om/IRender
    (render [this]
      (html [:div.chart]))))

(om/root
 (fn [{:keys [selected-tab sort-col sort-dir] :as app} owner]
    (reify om/IRender
      (render [_]
        (html
         [:div
          [:h1 "Spokepoint Challenge"]
          [:div.col-md-2]
          [:div.col-md-8
           [:ul {:class "nav nav-tabs" :role "tablist"}
            (for [column (remove #{"First name" "Last name"} columns)
                  :let [active? (if (= column selected-tab) "active" "")]]
              [:li {:class active?}
               [:a {:href "#" :on-click #(do (om/update! app :selected-tab column)
                                             (.preventDefault %))}
                column]])]
           [:div
            "Totals by " selected-tab]
           (om/build graph-view app)
           [:table.table
            [:tr
             (for [column columns]
               [:th
                [:a {:href "#"  :on-click (fn [e]
                                            (om/transact! app  #(update-sort % column))
                                            (.preventDefault e))}
                 (name (str column " "))]
                (when (= sort-col column)
                  [:span {:class (str "glyphicon " (sort-glyphicon sort-dir))}])])]
            (for [row (apply-sort data app)]
              [:tr
               (for [column columns]
                 [:td (row column)])])]]
          [:div.col-md-2]]))))
  app-state
  {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :url-rewriter #(str "http:" %)
 :jsload-callback #(print "reloaded"))
