// Compiled by ClojureScript 1.9.671 {}
goog.provide('counters.ui.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('counters.parser');
goog.require('counters.ui.counter');
/**
 * @constructor
 */
counters.ui.core.RootView = (function counters$ui$core$RootView(){
var this__12481__auto__ = this;
React.Component.apply(this__12481__auto__,arguments);

if(!((this__12481__auto__.initLocalState == null))){
this__12481__auto__.state = this__12481__auto__.initLocalState();
} else {
this__12481__auto__.state = {};
}

return this__12481__auto__;
});

counters.ui.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x16492_16514 = counters.ui.core.RootView.prototype;
x16492_16514.componentWillUpdate = ((function (x16492_16514){
return (function (next_props__12369__auto__,next_state__12370__auto__){
var this__12368__auto__ = this;
if(((!((this__12368__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__12368__auto__.om$next$Ident$)))?true:false):false)){
var ident__12372__auto___16515 = om.next.ident.call(null,this__12368__auto__,om.next.props.call(null,this__12368__auto__));
var next_ident__12373__auto___16516 = om.next.ident.call(null,this__12368__auto__,om.next._next_props.call(null,next_props__12369__auto__,this__12368__auto__));
if(cljs.core.not_EQ_.call(null,ident__12372__auto___16515,next_ident__12373__auto___16516)){
var idxr__12374__auto___16517 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__12374__auto___16517 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__12374__auto___16517),((function (idxr__12374__auto___16517,ident__12372__auto___16515,next_ident__12373__auto___16516,this__12368__auto__,x16492_16514){
return (function (indexes__12375__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__12375__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__12372__auto___16515], null),cljs.core.disj,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__12373__auto___16516], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12368__auto__);
});})(idxr__12374__auto___16517,ident__12372__auto___16515,next_ident__12373__auto___16516,this__12368__auto__,x16492_16514))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__12368__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12368__auto__);
});})(x16492_16514))
;

x16492_16514.shouldComponentUpdate = ((function (x16492_16514){
return (function (next_props__12369__auto__,next_state__12370__auto__){
var this__12368__auto__ = this;
var next_children__12371__auto__ = next_props__12369__auto__.children;
var next_props__12369__auto____$1 = goog.object.get(next_props__12369__auto__,"omcljs$value");
var next_props__12369__auto____$2 = (function (){var G__16494 = next_props__12369__auto____$1;
if((next_props__12369__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__16494);
} else {
return G__16494;
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
});})(x16492_16514))
;

x16492_16514.componentWillUnmount = ((function (x16492_16514){
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
});})(x16492_16514))
;

x16492_16514.componentDidUpdate = ((function (x16492_16514){
return (function (prev_props__12376__auto__,prev_state__12377__auto__){
var this__12368__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12368__auto__);
});})(x16492_16514))
;

