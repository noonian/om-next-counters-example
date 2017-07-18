// Compiled by ClojureScript 1.9.671 {}
goog.provide('counters.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.util');
goog.require('counters.ui.counter');
goog.require('cljs.pprint');
if(typeof counters.parser.read !== 'undefined'){
} else {
counters.parser.read = (function (){var method_table__8054__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8058__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"counters.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8058__auto__,method_table__8054__auto__,prefer_table__8055__auto__,method_cache__8056__auto__,cached_hierarchy__8057__auto__));
})();
}
if(typeof counters.parser.mutate !== 'undefined'){
} else {
counters.parser.mutate = (function (){var method_table__8054__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8058__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"counters.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8058__auto__,method_table__8054__auto__,prefer_table__8055__auto__,method_cache__8056__auto__,cached_hierarchy__8057__auto__));
})();
}
counters.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),counters.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),counters.parser.mutate], null));
cljs.core._add_method.call(null,counters.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16466,key,params){
var map__16467 = p__16466;
var map__16467__$1 = ((((!((map__16467 == null)))?((((map__16467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16467):map__16467);
var parser = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var denorm = (cljs.core.truth_(query)?((function (st,map__16467,map__16467__$1,parser,state,query){
return (function (p1__16464_SHARP_){
return om.next.db__GT_tree.call(null,query,p1__16464_SHARP_,st);
});})(st,map__16467,map__16467__$1,parser,state,query))
:cljs.core.identity);
var val_or_ident = cljs.core.get.call(null,st,key);
var val = ((om.util.ident_QMARK_.call(null,val_or_ident))?om.next.db__GT_tree.call(null,query,cljs.core.get_in.call(null,st,val_or_ident),st):(((cljs.core.vector_QMARK_.call(null,val_or_ident)) && (cljs.core.every_QMARK_.call(null,om.util.ident_QMARK_,val_or_ident)))?cljs.core.mapv.call(null,((function (st,denorm,val_or_ident,map__16467,map__16467__$1,parser,state,query){
return (function (p1__16465_SHARP_){
return om.next.db__GT_tree.call(null,query,cljs.core.get_in.call(null,st,p1__16465_SHARP_),st);
});})(st,denorm,val_or_ident,map__16467,map__16467__$1,parser,state,query))
,val_or_ident):denorm.call(null,val_or_ident)
));
if(cljs.core.truth_(val)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,counters.parser.read,new cljs.core.Keyword("sorted","counters","sorted/counters",980360655),(function (p__16470,key,params){
var map__16471 = p__16470;
var map__16471__$1 = ((((!((map__16471 == null)))?((((map__16471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16471):map__16471);
var state = cljs.core.get.call(null,map__16471__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__16471__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var normalized_counters = new cljs.core.Keyword("other","counters","other/counters",-157136258).cljs$core$IFn$_invoke$arity$1(st);
var counters__$1 = cljs.core.mapv.call(null,((function (st,normalized_counters,map__16471,map__16471__$1,state,query){
return (function (p1__16469_SHARP_){
return om.next.db__GT_tree.call(null,query,p1__16469_SHARP_,st);
});})(st,normalized_counters,map__16471,map__16471__$1,state,query))
,normalized_counters);
var sorted_counters = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"count","count",2139924085),counters__$1));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sorted_counters], null);
}));
if(typeof counters.parser.last_id !== 'undefined'){
} else {
counters.parser.last_id = cljs.core.atom.call(null,(0));
}
cljs.core._add_method.call(null,counters.parser.mutate,new cljs.core.Symbol("counter","add!","counter/add!",854455185,null),(function (p__16473,key,params){
var map__16474 = p__16473;
var map__16474__$1 = ((((!((map__16474 == null)))?((((map__16474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16474):map__16474);
var state = cljs.core.get.call(null,map__16474__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("new-counter-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,counters.parser.last_id,cljs.core.inc))].join('');
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),id], null);
var counter = counters.ui.counter.make_counter.call(null,id);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (id,ident,counter,map__16474,map__16474__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (id,ident,counter,map__16474,map__16474__$1,state){
return (function (st){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("other","counters","other/counters",-157136258)], null),cljs.core.conj,ident),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),id], null),counter);
});})(id,ident,counter,map__16474,map__16474__$1,state))
);
});})(id,ident,counter,map__16474,map__16474__$1,state))
], null);
}));
cljs.core._add_method.call(null,counters.parser.mutate,new cljs.core.Symbol("counter","inc!","counter/inc!",357910369,null),(function (p__16476,key,p__16477){
var map__16478 = p__16476;
var map__16478__$1 = ((((!((map__16478 == null)))?((((map__16478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16478):map__16478);
var state = cljs.core.get.call(null,map__16478__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16479 = p__16477;
var map__16479__$1 = ((((!((map__16479 == null)))?((((map__16479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16479):map__16479);
var id = cljs.core.get.call(null,map__16479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16478,map__16478__$1,state,map__16479,map__16479__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),id,new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__16478,map__16478__$1,state,map__16479,map__16479__$1,id))
], null);
}));
cljs.core._add_method.call(null,counters.parser.mutate,new cljs.core.Symbol("counter","reset!","counter/reset!",1150569580,null),(function (p__16482,key,p__16483){
var map__16484 = p__16482;
var map__16484__$1 = ((((!((map__16484 == null)))?((((map__16484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16484):map__16484);
var state = cljs.core.get.call(null,map__16484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16485 = p__16483;
var map__16485__$1 = ((((!((map__16485 == null)))?((((map__16485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16485):map__16485);
var id = cljs.core.get.call(null,map__16485__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16484,map__16484__$1,state,map__16485,map__16485__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("counter","by-id","counter/by-id",-671512505),id,new cljs.core.Keyword(null,"count","count",2139924085)], null),(0));
});})(map__16484,map__16484__$1,state,map__16485,map__16485__$1,id))
], null);
}));

//# sourceMappingURL=parser.js.map?rel=1500356380613