// Compiled by ClojureScript 1.9.671 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.require('cljsjs.react');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__7789__auto__ = (((this$ == null))?null:this$);
var m__7790__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__7789__auto__)]);
if(!((m__7790__auto__ == null))){
return m__7790__auto__.call(null,this$);
} else {
var m__7790__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__7790__auto____$1 == null))){
return m__7790__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
return React.createFactory(React.createClass(({"getDisplayName": (function (){
return cljs.core.name.call(null,display_name);
}), "getInitialState": (function (){
var this$ = this;
return ({"value": (this$.props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState(({"value": e.target.value}));
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState(({"value": (new_props["value"])}));
}), "render": (function (){
var this$ = this;
var props = ({});
goog.object.extend(props,this$.props,({"value": (this$.state["value"]), "onChange": (this$["onChange"]), "children": (this$.props["children"])}));

return ctor.call(null,props);
})})));
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element.call(null,React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element.call(null,React.DOM.option,"option");
sablono.interpreter.select = sablono.interpreter.wrap_form_element.call(null,React.DOM.select,"select");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element.call(null,React.DOM.textarea,"textarea");
/**
 * Return a function that creates a React element for the HTML tag `type`.
 */
sablono.interpreter.element_factory = (function sablono$interpreter$element_factory(type){
if(cljs.core.truth_(sablono.util.wrapped_type_QMARK_.call(null,type))){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input","input",556931961),sablono.interpreter.input,new cljs.core.Keyword(null,"option","option",65132272),sablono.interpreter.option,new cljs.core.Keyword(null,"select","select",1147833503),sablono.interpreter.select,new cljs.core.Keyword(null,"textarea","textarea",-650375824),sablono.interpreter.textarea], null),cljs.core.keyword.call(null,type));
} else {
return cljs.core.partial.call(null,React.createElement,cljs.core.name.call(null,type));
}
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__8252__auto__ = [];
var len__8245__auto___9688 = arguments.length;
var i__8246__auto___9689 = (0);
while(true){
if((i__8246__auto___9689 < len__8245__auto___9688)){
args__8252__auto__.push((arguments[i__8246__auto___9689]));

var G__9690 = (i__8246__auto___9689 + (1));
i__8246__auto___9689 = G__9690;
continue;
} else {
}
break;
}

var argseq__8253__auto__ = ((((2) < args__8252__auto__.length))?(new cljs.core.IndexedSeq(args__8252__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8253__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var factory = sablono.interpreter.element_factory.call(null,type);
var children__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_.call(null,children__$1)){
return factory.call(null,props);
} else {
return cljs.core.apply.call(null,factory,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq9685){
var G__9686 = cljs.core.first.call(null,seq9685);
var seq9685__$1 = cljs.core.next.call(null,seq9685);
var G__9687 = cljs.core.first.call(null,seq9685__$1);
var seq9685__$2 = cljs.core.next.call(null,seq9685__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__9686,G__9687,seq9685__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__9691 = sablono.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__9691,(0),null);
var attrs = cljs.core.nth.call(null,vec__9691,(1),null);
var content = cljs.core.nth.call(null,vec__9691,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),cljs.core.map.call(null,sablono.interpreter.interpret,content));
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.map.call(null,sablono.interpreter.interpret,s);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,this$__$1))){
return sablono.interpreter.element.call(null,this$__$1);
} else {
return sablono.interpreter.interpret.call(null,cljs.core.seq.call(null,this$__$1));
}
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

//# sourceMappingURL=interpreter.js.map?rel=1500356352249