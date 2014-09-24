// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__12453__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12452 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__12452,(0),null);var body = cljs.core.nthnext.call(null,vec__12452,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12453 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12453__delegate.call(this,args);};
G__12453.cljs$lang$maxFixedArity = 0;
G__12453.cljs$lang$applyTo = (function (arglist__12454){
var args = cljs.core.seq(arglist__12454);
return G__12453__delegate(args);
});
G__12453.cljs$core$IFn$_invoke$arity$variadic = G__12453__delegate;
return G__12453;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__5778__auto__ = (function iter__12459(s__12460){return (new cljs.core.LazySeq(null,(function (){var s__12460__$1 = s__12460;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12460__$1);if(temp__4126__auto__)
{var s__12460__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12460__$2))
{var c__5776__auto__ = cljs.core.chunk_first.call(null,s__12460__$2);var size__5777__auto__ = cljs.core.count.call(null,c__5776__auto__);var b__12462 = cljs.core.chunk_buffer.call(null,size__5777__auto__);if((function (){var i__12461 = (0);while(true){
if((i__12461 < size__5777__auto__))
{var args = cljs.core._nth.call(null,c__5776__auto__,i__12461);cljs.core.chunk_append.call(null,b__12462,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__12463 = (i__12461 + (1));
i__12461 = G__12463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12462),iter__12459.call(null,cljs.core.chunk_rest.call(null,s__12460__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12462),null);
}
} else
{var args = cljs.core.first.call(null,s__12460__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__12459.call(null,cljs.core.rest.call(null,s__12460__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5778__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__5778__auto__ = (function iter__12468(s__12469){return (new cljs.core.LazySeq(null,(function (){var s__12469__$1 = s__12469;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12469__$1);if(temp__4126__auto__)
{var s__12469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12469__$2))
{var c__5776__auto__ = cljs.core.chunk_first.call(null,s__12469__$2);var size__5777__auto__ = cljs.core.count.call(null,c__5776__auto__);var b__12471 = cljs.core.chunk_buffer.call(null,size__5777__auto__);if((function (){var i__12470 = (0);while(true){
if((i__12470 < size__5777__auto__))
{var style = cljs.core._nth.call(null,c__5776__auto__,i__12470);cljs.core.chunk_append.call(null,b__12471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__12472 = (i__12470 + (1));
i__12470 = G__12472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12471),iter__12468.call(null,cljs.core.chunk_rest.call(null,s__12469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12471),null);
}
} else
{var style = cljs.core.first.call(null,s__12469__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__12468.call(null,cljs.core.rest.call(null,s__12469__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5778__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__12473){
var styles = cljs.core.seq(arglist__12473);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to12474 = (function() { 
var link_to12474__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to12474 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to12474__delegate.call(this,url,content);};
link_to12474.cljs$lang$maxFixedArity = 1;
link_to12474.cljs$lang$applyTo = (function (arglist__12475){
var url = cljs.core.first(arglist__12475);
var content = cljs.core.rest(arglist__12475);
return link_to12474__delegate(url,content);
});
link_to12474.cljs$core$IFn$_invoke$arity$variadic = link_to12474__delegate;
return link_to12474;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12474);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to12476 = (function() { 
var mail_to12476__delegate = function (e_mail,p__12477){var vec__12479 = p__12477;var content = cljs.core.nth.call(null,vec__12479,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__5053__auto__ = content;if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to12476 = function (e_mail,var_args){
var p__12477 = null;if (arguments.length > 1) {
  p__12477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to12476__delegate.call(this,e_mail,p__12477);};
mail_to12476.cljs$lang$maxFixedArity = 1;
mail_to12476.cljs$lang$applyTo = (function (arglist__12480){
var e_mail = cljs.core.first(arglist__12480);
var p__12477 = cljs.core.rest(arglist__12480);
return mail_to12476__delegate(e_mail,p__12477);
});
mail_to12476.cljs$core$IFn$_invoke$arity$variadic = mail_to12476__delegate;
return mail_to12476;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12476);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list12481 = (function unordered_list12481(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5778__auto__ = (function iter__12486(s__12487){return (new cljs.core.LazySeq(null,(function (){var s__12487__$1 = s__12487;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12487__$1);if(temp__4126__auto__)
{var s__12487__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12487__$2))
{var c__5776__auto__ = cljs.core.chunk_first.call(null,s__12487__$2);var size__5777__auto__ = cljs.core.count.call(null,c__5776__auto__);var b__12489 = cljs.core.chunk_buffer.call(null,size__5777__auto__);if((function (){var i__12488 = (0);while(true){
if((i__12488 < size__5777__auto__))
{var x = cljs.core._nth.call(null,c__5776__auto__,i__12488);cljs.core.chunk_append.call(null,b__12489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__12490 = (i__12488 + (1));
i__12488 = G__12490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12489),iter__12486.call(null,cljs.core.chunk_rest.call(null,s__12487__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12489),null);
}
} else
{var x = cljs.core.first.call(null,s__12487__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__12486.call(null,cljs.core.rest.call(null,s__12487__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5778__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12481);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list12491 = (function ordered_list12491(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5778__auto__ = (function iter__12496(s__12497){return (new cljs.core.LazySeq(null,(function (){var s__12497__$1 = s__12497;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12497__$1);if(temp__4126__auto__)
{var s__12497__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12497__$2))
{var c__5776__auto__ = cljs.core.chunk_first.call(null,s__12497__$2);var size__5777__auto__ = cljs.core.count.call(null,c__5776__auto__);var b__12499 = cljs.core.chunk_buffer.call(null,size__5777__auto__);if((function (){var i__12498 = (0);while(true){
if((i__12498 < size__5777__auto__))
{var x = cljs.core._nth.call(null,c__5776__auto__,i__12498);cljs.core.chunk_append.call(null,b__12499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__12500 = (i__12498 + (1));
i__12498 = G__12500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12499),iter__12496.call(null,cljs.core.chunk_rest.call(null,s__12497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12499),null);
}
} else
{var x = cljs.core.first.call(null,s__12497__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__12496.call(null,cljs.core.rest.call(null,s__12497__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5778__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12491);
/**
* Create an image element.
*/
sablono.core.image12501 = (function() {
var image12501 = null;
var image12501__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image12501__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image12501 = function(src,alt){
switch(arguments.length){
case 1:
return image12501__1.call(this,src);
case 2:
return image12501__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image12501.cljs$core$IFn$_invoke$arity$1 = image12501__1;
image12501.cljs$core$IFn$_invoke$arity$2 = image12501__2;
return image12501;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12501);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__12502_SHARP_,p2__12503_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12502_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__12503_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__12504_SHARP_,p2__12505_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12504_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__12505_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field12506 = (function() {
var color_field12506 = null;
var color_field12506__1 = (function (name__12221__auto__){return color_field12506.call(null,name__12221__auto__,null);
});
var color_field12506__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__12221__auto__,value__12222__auto__);
});
color_field12506 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return color_field12506__1.call(this,name__12221__auto__);
case 2:
return color_field12506__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field12506.cljs$core$IFn$_invoke$arity$1 = color_field12506__1;
color_field12506.cljs$core$IFn$_invoke$arity$2 = color_field12506__2;
return color_field12506;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12506);
/**
* Creates a date input field.
*/
sablono.core.date_field12507 = (function() {
var date_field12507 = null;
var date_field12507__1 = (function (name__12221__auto__){return date_field12507.call(null,name__12221__auto__,null);
});
var date_field12507__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__12221__auto__,value__12222__auto__);
});
date_field12507 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return date_field12507__1.call(this,name__12221__auto__);
case 2:
return date_field12507__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field12507.cljs$core$IFn$_invoke$arity$1 = date_field12507__1;
date_field12507.cljs$core$IFn$_invoke$arity$2 = date_field12507__2;
return date_field12507;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12507);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field12508 = (function() {
var datetime_field12508 = null;
var datetime_field12508__1 = (function (name__12221__auto__){return datetime_field12508.call(null,name__12221__auto__,null);
});
var datetime_field12508__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__12221__auto__,value__12222__auto__);
});
datetime_field12508 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return datetime_field12508__1.call(this,name__12221__auto__);
case 2:
return datetime_field12508__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field12508.cljs$core$IFn$_invoke$arity$1 = datetime_field12508__1;
datetime_field12508.cljs$core$IFn$_invoke$arity$2 = datetime_field12508__2;
return datetime_field12508;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12508);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field12509 = (function() {
var datetime_local_field12509 = null;
var datetime_local_field12509__1 = (function (name__12221__auto__){return datetime_local_field12509.call(null,name__12221__auto__,null);
});
var datetime_local_field12509__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__12221__auto__,value__12222__auto__);
});
datetime_local_field12509 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return datetime_local_field12509__1.call(this,name__12221__auto__);
case 2:
return datetime_local_field12509__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field12509.cljs$core$IFn$_invoke$arity$1 = datetime_local_field12509__1;
datetime_local_field12509.cljs$core$IFn$_invoke$arity$2 = datetime_local_field12509__2;
return datetime_local_field12509;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12509);
/**
* Creates a email input field.
*/
sablono.core.email_field12510 = (function() {
var email_field12510 = null;
var email_field12510__1 = (function (name__12221__auto__){return email_field12510.call(null,name__12221__auto__,null);
});
var email_field12510__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__12221__auto__,value__12222__auto__);
});
email_field12510 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return email_field12510__1.call(this,name__12221__auto__);
case 2:
return email_field12510__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field12510.cljs$core$IFn$_invoke$arity$1 = email_field12510__1;
email_field12510.cljs$core$IFn$_invoke$arity$2 = email_field12510__2;
return email_field12510;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12510);
/**
* Creates a file input field.
*/
sablono.core.file_field12511 = (function() {
var file_field12511 = null;
var file_field12511__1 = (function (name__12221__auto__){return file_field12511.call(null,name__12221__auto__,null);
});
var file_field12511__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__12221__auto__,value__12222__auto__);
});
file_field12511 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return file_field12511__1.call(this,name__12221__auto__);
case 2:
return file_field12511__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field12511.cljs$core$IFn$_invoke$arity$1 = file_field12511__1;
file_field12511.cljs$core$IFn$_invoke$arity$2 = file_field12511__2;
return file_field12511;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12511);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field12512 = (function() {
var hidden_field12512 = null;
var hidden_field12512__1 = (function (name__12221__auto__){return hidden_field12512.call(null,name__12221__auto__,null);
});
var hidden_field12512__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__12221__auto__,value__12222__auto__);
});
hidden_field12512 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return hidden_field12512__1.call(this,name__12221__auto__);
case 2:
return hidden_field12512__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field12512.cljs$core$IFn$_invoke$arity$1 = hidden_field12512__1;
hidden_field12512.cljs$core$IFn$_invoke$arity$2 = hidden_field12512__2;
return hidden_field12512;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12512);
/**
* Creates a month input field.
*/
sablono.core.month_field12513 = (function() {
var month_field12513 = null;
var month_field12513__1 = (function (name__12221__auto__){return month_field12513.call(null,name__12221__auto__,null);
});
var month_field12513__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__12221__auto__,value__12222__auto__);
});
month_field12513 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return month_field12513__1.call(this,name__12221__auto__);
case 2:
return month_field12513__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field12513.cljs$core$IFn$_invoke$arity$1 = month_field12513__1;
month_field12513.cljs$core$IFn$_invoke$arity$2 = month_field12513__2;
return month_field12513;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12513);
/**
* Creates a number input field.
*/
sablono.core.number_field12514 = (function() {
var number_field12514 = null;
var number_field12514__1 = (function (name__12221__auto__){return number_field12514.call(null,name__12221__auto__,null);
});
var number_field12514__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__12221__auto__,value__12222__auto__);
});
number_field12514 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return number_field12514__1.call(this,name__12221__auto__);
case 2:
return number_field12514__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field12514.cljs$core$IFn$_invoke$arity$1 = number_field12514__1;
number_field12514.cljs$core$IFn$_invoke$arity$2 = number_field12514__2;
return number_field12514;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12514);
/**
* Creates a password input field.
*/
sablono.core.password_field12515 = (function() {
var password_field12515 = null;
var password_field12515__1 = (function (name__12221__auto__){return password_field12515.call(null,name__12221__auto__,null);
});
var password_field12515__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__12221__auto__,value__12222__auto__);
});
password_field12515 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return password_field12515__1.call(this,name__12221__auto__);
case 2:
return password_field12515__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field12515.cljs$core$IFn$_invoke$arity$1 = password_field12515__1;
password_field12515.cljs$core$IFn$_invoke$arity$2 = password_field12515__2;
return password_field12515;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12515);
/**
* Creates a range input field.
*/
sablono.core.range_field12516 = (function() {
var range_field12516 = null;
var range_field12516__1 = (function (name__12221__auto__){return range_field12516.call(null,name__12221__auto__,null);
});
var range_field12516__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__12221__auto__,value__12222__auto__);
});
range_field12516 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return range_field12516__1.call(this,name__12221__auto__);
case 2:
return range_field12516__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field12516.cljs$core$IFn$_invoke$arity$1 = range_field12516__1;
range_field12516.cljs$core$IFn$_invoke$arity$2 = range_field12516__2;
return range_field12516;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12516);
/**
* Creates a search input field.
*/
sablono.core.search_field12517 = (function() {
var search_field12517 = null;
var search_field12517__1 = (function (name__12221__auto__){return search_field12517.call(null,name__12221__auto__,null);
});
var search_field12517__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__12221__auto__,value__12222__auto__);
});
search_field12517 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return search_field12517__1.call(this,name__12221__auto__);
case 2:
return search_field12517__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field12517.cljs$core$IFn$_invoke$arity$1 = search_field12517__1;
search_field12517.cljs$core$IFn$_invoke$arity$2 = search_field12517__2;
return search_field12517;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12517);
/**
* Creates a tel input field.
*/
sablono.core.tel_field12518 = (function() {
var tel_field12518 = null;
var tel_field12518__1 = (function (name__12221__auto__){return tel_field12518.call(null,name__12221__auto__,null);
});
var tel_field12518__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__12221__auto__,value__12222__auto__);
});
tel_field12518 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return tel_field12518__1.call(this,name__12221__auto__);
case 2:
return tel_field12518__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field12518.cljs$core$IFn$_invoke$arity$1 = tel_field12518__1;
tel_field12518.cljs$core$IFn$_invoke$arity$2 = tel_field12518__2;
return tel_field12518;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12518);
/**
* Creates a text input field.
*/
sablono.core.text_field12519 = (function() {
var text_field12519 = null;
var text_field12519__1 = (function (name__12221__auto__){return text_field12519.call(null,name__12221__auto__,null);
});
var text_field12519__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__12221__auto__,value__12222__auto__);
});
text_field12519 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return text_field12519__1.call(this,name__12221__auto__);
case 2:
return text_field12519__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field12519.cljs$core$IFn$_invoke$arity$1 = text_field12519__1;
text_field12519.cljs$core$IFn$_invoke$arity$2 = text_field12519__2;
return text_field12519;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12519);
/**
* Creates a time input field.
*/
sablono.core.time_field12520 = (function() {
var time_field12520 = null;
var time_field12520__1 = (function (name__12221__auto__){return time_field12520.call(null,name__12221__auto__,null);
});
var time_field12520__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__12221__auto__,value__12222__auto__);
});
time_field12520 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return time_field12520__1.call(this,name__12221__auto__);
case 2:
return time_field12520__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field12520.cljs$core$IFn$_invoke$arity$1 = time_field12520__1;
time_field12520.cljs$core$IFn$_invoke$arity$2 = time_field12520__2;
return time_field12520;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12520);
/**
* Creates a url input field.
*/
sablono.core.url_field12521 = (function() {
var url_field12521 = null;
var url_field12521__1 = (function (name__12221__auto__){return url_field12521.call(null,name__12221__auto__,null);
});
var url_field12521__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__12221__auto__,value__12222__auto__);
});
url_field12521 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return url_field12521__1.call(this,name__12221__auto__);
case 2:
return url_field12521__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field12521.cljs$core$IFn$_invoke$arity$1 = url_field12521__1;
url_field12521.cljs$core$IFn$_invoke$arity$2 = url_field12521__2;
return url_field12521;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12521);
/**
* Creates a week input field.
*/
sablono.core.week_field12522 = (function() {
var week_field12522 = null;
var week_field12522__1 = (function (name__12221__auto__){return week_field12522.call(null,name__12221__auto__,null);
});
var week_field12522__2 = (function (name__12221__auto__,value__12222__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__12221__auto__,value__12222__auto__);
});
week_field12522 = function(name__12221__auto__,value__12222__auto__){
switch(arguments.length){
case 1:
return week_field12522__1.call(this,name__12221__auto__);
case 2:
return week_field12522__2.call(this,name__12221__auto__,value__12222__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field12522.cljs$core$IFn$_invoke$arity$1 = week_field12522__1;
week_field12522.cljs$core$IFn$_invoke$arity$2 = week_field12522__2;
return week_field12522;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12522);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box12523 = (function() {
var check_box12523 = null;
var check_box12523__1 = (function (name){return check_box12523.call(null,name,null);
});
var check_box12523__2 = (function (name,checked_QMARK_){return check_box12523.call(null,name,checked_QMARK_,"true");
});
var check_box12523__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box12523 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box12523__1.call(this,name);
case 2:
return check_box12523__2.call(this,name,checked_QMARK_);
case 3:
return check_box12523__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box12523.cljs$core$IFn$_invoke$arity$1 = check_box12523__1;
check_box12523.cljs$core$IFn$_invoke$arity$2 = check_box12523__2;
check_box12523.cljs$core$IFn$_invoke$arity$3 = check_box12523__3;
return check_box12523;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12523);
/**
* Creates a radio button.
*/
sablono.core.radio_button12524 = (function() {
var radio_button12524 = null;
var radio_button12524__1 = (function (group){return radio_button12524.call(null,group,null);
});
var radio_button12524__2 = (function (group,checked_QMARK_){return radio_button12524.call(null,group,checked_QMARK_,"true");
});
var radio_button12524__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button12524 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button12524__1.call(this,group);
case 2:
return radio_button12524__2.call(this,group,checked_QMARK_);
case 3:
return radio_button12524__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button12524.cljs$core$IFn$_invoke$arity$1 = radio_button12524__1;
radio_button12524.cljs$core$IFn$_invoke$arity$2 = radio_button12524__2;
radio_button12524.cljs$core$IFn$_invoke$arity$3 = radio_button12524__3;
return radio_button12524;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12524);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options12525 = (function() {
var select_options12525 = null;
var select_options12525__1 = (function (coll){return select_options12525.call(null,coll,null);
});
var select_options12525__2 = (function (coll,selected){var iter__5778__auto__ = (function iter__12534(s__12535){return (new cljs.core.LazySeq(null,(function (){var s__12535__$1 = s__12535;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12535__$1);if(temp__4126__auto__)
{var s__12535__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12535__$2))
{var c__5776__auto__ = cljs.core.chunk_first.call(null,s__12535__$2);var size__5777__auto__ = cljs.core.count.call(null,c__5776__auto__);var b__12537 = cljs.core.chunk_buffer.call(null,size__5777__auto__);if((function (){var i__12536 = (0);while(true){
if((i__12536 < size__5777__auto__))
{var x = cljs.core._nth.call(null,c__5776__auto__,i__12536);cljs.core.chunk_append.call(null,b__12537,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12540 = x;var text = cljs.core.nth.call(null,vec__12540,(0),null);var val = cljs.core.nth.call(null,vec__12540,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__12540,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options12525.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__12542 = (i__12536 + (1));
i__12536 = G__12542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12537),iter__12534.call(null,cljs.core.chunk_rest.call(null,s__12535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12537),null);
}
} else
{var x = cljs.core.first.call(null,s__12535__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12541 = x;var text = cljs.core.nth.call(null,vec__12541,(0),null);var val = cljs.core.nth.call(null,vec__12541,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__12541,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options12525.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__12534.call(null,cljs.core.rest.call(null,s__12535__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5778__auto__.call(null,coll);
});
select_options12525 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options12525__1.call(this,coll);
case 2:
return select_options12525__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options12525.cljs$core$IFn$_invoke$arity$1 = select_options12525__1;
select_options12525.cljs$core$IFn$_invoke$arity$2 = select_options12525__2;
return select_options12525;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12525);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down12543 = (function() {
var drop_down12543 = null;
var drop_down12543__2 = (function (name,options){return drop_down12543.call(null,name,options,null);
});
var drop_down12543__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down12543 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down12543__2.call(this,name,options);
case 3:
return drop_down12543__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down12543.cljs$core$IFn$_invoke$arity$2 = drop_down12543__2;
drop_down12543.cljs$core$IFn$_invoke$arity$3 = drop_down12543__3;
return drop_down12543;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12543);
/**
* Creates a text area element.
*/
sablono.core.text_area12544 = (function() {
var text_area12544 = null;
var text_area12544__1 = (function (name){return text_area12544.call(null,name,null);
});
var text_area12544__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area12544 = function(name,value){
switch(arguments.length){
case 1:
return text_area12544__1.call(this,name);
case 2:
return text_area12544__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area12544.cljs$core$IFn$_invoke$arity$1 = text_area12544__1;
text_area12544.cljs$core$IFn$_invoke$arity$2 = text_area12544__2;
return text_area12544;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12544);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label12545 = (function label12545(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12545);
/**
* Creates a submit button.
*/
sablono.core.submit_button12546 = (function submit_button12546(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12546);
/**
* Creates a form reset button.
*/
sablono.core.reset_button12547 = (function reset_button12547(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12547);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to12548 = (function() { 
var form_to12548__delegate = function (p__12549,body){var vec__12551 = p__12549;var method = cljs.core.nth.call(null,vec__12551,(0),null);var action = cljs.core.nth.call(null,vec__12551,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to12548 = function (p__12549,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to12548__delegate.call(this,p__12549,body);};
form_to12548.cljs$lang$maxFixedArity = 1;
form_to12548.cljs$lang$applyTo = (function (arglist__12552){
var p__12549 = cljs.core.first(arglist__12552);
var body = cljs.core.rest(arglist__12552);
return form_to12548__delegate(p__12549,body);
});
form_to12548.cljs$core$IFn$_invoke$arity$variadic = form_to12548__delegate;
return form_to12548;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12548);

//# sourceMappingURL=core.js.map