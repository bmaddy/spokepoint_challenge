// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13373 = (function (f,fn_handler,meta13374){
this.f = f;
this.fn_handler = fn_handler;
this.meta13374 = meta13374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13373.cljs$lang$type = true;
cljs.core.async.t13373.cljs$lang$ctorStr = "cljs.core.async/t13373";
cljs.core.async.t13373.cljs$lang$ctorPrWriter = (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t13373");
});
cljs.core.async.t13373.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13375){var self__ = this;
var _13375__$1 = this;return self__.meta13374;
});
cljs.core.async.t13373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13375,meta13374__$1){var self__ = this;
var _13375__$1 = this;return (new cljs.core.async.t13373(self__.f,self__.fn_handler,meta13374__$1));
});
cljs.core.async.__GT_t13373 = (function __GT_t13373(f__$1,fn_handler__$1,meta13374){return (new cljs.core.async.t13373(f__$1,fn_handler__$1,meta13374));
});
}
return (new cljs.core.async.t13373(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13377 = buff;if(G__13377)
{var bit__5703__auto__ = null;if(cljs.core.truth_((function (){var or__5053__auto__ = bit__5703__auto__;if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return G__13377.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13377.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13377);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13378 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13378);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13378,ret){
return (function (){return fn1.call(null,val_13378);
});})(val_13378,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5909__auto___13379 = n;var x_13380 = (0);while(true){
if((x_13380 < n__5909__auto___13379))
{(a[x_13380] = (0));
{
var G__13381 = (x_13380 + (1));
x_13380 = G__13381;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13382 = (i + (1));
i = G__13382;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13386 = (function (flag,alt_flag,meta13387){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13387 = meta13387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13386.cljs$lang$type = true;
cljs.core.async.t13386.cljs$lang$ctorStr = "cljs.core.async/t13386";
cljs.core.async.t13386.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t13386");
});})(flag))
;
cljs.core.async.t13386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13388){var self__ = this;
var _13388__$1 = this;return self__.meta13387;
});})(flag))
;
cljs.core.async.t13386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13388,meta13387__$1){var self__ = this;
var _13388__$1 = this;return (new cljs.core.async.t13386(self__.flag,self__.alt_flag,meta13387__$1));
});})(flag))
;
cljs.core.async.__GT_t13386 = ((function (flag){
return (function __GT_t13386(flag__$1,alt_flag__$1,meta13387){return (new cljs.core.async.t13386(flag__$1,alt_flag__$1,meta13387));
});})(flag))
;
}
return (new cljs.core.async.t13386(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13392 = (function (cb,flag,alt_handler,meta13393){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13393 = meta13393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13392.cljs$lang$type = true;
cljs.core.async.t13392.cljs$lang$ctorStr = "cljs.core.async/t13392";
cljs.core.async.t13392.cljs$lang$ctorPrWriter = (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t13392");
});
cljs.core.async.t13392.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13394){var self__ = this;
var _13394__$1 = this;return self__.meta13393;
});
cljs.core.async.t13392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13394,meta13393__$1){var self__ = this;
var _13394__$1 = this;return (new cljs.core.async.t13392(self__.cb,self__.flag,self__.alt_handler,meta13393__$1));
});
cljs.core.async.__GT_t13392 = (function __GT_t13392(cb__$1,flag__$1,alt_handler__$1,meta13393){return (new cljs.core.async.t13392(cb__$1,flag__$1,alt_handler__$1,meta13393));
});
}
return (new cljs.core.async.t13392(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13395_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13395_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13396_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13396_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5053__auto__ = wport;if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13397 = (i + (1));
i = G__13397;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5053__auto__ = ret;if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5041__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5041__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13398){var map__13400 = p__13398;var map__13400__$1 = ((cljs.core.seq_QMARK_.call(null,map__13400))?cljs.core.apply.call(null,cljs.core.hash_map,map__13400):map__13400);var opts = map__13400__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__13398 = null;if (arguments.length > 1) {
  p__13398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13398);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13401){
var ports = cljs.core.first(arglist__13401);
var p__13398 = cljs.core.rest(arglist__13401);
return alts_BANG___delegate(ports,p__13398);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8506__auto___13496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___13496){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___13496){
return (function (state_13472){var state_val_13473 = (state_13472[(1)]);if((state_val_13473 === (7)))
{var inst_13468 = (state_13472[(2)]);var state_13472__$1 = state_13472;var statearr_13474_13497 = state_13472__$1;(statearr_13474_13497[(2)] = inst_13468);
(statearr_13474_13497[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (1)))
{var state_13472__$1 = state_13472;var statearr_13475_13498 = state_13472__$1;(statearr_13475_13498[(2)] = null);
(statearr_13475_13498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (4)))
{var inst_13451 = (state_13472[(7)]);var inst_13451__$1 = (state_13472[(2)]);var inst_13452 = (inst_13451__$1 == null);var state_13472__$1 = (function (){var statearr_13476 = state_13472;(statearr_13476[(7)] = inst_13451__$1);
return statearr_13476;
})();if(cljs.core.truth_(inst_13452))
{var statearr_13477_13499 = state_13472__$1;(statearr_13477_13499[(1)] = (5));
} else
{var statearr_13478_13500 = state_13472__$1;(statearr_13478_13500[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (13)))
{var state_13472__$1 = state_13472;var statearr_13479_13501 = state_13472__$1;(statearr_13479_13501[(2)] = null);
(statearr_13479_13501[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (6)))
{var inst_13451 = (state_13472[(7)]);var state_13472__$1 = state_13472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13472__$1,(11),to,inst_13451);
} else
{if((state_val_13473 === (3)))
{var inst_13470 = (state_13472[(2)]);var state_13472__$1 = state_13472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13472__$1,inst_13470);
} else
{if((state_val_13473 === (12)))
{var state_13472__$1 = state_13472;var statearr_13480_13502 = state_13472__$1;(statearr_13480_13502[(2)] = null);
(statearr_13480_13502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (2)))
{var state_13472__$1 = state_13472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13472__$1,(4),from);
} else
{if((state_val_13473 === (11)))
{var inst_13461 = (state_13472[(2)]);var state_13472__$1 = state_13472;if(cljs.core.truth_(inst_13461))
{var statearr_13481_13503 = state_13472__$1;(statearr_13481_13503[(1)] = (12));
} else
{var statearr_13482_13504 = state_13472__$1;(statearr_13482_13504[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (9)))
{var state_13472__$1 = state_13472;var statearr_13483_13505 = state_13472__$1;(statearr_13483_13505[(2)] = null);
(statearr_13483_13505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (5)))
{var state_13472__$1 = state_13472;if(cljs.core.truth_(close_QMARK_))
{var statearr_13484_13506 = state_13472__$1;(statearr_13484_13506[(1)] = (8));
} else
{var statearr_13485_13507 = state_13472__$1;(statearr_13485_13507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (14)))
{var inst_13466 = (state_13472[(2)]);var state_13472__$1 = state_13472;var statearr_13486_13508 = state_13472__$1;(statearr_13486_13508[(2)] = inst_13466);
(statearr_13486_13508[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (10)))
{var inst_13458 = (state_13472[(2)]);var state_13472__$1 = state_13472;var statearr_13487_13509 = state_13472__$1;(statearr_13487_13509[(2)] = inst_13458);
(statearr_13487_13509[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13473 === (8)))
{var inst_13455 = cljs.core.async.close_BANG_.call(null,to);var state_13472__$1 = state_13472;var statearr_13488_13510 = state_13472__$1;(statearr_13488_13510[(2)] = inst_13455);
(statearr_13488_13510[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___13496))
;return ((function (switch__8441__auto__,c__8506__auto___13496){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13492 = [null,null,null,null,null,null,null,null];(statearr_13492[(0)] = state_machine__8442__auto__);
(statearr_13492[(1)] = (1));
return statearr_13492;
});
var state_machine__8442__auto____1 = (function (state_13472){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13472);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13493){if((e13493 instanceof Object))
{var ex__8445__auto__ = e13493;var statearr_13494_13511 = state_13472;(statearr_13494_13511[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13472);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13512 = state_13472;
state_13472 = G__13512;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13472){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___13496))
})();var state__8508__auto__ = (function (){var statearr_13495 = f__8507__auto__.call(null);(statearr_13495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___13496);
return statearr_13495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___13496))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__13696){var vec__13697 = p__13696;var v = cljs.core.nth.call(null,vec__13697,(0),null);var p = cljs.core.nth.call(null,vec__13697,(1),null);var job = vec__13697;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__8506__auto___13879 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results){
return (function (state_13702){var state_val_13703 = (state_13702[(1)]);if((state_val_13703 === (2)))
{var inst_13699 = (state_13702[(2)]);var inst_13700 = cljs.core.async.close_BANG_.call(null,res);var state_13702__$1 = (function (){var statearr_13704 = state_13702;(statearr_13704[(7)] = inst_13699);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13702__$1,inst_13700);
} else
{if((state_val_13703 === (1)))
{var state_13702__$1 = state_13702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13702__$1,(2),res,v);
} else
{return null;
}
}
});})(c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results))
;return ((function (switch__8441__auto__,c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13708 = [null,null,null,null,null,null,null,null];(statearr_13708[(0)] = state_machine__8442__auto__);
(statearr_13708[(1)] = (1));
return statearr_13708;
});
var state_machine__8442__auto____1 = (function (state_13702){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13702);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13709){if((e13709 instanceof Object))
{var ex__8445__auto__ = e13709;var statearr_13710_13880 = state_13702;(statearr_13710_13880[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13881 = state_13702;
state_13702 = G__13881;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13702){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results))
})();var state__8508__auto__ = (function (){var statearr_13711 = f__8507__auto__.call(null);(statearr_13711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___13879);
return statearr_13711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___13879,res,vec__13697,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__13712){var vec__13713 = p__13712;var v = cljs.core.nth.call(null,vec__13713,(0),null);var p = cljs.core.nth.call(null,vec__13713,(1),null);var job = vec__13713;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__5909__auto___13882 = n;var __13883 = (0);while(true){
if((__13883 < n__5909__auto___13882))
{var G__13714_13884 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__13714_13884) {
case "async":
var c__8506__auto___13886 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13883,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (__13883,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function (state_13727){var state_val_13728 = (state_13727[(1)]);if((state_val_13728 === (7)))
{var inst_13723 = (state_13727[(2)]);var state_13727__$1 = state_13727;var statearr_13729_13887 = state_13727__$1;(statearr_13729_13887[(2)] = inst_13723);
(statearr_13729_13887[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13728 === (6)))
{var state_13727__$1 = state_13727;var statearr_13730_13888 = state_13727__$1;(statearr_13730_13888[(2)] = null);
(statearr_13730_13888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13728 === (5)))
{var state_13727__$1 = state_13727;var statearr_13731_13889 = state_13727__$1;(statearr_13731_13889[(2)] = null);
(statearr_13731_13889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13728 === (4)))
{var inst_13717 = (state_13727[(2)]);var inst_13718 = async.call(null,inst_13717);var state_13727__$1 = state_13727;if(cljs.core.truth_(inst_13718))
{var statearr_13732_13890 = state_13727__$1;(statearr_13732_13890[(1)] = (5));
} else
{var statearr_13733_13891 = state_13727__$1;(statearr_13733_13891[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13728 === (3)))
{var inst_13725 = (state_13727[(2)]);var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13727__$1,inst_13725);
} else
{if((state_val_13728 === (2)))
{var state_13727__$1 = state_13727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13727__$1,(4),jobs);
} else
{if((state_val_13728 === (1)))
{var state_13727__$1 = state_13727;var statearr_13734_13892 = state_13727__$1;(statearr_13734_13892[(2)] = null);
(statearr_13734_13892[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__13883,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
;return ((function (__13883,switch__8441__auto__,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13738 = [null,null,null,null,null,null,null];(statearr_13738[(0)] = state_machine__8442__auto__);
(statearr_13738[(1)] = (1));
return statearr_13738;
});
var state_machine__8442__auto____1 = (function (state_13727){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13727);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13739){if((e13739 instanceof Object))
{var ex__8445__auto__ = e13739;var statearr_13740_13893 = state_13727;(statearr_13740_13893[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13894 = state_13727;
state_13727 = G__13894;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(__13883,switch__8441__auto__,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
})();var state__8508__auto__ = (function (){var statearr_13741 = f__8507__auto__.call(null);(statearr_13741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___13886);
return statearr_13741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(__13883,c__8506__auto___13886,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
);

break;
case "compute":
var c__8506__auto___13895 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13883,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (__13883,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function (state_13754){var state_val_13755 = (state_13754[(1)]);if((state_val_13755 === (7)))
{var inst_13750 = (state_13754[(2)]);var state_13754__$1 = state_13754;var statearr_13756_13896 = state_13754__$1;(statearr_13756_13896[(2)] = inst_13750);
(statearr_13756_13896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13755 === (6)))
{var state_13754__$1 = state_13754;var statearr_13757_13897 = state_13754__$1;(statearr_13757_13897[(2)] = null);
(statearr_13757_13897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13755 === (5)))
{var state_13754__$1 = state_13754;var statearr_13758_13898 = state_13754__$1;(statearr_13758_13898[(2)] = null);
(statearr_13758_13898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13755 === (4)))
{var inst_13744 = (state_13754[(2)]);var inst_13745 = process.call(null,inst_13744);var state_13754__$1 = state_13754;if(cljs.core.truth_(inst_13745))
{var statearr_13759_13899 = state_13754__$1;(statearr_13759_13899[(1)] = (5));
} else
{var statearr_13760_13900 = state_13754__$1;(statearr_13760_13900[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13755 === (3)))
{var inst_13752 = (state_13754[(2)]);var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13754__$1,inst_13752);
} else
{if((state_val_13755 === (2)))
{var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13754__$1,(4),jobs);
} else
{if((state_val_13755 === (1)))
{var state_13754__$1 = state_13754;var statearr_13761_13901 = state_13754__$1;(statearr_13761_13901[(2)] = null);
(statearr_13761_13901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__13883,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
;return ((function (__13883,switch__8441__auto__,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13765 = [null,null,null,null,null,null,null];(statearr_13765[(0)] = state_machine__8442__auto__);
(statearr_13765[(1)] = (1));
return statearr_13765;
});
var state_machine__8442__auto____1 = (function (state_13754){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13754);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13766){if((e13766 instanceof Object))
{var ex__8445__auto__ = e13766;var statearr_13767_13902 = state_13754;(statearr_13767_13902[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13754);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13903 = state_13754;
state_13754 = G__13903;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13754){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(__13883,switch__8441__auto__,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
})();var state__8508__auto__ = (function (){var statearr_13768 = f__8507__auto__.call(null);(statearr_13768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___13895);
return statearr_13768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(__13883,c__8506__auto___13895,G__13714_13884,n__5909__auto___13882,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13904 = (__13883 + (1));
__13883 = G__13904;
continue;
}
} else
{}
break;
}
var c__8506__auto___13905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___13905,jobs,results,process,async){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___13905,jobs,results,process,async){
return (function (state_13790){var state_val_13791 = (state_13790[(1)]);if((state_val_13791 === (9)))
{var inst_13783 = (state_13790[(2)]);var state_13790__$1 = (function (){var statearr_13792 = state_13790;(statearr_13792[(7)] = inst_13783);
return statearr_13792;
})();var statearr_13793_13906 = state_13790__$1;(statearr_13793_13906[(2)] = null);
(statearr_13793_13906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13791 === (8)))
{var inst_13776 = (state_13790[(8)]);var inst_13781 = (state_13790[(2)]);var state_13790__$1 = (function (){var statearr_13794 = state_13790;(statearr_13794[(9)] = inst_13781);
return statearr_13794;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13790__$1,(9),results,inst_13776);
} else
{if((state_val_13791 === (7)))
{var inst_13786 = (state_13790[(2)]);var state_13790__$1 = state_13790;var statearr_13795_13907 = state_13790__$1;(statearr_13795_13907[(2)] = inst_13786);
(statearr_13795_13907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13791 === (6)))
{var inst_13776 = (state_13790[(8)]);var inst_13771 = (state_13790[(10)]);var inst_13776__$1 = cljs.core.async.chan.call(null,(1));var inst_13777 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13778 = [inst_13771,inst_13776__$1];var inst_13779 = (new cljs.core.PersistentVector(null,2,(5),inst_13777,inst_13778,null));var state_13790__$1 = (function (){var statearr_13796 = state_13790;(statearr_13796[(8)] = inst_13776__$1);
return statearr_13796;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13790__$1,(8),jobs,inst_13779);
} else
{if((state_val_13791 === (5)))
{var inst_13774 = cljs.core.async.close_BANG_.call(null,jobs);var state_13790__$1 = state_13790;var statearr_13797_13908 = state_13790__$1;(statearr_13797_13908[(2)] = inst_13774);
(statearr_13797_13908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13791 === (4)))
{var inst_13771 = (state_13790[(10)]);var inst_13771__$1 = (state_13790[(2)]);var inst_13772 = (inst_13771__$1 == null);var state_13790__$1 = (function (){var statearr_13798 = state_13790;(statearr_13798[(10)] = inst_13771__$1);
return statearr_13798;
})();if(cljs.core.truth_(inst_13772))
{var statearr_13799_13909 = state_13790__$1;(statearr_13799_13909[(1)] = (5));
} else
{var statearr_13800_13910 = state_13790__$1;(statearr_13800_13910[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13791 === (3)))
{var inst_13788 = (state_13790[(2)]);var state_13790__$1 = state_13790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13790__$1,inst_13788);
} else
{if((state_val_13791 === (2)))
{var state_13790__$1 = state_13790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13790__$1,(4),from);
} else
{if((state_val_13791 === (1)))
{var state_13790__$1 = state_13790;var statearr_13801_13911 = state_13790__$1;(statearr_13801_13911[(2)] = null);
(statearr_13801_13911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___13905,jobs,results,process,async))
;return ((function (switch__8441__auto__,c__8506__auto___13905,jobs,results,process,async){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13805 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13805[(0)] = state_machine__8442__auto__);
(statearr_13805[(1)] = (1));
return statearr_13805;
});
var state_machine__8442__auto____1 = (function (state_13790){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13790);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13806){if((e13806 instanceof Object))
{var ex__8445__auto__ = e13806;var statearr_13807_13912 = state_13790;(statearr_13807_13912[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13790);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13806;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13913 = state_13790;
state_13790 = G__13913;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13790){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___13905,jobs,results,process,async))
})();var state__8508__auto__ = (function (){var statearr_13808 = f__8507__auto__.call(null);(statearr_13808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___13905);
return statearr_13808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___13905,jobs,results,process,async))
);
var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__,jobs,results,process,async){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__,jobs,results,process,async){
return (function (state_13846){var state_val_13847 = (state_13846[(1)]);if((state_val_13847 === (7)))
{var inst_13842 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13848_13914 = state_13846__$1;(statearr_13848_13914[(2)] = inst_13842);
(statearr_13848_13914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (20)))
{var state_13846__$1 = state_13846;var statearr_13849_13915 = state_13846__$1;(statearr_13849_13915[(2)] = null);
(statearr_13849_13915[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (1)))
{var state_13846__$1 = state_13846;var statearr_13850_13916 = state_13846__$1;(statearr_13850_13916[(2)] = null);
(statearr_13850_13916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (4)))
{var inst_13811 = (state_13846[(7)]);var inst_13811__$1 = (state_13846[(2)]);var inst_13812 = (inst_13811__$1 == null);var state_13846__$1 = (function (){var statearr_13851 = state_13846;(statearr_13851[(7)] = inst_13811__$1);
return statearr_13851;
})();if(cljs.core.truth_(inst_13812))
{var statearr_13852_13917 = state_13846__$1;(statearr_13852_13917[(1)] = (5));
} else
{var statearr_13853_13918 = state_13846__$1;(statearr_13853_13918[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (15)))
{var inst_13824 = (state_13846[(8)]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13846__$1,(18),to,inst_13824);
} else
{if((state_val_13847 === (21)))
{var inst_13837 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13854_13919 = state_13846__$1;(statearr_13854_13919[(2)] = inst_13837);
(statearr_13854_13919[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (13)))
{var inst_13839 = (state_13846[(2)]);var state_13846__$1 = (function (){var statearr_13855 = state_13846;(statearr_13855[(9)] = inst_13839);
return statearr_13855;
})();var statearr_13856_13920 = state_13846__$1;(statearr_13856_13920[(2)] = null);
(statearr_13856_13920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (6)))
{var inst_13811 = (state_13846[(7)]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13846__$1,(11),inst_13811);
} else
{if((state_val_13847 === (17)))
{var inst_13832 = (state_13846[(2)]);var state_13846__$1 = state_13846;if(cljs.core.truth_(inst_13832))
{var statearr_13857_13921 = state_13846__$1;(statearr_13857_13921[(1)] = (19));
} else
{var statearr_13858_13922 = state_13846__$1;(statearr_13858_13922[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (3)))
{var inst_13844 = (state_13846[(2)]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13846__$1,inst_13844);
} else
{if((state_val_13847 === (12)))
{var inst_13821 = (state_13846[(10)]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13846__$1,(14),inst_13821);
} else
{if((state_val_13847 === (2)))
{var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13846__$1,(4),results);
} else
{if((state_val_13847 === (19)))
{var state_13846__$1 = state_13846;var statearr_13859_13923 = state_13846__$1;(statearr_13859_13923[(2)] = null);
(statearr_13859_13923[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (11)))
{var inst_13821 = (state_13846[(2)]);var state_13846__$1 = (function (){var statearr_13860 = state_13846;(statearr_13860[(10)] = inst_13821);
return statearr_13860;
})();var statearr_13861_13924 = state_13846__$1;(statearr_13861_13924[(2)] = null);
(statearr_13861_13924[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (9)))
{var state_13846__$1 = state_13846;var statearr_13862_13925 = state_13846__$1;(statearr_13862_13925[(2)] = null);
(statearr_13862_13925[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (5)))
{var state_13846__$1 = state_13846;if(cljs.core.truth_(close_QMARK_))
{var statearr_13863_13926 = state_13846__$1;(statearr_13863_13926[(1)] = (8));
} else
{var statearr_13864_13927 = state_13846__$1;(statearr_13864_13927[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (14)))
{var inst_13824 = (state_13846[(8)]);var inst_13826 = (state_13846[(11)]);var inst_13824__$1 = (state_13846[(2)]);var inst_13825 = (inst_13824__$1 == null);var inst_13826__$1 = cljs.core.not.call(null,inst_13825);var state_13846__$1 = (function (){var statearr_13865 = state_13846;(statearr_13865[(8)] = inst_13824__$1);
(statearr_13865[(11)] = inst_13826__$1);
return statearr_13865;
})();if(inst_13826__$1)
{var statearr_13866_13928 = state_13846__$1;(statearr_13866_13928[(1)] = (15));
} else
{var statearr_13867_13929 = state_13846__$1;(statearr_13867_13929[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (16)))
{var inst_13826 = (state_13846[(11)]);var state_13846__$1 = state_13846;var statearr_13868_13930 = state_13846__$1;(statearr_13868_13930[(2)] = inst_13826);
(statearr_13868_13930[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (10)))
{var inst_13818 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13869_13931 = state_13846__$1;(statearr_13869_13931[(2)] = inst_13818);
(statearr_13869_13931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (18)))
{var inst_13829 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13870_13932 = state_13846__$1;(statearr_13870_13932[(2)] = inst_13829);
(statearr_13870_13932[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (8)))
{var inst_13815 = cljs.core.async.close_BANG_.call(null,to);var state_13846__$1 = state_13846;var statearr_13871_13933 = state_13846__$1;(statearr_13871_13933[(2)] = inst_13815);
(statearr_13871_13933[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto__,jobs,results,process,async))
;return ((function (switch__8441__auto__,c__8506__auto__,jobs,results,process,async){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_13875 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13875[(0)] = state_machine__8442__auto__);
(statearr_13875[(1)] = (1));
return statearr_13875;
});
var state_machine__8442__auto____1 = (function (state_13846){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_13846);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e13876){if((e13876 instanceof Object))
{var ex__8445__auto__ = e13876;var statearr_13877_13934 = state_13846;(statearr_13877_13934[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13876;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13935 = state_13846;
state_13846 = G__13935;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_13846){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_13846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__,jobs,results,process,async))
})();var state__8508__auto__ = (function (){var statearr_13878 = f__8507__auto__.call(null);(statearr_13878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_13878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__,jobs,results,process,async))
);
return c__8506__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8506__auto___14036 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___14036,tc,fc){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___14036,tc,fc){
return (function (state_14011){var state_val_14012 = (state_14011[(1)]);if((state_val_14012 === (7)))
{var inst_14007 = (state_14011[(2)]);var state_14011__$1 = state_14011;var statearr_14013_14037 = state_14011__$1;(statearr_14013_14037[(2)] = inst_14007);
(statearr_14013_14037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (1)))
{var state_14011__$1 = state_14011;var statearr_14014_14038 = state_14011__$1;(statearr_14014_14038[(2)] = null);
(statearr_14014_14038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (4)))
{var inst_13988 = (state_14011[(7)]);var inst_13988__$1 = (state_14011[(2)]);var inst_13989 = (inst_13988__$1 == null);var state_14011__$1 = (function (){var statearr_14015 = state_14011;(statearr_14015[(7)] = inst_13988__$1);
return statearr_14015;
})();if(cljs.core.truth_(inst_13989))
{var statearr_14016_14039 = state_14011__$1;(statearr_14016_14039[(1)] = (5));
} else
{var statearr_14017_14040 = state_14011__$1;(statearr_14017_14040[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (13)))
{var state_14011__$1 = state_14011;var statearr_14018_14041 = state_14011__$1;(statearr_14018_14041[(2)] = null);
(statearr_14018_14041[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (6)))
{var inst_13988 = (state_14011[(7)]);var inst_13994 = p.call(null,inst_13988);var state_14011__$1 = state_14011;if(cljs.core.truth_(inst_13994))
{var statearr_14019_14042 = state_14011__$1;(statearr_14019_14042[(1)] = (9));
} else
{var statearr_14020_14043 = state_14011__$1;(statearr_14020_14043[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (3)))
{var inst_14009 = (state_14011[(2)]);var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14011__$1,inst_14009);
} else
{if((state_val_14012 === (12)))
{var state_14011__$1 = state_14011;var statearr_14021_14044 = state_14011__$1;(statearr_14021_14044[(2)] = null);
(statearr_14021_14044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (2)))
{var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14011__$1,(4),ch);
} else
{if((state_val_14012 === (11)))
{var inst_13988 = (state_14011[(7)]);var inst_13998 = (state_14011[(2)]);var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14011__$1,(8),inst_13998,inst_13988);
} else
{if((state_val_14012 === (9)))
{var state_14011__$1 = state_14011;var statearr_14022_14045 = state_14011__$1;(statearr_14022_14045[(2)] = tc);
(statearr_14022_14045[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (5)))
{var inst_13991 = cljs.core.async.close_BANG_.call(null,tc);var inst_13992 = cljs.core.async.close_BANG_.call(null,fc);var state_14011__$1 = (function (){var statearr_14023 = state_14011;(statearr_14023[(8)] = inst_13991);
return statearr_14023;
})();var statearr_14024_14046 = state_14011__$1;(statearr_14024_14046[(2)] = inst_13992);
(statearr_14024_14046[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (14)))
{var inst_14005 = (state_14011[(2)]);var state_14011__$1 = state_14011;var statearr_14025_14047 = state_14011__$1;(statearr_14025_14047[(2)] = inst_14005);
(statearr_14025_14047[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (10)))
{var state_14011__$1 = state_14011;var statearr_14026_14048 = state_14011__$1;(statearr_14026_14048[(2)] = fc);
(statearr_14026_14048[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (8)))
{var inst_14000 = (state_14011[(2)]);var state_14011__$1 = state_14011;if(cljs.core.truth_(inst_14000))
{var statearr_14027_14049 = state_14011__$1;(statearr_14027_14049[(1)] = (12));
} else
{var statearr_14028_14050 = state_14011__$1;(statearr_14028_14050[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___14036,tc,fc))
;return ((function (switch__8441__auto__,c__8506__auto___14036,tc,fc){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_14032 = [null,null,null,null,null,null,null,null,null];(statearr_14032[(0)] = state_machine__8442__auto__);
(statearr_14032[(1)] = (1));
return statearr_14032;
});
var state_machine__8442__auto____1 = (function (state_14011){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_14011);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object))
{var ex__8445__auto__ = e14033;var statearr_14034_14051 = state_14011;(statearr_14034_14051[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14052 = state_14011;
state_14011 = G__14052;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_14011){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_14011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___14036,tc,fc))
})();var state__8508__auto__ = (function (){var statearr_14035 = f__8507__auto__.call(null);(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___14036);
return statearr_14035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___14036,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__){
return (function (state_14099){var state_val_14100 = (state_14099[(1)]);if((state_val_14100 === (7)))
{var inst_14095 = (state_14099[(2)]);var state_14099__$1 = state_14099;var statearr_14101_14117 = state_14099__$1;(statearr_14101_14117[(2)] = inst_14095);
(statearr_14101_14117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14100 === (6)))
{var inst_14085 = (state_14099[(7)]);var inst_14088 = (state_14099[(8)]);var inst_14092 = f.call(null,inst_14085,inst_14088);var inst_14085__$1 = inst_14092;var state_14099__$1 = (function (){var statearr_14102 = state_14099;(statearr_14102[(7)] = inst_14085__$1);
return statearr_14102;
})();var statearr_14103_14118 = state_14099__$1;(statearr_14103_14118[(2)] = null);
(statearr_14103_14118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14100 === (5)))
{var inst_14085 = (state_14099[(7)]);var state_14099__$1 = state_14099;var statearr_14104_14119 = state_14099__$1;(statearr_14104_14119[(2)] = inst_14085);
(statearr_14104_14119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14100 === (4)))
{var inst_14088 = (state_14099[(8)]);var inst_14088__$1 = (state_14099[(2)]);var inst_14089 = (inst_14088__$1 == null);var state_14099__$1 = (function (){var statearr_14105 = state_14099;(statearr_14105[(8)] = inst_14088__$1);
return statearr_14105;
})();if(cljs.core.truth_(inst_14089))
{var statearr_14106_14120 = state_14099__$1;(statearr_14106_14120[(1)] = (5));
} else
{var statearr_14107_14121 = state_14099__$1;(statearr_14107_14121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14100 === (3)))
{var inst_14097 = (state_14099[(2)]);var state_14099__$1 = state_14099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14099__$1,inst_14097);
} else
{if((state_val_14100 === (2)))
{var state_14099__$1 = state_14099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14099__$1,(4),ch);
} else
{if((state_val_14100 === (1)))
{var inst_14085 = init;var state_14099__$1 = (function (){var statearr_14108 = state_14099;(statearr_14108[(7)] = inst_14085);
return statearr_14108;
})();var statearr_14109_14122 = state_14099__$1;(statearr_14109_14122[(2)] = null);
(statearr_14109_14122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__8506__auto__))
;return ((function (switch__8441__auto__,c__8506__auto__){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_14113 = [null,null,null,null,null,null,null,null,null];(statearr_14113[(0)] = state_machine__8442__auto__);
(statearr_14113[(1)] = (1));
return statearr_14113;
});
var state_machine__8442__auto____1 = (function (state_14099){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_14099);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e14114){if((e14114 instanceof Object))
{var ex__8445__auto__ = e14114;var statearr_14115_14123 = state_14099;(statearr_14115_14123[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14124 = state_14099;
state_14099 = G__14124;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_14099){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_14099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__))
})();var state__8508__auto__ = (function (){var statearr_14116 = f__8507__auto__.call(null);(statearr_14116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_14116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__))
);
return c__8506__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__){
return (function (state_14198){var state_val_14199 = (state_14198[(1)]);if((state_val_14199 === (7)))
{var inst_14180 = (state_14198[(2)]);var state_14198__$1 = state_14198;var statearr_14200_14223 = state_14198__$1;(statearr_14200_14223[(2)] = inst_14180);
(statearr_14200_14223[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (1)))
{var inst_14174 = cljs.core.seq.call(null,coll);var inst_14175 = inst_14174;var state_14198__$1 = (function (){var statearr_14201 = state_14198;(statearr_14201[(7)] = inst_14175);
return statearr_14201;
})();var statearr_14202_14224 = state_14198__$1;(statearr_14202_14224[(2)] = null);
(statearr_14202_14224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (4)))
{var inst_14175 = (state_14198[(7)]);var inst_14178 = cljs.core.first.call(null,inst_14175);var state_14198__$1 = state_14198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14198__$1,(7),ch,inst_14178);
} else
{if((state_val_14199 === (13)))
{var inst_14192 = (state_14198[(2)]);var state_14198__$1 = state_14198;var statearr_14203_14225 = state_14198__$1;(statearr_14203_14225[(2)] = inst_14192);
(statearr_14203_14225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (6)))
{var inst_14183 = (state_14198[(2)]);var state_14198__$1 = state_14198;if(cljs.core.truth_(inst_14183))
{var statearr_14204_14226 = state_14198__$1;(statearr_14204_14226[(1)] = (8));
} else
{var statearr_14205_14227 = state_14198__$1;(statearr_14205_14227[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (3)))
{var inst_14196 = (state_14198[(2)]);var state_14198__$1 = state_14198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14198__$1,inst_14196);
} else
{if((state_val_14199 === (12)))
{var state_14198__$1 = state_14198;var statearr_14206_14228 = state_14198__$1;(statearr_14206_14228[(2)] = null);
(statearr_14206_14228[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (2)))
{var inst_14175 = (state_14198[(7)]);var state_14198__$1 = state_14198;if(cljs.core.truth_(inst_14175))
{var statearr_14207_14229 = state_14198__$1;(statearr_14207_14229[(1)] = (4));
} else
{var statearr_14208_14230 = state_14198__$1;(statearr_14208_14230[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (11)))
{var inst_14189 = cljs.core.async.close_BANG_.call(null,ch);var state_14198__$1 = state_14198;var statearr_14209_14231 = state_14198__$1;(statearr_14209_14231[(2)] = inst_14189);
(statearr_14209_14231[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (9)))
{var state_14198__$1 = state_14198;if(cljs.core.truth_(close_QMARK_))
{var statearr_14210_14232 = state_14198__$1;(statearr_14210_14232[(1)] = (11));
} else
{var statearr_14211_14233 = state_14198__$1;(statearr_14211_14233[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (5)))
{var inst_14175 = (state_14198[(7)]);var state_14198__$1 = state_14198;var statearr_14212_14234 = state_14198__$1;(statearr_14212_14234[(2)] = inst_14175);
(statearr_14212_14234[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (10)))
{var inst_14194 = (state_14198[(2)]);var state_14198__$1 = state_14198;var statearr_14213_14235 = state_14198__$1;(statearr_14213_14235[(2)] = inst_14194);
(statearr_14213_14235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14199 === (8)))
{var inst_14175 = (state_14198[(7)]);var inst_14185 = cljs.core.next.call(null,inst_14175);var inst_14175__$1 = inst_14185;var state_14198__$1 = (function (){var statearr_14214 = state_14198;(statearr_14214[(7)] = inst_14175__$1);
return statearr_14214;
})();var statearr_14215_14236 = state_14198__$1;(statearr_14215_14236[(2)] = null);
(statearr_14215_14236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto__))
;return ((function (switch__8441__auto__,c__8506__auto__){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_14219 = [null,null,null,null,null,null,null,null];(statearr_14219[(0)] = state_machine__8442__auto__);
(statearr_14219[(1)] = (1));
return statearr_14219;
});
var state_machine__8442__auto____1 = (function (state_14198){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_14198);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e14220){if((e14220 instanceof Object))
{var ex__8445__auto__ = e14220;var statearr_14221_14237 = state_14198;(statearr_14221_14237[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14220;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14238 = state_14198;
state_14198 = G__14238;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__))
})();var state__8508__auto__ = (function (){var statearr_14222 = f__8507__auto__.call(null);(statearr_14222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_14222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__))
);
return c__8506__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14240 = {};return obj14240;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5041__auto__ = _;if(and__5041__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5041__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5680__auto__ = (((_ == null))?null:_);return (function (){var or__5053__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14242 = {};return obj14242;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14464 = (function (cs,ch,mult,meta14465){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14465 = meta14465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14464.cljs$lang$type = true;
cljs.core.async.t14464.cljs$lang$ctorStr = "cljs.core.async/t14464";
cljs.core.async.t14464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t14464");
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14466){var self__ = this;
var _14466__$1 = this;return self__.meta14465;
});})(cs))
;
cljs.core.async.t14464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14466,meta14465__$1){var self__ = this;
var _14466__$1 = this;return (new cljs.core.async.t14464(self__.cs,self__.ch,self__.mult,meta14465__$1));
});})(cs))
;
cljs.core.async.__GT_t14464 = ((function (cs){
return (function __GT_t14464(cs__$1,ch__$1,mult__$1,meta14465){return (new cljs.core.async.t14464(cs__$1,ch__$1,mult__$1,meta14465));
});})(cs))
;
}
return (new cljs.core.async.t14464(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8506__auto___14685 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___14685,cs,m,dchan,dctr,done){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___14685,cs,m,dchan,dctr,done){
return (function (state_14597){var state_val_14598 = (state_14597[(1)]);if((state_val_14598 === (7)))
{var inst_14593 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14599_14686 = state_14597__$1;(statearr_14599_14686[(2)] = inst_14593);
(statearr_14599_14686[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (20)))
{var inst_14498 = (state_14597[(7)]);var inst_14508 = cljs.core.first.call(null,inst_14498);var inst_14509 = cljs.core.nth.call(null,inst_14508,(0),null);var inst_14510 = cljs.core.nth.call(null,inst_14508,(1),null);var state_14597__$1 = (function (){var statearr_14600 = state_14597;(statearr_14600[(8)] = inst_14509);
return statearr_14600;
})();if(cljs.core.truth_(inst_14510))
{var statearr_14601_14687 = state_14597__$1;(statearr_14601_14687[(1)] = (22));
} else
{var statearr_14602_14688 = state_14597__$1;(statearr_14602_14688[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (27)))
{var inst_14545 = (state_14597[(9)]);var inst_14540 = (state_14597[(10)]);var inst_14469 = (state_14597[(11)]);var inst_14538 = (state_14597[(12)]);var inst_14545__$1 = cljs.core._nth.call(null,inst_14538,inst_14540);var inst_14546 = cljs.core.async.put_BANG_.call(null,inst_14545__$1,inst_14469,done);var state_14597__$1 = (function (){var statearr_14603 = state_14597;(statearr_14603[(9)] = inst_14545__$1);
return statearr_14603;
})();if(cljs.core.truth_(inst_14546))
{var statearr_14604_14689 = state_14597__$1;(statearr_14604_14689[(1)] = (30));
} else
{var statearr_14605_14690 = state_14597__$1;(statearr_14605_14690[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (1)))
{var state_14597__$1 = state_14597;var statearr_14606_14691 = state_14597__$1;(statearr_14606_14691[(2)] = null);
(statearr_14606_14691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (24)))
{var inst_14498 = (state_14597[(7)]);var inst_14515 = (state_14597[(2)]);var inst_14516 = cljs.core.next.call(null,inst_14498);var inst_14478 = inst_14516;var inst_14479 = null;var inst_14480 = (0);var inst_14481 = (0);var state_14597__$1 = (function (){var statearr_14607 = state_14597;(statearr_14607[(13)] = inst_14515);
(statearr_14607[(14)] = inst_14479);
(statearr_14607[(15)] = inst_14481);
(statearr_14607[(16)] = inst_14478);
(statearr_14607[(17)] = inst_14480);
return statearr_14607;
})();var statearr_14608_14692 = state_14597__$1;(statearr_14608_14692[(2)] = null);
(statearr_14608_14692[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (39)))
{var state_14597__$1 = state_14597;var statearr_14612_14693 = state_14597__$1;(statearr_14612_14693[(2)] = null);
(statearr_14612_14693[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (4)))
{var inst_14469 = (state_14597[(11)]);var inst_14469__$1 = (state_14597[(2)]);var inst_14470 = (inst_14469__$1 == null);var state_14597__$1 = (function (){var statearr_14613 = state_14597;(statearr_14613[(11)] = inst_14469__$1);
return statearr_14613;
})();if(cljs.core.truth_(inst_14470))
{var statearr_14614_14694 = state_14597__$1;(statearr_14614_14694[(1)] = (5));
} else
{var statearr_14615_14695 = state_14597__$1;(statearr_14615_14695[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (15)))
{var inst_14479 = (state_14597[(14)]);var inst_14481 = (state_14597[(15)]);var inst_14478 = (state_14597[(16)]);var inst_14480 = (state_14597[(17)]);var inst_14494 = (state_14597[(2)]);var inst_14495 = (inst_14481 + (1));var tmp14609 = inst_14479;var tmp14610 = inst_14478;var tmp14611 = inst_14480;var inst_14478__$1 = tmp14610;var inst_14479__$1 = tmp14609;var inst_14480__$1 = tmp14611;var inst_14481__$1 = inst_14495;var state_14597__$1 = (function (){var statearr_14616 = state_14597;(statearr_14616[(18)] = inst_14494);
(statearr_14616[(14)] = inst_14479__$1);
(statearr_14616[(15)] = inst_14481__$1);
(statearr_14616[(16)] = inst_14478__$1);
(statearr_14616[(17)] = inst_14480__$1);
return statearr_14616;
})();var statearr_14617_14696 = state_14597__$1;(statearr_14617_14696[(2)] = null);
(statearr_14617_14696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (21)))
{var inst_14519 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14621_14697 = state_14597__$1;(statearr_14621_14697[(2)] = inst_14519);
(statearr_14621_14697[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (31)))
{var inst_14545 = (state_14597[(9)]);var inst_14549 = done.call(null,null);var inst_14550 = cljs.core.async.untap_STAR_.call(null,m,inst_14545);var state_14597__$1 = (function (){var statearr_14622 = state_14597;(statearr_14622[(19)] = inst_14549);
return statearr_14622;
})();var statearr_14623_14698 = state_14597__$1;(statearr_14623_14698[(2)] = inst_14550);
(statearr_14623_14698[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (32)))
{var inst_14540 = (state_14597[(10)]);var inst_14539 = (state_14597[(20)]);var inst_14537 = (state_14597[(21)]);var inst_14538 = (state_14597[(12)]);var inst_14552 = (state_14597[(2)]);var inst_14553 = (inst_14540 + (1));var tmp14618 = inst_14539;var tmp14619 = inst_14537;var tmp14620 = inst_14538;var inst_14537__$1 = tmp14619;var inst_14538__$1 = tmp14620;var inst_14539__$1 = tmp14618;var inst_14540__$1 = inst_14553;var state_14597__$1 = (function (){var statearr_14624 = state_14597;(statearr_14624[(10)] = inst_14540__$1);
(statearr_14624[(22)] = inst_14552);
(statearr_14624[(20)] = inst_14539__$1);
(statearr_14624[(21)] = inst_14537__$1);
(statearr_14624[(12)] = inst_14538__$1);
return statearr_14624;
})();var statearr_14625_14699 = state_14597__$1;(statearr_14625_14699[(2)] = null);
(statearr_14625_14699[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (40)))
{var inst_14565 = (state_14597[(23)]);var inst_14569 = done.call(null,null);var inst_14570 = cljs.core.async.untap_STAR_.call(null,m,inst_14565);var state_14597__$1 = (function (){var statearr_14626 = state_14597;(statearr_14626[(24)] = inst_14569);
return statearr_14626;
})();var statearr_14627_14700 = state_14597__$1;(statearr_14627_14700[(2)] = inst_14570);
(statearr_14627_14700[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (33)))
{var inst_14556 = (state_14597[(25)]);var inst_14558 = cljs.core.chunked_seq_QMARK_.call(null,inst_14556);var state_14597__$1 = state_14597;if(inst_14558)
{var statearr_14628_14701 = state_14597__$1;(statearr_14628_14701[(1)] = (36));
} else
{var statearr_14629_14702 = state_14597__$1;(statearr_14629_14702[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (13)))
{var inst_14488 = (state_14597[(26)]);var inst_14491 = cljs.core.async.close_BANG_.call(null,inst_14488);var state_14597__$1 = state_14597;var statearr_14630_14703 = state_14597__$1;(statearr_14630_14703[(2)] = inst_14491);
(statearr_14630_14703[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (22)))
{var inst_14509 = (state_14597[(8)]);var inst_14512 = cljs.core.async.close_BANG_.call(null,inst_14509);var state_14597__$1 = state_14597;var statearr_14631_14704 = state_14597__$1;(statearr_14631_14704[(2)] = inst_14512);
(statearr_14631_14704[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (36)))
{var inst_14556 = (state_14597[(25)]);var inst_14560 = cljs.core.chunk_first.call(null,inst_14556);var inst_14561 = cljs.core.chunk_rest.call(null,inst_14556);var inst_14562 = cljs.core.count.call(null,inst_14560);var inst_14537 = inst_14561;var inst_14538 = inst_14560;var inst_14539 = inst_14562;var inst_14540 = (0);var state_14597__$1 = (function (){var statearr_14632 = state_14597;(statearr_14632[(10)] = inst_14540);
(statearr_14632[(20)] = inst_14539);
(statearr_14632[(21)] = inst_14537);
(statearr_14632[(12)] = inst_14538);
return statearr_14632;
})();var statearr_14633_14705 = state_14597__$1;(statearr_14633_14705[(2)] = null);
(statearr_14633_14705[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (41)))
{var inst_14556 = (state_14597[(25)]);var inst_14572 = (state_14597[(2)]);var inst_14573 = cljs.core.next.call(null,inst_14556);var inst_14537 = inst_14573;var inst_14538 = null;var inst_14539 = (0);var inst_14540 = (0);var state_14597__$1 = (function (){var statearr_14634 = state_14597;(statearr_14634[(10)] = inst_14540);
(statearr_14634[(20)] = inst_14539);
(statearr_14634[(21)] = inst_14537);
(statearr_14634[(27)] = inst_14572);
(statearr_14634[(12)] = inst_14538);
return statearr_14634;
})();var statearr_14635_14706 = state_14597__$1;(statearr_14635_14706[(2)] = null);
(statearr_14635_14706[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (43)))
{var state_14597__$1 = state_14597;var statearr_14636_14707 = state_14597__$1;(statearr_14636_14707[(2)] = null);
(statearr_14636_14707[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (29)))
{var inst_14581 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14637_14708 = state_14597__$1;(statearr_14637_14708[(2)] = inst_14581);
(statearr_14637_14708[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (44)))
{var inst_14590 = (state_14597[(2)]);var state_14597__$1 = (function (){var statearr_14638 = state_14597;(statearr_14638[(28)] = inst_14590);
return statearr_14638;
})();var statearr_14639_14709 = state_14597__$1;(statearr_14639_14709[(2)] = null);
(statearr_14639_14709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (6)))
{var inst_14529 = (state_14597[(29)]);var inst_14528 = cljs.core.deref.call(null,cs);var inst_14529__$1 = cljs.core.keys.call(null,inst_14528);var inst_14530 = cljs.core.count.call(null,inst_14529__$1);var inst_14531 = cljs.core.reset_BANG_.call(null,dctr,inst_14530);var inst_14536 = cljs.core.seq.call(null,inst_14529__$1);var inst_14537 = inst_14536;var inst_14538 = null;var inst_14539 = (0);var inst_14540 = (0);var state_14597__$1 = (function (){var statearr_14640 = state_14597;(statearr_14640[(29)] = inst_14529__$1);
(statearr_14640[(10)] = inst_14540);
(statearr_14640[(30)] = inst_14531);
(statearr_14640[(20)] = inst_14539);
(statearr_14640[(21)] = inst_14537);
(statearr_14640[(12)] = inst_14538);
return statearr_14640;
})();var statearr_14641_14710 = state_14597__$1;(statearr_14641_14710[(2)] = null);
(statearr_14641_14710[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (28)))
{var inst_14537 = (state_14597[(21)]);var inst_14556 = (state_14597[(25)]);var inst_14556__$1 = cljs.core.seq.call(null,inst_14537);var state_14597__$1 = (function (){var statearr_14642 = state_14597;(statearr_14642[(25)] = inst_14556__$1);
return statearr_14642;
})();if(inst_14556__$1)
{var statearr_14643_14711 = state_14597__$1;(statearr_14643_14711[(1)] = (33));
} else
{var statearr_14644_14712 = state_14597__$1;(statearr_14644_14712[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (25)))
{var inst_14540 = (state_14597[(10)]);var inst_14539 = (state_14597[(20)]);var inst_14542 = (inst_14540 < inst_14539);var inst_14543 = inst_14542;var state_14597__$1 = state_14597;if(cljs.core.truth_(inst_14543))
{var statearr_14645_14713 = state_14597__$1;(statearr_14645_14713[(1)] = (27));
} else
{var statearr_14646_14714 = state_14597__$1;(statearr_14646_14714[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (34)))
{var state_14597__$1 = state_14597;var statearr_14647_14715 = state_14597__$1;(statearr_14647_14715[(2)] = null);
(statearr_14647_14715[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (17)))
{var state_14597__$1 = state_14597;var statearr_14648_14716 = state_14597__$1;(statearr_14648_14716[(2)] = null);
(statearr_14648_14716[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (3)))
{var inst_14595 = (state_14597[(2)]);var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14597__$1,inst_14595);
} else
{if((state_val_14598 === (12)))
{var inst_14524 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14649_14717 = state_14597__$1;(statearr_14649_14717[(2)] = inst_14524);
(statearr_14649_14717[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (2)))
{var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14597__$1,(4),ch);
} else
{if((state_val_14598 === (23)))
{var state_14597__$1 = state_14597;var statearr_14650_14718 = state_14597__$1;(statearr_14650_14718[(2)] = null);
(statearr_14650_14718[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (35)))
{var inst_14579 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14651_14719 = state_14597__$1;(statearr_14651_14719[(2)] = inst_14579);
(statearr_14651_14719[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (19)))
{var inst_14498 = (state_14597[(7)]);var inst_14502 = cljs.core.chunk_first.call(null,inst_14498);var inst_14503 = cljs.core.chunk_rest.call(null,inst_14498);var inst_14504 = cljs.core.count.call(null,inst_14502);var inst_14478 = inst_14503;var inst_14479 = inst_14502;var inst_14480 = inst_14504;var inst_14481 = (0);var state_14597__$1 = (function (){var statearr_14652 = state_14597;(statearr_14652[(14)] = inst_14479);
(statearr_14652[(15)] = inst_14481);
(statearr_14652[(16)] = inst_14478);
(statearr_14652[(17)] = inst_14480);
return statearr_14652;
})();var statearr_14653_14720 = state_14597__$1;(statearr_14653_14720[(2)] = null);
(statearr_14653_14720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (11)))
{var inst_14478 = (state_14597[(16)]);var inst_14498 = (state_14597[(7)]);var inst_14498__$1 = cljs.core.seq.call(null,inst_14478);var state_14597__$1 = (function (){var statearr_14654 = state_14597;(statearr_14654[(7)] = inst_14498__$1);
return statearr_14654;
})();if(inst_14498__$1)
{var statearr_14655_14721 = state_14597__$1;(statearr_14655_14721[(1)] = (16));
} else
{var statearr_14656_14722 = state_14597__$1;(statearr_14656_14722[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (9)))
{var inst_14526 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14657_14723 = state_14597__$1;(statearr_14657_14723[(2)] = inst_14526);
(statearr_14657_14723[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (5)))
{var inst_14476 = cljs.core.deref.call(null,cs);var inst_14477 = cljs.core.seq.call(null,inst_14476);var inst_14478 = inst_14477;var inst_14479 = null;var inst_14480 = (0);var inst_14481 = (0);var state_14597__$1 = (function (){var statearr_14658 = state_14597;(statearr_14658[(14)] = inst_14479);
(statearr_14658[(15)] = inst_14481);
(statearr_14658[(16)] = inst_14478);
(statearr_14658[(17)] = inst_14480);
return statearr_14658;
})();var statearr_14659_14724 = state_14597__$1;(statearr_14659_14724[(2)] = null);
(statearr_14659_14724[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (14)))
{var state_14597__$1 = state_14597;var statearr_14660_14725 = state_14597__$1;(statearr_14660_14725[(2)] = null);
(statearr_14660_14725[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (45)))
{var inst_14587 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14661_14726 = state_14597__$1;(statearr_14661_14726[(2)] = inst_14587);
(statearr_14661_14726[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (26)))
{var inst_14529 = (state_14597[(29)]);var inst_14583 = (state_14597[(2)]);var inst_14584 = cljs.core.seq.call(null,inst_14529);var state_14597__$1 = (function (){var statearr_14662 = state_14597;(statearr_14662[(31)] = inst_14583);
return statearr_14662;
})();if(inst_14584)
{var statearr_14663_14727 = state_14597__$1;(statearr_14663_14727[(1)] = (42));
} else
{var statearr_14664_14728 = state_14597__$1;(statearr_14664_14728[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (16)))
{var inst_14498 = (state_14597[(7)]);var inst_14500 = cljs.core.chunked_seq_QMARK_.call(null,inst_14498);var state_14597__$1 = state_14597;if(inst_14500)
{var statearr_14665_14729 = state_14597__$1;(statearr_14665_14729[(1)] = (19));
} else
{var statearr_14666_14730 = state_14597__$1;(statearr_14666_14730[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (38)))
{var inst_14576 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14667_14731 = state_14597__$1;(statearr_14667_14731[(2)] = inst_14576);
(statearr_14667_14731[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (30)))
{var state_14597__$1 = state_14597;var statearr_14668_14732 = state_14597__$1;(statearr_14668_14732[(2)] = null);
(statearr_14668_14732[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (10)))
{var inst_14479 = (state_14597[(14)]);var inst_14481 = (state_14597[(15)]);var inst_14487 = cljs.core._nth.call(null,inst_14479,inst_14481);var inst_14488 = cljs.core.nth.call(null,inst_14487,(0),null);var inst_14489 = cljs.core.nth.call(null,inst_14487,(1),null);var state_14597__$1 = (function (){var statearr_14669 = state_14597;(statearr_14669[(26)] = inst_14488);
return statearr_14669;
})();if(cljs.core.truth_(inst_14489))
{var statearr_14670_14733 = state_14597__$1;(statearr_14670_14733[(1)] = (13));
} else
{var statearr_14671_14734 = state_14597__$1;(statearr_14671_14734[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (18)))
{var inst_14522 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14672_14735 = state_14597__$1;(statearr_14672_14735[(2)] = inst_14522);
(statearr_14672_14735[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (42)))
{var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14597__$1,(45),dchan);
} else
{if((state_val_14598 === (37)))
{var inst_14565 = (state_14597[(23)]);var inst_14469 = (state_14597[(11)]);var inst_14556 = (state_14597[(25)]);var inst_14565__$1 = cljs.core.first.call(null,inst_14556);var inst_14566 = cljs.core.async.put_BANG_.call(null,inst_14565__$1,inst_14469,done);var state_14597__$1 = (function (){var statearr_14673 = state_14597;(statearr_14673[(23)] = inst_14565__$1);
return statearr_14673;
})();if(cljs.core.truth_(inst_14566))
{var statearr_14674_14736 = state_14597__$1;(statearr_14674_14736[(1)] = (39));
} else
{var statearr_14675_14737 = state_14597__$1;(statearr_14675_14737[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (8)))
{var inst_14481 = (state_14597[(15)]);var inst_14480 = (state_14597[(17)]);var inst_14483 = (inst_14481 < inst_14480);var inst_14484 = inst_14483;var state_14597__$1 = state_14597;if(cljs.core.truth_(inst_14484))
{var statearr_14676_14738 = state_14597__$1;(statearr_14676_14738[(1)] = (10));
} else
{var statearr_14677_14739 = state_14597__$1;(statearr_14677_14739[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___14685,cs,m,dchan,dctr,done))
;return ((function (switch__8441__auto__,c__8506__auto___14685,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_14681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14681[(0)] = state_machine__8442__auto__);
(statearr_14681[(1)] = (1));
return statearr_14681;
});
var state_machine__8442__auto____1 = (function (state_14597){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_14597);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e14682){if((e14682 instanceof Object))
{var ex__8445__auto__ = e14682;var statearr_14683_14740 = state_14597;(statearr_14683_14740[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14682;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14741 = state_14597;
state_14597 = G__14741;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___14685,cs,m,dchan,dctr,done))
})();var state__8508__auto__ = (function (){var statearr_14684 = f__8507__auto__.call(null);(statearr_14684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___14685);
return statearr_14684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___14685,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14743 = {};return obj14743;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5041__auto__ = m;if(and__5041__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5680__auto__ = (((m == null))?null:m);return (function (){var or__5053__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14863 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14864){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14864 = meta14864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14863.cljs$lang$type = true;
cljs.core.async.t14863.cljs$lang$ctorStr = "cljs.core.async/t14863";
cljs.core.async.t14863.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t14863");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14865){var self__ = this;
var _14865__$1 = this;return self__.meta14864;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14865,meta14864__$1){var self__ = this;
var _14865__$1 = this;return (new cljs.core.async.t14863(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14864__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14863 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14863(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14864){return (new cljs.core.async.t14863(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14864));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14863(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8506__auto___14982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14935){var state_val_14936 = (state_14935[(1)]);if((state_val_14936 === (7)))
{var inst_14879 = (state_14935[(7)]);var inst_14884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14879);var state_14935__$1 = state_14935;var statearr_14937_14983 = state_14935__$1;(statearr_14937_14983[(2)] = inst_14884);
(statearr_14937_14983[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (20)))
{var inst_14894 = (state_14935[(8)]);var state_14935__$1 = state_14935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(23),out,inst_14894);
} else
{if((state_val_14936 === (1)))
{var inst_14869 = (state_14935[(9)]);var inst_14869__$1 = calc_state.call(null);var inst_14870 = cljs.core.seq_QMARK_.call(null,inst_14869__$1);var state_14935__$1 = (function (){var statearr_14938 = state_14935;(statearr_14938[(9)] = inst_14869__$1);
return statearr_14938;
})();if(inst_14870)
{var statearr_14939_14984 = state_14935__$1;(statearr_14939_14984[(1)] = (2));
} else
{var statearr_14940_14985 = state_14935__$1;(statearr_14940_14985[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (24)))
{var inst_14887 = (state_14935[(10)]);var inst_14879 = inst_14887;var state_14935__$1 = (function (){var statearr_14941 = state_14935;(statearr_14941[(7)] = inst_14879);
return statearr_14941;
})();var statearr_14942_14986 = state_14935__$1;(statearr_14942_14986[(2)] = null);
(statearr_14942_14986[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (4)))
{var inst_14869 = (state_14935[(9)]);var inst_14875 = (state_14935[(2)]);var inst_14876 = cljs.core.get.call(null,inst_14875,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14877 = cljs.core.get.call(null,inst_14875,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14878 = cljs.core.get.call(null,inst_14875,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14879 = inst_14869;var state_14935__$1 = (function (){var statearr_14943 = state_14935;(statearr_14943[(7)] = inst_14879);
(statearr_14943[(11)] = inst_14878);
(statearr_14943[(12)] = inst_14877);
(statearr_14943[(13)] = inst_14876);
return statearr_14943;
})();var statearr_14944_14987 = state_14935__$1;(statearr_14944_14987[(2)] = null);
(statearr_14944_14987[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (15)))
{var state_14935__$1 = state_14935;var statearr_14945_14988 = state_14935__$1;(statearr_14945_14988[(2)] = null);
(statearr_14945_14988[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (21)))
{var inst_14887 = (state_14935[(10)]);var inst_14879 = inst_14887;var state_14935__$1 = (function (){var statearr_14946 = state_14935;(statearr_14946[(7)] = inst_14879);
return statearr_14946;
})();var statearr_14947_14989 = state_14935__$1;(statearr_14947_14989[(2)] = null);
(statearr_14947_14989[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (13)))
{var inst_14931 = (state_14935[(2)]);var state_14935__$1 = state_14935;var statearr_14948_14990 = state_14935__$1;(statearr_14948_14990[(2)] = inst_14931);
(statearr_14948_14990[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (22)))
{var inst_14929 = (state_14935[(2)]);var state_14935__$1 = state_14935;var statearr_14949_14991 = state_14935__$1;(statearr_14949_14991[(2)] = inst_14929);
(statearr_14949_14991[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (6)))
{var inst_14933 = (state_14935[(2)]);var state_14935__$1 = state_14935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else
{if((state_val_14936 === (25)))
{var state_14935__$1 = state_14935;var statearr_14950_14992 = state_14935__$1;(statearr_14950_14992[(2)] = null);
(statearr_14950_14992[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (17)))
{var inst_14909 = (state_14935[(14)]);var state_14935__$1 = state_14935;var statearr_14951_14993 = state_14935__$1;(statearr_14951_14993[(2)] = inst_14909);
(statearr_14951_14993[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (3)))
{var inst_14869 = (state_14935[(9)]);var state_14935__$1 = state_14935;var statearr_14952_14994 = state_14935__$1;(statearr_14952_14994[(2)] = inst_14869);
(statearr_14952_14994[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (12)))
{var inst_14895 = (state_14935[(15)]);var inst_14890 = (state_14935[(16)]);var inst_14909 = (state_14935[(14)]);var inst_14909__$1 = inst_14890.call(null,inst_14895);var state_14935__$1 = (function (){var statearr_14953 = state_14935;(statearr_14953[(14)] = inst_14909__$1);
return statearr_14953;
})();if(cljs.core.truth_(inst_14909__$1))
{var statearr_14954_14995 = state_14935__$1;(statearr_14954_14995[(1)] = (17));
} else
{var statearr_14955_14996 = state_14935__$1;(statearr_14955_14996[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (2)))
{var inst_14869 = (state_14935[(9)]);var inst_14872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14869);var state_14935__$1 = state_14935;var statearr_14956_14997 = state_14935__$1;(statearr_14956_14997[(2)] = inst_14872);
(statearr_14956_14997[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (23)))
{var inst_14920 = (state_14935[(2)]);var state_14935__$1 = state_14935;if(cljs.core.truth_(inst_14920))
{var statearr_14957_14998 = state_14935__$1;(statearr_14957_14998[(1)] = (24));
} else
{var statearr_14958_14999 = state_14935__$1;(statearr_14958_14999[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (19)))
{var inst_14917 = (state_14935[(2)]);var state_14935__$1 = state_14935;if(cljs.core.truth_(inst_14917))
{var statearr_14959_15000 = state_14935__$1;(statearr_14959_15000[(1)] = (20));
} else
{var statearr_14960_15001 = state_14935__$1;(statearr_14960_15001[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (11)))
{var inst_14894 = (state_14935[(8)]);var inst_14900 = (inst_14894 == null);var state_14935__$1 = state_14935;if(cljs.core.truth_(inst_14900))
{var statearr_14961_15002 = state_14935__$1;(statearr_14961_15002[(1)] = (14));
} else
{var statearr_14962_15003 = state_14935__$1;(statearr_14962_15003[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (9)))
{var inst_14887 = (state_14935[(10)]);var inst_14887__$1 = (state_14935[(2)]);var inst_14888 = cljs.core.get.call(null,inst_14887__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14889 = cljs.core.get.call(null,inst_14887__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14890 = cljs.core.get.call(null,inst_14887__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14935__$1 = (function (){var statearr_14963 = state_14935;(statearr_14963[(10)] = inst_14887__$1);
(statearr_14963[(17)] = inst_14889);
(statearr_14963[(16)] = inst_14890);
return statearr_14963;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14935__$1,(10),inst_14888);
} else
{if((state_val_14936 === (5)))
{var inst_14879 = (state_14935[(7)]);var inst_14882 = cljs.core.seq_QMARK_.call(null,inst_14879);var state_14935__$1 = state_14935;if(inst_14882)
{var statearr_14964_15004 = state_14935__$1;(statearr_14964_15004[(1)] = (7));
} else
{var statearr_14965_15005 = state_14935__$1;(statearr_14965_15005[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (14)))
{var inst_14895 = (state_14935[(15)]);var inst_14902 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14895);var state_14935__$1 = state_14935;var statearr_14966_15006 = state_14935__$1;(statearr_14966_15006[(2)] = inst_14902);
(statearr_14966_15006[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (26)))
{var inst_14925 = (state_14935[(2)]);var state_14935__$1 = state_14935;var statearr_14967_15007 = state_14935__$1;(statearr_14967_15007[(2)] = inst_14925);
(statearr_14967_15007[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (16)))
{var inst_14905 = (state_14935[(2)]);var inst_14906 = calc_state.call(null);var inst_14879 = inst_14906;var state_14935__$1 = (function (){var statearr_14968 = state_14935;(statearr_14968[(7)] = inst_14879);
(statearr_14968[(18)] = inst_14905);
return statearr_14968;
})();var statearr_14969_15008 = state_14935__$1;(statearr_14969_15008[(2)] = null);
(statearr_14969_15008[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (10)))
{var inst_14895 = (state_14935[(15)]);var inst_14894 = (state_14935[(8)]);var inst_14893 = (state_14935[(2)]);var inst_14894__$1 = cljs.core.nth.call(null,inst_14893,(0),null);var inst_14895__$1 = cljs.core.nth.call(null,inst_14893,(1),null);var inst_14896 = (inst_14894__$1 == null);var inst_14897 = cljs.core._EQ_.call(null,inst_14895__$1,change);var inst_14898 = (inst_14896) || (inst_14897);var state_14935__$1 = (function (){var statearr_14970 = state_14935;(statearr_14970[(15)] = inst_14895__$1);
(statearr_14970[(8)] = inst_14894__$1);
return statearr_14970;
})();if(cljs.core.truth_(inst_14898))
{var statearr_14971_15009 = state_14935__$1;(statearr_14971_15009[(1)] = (11));
} else
{var statearr_14972_15010 = state_14935__$1;(statearr_14972_15010[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (18)))
{var inst_14889 = (state_14935[(17)]);var inst_14895 = (state_14935[(15)]);var inst_14890 = (state_14935[(16)]);var inst_14912 = cljs.core.empty_QMARK_.call(null,inst_14890);var inst_14913 = inst_14889.call(null,inst_14895);var inst_14914 = cljs.core.not.call(null,inst_14913);var inst_14915 = (inst_14912) && (inst_14914);var state_14935__$1 = state_14935;var statearr_14973_15011 = state_14935__$1;(statearr_14973_15011[(2)] = inst_14915);
(statearr_14973_15011[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14936 === (8)))
{var inst_14879 = (state_14935[(7)]);var state_14935__$1 = state_14935;var statearr_14974_15012 = state_14935__$1;(statearr_14974_15012[(2)] = inst_14879);
(statearr_14974_15012[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8441__auto__,c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_14978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14978[(0)] = state_machine__8442__auto__);
(statearr_14978[(1)] = (1));
return statearr_14978;
});
var state_machine__8442__auto____1 = (function (state_14935){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_14935);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e14979){if((e14979 instanceof Object))
{var ex__8445__auto__ = e14979;var statearr_14980_15013 = state_14935;(statearr_14980_15013[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15014 = state_14935;
state_14935 = G__15014;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8508__auto__ = (function (){var statearr_14981 = f__8507__auto__.call(null);(statearr_14981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___14982);
return statearr_14981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___14982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15016 = {};return obj15016;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5041__auto__ = p;if(and__5041__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5041__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5680__auto__ = (((p == null))?null:p);return (function (){var or__5053__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5041__auto__ = p;if(and__5041__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5041__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5680__auto__ = (((p == null))?null:p);return (function (){var or__5053__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5041__auto__ = p;if(and__5041__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5041__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5680__auto__ = (((p == null))?null:p);return (function (){var or__5053__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5041__auto__ = p;if(and__5041__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5041__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5680__auto__ = (((p == null))?null:p);return (function (){var or__5053__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5680__auto__)]);if(or__5053__auto__)
{return or__5053__auto__;
} else
{var or__5053__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5053__auto____$1)
{return or__5053__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__5053__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5053__auto__))
{return or__5053__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5053__auto__,mults){
return (function (p1__15017_SHARP_){if(cljs.core.truth_(p1__15017_SHARP_.call(null,topic)))
{return p1__15017_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15017_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5053__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15140 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15141){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15141 = meta15141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15140.cljs$lang$type = true;
cljs.core.async.t15140.cljs$lang$ctorStr = "cljs.core.async/t15140";
cljs.core.async.t15140.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t15140");
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15140.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15142){var self__ = this;
var _15142__$1 = this;return self__.meta15141;
});})(mults,ensure_mult))
;
cljs.core.async.t15140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15142,meta15141__$1){var self__ = this;
var _15142__$1 = this;return (new cljs.core.async.t15140(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15141__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15140 = ((function (mults,ensure_mult){
return (function __GT_t15140(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15141){return (new cljs.core.async.t15140(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15141));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15140(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8506__auto___15262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___15262,mults,ensure_mult,p){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___15262,mults,ensure_mult,p){
return (function (state_15214){var state_val_15215 = (state_15214[(1)]);if((state_val_15215 === (7)))
{var inst_15210 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15216_15263 = state_15214__$1;(statearr_15216_15263[(2)] = inst_15210);
(statearr_15216_15263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (20)))
{var state_15214__$1 = state_15214;var statearr_15217_15264 = state_15214__$1;(statearr_15217_15264[(2)] = null);
(statearr_15217_15264[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (1)))
{var state_15214__$1 = state_15214;var statearr_15218_15265 = state_15214__$1;(statearr_15218_15265[(2)] = null);
(statearr_15218_15265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (24)))
{var inst_15193 = (state_15214[(7)]);var inst_15202 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15193);var state_15214__$1 = state_15214;var statearr_15219_15266 = state_15214__$1;(statearr_15219_15266[(2)] = inst_15202);
(statearr_15219_15266[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (4)))
{var inst_15145 = (state_15214[(8)]);var inst_15145__$1 = (state_15214[(2)]);var inst_15146 = (inst_15145__$1 == null);var state_15214__$1 = (function (){var statearr_15220 = state_15214;(statearr_15220[(8)] = inst_15145__$1);
return statearr_15220;
})();if(cljs.core.truth_(inst_15146))
{var statearr_15221_15267 = state_15214__$1;(statearr_15221_15267[(1)] = (5));
} else
{var statearr_15222_15268 = state_15214__$1;(statearr_15222_15268[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (15)))
{var inst_15187 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15223_15269 = state_15214__$1;(statearr_15223_15269[(2)] = inst_15187);
(statearr_15223_15269[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (21)))
{var inst_15207 = (state_15214[(2)]);var state_15214__$1 = (function (){var statearr_15224 = state_15214;(statearr_15224[(9)] = inst_15207);
return statearr_15224;
})();var statearr_15225_15270 = state_15214__$1;(statearr_15225_15270[(2)] = null);
(statearr_15225_15270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (13)))
{var inst_15169 = (state_15214[(10)]);var inst_15171 = cljs.core.chunked_seq_QMARK_.call(null,inst_15169);var state_15214__$1 = state_15214;if(inst_15171)
{var statearr_15226_15271 = state_15214__$1;(statearr_15226_15271[(1)] = (16));
} else
{var statearr_15227_15272 = state_15214__$1;(statearr_15227_15272[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (22)))
{var inst_15199 = (state_15214[(2)]);var state_15214__$1 = state_15214;if(cljs.core.truth_(inst_15199))
{var statearr_15228_15273 = state_15214__$1;(statearr_15228_15273[(1)] = (23));
} else
{var statearr_15229_15274 = state_15214__$1;(statearr_15229_15274[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (6)))
{var inst_15195 = (state_15214[(11)]);var inst_15145 = (state_15214[(8)]);var inst_15193 = (state_15214[(7)]);var inst_15193__$1 = topic_fn.call(null,inst_15145);var inst_15194 = cljs.core.deref.call(null,mults);var inst_15195__$1 = cljs.core.get.call(null,inst_15194,inst_15193__$1);var state_15214__$1 = (function (){var statearr_15230 = state_15214;(statearr_15230[(11)] = inst_15195__$1);
(statearr_15230[(7)] = inst_15193__$1);
return statearr_15230;
})();if(cljs.core.truth_(inst_15195__$1))
{var statearr_15231_15275 = state_15214__$1;(statearr_15231_15275[(1)] = (19));
} else
{var statearr_15232_15276 = state_15214__$1;(statearr_15232_15276[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (25)))
{var inst_15204 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15233_15277 = state_15214__$1;(statearr_15233_15277[(2)] = inst_15204);
(statearr_15233_15277[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (17)))
{var inst_15169 = (state_15214[(10)]);var inst_15178 = cljs.core.first.call(null,inst_15169);var inst_15179 = cljs.core.async.muxch_STAR_.call(null,inst_15178);var inst_15180 = cljs.core.async.close_BANG_.call(null,inst_15179);var inst_15181 = cljs.core.next.call(null,inst_15169);var inst_15155 = inst_15181;var inst_15156 = null;var inst_15157 = (0);var inst_15158 = (0);var state_15214__$1 = (function (){var statearr_15234 = state_15214;(statearr_15234[(12)] = inst_15157);
(statearr_15234[(13)] = inst_15158);
(statearr_15234[(14)] = inst_15155);
(statearr_15234[(15)] = inst_15156);
(statearr_15234[(16)] = inst_15180);
return statearr_15234;
})();var statearr_15235_15278 = state_15214__$1;(statearr_15235_15278[(2)] = null);
(statearr_15235_15278[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (3)))
{var inst_15212 = (state_15214[(2)]);var state_15214__$1 = state_15214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15214__$1,inst_15212);
} else
{if((state_val_15215 === (12)))
{var inst_15189 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15236_15279 = state_15214__$1;(statearr_15236_15279[(2)] = inst_15189);
(statearr_15236_15279[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (2)))
{var state_15214__$1 = state_15214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15214__$1,(4),ch);
} else
{if((state_val_15215 === (23)))
{var state_15214__$1 = state_15214;var statearr_15237_15280 = state_15214__$1;(statearr_15237_15280[(2)] = null);
(statearr_15237_15280[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (19)))
{var inst_15195 = (state_15214[(11)]);var inst_15145 = (state_15214[(8)]);var inst_15197 = cljs.core.async.muxch_STAR_.call(null,inst_15195);var state_15214__$1 = state_15214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15214__$1,(22),inst_15197,inst_15145);
} else
{if((state_val_15215 === (11)))
{var inst_15169 = (state_15214[(10)]);var inst_15155 = (state_15214[(14)]);var inst_15169__$1 = cljs.core.seq.call(null,inst_15155);var state_15214__$1 = (function (){var statearr_15238 = state_15214;(statearr_15238[(10)] = inst_15169__$1);
return statearr_15238;
})();if(inst_15169__$1)
{var statearr_15239_15281 = state_15214__$1;(statearr_15239_15281[(1)] = (13));
} else
{var statearr_15240_15282 = state_15214__$1;(statearr_15240_15282[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (9)))
{var inst_15191 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15241_15283 = state_15214__$1;(statearr_15241_15283[(2)] = inst_15191);
(statearr_15241_15283[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (5)))
{var inst_15152 = cljs.core.deref.call(null,mults);var inst_15153 = cljs.core.vals.call(null,inst_15152);var inst_15154 = cljs.core.seq.call(null,inst_15153);var inst_15155 = inst_15154;var inst_15156 = null;var inst_15157 = (0);var inst_15158 = (0);var state_15214__$1 = (function (){var statearr_15242 = state_15214;(statearr_15242[(12)] = inst_15157);
(statearr_15242[(13)] = inst_15158);
(statearr_15242[(14)] = inst_15155);
(statearr_15242[(15)] = inst_15156);
return statearr_15242;
})();var statearr_15243_15284 = state_15214__$1;(statearr_15243_15284[(2)] = null);
(statearr_15243_15284[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (14)))
{var state_15214__$1 = state_15214;var statearr_15247_15285 = state_15214__$1;(statearr_15247_15285[(2)] = null);
(statearr_15247_15285[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (16)))
{var inst_15169 = (state_15214[(10)]);var inst_15173 = cljs.core.chunk_first.call(null,inst_15169);var inst_15174 = cljs.core.chunk_rest.call(null,inst_15169);var inst_15175 = cljs.core.count.call(null,inst_15173);var inst_15155 = inst_15174;var inst_15156 = inst_15173;var inst_15157 = inst_15175;var inst_15158 = (0);var state_15214__$1 = (function (){var statearr_15248 = state_15214;(statearr_15248[(12)] = inst_15157);
(statearr_15248[(13)] = inst_15158);
(statearr_15248[(14)] = inst_15155);
(statearr_15248[(15)] = inst_15156);
return statearr_15248;
})();var statearr_15249_15286 = state_15214__$1;(statearr_15249_15286[(2)] = null);
(statearr_15249_15286[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (10)))
{var inst_15157 = (state_15214[(12)]);var inst_15158 = (state_15214[(13)]);var inst_15155 = (state_15214[(14)]);var inst_15156 = (state_15214[(15)]);var inst_15163 = cljs.core._nth.call(null,inst_15156,inst_15158);var inst_15164 = cljs.core.async.muxch_STAR_.call(null,inst_15163);var inst_15165 = cljs.core.async.close_BANG_.call(null,inst_15164);var inst_15166 = (inst_15158 + (1));var tmp15244 = inst_15157;var tmp15245 = inst_15155;var tmp15246 = inst_15156;var inst_15155__$1 = tmp15245;var inst_15156__$1 = tmp15246;var inst_15157__$1 = tmp15244;var inst_15158__$1 = inst_15166;var state_15214__$1 = (function (){var statearr_15250 = state_15214;(statearr_15250[(17)] = inst_15165);
(statearr_15250[(12)] = inst_15157__$1);
(statearr_15250[(13)] = inst_15158__$1);
(statearr_15250[(14)] = inst_15155__$1);
(statearr_15250[(15)] = inst_15156__$1);
return statearr_15250;
})();var statearr_15251_15287 = state_15214__$1;(statearr_15251_15287[(2)] = null);
(statearr_15251_15287[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (18)))
{var inst_15184 = (state_15214[(2)]);var state_15214__$1 = state_15214;var statearr_15252_15288 = state_15214__$1;(statearr_15252_15288[(2)] = inst_15184);
(statearr_15252_15288[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15215 === (8)))
{var inst_15157 = (state_15214[(12)]);var inst_15158 = (state_15214[(13)]);var inst_15160 = (inst_15158 < inst_15157);var inst_15161 = inst_15160;var state_15214__$1 = state_15214;if(cljs.core.truth_(inst_15161))
{var statearr_15253_15289 = state_15214__$1;(statearr_15253_15289[(1)] = (10));
} else
{var statearr_15254_15290 = state_15214__$1;(statearr_15254_15290[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___15262,mults,ensure_mult,p))
;return ((function (switch__8441__auto__,c__8506__auto___15262,mults,ensure_mult,p){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15258[(0)] = state_machine__8442__auto__);
(statearr_15258[(1)] = (1));
return statearr_15258;
});
var state_machine__8442__auto____1 = (function (state_15214){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15214);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15259){if((e15259 instanceof Object))
{var ex__8445__auto__ = e15259;var statearr_15260_15291 = state_15214;(statearr_15260_15291[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15292 = state_15214;
state_15214 = G__15292;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15214){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___15262,mults,ensure_mult,p))
})();var state__8508__auto__ = (function (){var statearr_15261 = f__8507__auto__.call(null);(statearr_15261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___15262);
return statearr_15261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___15262,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8506__auto___15429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15399){var state_val_15400 = (state_15399[(1)]);if((state_val_15400 === (7)))
{var state_15399__$1 = state_15399;var statearr_15401_15430 = state_15399__$1;(statearr_15401_15430[(2)] = null);
(statearr_15401_15430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (1)))
{var state_15399__$1 = state_15399;var statearr_15402_15431 = state_15399__$1;(statearr_15402_15431[(2)] = null);
(statearr_15402_15431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (4)))
{var inst_15363 = (state_15399[(7)]);var inst_15365 = (inst_15363 < cnt);var state_15399__$1 = state_15399;if(cljs.core.truth_(inst_15365))
{var statearr_15403_15432 = state_15399__$1;(statearr_15403_15432[(1)] = (6));
} else
{var statearr_15404_15433 = state_15399__$1;(statearr_15404_15433[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (15)))
{var inst_15395 = (state_15399[(2)]);var state_15399__$1 = state_15399;var statearr_15405_15434 = state_15399__$1;(statearr_15405_15434[(2)] = inst_15395);
(statearr_15405_15434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (13)))
{var inst_15388 = cljs.core.async.close_BANG_.call(null,out);var state_15399__$1 = state_15399;var statearr_15406_15435 = state_15399__$1;(statearr_15406_15435[(2)] = inst_15388);
(statearr_15406_15435[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (6)))
{var state_15399__$1 = state_15399;var statearr_15407_15436 = state_15399__$1;(statearr_15407_15436[(2)] = null);
(statearr_15407_15436[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (3)))
{var inst_15397 = (state_15399[(2)]);var state_15399__$1 = state_15399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15399__$1,inst_15397);
} else
{if((state_val_15400 === (12)))
{var inst_15385 = (state_15399[(8)]);var inst_15385__$1 = (state_15399[(2)]);var inst_15386 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15385__$1);var state_15399__$1 = (function (){var statearr_15408 = state_15399;(statearr_15408[(8)] = inst_15385__$1);
return statearr_15408;
})();if(cljs.core.truth_(inst_15386))
{var statearr_15409_15437 = state_15399__$1;(statearr_15409_15437[(1)] = (13));
} else
{var statearr_15410_15438 = state_15399__$1;(statearr_15410_15438[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (2)))
{var inst_15362 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15363 = (0);var state_15399__$1 = (function (){var statearr_15411 = state_15399;(statearr_15411[(7)] = inst_15363);
(statearr_15411[(9)] = inst_15362);
return statearr_15411;
})();var statearr_15412_15439 = state_15399__$1;(statearr_15412_15439[(2)] = null);
(statearr_15412_15439[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (11)))
{var inst_15363 = (state_15399[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15399,(10),Object,null,(9));var inst_15372 = chs__$1.call(null,inst_15363);var inst_15373 = done.call(null,inst_15363);var inst_15374 = cljs.core.async.take_BANG_.call(null,inst_15372,inst_15373);var state_15399__$1 = state_15399;var statearr_15413_15440 = state_15399__$1;(statearr_15413_15440[(2)] = inst_15374);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15399__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (9)))
{var inst_15363 = (state_15399[(7)]);var inst_15376 = (state_15399[(2)]);var inst_15377 = (inst_15363 + (1));var inst_15363__$1 = inst_15377;var state_15399__$1 = (function (){var statearr_15414 = state_15399;(statearr_15414[(7)] = inst_15363__$1);
(statearr_15414[(10)] = inst_15376);
return statearr_15414;
})();var statearr_15415_15441 = state_15399__$1;(statearr_15415_15441[(2)] = null);
(statearr_15415_15441[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (5)))
{var inst_15383 = (state_15399[(2)]);var state_15399__$1 = (function (){var statearr_15416 = state_15399;(statearr_15416[(11)] = inst_15383);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15399__$1,(12),dchan);
} else
{if((state_val_15400 === (14)))
{var inst_15385 = (state_15399[(8)]);var inst_15390 = cljs.core.apply.call(null,f,inst_15385);var state_15399__$1 = state_15399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15399__$1,(16),out,inst_15390);
} else
{if((state_val_15400 === (16)))
{var inst_15392 = (state_15399[(2)]);var state_15399__$1 = (function (){var statearr_15417 = state_15399;(statearr_15417[(12)] = inst_15392);
return statearr_15417;
})();var statearr_15418_15442 = state_15399__$1;(statearr_15418_15442[(2)] = null);
(statearr_15418_15442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (10)))
{var inst_15367 = (state_15399[(2)]);var inst_15368 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15399__$1 = (function (){var statearr_15419 = state_15399;(statearr_15419[(13)] = inst_15367);
return statearr_15419;
})();var statearr_15420_15443 = state_15399__$1;(statearr_15420_15443[(2)] = inst_15368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15399__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15400 === (8)))
{var inst_15381 = (state_15399[(2)]);var state_15399__$1 = state_15399;var statearr_15421_15444 = state_15399__$1;(statearr_15421_15444[(2)] = inst_15381);
(statearr_15421_15444[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8441__auto__,c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15425[(0)] = state_machine__8442__auto__);
(statearr_15425[(1)] = (1));
return statearr_15425;
});
var state_machine__8442__auto____1 = (function (state_15399){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15399);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15426){if((e15426 instanceof Object))
{var ex__8445__auto__ = e15426;var statearr_15427_15445 = state_15399;(statearr_15427_15445[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15399);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15446 = state_15399;
state_15399 = G__15446;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15399){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8508__auto__ = (function (){var statearr_15428 = f__8507__auto__.call(null);(statearr_15428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___15429);
return statearr_15428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___15429,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___15554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___15554,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___15554,out){
return (function (state_15530){var state_val_15531 = (state_15530[(1)]);if((state_val_15531 === (7)))
{var inst_15509 = (state_15530[(7)]);var inst_15510 = (state_15530[(8)]);var inst_15509__$1 = (state_15530[(2)]);var inst_15510__$1 = cljs.core.nth.call(null,inst_15509__$1,(0),null);var inst_15511 = cljs.core.nth.call(null,inst_15509__$1,(1),null);var inst_15512 = (inst_15510__$1 == null);var state_15530__$1 = (function (){var statearr_15532 = state_15530;(statearr_15532[(7)] = inst_15509__$1);
(statearr_15532[(9)] = inst_15511);
(statearr_15532[(8)] = inst_15510__$1);
return statearr_15532;
})();if(cljs.core.truth_(inst_15512))
{var statearr_15533_15555 = state_15530__$1;(statearr_15533_15555[(1)] = (8));
} else
{var statearr_15534_15556 = state_15530__$1;(statearr_15534_15556[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (1)))
{var inst_15501 = cljs.core.vec.call(null,chs);var inst_15502 = inst_15501;var state_15530__$1 = (function (){var statearr_15535 = state_15530;(statearr_15535[(10)] = inst_15502);
return statearr_15535;
})();var statearr_15536_15557 = state_15530__$1;(statearr_15536_15557[(2)] = null);
(statearr_15536_15557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (4)))
{var inst_15502 = (state_15530[(10)]);var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15530__$1,(7),inst_15502);
} else
{if((state_val_15531 === (6)))
{var inst_15526 = (state_15530[(2)]);var state_15530__$1 = state_15530;var statearr_15537_15558 = state_15530__$1;(statearr_15537_15558[(2)] = inst_15526);
(statearr_15537_15558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (3)))
{var inst_15528 = (state_15530[(2)]);var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15530__$1,inst_15528);
} else
{if((state_val_15531 === (2)))
{var inst_15502 = (state_15530[(10)]);var inst_15504 = cljs.core.count.call(null,inst_15502);var inst_15505 = (inst_15504 > (0));var state_15530__$1 = state_15530;if(cljs.core.truth_(inst_15505))
{var statearr_15539_15559 = state_15530__$1;(statearr_15539_15559[(1)] = (4));
} else
{var statearr_15540_15560 = state_15530__$1;(statearr_15540_15560[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (11)))
{var inst_15502 = (state_15530[(10)]);var inst_15519 = (state_15530[(2)]);var tmp15538 = inst_15502;var inst_15502__$1 = tmp15538;var state_15530__$1 = (function (){var statearr_15541 = state_15530;(statearr_15541[(11)] = inst_15519);
(statearr_15541[(10)] = inst_15502__$1);
return statearr_15541;
})();var statearr_15542_15561 = state_15530__$1;(statearr_15542_15561[(2)] = null);
(statearr_15542_15561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (9)))
{var inst_15510 = (state_15530[(8)]);var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15530__$1,(11),out,inst_15510);
} else
{if((state_val_15531 === (5)))
{var inst_15524 = cljs.core.async.close_BANG_.call(null,out);var state_15530__$1 = state_15530;var statearr_15543_15562 = state_15530__$1;(statearr_15543_15562[(2)] = inst_15524);
(statearr_15543_15562[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (10)))
{var inst_15522 = (state_15530[(2)]);var state_15530__$1 = state_15530;var statearr_15544_15563 = state_15530__$1;(statearr_15544_15563[(2)] = inst_15522);
(statearr_15544_15563[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (8)))
{var inst_15509 = (state_15530[(7)]);var inst_15511 = (state_15530[(9)]);var inst_15510 = (state_15530[(8)]);var inst_15502 = (state_15530[(10)]);var inst_15514 = (function (){var c = inst_15511;var v = inst_15510;var vec__15507 = inst_15509;var cs = inst_15502;return ((function (c,v,vec__15507,cs,inst_15509,inst_15511,inst_15510,inst_15502,state_val_15531,c__8506__auto___15554,out){
return (function (p1__15447_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15447_SHARP_);
});
;})(c,v,vec__15507,cs,inst_15509,inst_15511,inst_15510,inst_15502,state_val_15531,c__8506__auto___15554,out))
})();var inst_15515 = cljs.core.filterv.call(null,inst_15514,inst_15502);var inst_15502__$1 = inst_15515;var state_15530__$1 = (function (){var statearr_15545 = state_15530;(statearr_15545[(10)] = inst_15502__$1);
return statearr_15545;
})();var statearr_15546_15564 = state_15530__$1;(statearr_15546_15564[(2)] = null);
(statearr_15546_15564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___15554,out))
;return ((function (switch__8441__auto__,c__8506__auto___15554,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15550 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15550[(0)] = state_machine__8442__auto__);
(statearr_15550[(1)] = (1));
return statearr_15550;
});
var state_machine__8442__auto____1 = (function (state_15530){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15530);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15551){if((e15551 instanceof Object))
{var ex__8445__auto__ = e15551;var statearr_15552_15565 = state_15530;(statearr_15552_15565[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15566 = state_15530;
state_15530 = G__15566;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15530){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___15554,out))
})();var state__8508__auto__ = (function (){var statearr_15553 = f__8507__auto__.call(null);(statearr_15553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___15554);
return statearr_15553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___15554,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___15659 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___15659,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___15659,out){
return (function (state_15636){var state_val_15637 = (state_15636[(1)]);if((state_val_15637 === (7)))
{var inst_15618 = (state_15636[(7)]);var inst_15618__$1 = (state_15636[(2)]);var inst_15619 = (inst_15618__$1 == null);var inst_15620 = cljs.core.not.call(null,inst_15619);var state_15636__$1 = (function (){var statearr_15638 = state_15636;(statearr_15638[(7)] = inst_15618__$1);
return statearr_15638;
})();if(inst_15620)
{var statearr_15639_15660 = state_15636__$1;(statearr_15639_15660[(1)] = (8));
} else
{var statearr_15640_15661 = state_15636__$1;(statearr_15640_15661[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (1)))
{var inst_15613 = (0);var state_15636__$1 = (function (){var statearr_15641 = state_15636;(statearr_15641[(8)] = inst_15613);
return statearr_15641;
})();var statearr_15642_15662 = state_15636__$1;(statearr_15642_15662[(2)] = null);
(statearr_15642_15662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (4)))
{var state_15636__$1 = state_15636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15636__$1,(7),ch);
} else
{if((state_val_15637 === (6)))
{var inst_15631 = (state_15636[(2)]);var state_15636__$1 = state_15636;var statearr_15643_15663 = state_15636__$1;(statearr_15643_15663[(2)] = inst_15631);
(statearr_15643_15663[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (3)))
{var inst_15633 = (state_15636[(2)]);var inst_15634 = cljs.core.async.close_BANG_.call(null,out);var state_15636__$1 = (function (){var statearr_15644 = state_15636;(statearr_15644[(9)] = inst_15633);
return statearr_15644;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15636__$1,inst_15634);
} else
{if((state_val_15637 === (2)))
{var inst_15613 = (state_15636[(8)]);var inst_15615 = (inst_15613 < n);var state_15636__$1 = state_15636;if(cljs.core.truth_(inst_15615))
{var statearr_15645_15664 = state_15636__$1;(statearr_15645_15664[(1)] = (4));
} else
{var statearr_15646_15665 = state_15636__$1;(statearr_15646_15665[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (11)))
{var inst_15613 = (state_15636[(8)]);var inst_15623 = (state_15636[(2)]);var inst_15624 = (inst_15613 + (1));var inst_15613__$1 = inst_15624;var state_15636__$1 = (function (){var statearr_15647 = state_15636;(statearr_15647[(10)] = inst_15623);
(statearr_15647[(8)] = inst_15613__$1);
return statearr_15647;
})();var statearr_15648_15666 = state_15636__$1;(statearr_15648_15666[(2)] = null);
(statearr_15648_15666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (9)))
{var state_15636__$1 = state_15636;var statearr_15649_15667 = state_15636__$1;(statearr_15649_15667[(2)] = null);
(statearr_15649_15667[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (5)))
{var state_15636__$1 = state_15636;var statearr_15650_15668 = state_15636__$1;(statearr_15650_15668[(2)] = null);
(statearr_15650_15668[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (10)))
{var inst_15628 = (state_15636[(2)]);var state_15636__$1 = state_15636;var statearr_15651_15669 = state_15636__$1;(statearr_15651_15669[(2)] = inst_15628);
(statearr_15651_15669[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15637 === (8)))
{var inst_15618 = (state_15636[(7)]);var state_15636__$1 = state_15636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15636__$1,(11),out,inst_15618);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___15659,out))
;return ((function (switch__8441__auto__,c__8506__auto___15659,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15655 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15655[(0)] = state_machine__8442__auto__);
(statearr_15655[(1)] = (1));
return statearr_15655;
});
var state_machine__8442__auto____1 = (function (state_15636){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15636);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15656){if((e15656 instanceof Object))
{var ex__8445__auto__ = e15656;var statearr_15657_15670 = state_15636;(statearr_15657_15670[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15671 = state_15636;
state_15636 = G__15671;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15636){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___15659,out))
})();var state__8508__auto__ = (function (){var statearr_15658 = f__8507__auto__.call(null);(statearr_15658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___15659);
return statearr_15658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___15659,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15679 = (function (ch,f,map_LT_,meta15680){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15680 = meta15680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15679.cljs$lang$type = true;
cljs.core.async.t15679.cljs$lang$ctorStr = "cljs.core.async/t15679";
cljs.core.async.t15679.cljs$lang$ctorPrWriter = (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t15679");
});
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15682 = (function (fn1,_,meta15680,ch,f,map_LT_,meta15683){
this.fn1 = fn1;
this._ = _;
this.meta15680 = meta15680;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15683 = meta15683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15682.cljs$lang$type = true;
cljs.core.async.t15682.cljs$lang$ctorStr = "cljs.core.async/t15682";
cljs.core.async.t15682.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t15682");
});})(___$1))
;
cljs.core.async.t15682.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15682.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15672_SHARP_){return f1.call(null,(((p1__15672_SHARP_ == null))?null:self__.f.call(null,p1__15672_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15684){var self__ = this;
var _15684__$1 = this;return self__.meta15683;
});})(___$1))
;
cljs.core.async.t15682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15684,meta15683__$1){var self__ = this;
var _15684__$1 = this;return (new cljs.core.async.t15682(self__.fn1,self__._,self__.meta15680,self__.ch,self__.f,self__.map_LT_,meta15683__$1));
});})(___$1))
;
cljs.core.async.__GT_t15682 = ((function (___$1){
return (function __GT_t15682(fn1__$1,___$2,meta15680__$1,ch__$2,f__$2,map_LT___$2,meta15683){return (new cljs.core.async.t15682(fn1__$1,___$2,meta15680__$1,ch__$2,f__$2,map_LT___$2,meta15683));
});})(___$1))
;
}
return (new cljs.core.async.t15682(fn1,___$1,self__.meta15680,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5041__auto__ = ret;if(cljs.core.truth_(and__5041__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5041__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15681){var self__ = this;
var _15681__$1 = this;return self__.meta15680;
});
cljs.core.async.t15679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15681,meta15680__$1){var self__ = this;
var _15681__$1 = this;return (new cljs.core.async.t15679(self__.ch,self__.f,self__.map_LT_,meta15680__$1));
});
cljs.core.async.__GT_t15679 = (function __GT_t15679(ch__$1,f__$1,map_LT___$1,meta15680){return (new cljs.core.async.t15679(ch__$1,f__$1,map_LT___$1,meta15680));
});
}
return (new cljs.core.async.t15679(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15688 = (function (ch,f,map_GT_,meta15689){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15689 = meta15689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15688.cljs$lang$type = true;
cljs.core.async.t15688.cljs$lang$ctorStr = "cljs.core.async/t15688";
cljs.core.async.t15688.cljs$lang$ctorPrWriter = (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t15688");
});
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15690){var self__ = this;
var _15690__$1 = this;return self__.meta15689;
});
cljs.core.async.t15688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15690,meta15689__$1){var self__ = this;
var _15690__$1 = this;return (new cljs.core.async.t15688(self__.ch,self__.f,self__.map_GT_,meta15689__$1));
});
cljs.core.async.__GT_t15688 = (function __GT_t15688(ch__$1,f__$1,map_GT___$1,meta15689){return (new cljs.core.async.t15688(ch__$1,f__$1,map_GT___$1,meta15689));
});
}
return (new cljs.core.async.t15688(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15694 = (function (ch,p,filter_GT_,meta15695){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15695 = meta15695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15694.cljs$lang$type = true;
cljs.core.async.t15694.cljs$lang$ctorStr = "cljs.core.async/t15694";
cljs.core.async.t15694.cljs$lang$ctorPrWriter = (function (this__5620__auto__,writer__5621__auto__,opt__5622__auto__){return cljs.core._write.call(null,writer__5621__auto__,"cljs.core.async/t15694");
});
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15696){var self__ = this;
var _15696__$1 = this;return self__.meta15695;
});
cljs.core.async.t15694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15696,meta15695__$1){var self__ = this;
var _15696__$1 = this;return (new cljs.core.async.t15694(self__.ch,self__.p,self__.filter_GT_,meta15695__$1));
});
cljs.core.async.__GT_t15694 = (function __GT_t15694(ch__$1,p__$1,filter_GT___$1,meta15695){return (new cljs.core.async.t15694(ch__$1,p__$1,filter_GT___$1,meta15695));
});
}
return (new cljs.core.async.t15694(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___15779 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___15779,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___15779,out){
return (function (state_15758){var state_val_15759 = (state_15758[(1)]);if((state_val_15759 === (7)))
{var inst_15754 = (state_15758[(2)]);var state_15758__$1 = state_15758;var statearr_15760_15780 = state_15758__$1;(statearr_15760_15780[(2)] = inst_15754);
(statearr_15760_15780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (1)))
{var state_15758__$1 = state_15758;var statearr_15761_15781 = state_15758__$1;(statearr_15761_15781[(2)] = null);
(statearr_15761_15781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (4)))
{var inst_15740 = (state_15758[(7)]);var inst_15740__$1 = (state_15758[(2)]);var inst_15741 = (inst_15740__$1 == null);var state_15758__$1 = (function (){var statearr_15762 = state_15758;(statearr_15762[(7)] = inst_15740__$1);
return statearr_15762;
})();if(cljs.core.truth_(inst_15741))
{var statearr_15763_15782 = state_15758__$1;(statearr_15763_15782[(1)] = (5));
} else
{var statearr_15764_15783 = state_15758__$1;(statearr_15764_15783[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (6)))
{var inst_15740 = (state_15758[(7)]);var inst_15745 = p.call(null,inst_15740);var state_15758__$1 = state_15758;if(cljs.core.truth_(inst_15745))
{var statearr_15765_15784 = state_15758__$1;(statearr_15765_15784[(1)] = (8));
} else
{var statearr_15766_15785 = state_15758__$1;(statearr_15766_15785[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (3)))
{var inst_15756 = (state_15758[(2)]);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15758__$1,inst_15756);
} else
{if((state_val_15759 === (2)))
{var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15758__$1,(4),ch);
} else
{if((state_val_15759 === (11)))
{var inst_15748 = (state_15758[(2)]);var state_15758__$1 = state_15758;var statearr_15767_15786 = state_15758__$1;(statearr_15767_15786[(2)] = inst_15748);
(statearr_15767_15786[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (9)))
{var state_15758__$1 = state_15758;var statearr_15768_15787 = state_15758__$1;(statearr_15768_15787[(2)] = null);
(statearr_15768_15787[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (5)))
{var inst_15743 = cljs.core.async.close_BANG_.call(null,out);var state_15758__$1 = state_15758;var statearr_15769_15788 = state_15758__$1;(statearr_15769_15788[(2)] = inst_15743);
(statearr_15769_15788[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (10)))
{var inst_15751 = (state_15758[(2)]);var state_15758__$1 = (function (){var statearr_15770 = state_15758;(statearr_15770[(8)] = inst_15751);
return statearr_15770;
})();var statearr_15771_15789 = state_15758__$1;(statearr_15771_15789[(2)] = null);
(statearr_15771_15789[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (8)))
{var inst_15740 = (state_15758[(7)]);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15758__$1,(11),out,inst_15740);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___15779,out))
;return ((function (switch__8441__auto__,c__8506__auto___15779,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15775 = [null,null,null,null,null,null,null,null,null];(statearr_15775[(0)] = state_machine__8442__auto__);
(statearr_15775[(1)] = (1));
return statearr_15775;
});
var state_machine__8442__auto____1 = (function (state_15758){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15758);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object))
{var ex__8445__auto__ = e15776;var statearr_15777_15790 = state_15758;(statearr_15777_15790[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15776;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15791 = state_15758;
state_15758 = G__15791;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15758){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___15779,out))
})();var state__8508__auto__ = (function (){var statearr_15778 = f__8507__auto__.call(null);(statearr_15778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___15779);
return statearr_15778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___15779,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8506__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto__){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto__){
return (function (state_15957){var state_val_15958 = (state_15957[(1)]);if((state_val_15958 === (7)))
{var inst_15953 = (state_15957[(2)]);var state_15957__$1 = state_15957;var statearr_15959_16000 = state_15957__$1;(statearr_15959_16000[(2)] = inst_15953);
(statearr_15959_16000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (20)))
{var inst_15923 = (state_15957[(7)]);var inst_15934 = (state_15957[(2)]);var inst_15935 = cljs.core.next.call(null,inst_15923);var inst_15909 = inst_15935;var inst_15910 = null;var inst_15911 = (0);var inst_15912 = (0);var state_15957__$1 = (function (){var statearr_15960 = state_15957;(statearr_15960[(8)] = inst_15910);
(statearr_15960[(9)] = inst_15909);
(statearr_15960[(10)] = inst_15912);
(statearr_15960[(11)] = inst_15911);
(statearr_15960[(12)] = inst_15934);
return statearr_15960;
})();var statearr_15961_16001 = state_15957__$1;(statearr_15961_16001[(2)] = null);
(statearr_15961_16001[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (1)))
{var state_15957__$1 = state_15957;var statearr_15962_16002 = state_15957__$1;(statearr_15962_16002[(2)] = null);
(statearr_15962_16002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (4)))
{var inst_15898 = (state_15957[(13)]);var inst_15898__$1 = (state_15957[(2)]);var inst_15899 = (inst_15898__$1 == null);var state_15957__$1 = (function (){var statearr_15963 = state_15957;(statearr_15963[(13)] = inst_15898__$1);
return statearr_15963;
})();if(cljs.core.truth_(inst_15899))
{var statearr_15964_16003 = state_15957__$1;(statearr_15964_16003[(1)] = (5));
} else
{var statearr_15965_16004 = state_15957__$1;(statearr_15965_16004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (15)))
{var state_15957__$1 = state_15957;var statearr_15969_16005 = state_15957__$1;(statearr_15969_16005[(2)] = null);
(statearr_15969_16005[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (21)))
{var state_15957__$1 = state_15957;var statearr_15970_16006 = state_15957__$1;(statearr_15970_16006[(2)] = null);
(statearr_15970_16006[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (13)))
{var inst_15910 = (state_15957[(8)]);var inst_15909 = (state_15957[(9)]);var inst_15912 = (state_15957[(10)]);var inst_15911 = (state_15957[(11)]);var inst_15919 = (state_15957[(2)]);var inst_15920 = (inst_15912 + (1));var tmp15966 = inst_15910;var tmp15967 = inst_15909;var tmp15968 = inst_15911;var inst_15909__$1 = tmp15967;var inst_15910__$1 = tmp15966;var inst_15911__$1 = tmp15968;var inst_15912__$1 = inst_15920;var state_15957__$1 = (function (){var statearr_15971 = state_15957;(statearr_15971[(14)] = inst_15919);
(statearr_15971[(8)] = inst_15910__$1);
(statearr_15971[(9)] = inst_15909__$1);
(statearr_15971[(10)] = inst_15912__$1);
(statearr_15971[(11)] = inst_15911__$1);
return statearr_15971;
})();var statearr_15972_16007 = state_15957__$1;(statearr_15972_16007[(2)] = null);
(statearr_15972_16007[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (22)))
{var state_15957__$1 = state_15957;var statearr_15973_16008 = state_15957__$1;(statearr_15973_16008[(2)] = null);
(statearr_15973_16008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (6)))
{var inst_15898 = (state_15957[(13)]);var inst_15907 = f.call(null,inst_15898);var inst_15908 = cljs.core.seq.call(null,inst_15907);var inst_15909 = inst_15908;var inst_15910 = null;var inst_15911 = (0);var inst_15912 = (0);var state_15957__$1 = (function (){var statearr_15974 = state_15957;(statearr_15974[(8)] = inst_15910);
(statearr_15974[(9)] = inst_15909);
(statearr_15974[(10)] = inst_15912);
(statearr_15974[(11)] = inst_15911);
return statearr_15974;
})();var statearr_15975_16009 = state_15957__$1;(statearr_15975_16009[(2)] = null);
(statearr_15975_16009[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (17)))
{var inst_15923 = (state_15957[(7)]);var inst_15927 = cljs.core.chunk_first.call(null,inst_15923);var inst_15928 = cljs.core.chunk_rest.call(null,inst_15923);var inst_15929 = cljs.core.count.call(null,inst_15927);var inst_15909 = inst_15928;var inst_15910 = inst_15927;var inst_15911 = inst_15929;var inst_15912 = (0);var state_15957__$1 = (function (){var statearr_15976 = state_15957;(statearr_15976[(8)] = inst_15910);
(statearr_15976[(9)] = inst_15909);
(statearr_15976[(10)] = inst_15912);
(statearr_15976[(11)] = inst_15911);
return statearr_15976;
})();var statearr_15977_16010 = state_15957__$1;(statearr_15977_16010[(2)] = null);
(statearr_15977_16010[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (3)))
{var inst_15955 = (state_15957[(2)]);var state_15957__$1 = state_15957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15957__$1,inst_15955);
} else
{if((state_val_15958 === (12)))
{var inst_15943 = (state_15957[(2)]);var state_15957__$1 = state_15957;var statearr_15978_16011 = state_15957__$1;(statearr_15978_16011[(2)] = inst_15943);
(statearr_15978_16011[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (2)))
{var state_15957__$1 = state_15957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15957__$1,(4),in$);
} else
{if((state_val_15958 === (23)))
{var inst_15951 = (state_15957[(2)]);var state_15957__$1 = state_15957;var statearr_15979_16012 = state_15957__$1;(statearr_15979_16012[(2)] = inst_15951);
(statearr_15979_16012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (19)))
{var inst_15938 = (state_15957[(2)]);var state_15957__$1 = state_15957;var statearr_15980_16013 = state_15957__$1;(statearr_15980_16013[(2)] = inst_15938);
(statearr_15980_16013[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (11)))
{var inst_15909 = (state_15957[(9)]);var inst_15923 = (state_15957[(7)]);var inst_15923__$1 = cljs.core.seq.call(null,inst_15909);var state_15957__$1 = (function (){var statearr_15981 = state_15957;(statearr_15981[(7)] = inst_15923__$1);
return statearr_15981;
})();if(inst_15923__$1)
{var statearr_15982_16014 = state_15957__$1;(statearr_15982_16014[(1)] = (14));
} else
{var statearr_15983_16015 = state_15957__$1;(statearr_15983_16015[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (9)))
{var inst_15945 = (state_15957[(2)]);var inst_15946 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15957__$1 = (function (){var statearr_15984 = state_15957;(statearr_15984[(15)] = inst_15945);
return statearr_15984;
})();if(cljs.core.truth_(inst_15946))
{var statearr_15985_16016 = state_15957__$1;(statearr_15985_16016[(1)] = (21));
} else
{var statearr_15986_16017 = state_15957__$1;(statearr_15986_16017[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (5)))
{var inst_15901 = cljs.core.async.close_BANG_.call(null,out);var state_15957__$1 = state_15957;var statearr_15987_16018 = state_15957__$1;(statearr_15987_16018[(2)] = inst_15901);
(statearr_15987_16018[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (14)))
{var inst_15923 = (state_15957[(7)]);var inst_15925 = cljs.core.chunked_seq_QMARK_.call(null,inst_15923);var state_15957__$1 = state_15957;if(inst_15925)
{var statearr_15988_16019 = state_15957__$1;(statearr_15988_16019[(1)] = (17));
} else
{var statearr_15989_16020 = state_15957__$1;(statearr_15989_16020[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (16)))
{var inst_15941 = (state_15957[(2)]);var state_15957__$1 = state_15957;var statearr_15990_16021 = state_15957__$1;(statearr_15990_16021[(2)] = inst_15941);
(statearr_15990_16021[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15958 === (10)))
{var inst_15910 = (state_15957[(8)]);var inst_15912 = (state_15957[(10)]);var inst_15917 = cljs.core._nth.call(null,inst_15910,inst_15912);var state_15957__$1 = state_15957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15957__$1,(13),out,inst_15917);
} else
{if((state_val_15958 === (18)))
{var inst_15923 = (state_15957[(7)]);var inst_15932 = cljs.core.first.call(null,inst_15923);var state_15957__$1 = state_15957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15957__$1,(20),out,inst_15932);
} else
{if((state_val_15958 === (8)))
{var inst_15912 = (state_15957[(10)]);var inst_15911 = (state_15957[(11)]);var inst_15914 = (inst_15912 < inst_15911);var inst_15915 = inst_15914;var state_15957__$1 = state_15957;if(cljs.core.truth_(inst_15915))
{var statearr_15991_16022 = state_15957__$1;(statearr_15991_16022[(1)] = (10));
} else
{var statearr_15992_16023 = state_15957__$1;(statearr_15992_16023[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto__))
;return ((function (switch__8441__auto__,c__8506__auto__){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_15996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15996[(0)] = state_machine__8442__auto__);
(statearr_15996[(1)] = (1));
return statearr_15996;
});
var state_machine__8442__auto____1 = (function (state_15957){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_15957);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e15997){if((e15997 instanceof Object))
{var ex__8445__auto__ = e15997;var statearr_15998_16024 = state_15957;(statearr_15998_16024[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16025 = state_15957;
state_15957 = G__16025;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_15957){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_15957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto__))
})();var state__8508__auto__ = (function (){var statearr_15999 = f__8507__auto__.call(null);(statearr_15999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto__);
return statearr_15999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto__))
);
return c__8506__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___16122 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___16122,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___16122,out){
return (function (state_16097){var state_val_16098 = (state_16097[(1)]);if((state_val_16098 === (7)))
{var inst_16092 = (state_16097[(2)]);var state_16097__$1 = state_16097;var statearr_16099_16123 = state_16097__$1;(statearr_16099_16123[(2)] = inst_16092);
(statearr_16099_16123[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (1)))
{var inst_16074 = null;var state_16097__$1 = (function (){var statearr_16100 = state_16097;(statearr_16100[(7)] = inst_16074);
return statearr_16100;
})();var statearr_16101_16124 = state_16097__$1;(statearr_16101_16124[(2)] = null);
(statearr_16101_16124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (4)))
{var inst_16077 = (state_16097[(8)]);var inst_16077__$1 = (state_16097[(2)]);var inst_16078 = (inst_16077__$1 == null);var inst_16079 = cljs.core.not.call(null,inst_16078);var state_16097__$1 = (function (){var statearr_16102 = state_16097;(statearr_16102[(8)] = inst_16077__$1);
return statearr_16102;
})();if(inst_16079)
{var statearr_16103_16125 = state_16097__$1;(statearr_16103_16125[(1)] = (5));
} else
{var statearr_16104_16126 = state_16097__$1;(statearr_16104_16126[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (6)))
{var state_16097__$1 = state_16097;var statearr_16105_16127 = state_16097__$1;(statearr_16105_16127[(2)] = null);
(statearr_16105_16127[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (3)))
{var inst_16094 = (state_16097[(2)]);var inst_16095 = cljs.core.async.close_BANG_.call(null,out);var state_16097__$1 = (function (){var statearr_16106 = state_16097;(statearr_16106[(9)] = inst_16094);
return statearr_16106;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16097__$1,inst_16095);
} else
{if((state_val_16098 === (2)))
{var state_16097__$1 = state_16097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16097__$1,(4),ch);
} else
{if((state_val_16098 === (11)))
{var inst_16077 = (state_16097[(8)]);var inst_16086 = (state_16097[(2)]);var inst_16074 = inst_16077;var state_16097__$1 = (function (){var statearr_16107 = state_16097;(statearr_16107[(10)] = inst_16086);
(statearr_16107[(7)] = inst_16074);
return statearr_16107;
})();var statearr_16108_16128 = state_16097__$1;(statearr_16108_16128[(2)] = null);
(statearr_16108_16128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (9)))
{var inst_16077 = (state_16097[(8)]);var state_16097__$1 = state_16097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16097__$1,(11),out,inst_16077);
} else
{if((state_val_16098 === (5)))
{var inst_16077 = (state_16097[(8)]);var inst_16074 = (state_16097[(7)]);var inst_16081 = cljs.core._EQ_.call(null,inst_16077,inst_16074);var state_16097__$1 = state_16097;if(inst_16081)
{var statearr_16110_16129 = state_16097__$1;(statearr_16110_16129[(1)] = (8));
} else
{var statearr_16111_16130 = state_16097__$1;(statearr_16111_16130[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (10)))
{var inst_16089 = (state_16097[(2)]);var state_16097__$1 = state_16097;var statearr_16112_16131 = state_16097__$1;(statearr_16112_16131[(2)] = inst_16089);
(statearr_16112_16131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16098 === (8)))
{var inst_16074 = (state_16097[(7)]);var tmp16109 = inst_16074;var inst_16074__$1 = tmp16109;var state_16097__$1 = (function (){var statearr_16113 = state_16097;(statearr_16113[(7)] = inst_16074__$1);
return statearr_16113;
})();var statearr_16114_16132 = state_16097__$1;(statearr_16114_16132[(2)] = null);
(statearr_16114_16132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___16122,out))
;return ((function (switch__8441__auto__,c__8506__auto___16122,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_16118 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16118[(0)] = state_machine__8442__auto__);
(statearr_16118[(1)] = (1));
return statearr_16118;
});
var state_machine__8442__auto____1 = (function (state_16097){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_16097);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e16119){if((e16119 instanceof Object))
{var ex__8445__auto__ = e16119;var statearr_16120_16133 = state_16097;(statearr_16120_16133[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16119;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16134 = state_16097;
state_16097 = G__16134;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_16097){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_16097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___16122,out))
})();var state__8508__auto__ = (function (){var statearr_16121 = f__8507__auto__.call(null);(statearr_16121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___16122);
return statearr_16121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___16122,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___16269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___16269,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___16269,out){
return (function (state_16239){var state_val_16240 = (state_16239[(1)]);if((state_val_16240 === (7)))
{var inst_16235 = (state_16239[(2)]);var state_16239__$1 = state_16239;var statearr_16241_16270 = state_16239__$1;(statearr_16241_16270[(2)] = inst_16235);
(statearr_16241_16270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (1)))
{var inst_16202 = (new Array(n));var inst_16203 = inst_16202;var inst_16204 = (0);var state_16239__$1 = (function (){var statearr_16242 = state_16239;(statearr_16242[(7)] = inst_16204);
(statearr_16242[(8)] = inst_16203);
return statearr_16242;
})();var statearr_16243_16271 = state_16239__$1;(statearr_16243_16271[(2)] = null);
(statearr_16243_16271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (4)))
{var inst_16207 = (state_16239[(9)]);var inst_16207__$1 = (state_16239[(2)]);var inst_16208 = (inst_16207__$1 == null);var inst_16209 = cljs.core.not.call(null,inst_16208);var state_16239__$1 = (function (){var statearr_16244 = state_16239;(statearr_16244[(9)] = inst_16207__$1);
return statearr_16244;
})();if(inst_16209)
{var statearr_16245_16272 = state_16239__$1;(statearr_16245_16272[(1)] = (5));
} else
{var statearr_16246_16273 = state_16239__$1;(statearr_16246_16273[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (15)))
{var inst_16229 = (state_16239[(2)]);var state_16239__$1 = state_16239;var statearr_16247_16274 = state_16239__$1;(statearr_16247_16274[(2)] = inst_16229);
(statearr_16247_16274[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (13)))
{var state_16239__$1 = state_16239;var statearr_16248_16275 = state_16239__$1;(statearr_16248_16275[(2)] = null);
(statearr_16248_16275[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (6)))
{var inst_16204 = (state_16239[(7)]);var inst_16225 = (inst_16204 > (0));var state_16239__$1 = state_16239;if(cljs.core.truth_(inst_16225))
{var statearr_16249_16276 = state_16239__$1;(statearr_16249_16276[(1)] = (12));
} else
{var statearr_16250_16277 = state_16239__$1;(statearr_16250_16277[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (3)))
{var inst_16237 = (state_16239[(2)]);var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16239__$1,inst_16237);
} else
{if((state_val_16240 === (12)))
{var inst_16203 = (state_16239[(8)]);var inst_16227 = cljs.core.vec.call(null,inst_16203);var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16239__$1,(15),out,inst_16227);
} else
{if((state_val_16240 === (2)))
{var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16239__$1,(4),ch);
} else
{if((state_val_16240 === (11)))
{var inst_16219 = (state_16239[(2)]);var inst_16220 = (new Array(n));var inst_16203 = inst_16220;var inst_16204 = (0);var state_16239__$1 = (function (){var statearr_16251 = state_16239;(statearr_16251[(10)] = inst_16219);
(statearr_16251[(7)] = inst_16204);
(statearr_16251[(8)] = inst_16203);
return statearr_16251;
})();var statearr_16252_16278 = state_16239__$1;(statearr_16252_16278[(2)] = null);
(statearr_16252_16278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (9)))
{var inst_16203 = (state_16239[(8)]);var inst_16217 = cljs.core.vec.call(null,inst_16203);var state_16239__$1 = state_16239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16239__$1,(11),out,inst_16217);
} else
{if((state_val_16240 === (5)))
{var inst_16212 = (state_16239[(11)]);var inst_16204 = (state_16239[(7)]);var inst_16207 = (state_16239[(9)]);var inst_16203 = (state_16239[(8)]);var inst_16211 = (inst_16203[inst_16204] = inst_16207);var inst_16212__$1 = (inst_16204 + (1));var inst_16213 = (inst_16212__$1 < n);var state_16239__$1 = (function (){var statearr_16253 = state_16239;(statearr_16253[(12)] = inst_16211);
(statearr_16253[(11)] = inst_16212__$1);
return statearr_16253;
})();if(cljs.core.truth_(inst_16213))
{var statearr_16254_16279 = state_16239__$1;(statearr_16254_16279[(1)] = (8));
} else
{var statearr_16255_16280 = state_16239__$1;(statearr_16255_16280[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (14)))
{var inst_16232 = (state_16239[(2)]);var inst_16233 = cljs.core.async.close_BANG_.call(null,out);var state_16239__$1 = (function (){var statearr_16257 = state_16239;(statearr_16257[(13)] = inst_16232);
return statearr_16257;
})();var statearr_16258_16281 = state_16239__$1;(statearr_16258_16281[(2)] = inst_16233);
(statearr_16258_16281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (10)))
{var inst_16223 = (state_16239[(2)]);var state_16239__$1 = state_16239;var statearr_16259_16282 = state_16239__$1;(statearr_16259_16282[(2)] = inst_16223);
(statearr_16259_16282[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16240 === (8)))
{var inst_16212 = (state_16239[(11)]);var inst_16203 = (state_16239[(8)]);var tmp16256 = inst_16203;var inst_16203__$1 = tmp16256;var inst_16204 = inst_16212;var state_16239__$1 = (function (){var statearr_16260 = state_16239;(statearr_16260[(7)] = inst_16204);
(statearr_16260[(8)] = inst_16203__$1);
return statearr_16260;
})();var statearr_16261_16283 = state_16239__$1;(statearr_16261_16283[(2)] = null);
(statearr_16261_16283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___16269,out))
;return ((function (switch__8441__auto__,c__8506__auto___16269,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_16265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16265[(0)] = state_machine__8442__auto__);
(statearr_16265[(1)] = (1));
return statearr_16265;
});
var state_machine__8442__auto____1 = (function (state_16239){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_16239);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e16266){if((e16266 instanceof Object))
{var ex__8445__auto__ = e16266;var statearr_16267_16284 = state_16239;(statearr_16267_16284[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16266;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16285 = state_16239;
state_16239 = G__16285;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_16239){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_16239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___16269,out))
})();var state__8508__auto__ = (function (){var statearr_16268 = f__8507__auto__.call(null);(statearr_16268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___16269);
return statearr_16268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___16269,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8506__auto___16428 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8506__auto___16428,out){
return (function (){var f__8507__auto__ = (function (){var switch__8441__auto__ = ((function (c__8506__auto___16428,out){
return (function (state_16398){var state_val_16399 = (state_16398[(1)]);if((state_val_16399 === (7)))
{var inst_16394 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16400_16429 = state_16398__$1;(statearr_16400_16429[(2)] = inst_16394);
(statearr_16400_16429[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (1)))
{var inst_16357 = [];var inst_16358 = inst_16357;var inst_16359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16398__$1 = (function (){var statearr_16401 = state_16398;(statearr_16401[(7)] = inst_16359);
(statearr_16401[(8)] = inst_16358);
return statearr_16401;
})();var statearr_16402_16430 = state_16398__$1;(statearr_16402_16430[(2)] = null);
(statearr_16402_16430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (4)))
{var inst_16362 = (state_16398[(9)]);var inst_16362__$1 = (state_16398[(2)]);var inst_16363 = (inst_16362__$1 == null);var inst_16364 = cljs.core.not.call(null,inst_16363);var state_16398__$1 = (function (){var statearr_16403 = state_16398;(statearr_16403[(9)] = inst_16362__$1);
return statearr_16403;
})();if(inst_16364)
{var statearr_16404_16431 = state_16398__$1;(statearr_16404_16431[(1)] = (5));
} else
{var statearr_16405_16432 = state_16398__$1;(statearr_16405_16432[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (15)))
{var inst_16388 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16406_16433 = state_16398__$1;(statearr_16406_16433[(2)] = inst_16388);
(statearr_16406_16433[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (13)))
{var state_16398__$1 = state_16398;var statearr_16407_16434 = state_16398__$1;(statearr_16407_16434[(2)] = null);
(statearr_16407_16434[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (6)))
{var inst_16358 = (state_16398[(8)]);var inst_16383 = inst_16358.length;var inst_16384 = (inst_16383 > (0));var state_16398__$1 = state_16398;if(cljs.core.truth_(inst_16384))
{var statearr_16408_16435 = state_16398__$1;(statearr_16408_16435[(1)] = (12));
} else
{var statearr_16409_16436 = state_16398__$1;(statearr_16409_16436[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (3)))
{var inst_16396 = (state_16398[(2)]);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16398__$1,inst_16396);
} else
{if((state_val_16399 === (12)))
{var inst_16358 = (state_16398[(8)]);var inst_16386 = cljs.core.vec.call(null,inst_16358);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16398__$1,(15),out,inst_16386);
} else
{if((state_val_16399 === (2)))
{var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,(4),ch);
} else
{if((state_val_16399 === (11)))
{var inst_16366 = (state_16398[(10)]);var inst_16362 = (state_16398[(9)]);var inst_16376 = (state_16398[(2)]);var inst_16377 = [];var inst_16378 = inst_16377.push(inst_16362);var inst_16358 = inst_16377;var inst_16359 = inst_16366;var state_16398__$1 = (function (){var statearr_16410 = state_16398;(statearr_16410[(7)] = inst_16359);
(statearr_16410[(8)] = inst_16358);
(statearr_16410[(11)] = inst_16376);
(statearr_16410[(12)] = inst_16378);
return statearr_16410;
})();var statearr_16411_16437 = state_16398__$1;(statearr_16411_16437[(2)] = null);
(statearr_16411_16437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (9)))
{var inst_16358 = (state_16398[(8)]);var inst_16374 = cljs.core.vec.call(null,inst_16358);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16398__$1,(11),out,inst_16374);
} else
{if((state_val_16399 === (5)))
{var inst_16359 = (state_16398[(7)]);var inst_16366 = (state_16398[(10)]);var inst_16362 = (state_16398[(9)]);var inst_16366__$1 = f.call(null,inst_16362);var inst_16367 = cljs.core._EQ_.call(null,inst_16366__$1,inst_16359);var inst_16368 = cljs.core.keyword_identical_QMARK_.call(null,inst_16359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16369 = (inst_16367) || (inst_16368);var state_16398__$1 = (function (){var statearr_16412 = state_16398;(statearr_16412[(10)] = inst_16366__$1);
return statearr_16412;
})();if(cljs.core.truth_(inst_16369))
{var statearr_16413_16438 = state_16398__$1;(statearr_16413_16438[(1)] = (8));
} else
{var statearr_16414_16439 = state_16398__$1;(statearr_16414_16439[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (14)))
{var inst_16391 = (state_16398[(2)]);var inst_16392 = cljs.core.async.close_BANG_.call(null,out);var state_16398__$1 = (function (){var statearr_16416 = state_16398;(statearr_16416[(13)] = inst_16391);
return statearr_16416;
})();var statearr_16417_16440 = state_16398__$1;(statearr_16417_16440[(2)] = inst_16392);
(statearr_16417_16440[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (10)))
{var inst_16381 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16418_16441 = state_16398__$1;(statearr_16418_16441[(2)] = inst_16381);
(statearr_16418_16441[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (8)))
{var inst_16366 = (state_16398[(10)]);var inst_16358 = (state_16398[(8)]);var inst_16362 = (state_16398[(9)]);var inst_16371 = inst_16358.push(inst_16362);var tmp16415 = inst_16358;var inst_16358__$1 = tmp16415;var inst_16359 = inst_16366;var state_16398__$1 = (function (){var statearr_16419 = state_16398;(statearr_16419[(7)] = inst_16359);
(statearr_16419[(8)] = inst_16358__$1);
(statearr_16419[(14)] = inst_16371);
return statearr_16419;
})();var statearr_16420_16442 = state_16398__$1;(statearr_16420_16442[(2)] = null);
(statearr_16420_16442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8506__auto___16428,out))
;return ((function (switch__8441__auto__,c__8506__auto___16428,out){
return (function() {
var state_machine__8442__auto__ = null;
var state_machine__8442__auto____0 = (function (){var statearr_16424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16424[(0)] = state_machine__8442__auto__);
(statearr_16424[(1)] = (1));
return statearr_16424;
});
var state_machine__8442__auto____1 = (function (state_16398){while(true){
var ret_value__8443__auto__ = (function (){try{while(true){
var result__8444__auto__ = switch__8441__auto__.call(null,state_16398);if(cljs.core.keyword_identical_QMARK_.call(null,result__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8444__auto__;
}
break;
}
}catch (e16425){if((e16425 instanceof Object))
{var ex__8445__auto__ = e16425;var statearr_16426_16443 = state_16398;(statearr_16426_16443[(5)] = ex__8445__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16425;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16444 = state_16398;
state_16398 = G__16444;
continue;
}
} else
{return ret_value__8443__auto__;
}
break;
}
});
state_machine__8442__auto__ = function(state_16398){
switch(arguments.length){
case 0:
return state_machine__8442__auto____0.call(this);
case 1:
return state_machine__8442__auto____1.call(this,state_16398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8442__auto____0;
state_machine__8442__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8442__auto____1;
return state_machine__8442__auto__;
})()
;})(switch__8441__auto__,c__8506__auto___16428,out))
})();var state__8508__auto__ = (function (){var statearr_16427 = f__8507__auto__.call(null);(statearr_16427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8506__auto___16428);
return statearr_16427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8508__auto__);
});})(c__8506__auto___16428,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map