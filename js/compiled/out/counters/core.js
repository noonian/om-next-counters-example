// Compiled by ClojureScript 1.9.671 {}
goog.provide('counters.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('counters.parser');
goog.require('counters.ui.core');
goog.require('counters.ui.counter');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Initial denormalized application state.
 */
counters.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("global","counter","global/counter",-392874924),counters.ui.counter.make_counter.call(null,new cljs.core.Keyword("global","counter","global/counter",-392874924)),new cljs.core.Keyword("other","counters","other/counters",-157136258),cljs.core.mapv.call(null,counters.ui.counter.make_counter,cljs.core.range.call(null,(5)))], null);
if(typeof counters.core.reconciler !== 'undefined'){
} else {
/**
 * Contains bookkeeping and configuration for Om.
 */
counters.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),counters.core.initial_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),counters.parser.parser], null));
}
/**
 * Render the root react component in the application render tree
 * and initialize Om. This function is safe to call multiple times.
 * This function will force a render if the root component is
 * already mounted.
 */
counters.core.mount_root_view_BANG_ = (function counters$core$mount_root_view_BANG_(){
return om.next.add_root_BANG_.call(null,counters.core.reconciler,counters.ui.core.RootView,document.getElementById("app"));
});
/**
 * Initialize the application.
 */
counters.core.setup_BANG_ = (function counters$core$setup_BANG_(){
return counters.core.mount_root_view_BANG_.call(null);
});
goog.exportSymbol('counters.core.setup_BANG_', counters.core.setup_BANG_);
/**
 * Called when figwheel reloads any code.
 */
counters.core.on_js_reload = (function counters$core$on_js_reload(){
return counters.core.mount_root_view_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1500356380714