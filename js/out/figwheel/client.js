// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13108,args){var map__13110 = p__13108;var map__13110__$1 = ((cljs.core.seq_QMARK_.call(null,map__13110))?cljs.core.apply.call(null,cljs.core.hash_map,map__13110):map__13110);var debug = cljs.core.get.call(null,map__13110__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13108,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13108,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13111){
var p__13108 = cljs.core.first(arglist__13111);
var args = cljs.core.rest(arglist__13111);
return log__delegate(p__13108,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13112){var map__13114 = p__13112;var map__13114__$1 = ((cljs.core.seq_QMARK_.call(null,map__13114))?cljs.core.apply.call(null,cljs.core.hash_map,map__13114):map__13114);var websocket_url = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13115,callback){var map__13117 = p__13115;var map__13117__$1 = ((cljs.core.seq_QMARK_.call(null,map__13117))?cljs.core.apply.call(null,cljs.core.hash_map,map__13117):map__13117);var msg = map__13117__$1;var dependency_file = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13117__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__5053__auto__ = dependency_file;if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13117,map__13117__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13117,map__13117__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13118,p__13119){var map__13122 = p__13118;var map__13122__$1 = ((cljs.core.seq_QMARK_.call(null,map__13122))?cljs.core.apply.call(null,cljs.core.hash_map,map__13122):map__13122);var opts = map__13122__$1;var url_rewriter = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13123 = p__13119;var map__13123__$1 = ((cljs.core.seq_QMARK_.call(null,map__13123))?cljs.core.apply.call(null,cljs.core.hash_map,map__13123):map__13123);var d = map__13123__$1;var file = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13124,p__13125){var map__13167 = p__13124;var map__13167__$1 = ((cljs.core.seq_QMARK_.call(null,map__13167))?cljs.core.apply.call(null,cljs.core.hash_map,map__13167):map__13167);var opts = map__13167__$1;var on_jsload = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13168 = p__13125;var map__13168__$1 = ((cljs.core.seq_QMARK_.call(null,map__13168))?cljs.core.apply.call(null,cljs.core.hash_map,map__13168):map__13168);var files = cljs.core.get.call(null,map__13168__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files){
return (function (state_13191){var state_val_13192 = (state_13191[(1)]);if((state_val_13192 === (6)))
{var inst_13173 = (state_13191[(7)]);var inst_13182 = (state_13191[(2)]);var inst_13183 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13184 = [inst_13173];var inst_13185 = (new cljs.core.PersistentVector(null,1,(5),inst_13183,inst_13184,null));var inst_13186 = cljs.core.apply.call(null,on_jsload,inst_13185);var state_13191__$1 = (function (){var statearr_13193 = state_13191;(statearr_13193[(8)] = inst_13182);
return statearr_13193;
})();var statearr_13194_13208 = state_13191__$1;(statearr_13194_13208[(2)] = inst_13186);
(statearr_13194_13208[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13192 === (5)))
{var inst_13189 = (state_13191[(2)]);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13191__$1,inst_13189);
} else
{if((state_val_13192 === (4)))
{var state_13191__$1 = state_13191;var statearr_13195_13209 = state_13191__$1;(statearr_13195_13209[(2)] = null);
(statearr_13195_13209[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13192 === (3)))
{var inst_13173 = (state_13191[(7)]);var inst_13176 = console.debug("Figwheel: loaded these files");var inst_13177 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13173);var inst_13178 = cljs.core.prn_str.call(null,inst_13177);var inst_13179 = console.log(inst_13178);var inst_13180 = cljs.core.async.timeout.call(null,(10));var state_13191__$1 = (function (){var statearr_13196 = state_13191;(statearr_13196[(9)] = inst_13176);
(statearr_13196[(10)] = inst_13179);
return statearr_13196;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13191__$1,(6),inst_13180);
} else
{if((state_val_13192 === (2)))
{var inst_13173 = (state_13191[(7)]);var inst_13173__$1 = (state_13191[(2)]);var inst_13174 = cljs.core.not_empty.call(null,inst_13173__$1);var state_13191__$1 = (function (){var statearr_13197 = state_13191;(statearr_13197[(7)] = inst_13173__$1);
return statearr_13197;
})();if(cljs.core.truth_(inst_13174))
{var statearr_13198_13210 = state_13191__$1;(statearr_13198_13210[(1)] = (3));
} else
{var statearr_13199_13211 = state_13191__$1;(statearr_13199_13211[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13192 === (1)))
{var inst_13169 = before_jsload.call(null,files);var inst_13170 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13171 = figwheel.client.load_all_js_files.call(null,inst_13170);var state_13191__$1 = (function (){var statearr_13200 = state_13191;(statearr_13200[(11)] = inst_13169);
return statearr_13200;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13191__$1,(2),inst_13171);
} else
{return null;
}
}
}
}
}
}
});})(c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files))
;return ((function (switch__8441__auto__,c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13204 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13204[(0)] = state_machine__8442__auto__);
(statearr_13204[(1)] = (1));
return statearr_13204;
});
var state_machine__8442__auto____1 = (function (state_13191){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13191);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13205){if((e13205 instanceof Object))
{var ex__8445__auto__ = e13205;var statearr_13206_13212 = state_13191;(statearr_13206_13212[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13191);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13213 = state_13191;
state_13191 = G__13213;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13191){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files))
})();var state__8508__auto__ = (function (){var statearr_13207 = f__8507__auto__.call(null);(statearr_13207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_13207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__,map__13167,map__13167__$1,opts,on_jsload,before_jsload,map__13168,map__13168__$1,files))
);
return c__8506__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13214,link_href){var map__13216 = p__13214;var map__13216__$1 = ((cljs.core.seq_QMARK_.call(null,map__13216))?cljs.core.apply.call(null,cljs.core.hash_map,map__13216):map__13216);var request_url = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__,parent){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__,parent){
return (function (state_13237){var state_val_13238 = (state_13237[(1)]);if((state_val_13238 === (2)))
{var inst_13234 = (state_13237[(2)]);var inst_13235 = parent.removeChild(orig_link);var state_13237__$1 = (function (){var statearr_13239 = state_13237;(statearr_13239[(7)] = inst_13234);
return statearr_13239;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13237__$1,inst_13235);
} else
{if((state_val_13238 === (1)))
{var inst_13232 = cljs.core.async.timeout.call(null,(200));var state_13237__$1 = state_13237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13237__$1,(2),inst_13232);
} else
{return null;
}
}
});})(c__8506__auto__,parent))
;return ((function (switch__8441__auto__,c__8506__auto__,parent){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13243 = [null,null,null,null,null,null,null,null];(statearr_13243[(0)] = state_machine__8442__auto__);
(statearr_13243[(1)] = (1));
return statearr_13243;
});
var state_machine__8442__auto____1 = (function (state_13237){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13237);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13244){if((e13244 instanceof Object))
{var ex__8445__auto__ = e13244;var statearr_13245_13247 = state_13237;(statearr_13245_13247[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13244;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13248 = state_13237;
state_13237 = G__13248;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13237){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__,parent))
})();var state__8508__auto__ = (function (){var statearr_13246 = f__8507__auto__.call(null);(statearr_13246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_13246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__,parent))
);
return c__8506__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13249){var map__13251 = p__13249;var map__13251__$1 = ((cljs.core.seq_QMARK_.call(null,map__13251))?cljs.core.apply.call(null,cljs.core.hash_map,map__13251):map__13251);var f_data = map__13251__$1;var request_url = cljs.core.get.call(null,map__13251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13252,files_msg){var map__13274 = p__13252;var map__13274__$1 = ((cljs.core.seq_QMARK_.call(null,map__13274))?cljs.core.apply.call(null,cljs.core.hash_map,map__13274):map__13274);var opts = map__13274__$1;var on_cssload = cljs.core.get.call(null,map__13274__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13275_13295 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13276_13296 = null;var count__13277_13297 = (0);var i__13278_13298 = (0);while(true){
if((i__13278_13298 < count__13277_13297))
{var f_13299 = cljs.core._nth.call(null,chunk__13276_13296,i__13278_13298);figwheel.client.reload_css_file.call(null,f_13299);
{
var G__13300 = seq__13275_13295;
var G__13301 = chunk__13276_13296;
var G__13302 = count__13277_13297;
var G__13303 = (i__13278_13298 + (1));
seq__13275_13295 = G__13300;
chunk__13276_13296 = G__13301;
count__13277_13297 = G__13302;
i__13278_13298 = G__13303;
continue;
}
} else
{var temp__4126__auto___13304 = cljs.core.seq.call(null,seq__13275_13295);if(temp__4126__auto___13304)
{var seq__13275_13305__$1 = temp__4126__auto___13304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13275_13305__$1))
{var c__5809__auto___13306 = cljs.core.chunk_first.call(null,seq__13275_13305__$1);{
var G__13307 = cljs.core.chunk_rest.call(null,seq__13275_13305__$1);
var G__13308 = c__5809__auto___13306;
var G__13309 = cljs.core.count.call(null,c__5809__auto___13306);
var G__13310 = (0);
seq__13275_13295 = G__13307;
chunk__13276_13296 = G__13308;
count__13277_13297 = G__13309;
i__13278_13298 = G__13310;
continue;
}
} else
{var f_13311 = cljs.core.first.call(null,seq__13275_13305__$1);figwheel.client.reload_css_file.call(null,f_13311);
{
var G__13312 = cljs.core.next.call(null,seq__13275_13305__$1);
var G__13313 = null;
var G__13314 = (0);
var G__13315 = (0);
seq__13275_13295 = G__13312;
chunk__13276_13296 = G__13313;
count__13277_13297 = G__13314;
i__13278_13298 = G__13315;
continue;
}
}
} else
{}
}
break;
}
var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload){
return (function (state_13285){var state_val_13286 = (state_13285[(1)]);if((state_val_13286 === (2)))
{var inst_13281 = (state_13285[(2)]);var inst_13282 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13283 = on_cssload.call(null,inst_13282);var state_13285__$1 = (function (){var statearr_13287 = state_13285;(statearr_13287[(7)] = inst_13281);
return statearr_13287;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13285__$1,inst_13283);
} else
{if((state_val_13286 === (1)))
{var inst_13279 = cljs.core.async.timeout.call(null,(100));var state_13285__$1 = state_13285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13285__$1,(2),inst_13279);
} else
{return null;
}
}
});})(c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload))
;return ((function (switch__8441__auto__,c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13291 = [null,null,null,null,null,null,null,null];(statearr_13291[(0)] = state_machine__8442__auto__);
(statearr_13291[(1)] = (1));
return statearr_13291;
});
var state_machine__8442__auto____1 = (function (state_13285){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13285);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object))
{var ex__8445__auto__ = e13292;var statearr_13293_13316 = state_13285;(statearr_13293_13316[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13292;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13317 = state_13285;
state_13285 = G__13317;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13285){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload))
})();var state__8508__auto__ = (function (){var statearr_13294 = f__8507__auto__.call(null);(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_13294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__,map__13274,map__13274__$1,opts,on_cssload))
);
return c__8506__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13318){var map__13323 = p__13318;var map__13323__$1 = ((cljs.core.seq_QMARK_.call(null,map__13323))?cljs.core.apply.call(null,cljs.core.hash_map,map__13323):map__13323);var opts = map__13323__$1;var on_compile_fail = cljs.core.get.call(null,map__13323__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13323__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13323__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13323__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13324 = cljs.core._EQ_;var expr__13325 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13324.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13325)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13324.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13325)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13324.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13325)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13323,map__13323__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13330 = {"detail":url};return obj13330;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13331){var map__13333 = p__13331;var map__13333__$1 = ((cljs.core.seq_QMARK_.call(null,map__13333))?cljs.core.apply.call(null,cljs.core.hash_map,map__13333):map__13333);var class$ = cljs.core.get.call(null,map__13333__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13333__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13334){var map__13340 = p__13334;var map__13340__$1 = ((cljs.core.seq_QMARK_.call(null,map__13340))?cljs.core.apply.call(null,cljs.core.hash_map,map__13340):map__13340);var ed = map__13340__$1;var exception_data = cljs.core.get.call(null,map__13340__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13340__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__13341_13345 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13342_13346 = null;var count__13343_13347 = (0);var i__13344_13348 = (0);while(true){
if((i__13344_13348 < count__13343_13347))
{var msg_13349 = cljs.core._nth.call(null,chunk__13342_13346,i__13344_13348);console.log(msg_13349);
{
var G__13350 = seq__13341_13345;
var G__13351 = chunk__13342_13346;
var G__13352 = count__13343_13347;
var G__13353 = (i__13344_13348 + (1));
seq__13341_13345 = G__13350;
chunk__13342_13346 = G__13351;
count__13343_13347 = G__13352;
i__13344_13348 = G__13353;
continue;
}
} else
{var temp__4126__auto___13354 = cljs.core.seq.call(null,seq__13341_13345);if(temp__4126__auto___13354)
{var seq__13341_13355__$1 = temp__4126__auto___13354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13341_13355__$1))
{var c__5809__auto___13356 = cljs.core.chunk_first.call(null,seq__13341_13355__$1);{
var G__13357 = cljs.core.chunk_rest.call(null,seq__13341_13355__$1);
var G__13358 = c__5809__auto___13356;
var G__13359 = cljs.core.count.call(null,c__5809__auto___13356);
var G__13360 = (0);
seq__13341_13345 = G__13357;
chunk__13342_13346 = G__13358;
count__13343_13347 = G__13359;
i__13344_13348 = G__13360;
continue;
}
} else
{var msg_13361 = cljs.core.first.call(null,seq__13341_13355__$1);console.log(msg_13361);
{
var G__13362 = cljs.core.next.call(null,seq__13341_13355__$1);
var G__13363 = null;
var G__13364 = (0);
var G__13365 = (0);
seq__13341_13345 = G__13362;
chunk__13342_13346 = G__13363;
count__13343_13347 = G__13364;
i__13344_13348 = G__13365;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__5053__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13366){var map__13368 = p__13366;var map__13368__$1 = ((cljs.core.seq_QMARK_.call(null,map__13368))?cljs.core.apply.call(null,cljs.core.hash_map,map__13368):map__13368);var opts = map__13368__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13366 = null;if (arguments.length > 0) {
  p__13366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13366);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13369){
var p__13366 = cljs.core.seq(arglist__13369);
return watch_and_reload__delegate(p__13366);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map