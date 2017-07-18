// Compiled by ClojureScript 1.9.671 {}
goog.provide('counters.ui.counter');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
counters.ui.counter.make_counter = (function counters$ui$counter$make_counter(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
});
counters.ui.counter.inc_counter_BANG_ = (function counters$ui$counter$inc_counter_BANG_(c,id){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7963__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("counter","inc!","counter/inc!",357910369,null)),(function (){var x__7963__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7963__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7963__auto__);
})())))));
});
counters.ui.counter.reset_counter_BANG_ = (function counters$ui$counter$reset_counter_BANG_(c,id){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7963__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("counter","reset!","counter/reset!",1150569580,null)),(function (){var x__7963__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7963__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7963__auto__);
})())))));
});
counters.ui.counter.color_class = (function counters$ui$counter$color_class(id){
var n = ((typeof id === 'number')?id:(5));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,n,(6)))].join('');
});
/**
 * @constructor
 */
counters.ui.counter.Counter = (function counters$ui$counter$Counter(){
var this__12481__auto__ = this;
React.Component.apply(this__12481__auto__,arguments);

if(!((this__12481__auto__.initLocalState == null))){
this__12481__auto__.state = this__12481__auto__.initLocalState();
} else {
this__12481__auto__.state = {};
}

return this__12481__auto__;
});

counters.ui.counter.Counter.prototype = goog.object.clone(React.Component.prototype);

var x14175_14189 = counters.ui.counter.Counter.prototype;
x14175_14189.componentWillUpdate = ((function (x14175_14189){
return (function (next_props__12369__auto__,next_state__12370__auto__){
var this__12368__auto__ = this;
if(((!((this__12368__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__12368__auto__.om$next$Ident$)))?true:false):false)){
var ident__12372__auto___14190 = om.next.ident.call(null,this__12368__auto__,om.next.props.call(null,this__12368__auto__));
var next_ident__12373__auto___14191 = om.next.ident.call(null,this__12368__auto__,om.next._next_props.call(null,next_props__12369__auto__,this__12368__auto__));
if(cljs.core.not_EQ_.call(null,ident__12372__auto___14190,next_ident__12373__auto___14191)){
var idxr__12374__auto___14192 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__12374__auto___14192 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__12374__auto___14192),((function (idxr__12374__auto___14192,ident__12372__auto___14190,next_ident__12373__auto___14191,this__12368__auto__,x14175_14189){
return (function (indexes__12375__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__12375__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__12372__auto___14190], null),cljs.core.disj,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__12373__auto___14191], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12368__auto__);
});})(idxr__12374__auto___14192,ident__12372__auto___14190,next_ident__12373__auto___14191,this__12368__auto__,x14175_14189))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__12368__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12368__auto__);
});})(x14175_14189))
;

x14175_14189.shouldComponentUpdate = ((function (x14175_14189){
return (function (next_props__12369__auto__,next_state__12370__auto__){
var this__12368__auto__ = this;
var next_children__12371__auto__ = next_props__12369__auto__.children;
var next_props__12369__auto____$1 = goog.object.get(next_props__12369__auto__,"omcljs$value");
var next_props__12369__auto____$2 = (function (){var G__14177 = next_props__12369__auto____$1;
if((next_props__12369__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__14177);
} else {
return G__14177;
}
})();
var or__7120__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12368__auto__),next_props__12369__auto____$2);
if(or__7120__auto__){
return or__7120__auto__;
} else {
var or__7120__auto____$1 = (function (){var and__7108__auto__ = this__12368__auto__.state;
if(cljs.core.truth_(and__7108__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12368__auto__.state,"omcljs$state"),goog.object.get(next_state__12370__auto__,"omcljs$state"));
} else {
return and__7108__auto__;
}
})();
if(cljs.core.truth_(or__7120__auto____$1)){
return or__7120__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__12368__auto__.props.children,next_children__12371__auto__);
}
}
});})(x14175_14189))
;

x14175_14189.componentWillUnmount = ((function (x14175_14189){
return (function (){
var this__12368__auto__ = this;
var r__12379__auto__ = om.next.get_reconciler.call(null,this__12368__auto__);
var cfg__12380__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12379__auto__);
var st__12381__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12380__auto__);
var indexer__12378__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12380__auto__);
if(cljs.core.truth_((function (){var and__7108__auto__ = !((st__12381__auto__ == null));
if(and__7108__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__12381__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__12368__auto__], null));
} else {
return and__7108__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__12381__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12368__auto__);
} else {
}

if((indexer__12378__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12378__auto__,this__12368__auto__);
}
});})(x14175_14189))
;

x14175_14189.componentDidUpdate = ((function (x14175_14189){
return (function (prev_props__12376__auto__,prev_state__12377__auto__){
var this__12368__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12368__auto__);
});})(x14175_14189))
;