x16492_16514.isMounted = ((function (x16492_16514){
return (function (){
var this__12368__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12368__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16492_16514))
;

x16492_16514.componentWillMount = ((function (x16492_16514){
return (function (){
var this__12368__auto__ = this;
var indexer__12378__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12368__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12378__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12378__auto__,this__12368__auto__);
}
});})(x16492_16514))
;

x16492_16514.render = ((function (x16492_16514){
return (function (){
var this__12367__auto__ = this;
var this$ = this__12367__auto__;
var _STAR_reconciler_STAR_16495 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16496 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16497 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16498 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16499 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__12367__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__12367__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__12367__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__12367__auto__);

om.next._STAR_parent_STAR_ = this__12367__auto__;

try{var map__16500 = om.next.props.call(null,this$);
var map__16500__$1 = ((((!((map__16500 == null)))?((((map__16500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16500):map__16500);
var props = map__16500__$1;
var counter = cljs.core.get.call(null,map__16500__$1,new cljs.core.Keyword("global","counter","global/counter",-392874924));
var counters__$1 = cljs.core.get.call(null,map__16500__$1,new cljs.core.Keyword("other","counters","other/counters",-157136258));
var render_counter = ((function (map__16500,map__16500__$1,props,counter,counters__$1,_STAR_reconciler_STAR_16495,_STAR_depth_STAR_16496,_STAR_shared_STAR_16497,_STAR_instrument_STAR_16498,_STAR_parent_STAR_16499,this$,this__12367__auto__,x16492_16514){
return (function (props__$1){
return counters.ui.counter.counter.call(null,om.next.computed.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),this$], null)));
});})(map__16500,map__16500__$1,props,counter,counters__$1,_STAR_reconciler_STAR_16495,_STAR_depth_STAR_16496,_STAR_shared_STAR_16497,_STAR_instrument_STAR_16498,_STAR_parent_STAR_16499,this$,this__12367__auto__,x16492_16514))
;
return React.createElement("div",null,React.createElement("header",null,React.createElement("h1",null,"Om Next Counter"),React.createElement("h4",null,":other/counters and :sorted/counters are backed by the same data")),React.createElement("div",({"className": "counters"}),React.createElement("header",null,React.createElement("h3",null,":global/counter"),"Both of the counters in this column are backed by the same data."),(function (){var attrs16506 = render_counter.call(null,counter);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16506))?sablono.interpreter.attributes.call(null,attrs16506):null),((cljs.core.map_QMARK_.call(null,attrs16506))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16506)], null)));
})(),(function (){var attrs16507 = render_counter.call(null,counter);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16507))?sablono.interpreter.attributes.call(null,attrs16507):null),((cljs.core.map_QMARK_.call(null,attrs16507))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16507)], null)));
})()),React.createElement("div",({"className": "counters"}),React.createElement("header",null,React.createElement("h3",null,":other/counters"),"The order of the counters in this column will remain constant."),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,render_counter,counters__$1))),React.createElement("div",({"className": "counters"}),React.createElement("header",null,React.createElement("h3",null,":sorter/counters"),"The counters in this column will be ordered by the value of their count. This is confusing when you are incrementing so I recommend using the controls in the static list in the second column."),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,render_counter,new cljs.core.Keyword("sorted","counters","sorted/counters",980360655).cljs$core$IFn$_invoke$arity$1(props)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16499;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16498;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16497;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16496;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16495;
}});})(x16492_16514))
;


counters.ui.core.RootView.prototype.constructor = counters.ui.core.RootView;

counters.ui.core.RootView.prototype.constructor.displayName = "counters.ui.core/RootView";

counters.ui.core.RootView.prototype.om$isComponent = true;

var x16512_16518 = counters.ui.core.RootView;
/** @nocollapse */
x16512_16518.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x16512_16518.om$next$IQuery$query$arity$1 = ((function (x16512_16518){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("global","counter","global/counter",-392874924),om.next.get_query.call(null,counters.ui.counter.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("other","counters","other/counters",-157136258),om.next.get_query.call(null,counters.ui.counter.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sorted","counters","sorted/counters",980360655),om.next.get_query.call(null,counters.ui.counter.Counter)], null)], null);
});})(x16512_16518))
;


var x16513_16519 = counters.ui.core.RootView.prototype;

x16513_16519.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x16513_16519.om$next$IQuery$query$arity$1 = ((function (x16513_16519){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("global","counter","global/counter",-392874924),om.next.get_query.call(null,counters.ui.counter.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("other","counters","other/counters",-157136258),om.next.get_query.call(null,counters.ui.counter.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sorted","counters","sorted/counters",980360655),om.next.get_query.call(null,counters.ui.counter.Counter)], null)], null);
});})(x16513_16519))
;


counters.ui.core.RootView.cljs$lang$type = true;

counters.ui.core.RootView.cljs$lang$ctorStr = "counters.ui.core/RootView";

counters.ui.core.RootView.cljs$lang$ctorPrWriter = (function (this__12484__auto__,writer__12485__auto__,opt__12486__auto__){
return cljs.core._write.call(null,writer__12485__auto__,"counters.ui.core/RootView");
});

//# sourceMappingURL=core.js.map?rel=1500356380690