x14175_14189.isMounted = ((function (x14175_14189){
return (function (){
var this__12368__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12368__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14175_14189))
;

x14175_14189.componentWillMount = ((function (x14175_14189){
return (function (){
var this__12368__auto__ = this;
var indexer__12378__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12378__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12378__auto__,this__12368__auto__);
}
});})(x14175_14189))
;

x14175_14189.render = ((function (x14175_14189){
return (function (){
var this__12367__auto__ = this;
var this$ = this__12367__auto__;
var _STAR_reconciler_STAR_14178 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14179 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14180 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14181 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14182 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__12367__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__12367__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__12367__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__12367__auto__);

om.next._STAR_parent_STAR_ = this__12367__auto__;

try{var map__14183 = om.next.props.call(null,this$);
var map__14183__$1 = ((((!((map__14183 == null)))?((((map__14183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14183):map__14183);
var id = cljs.core.get.call(null,map__14183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var count = cljs.core.get.call(null,map__14183__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var map__14184 = om.next.get_computed.call(null,this$);
var map__14184__$1 = ((((!((map__14184 == null)))?((((map__14184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14184):map__14184);
var target = cljs.core.get.call(null,map__14184__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target__$1 = (function (){var or__7120__auto__ = target;
if(cljs.core.truth_(or__7120__auto__)){
return or__7120__auto__;
} else {
return this$;
}
})();
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["counter",counters.ui.counter.color_class.call(null,id)], null))}),React.createElement("h4",null,"Counter id: ",sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))),React.createElement("h2",null,"The current count is: ",sablono.interpreter.interpret.call(null,count),"."),React.createElement("button",({"onClick": ((function (map__14183,map__14183__$1,id,count,map__14184,map__14184__$1,target,target__$1,_STAR_reconciler_STAR_14178,_STAR_depth_STAR_14179,_STAR_shared_STAR_14180,_STAR_instrument_STAR_14181,_STAR_parent_STAR_14182,this$,this__12367__auto__,x14175_14189){
return (function (){
return counters.ui.counter.inc_counter_BANG_.call(null,target__$1,id);
});})(map__14183,map__14183__$1,id,count,map__14184,map__14184__$1,target,target__$1,_STAR_reconciler_STAR_14178,_STAR_depth_STAR_14179,_STAR_shared_STAR_14180,_STAR_instrument_STAR_14181,_STAR_parent_STAR_14182,this$,this__12367__auto__,x14175_14189))
}),"Increment it!"),React.createElement("button",({"onClick": ((function (map__14183,map__14183__$1,id,count,map__14184,map__14184__$1,target,target__$1,_STAR_reconciler_STAR_14178,_STAR_depth_STAR_14179,_STAR_shared_STAR_14180,_STAR_instrument_STAR_14181,_STAR_parent_STAR_14182,this$,this__12367__auto__,x14175_14189){
return (function (){
return counters.ui.counter.reset_counter_BANG_.call(null,target__$1,id);
});})(map__14183,map__14183__$1,id,count,map__14184,map__14184__$1,target,target__$1,_STAR_reconciler_STAR_14178,_STAR_depth_STAR_14179,_STAR_shared_STAR_14180,_STAR_instrument_STAR_14181,_STAR_parent_STAR_14182,this$,this__12367__auto__,x14175_14189))
}),"Reset"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14182;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14181;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14180;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14179;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14178;
}});})(x14175_14189))
;


counters.ui.counter.Counter.prototype.constructor = counters.ui.counter.Counter;

counters.ui.counter.Counter.prototype.constructor.displayName = "counters.ui.counter/Counter";

counters.ui.counter.Counter.prototype.om$isComponent = true;

var x14187_14193 = counters.ui.counter.Counter;
/** @nocollapse */
x14187_14193.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x14187_14193.om$next$Ident$ident$arity$2 = ((function (x14187_14193){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14187_14193))
;

/** @nocollapse */
x14187_14193.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x14187_14193.om$next$IQuery$query$arity$1 = ((function (x14187_14193){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x14187_14193))
;


var x14188_14194 = counters.ui.counter.Counter.prototype;

x14188_14194.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x14188_14194.om$next$Ident$ident$arity$2 = ((function (x14188_14194){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14188_14194))
;


x14188_14194.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x14188_14194.om$next$IQuery$query$arity$1 = ((function (x14188_14194){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x14188_14194))
;


counters.ui.counter.Counter.cljs$lang$type = true;

counters.ui.counter.Counter.cljs$lang$ctorStr = "counters.ui.counter/Counter";

counters.ui.counter.Counter.cljs$lang$ctorPrWriter = (function (this__12484__auto__,writer__12485__auto__,opt__12486__auto__){
return cljs.core._write.call(null,writer__12485__auto__,"counters.ui.counter/Counter");
});
counters.ui.counter.counter = om.next.factory.call(null,counters.ui.counter.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=counter.js.map?rel=1500356376862