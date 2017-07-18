// Compiled by ClojureScript 1.9.671 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__10155__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10152 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10153 = cljs.core.seq.call(null,vec__10152);
var first__10154 = cljs.core.first.call(null,seq__10153);
var seq__10153__$1 = cljs.core.next.call(null,seq__10153);
var tag = first__10154;
var body = seq__10153__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10156__i = 0, G__10156__a = new Array(arguments.length -  0);
while (G__10156__i < G__10156__a.length) {G__10156__a[G__10156__i] = arguments[G__10156__i + 0]; ++G__10156__i;}
  args = new cljs.core.IndexedSeq(G__10156__a,0,null);
} 
return G__10155__delegate.call(this,args);};
G__10155.cljs$lang$maxFixedArity = 0;
G__10155.cljs$lang$applyTo = (function (arglist__10157){
var args = cljs.core.seq(arglist__10157);
return G__10155__delegate(args);
});
G__10155.cljs$core$IFn$_invoke$arity$variadic = G__10155__delegate;
return G__10155;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7909__auto__ = (function sablono$core$update_arglists_$_iter__10158(s__10159){
return (new cljs.core.LazySeq(null,(function (){
var s__10159__$1 = s__10159;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10159__$1);
if(temp__4657__auto__){
var s__10159__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10159__$2)){
var c__7907__auto__ = cljs.core.chunk_first.call(null,s__10159__$2);
var size__7908__auto__ = cljs.core.count.call(null,c__7907__auto__);
var b__10161 = cljs.core.chunk_buffer.call(null,size__7908__auto__);
if((function (){var i__10160 = (0);
while(true){
if((i__10160 < size__7908__auto__)){
var args = cljs.core._nth.call(null,c__7907__auto__,i__10160);
cljs.core.chunk_append.call(null,b__10161,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10162 = (i__10160 + (1));
i__10160 = G__10162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10161),sablono$core$update_arglists_$_iter__10158.call(null,cljs.core.chunk_rest.call(null,s__10159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10161),null);
}
} else {
var args = cljs.core.first.call(null,s__10159__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10158.call(null,cljs.core.rest.call(null,s__10159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7909__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__8252__auto__ = [];
var len__8245__auto___10168 = arguments.length;
var i__8246__auto___10169 = (0);
while(true){
if((i__8246__auto___10169 < len__8245__auto___10168)){
args__8252__auto__.push((arguments[i__8246__auto___10169]));

var G__10170 = (i__8246__auto___10169 + (1));
i__8246__auto___10169 = G__10170;
continue;
} else {
}
break;
}

var argseq__8253__auto__ = ((((0) < args__8252__auto__.length))?(new cljs.core.IndexedSeq(args__8252__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8253__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7909__auto__ = (function sablono$core$iter__10164(s__10165){
return (new cljs.core.LazySeq(null,(function (){
var s__10165__$1 = s__10165;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10165__$1);
if(temp__4657__auto__){
var s__10165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10165__$2)){
var c__7907__auto__ = cljs.core.chunk_first.call(null,s__10165__$2);
var size__7908__auto__ = cljs.core.count.call(null,c__7907__auto__);
var b__10167 = cljs.core.chunk_buffer.call(null,size__7908__auto__);
if((function (){var i__10166 = (0);
while(true){
if((i__10166 < size__7908__auto__)){
var style = cljs.core._nth.call(null,c__7907__auto__,i__10166);
cljs.core.chunk_append.call(null,b__10167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10171 = (i__10166 + (1));
i__10166 = G__10171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10167),sablono$core$iter__10164.call(null,cljs.core.chunk_rest.call(null,s__10165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10167),null);
}
} else {
var style = cljs.core.first.call(null,s__10165__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10164.call(null,cljs.core.rest.call(null,s__10165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7909__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq10163){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10163));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to10172 = (function sablono$core$link_to10172(var_args){
var args__8252__auto__ = [];
var len__8245__auto___10175 = arguments.length;
var i__8246__auto___10176 = (0);
while(true){
if((i__8246__auto___10176 < len__8245__auto___10175)){
args__8252__auto__.push((arguments[i__8246__auto___10176]));

var G__10177 = (i__8246__auto___10176 + (1));
i__8246__auto___10176 = G__10177;
continue;
} else {
}
break;
}

var argseq__8253__auto__ = ((((1) < args__8252__auto__.length))?(new cljs.core.IndexedSeq(args__8252__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8253__auto__);
});

sablono.core.link_to10172.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10172.cljs$lang$maxFixedArity = (1);

sablono.core.link_to10172.cljs$lang$applyTo = (function (seq10173){
var G__10174 = cljs.core.first.call(null,seq10173);
var seq10173__$1 = cljs.core.next.call(null,seq10173);
return sablono.core.link_to10172.cljs$core$IFn$_invoke$arity$variadic(G__10174,seq10173__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10172);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10178 = (function sablono$core$mail_to10178(var_args){
var args__8252__auto__ = [];
var len__8245__auto___10185 = arguments.length;
var i__8246__auto___10186 = (0);
while(true){
if((i__8246__auto___10186 < len__8245__auto___10185)){
args__8252__auto__.push((arguments[i__8246__auto___10186]));

var G__10187 = (i__8246__auto___10186 + (1));
i__8246__auto___10186 = G__10187;
continue;
} else {
}
break;
}

var argseq__8253__auto__ = ((((1) < args__8252__auto__.length))?(new cljs.core.IndexedSeq(args__8252__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8253__auto__);
});

sablono.core.mail_to10178.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10181){
var vec__10182 = p__10181;
var content = cljs.core.nth.call(null,vec__10182,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7120__auto__ = content;
if(cljs.core.truth_(or__7120__auto__)){
return or__7120__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10178.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to10178.cljs$lang$applyTo = (function (seq10179){
var G__10180 = cljs.core.first.call(null,seq10179);
var seq10179__$1 = cljs.core.next.call(null,seq10179);
return sablono.core.mail_to10178.cljs$core$IFn$_invoke$arity$variadic(G__10180,seq10179__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10178);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10188 = (function sablono$core$unordered_list10188(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7909__auto__ = (function sablono$core$unordered_list10188_$_iter__10189(s__10190){
return (new cljs.core.LazySeq(null,(function (){
var s__10190__$1 = s__10190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10190__$1);
if(temp__4657__auto__){
var s__10190__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10190__$2)){
var c__7907__auto__ = cljs.core.chunk_first.call(null,s__10190__$2);
var size__7908__auto__ = cljs.core.count.call(null,c__7907__auto__);
var b__10192 = cljs.core.chunk_buffer.call(null,size__7908__auto__);
if((function (){var i__10191 = (0);
while(true){
if((i__10191 < size__7908__auto__)){
var x = cljs.core._nth.call(null,c__7907__auto__,i__10191);
cljs.core.chunk_append.call(null,b__10192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10193 = (i__10191 + (1));
i__10191 = G__10193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10192),sablono$core$unordered_list10188_$_iter__10189.call(null,cljs.core.chunk_rest.call(null,s__10190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10192),null);
}
} else {
var x = cljs.core.first.call(null,s__10190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10188_$_iter__10189.call(null,cljs.core.rest.call(null,s__10190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7909__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10188);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10194 = (function sablono$core$ordered_list10194(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7909__auto__ = (function sablono$core$ordered_list10194_$_iter__10195(s__10196){
return (new cljs.core.LazySeq(null,(function (){
var s__10196__$1 = s__10196;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10196__$1);
if(temp__4657__auto__){
var s__10196__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10196__$2)){
var c__7907__auto__ = cljs.core.chunk_first.call(null,s__10196__$2);
var size__7908__auto__ = cljs.core.count.call(null,c__7907__auto__);
var b__10198 = cljs.core.chunk_buffer.call(null,size__7908__auto__);
if((function (){var i__10197 = (0);
while(true){
if((i__10197 < size__7908__auto__)){
var x = cljs.core._nth.call(null,c__7907__auto__,i__10197);
cljs.core.chunk_append.call(null,b__10198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10199 = (i__10197 + (1));
i__10197 = G__10199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10198),sablono$core$ordered_list10194_$_iter__10195.call(null,cljs.core.chunk_rest.call(null,s__10196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10198),null);
}
} else {
var x = cljs.core.first.call(null,s__10196__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10194_$_iter__10195.call(null,cljs.core.rest.call(null,s__10196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7909__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10194);
/**
 * Create an image element.
 */
sablono.core.image10200 = (function sablono$core$image10200(var_args){
var G__10202 = arguments.length;
switch (G__10202) {
case 1:
return sablono.core.image10200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image10200.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10200.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10200.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10200);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10204_SHARP_,p2__10205_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10204_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10205_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10206_SHARP_,p2__10207_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10206_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10207_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field10208 = (function sablono$core$color_field10208(var_args){
var G__10210 = arguments.length;
switch (G__10210) {
case 1:
return sablono.core.color_field10208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field10208.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.color_field10208.call(null,name__10142__auto__,null);
});

sablono.core.color_field10208.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.color_field10208.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10208);

/**
 * Creates a date input field.
 */
sablono.core.date_field10211 = (function sablono$core$date_field10211(var_args){
var G__10213 = arguments.length;
switch (G__10213) {
case 1:
return sablono.core.date_field10211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field10211.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.date_field10211.call(null,name__10142__auto__,null);
});

sablono.core.date_field10211.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.date_field10211.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10211);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10214 = (function sablono$core$datetime_field10214(var_args){
var G__10216 = arguments.length;
switch (G__10216) {
case 1:
return sablono.core.datetime_field10214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field10214.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.datetime_field10214.call(null,name__10142__auto__,null);
});

sablono.core.datetime_field10214.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.datetime_field10214.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10214);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10217 = (function sablono$core$datetime_local_field10217(var_args){
var G__10219 = arguments.length;
switch (G__10219) {
case 1:
return sablono.core.datetime_local_field10217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field10217.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.datetime_local_field10217.call(null,name__10142__auto__,null);
});

sablono.core.datetime_local_field10217.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.datetime_local_field10217.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10217);

/**
 * Creates a email input field.
 */
sablono.core.email_field10220 = (function sablono$core$email_field10220(var_args){
var G__10222 = arguments.length;
switch (G__10222) {
case 1:
return sablono.core.email_field10220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field10220.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.email_field10220.call(null,name__10142__auto__,null);
});

sablono.core.email_field10220.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.email_field10220.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10220);

/**
 * Creates a file input field.
 */
sablono.core.file_field10223 = (function sablono$core$file_field10223(var_args){
var G__10225 = arguments.length;
switch (G__10225) {
case 1:
return sablono.core.file_field10223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field10223.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.file_field10223.call(null,name__10142__auto__,null);
});

sablono.core.file_field10223.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.file_field10223.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10223);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10226 = (function sablono$core$hidden_field10226(var_args){
var G__10228 = arguments.length;
switch (G__10228) {
case 1:
return sablono.core.hidden_field10226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field10226.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.hidden_field10226.call(null,name__10142__auto__,null);
});

sablono.core.hidden_field10226.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.hidden_field10226.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10226);

/**
 * Creates a month input field.
 */
sablono.core.month_field10229 = (function sablono$core$month_field10229(var_args){
var G__10231 = arguments.length;
switch (G__10231) {
case 1:
return sablono.core.month_field10229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field10229.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.month_field10229.call(null,name__10142__auto__,null);
});

sablono.core.month_field10229.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.month_field10229.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10229);

/**
 * Creates a number input field.
 */
sablono.core.number_field10232 = (function sablono$core$number_field10232(var_args){
var G__10234 = arguments.length;
switch (G__10234) {
case 1:
return sablono.core.number_field10232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field10232.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.number_field10232.call(null,name__10142__auto__,null);
});

sablono.core.number_field10232.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.number_field10232.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10232);

/**
 * Creates a password input field.
 */
sablono.core.password_field10235 = (function sablono$core$password_field10235(var_args){
var G__10237 = arguments.length;
switch (G__10237) {
case 1:
return sablono.core.password_field10235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field10235.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.password_field10235.call(null,name__10142__auto__,null);
});

sablono.core.password_field10235.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.password_field10235.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10235);

/**
 * Creates a range input field.
 */
sablono.core.range_field10238 = (function sablono$core$range_field10238(var_args){
var G__10240 = arguments.length;
switch (G__10240) {
case 1:
return sablono.core.range_field10238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field10238.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.range_field10238.call(null,name__10142__auto__,null);
});

sablono.core.range_field10238.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.range_field10238.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10238);

/**
 * Creates a search input field.
 */
sablono.core.search_field10241 = (function sablono$core$search_field10241(var_args){
var G__10243 = arguments.length;
switch (G__10243) {
case 1:
return sablono.core.search_field10241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field10241.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.search_field10241.call(null,name__10142__auto__,null);
});

sablono.core.search_field10241.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.search_field10241.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10241);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10244 = (function sablono$core$tel_field10244(var_args){
var G__10246 = arguments.length;
switch (G__10246) {
case 1:
return sablono.core.tel_field10244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field10244.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.tel_field10244.call(null,name__10142__auto__,null);
});

sablono.core.tel_field10244.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.tel_field10244.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10244);

/**
 * Creates a text input field.
 */
sablono.core.text_field10247 = (function sablono$core$text_field10247(var_args){
var G__10249 = arguments.length;
switch (G__10249) {
case 1:
return sablono.core.text_field10247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field10247.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.text_field10247.call(null,name__10142__auto__,null);
});

sablono.core.text_field10247.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.text_field10247.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10247);

/**
 * Creates a time input field.
 */
sablono.core.time_field10250 = (function sablono$core$time_field10250(var_args){
var G__10252 = arguments.length;
switch (G__10252) {
case 1:
return sablono.core.time_field10250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field10250.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.time_field10250.call(null,name__10142__auto__,null);
});

sablono.core.time_field10250.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.time_field10250.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10250);

/**
 * Creates a url input field.
 */
sablono.core.url_field10253 = (function sablono$core$url_field10253(var_args){
var G__10255 = arguments.length;
switch (G__10255) {
case 1:
return sablono.core.url_field10253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field10253.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.url_field10253.call(null,name__10142__auto__,null);
});

sablono.core.url_field10253.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.url_field10253.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10253);

/**
 * Creates a week input field.
 */
sablono.core.week_field10256 = (function sablono$core$week_field10256(var_args){
var G__10258 = arguments.length;
switch (G__10258) {
case 1:
return sablono.core.week_field10256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field10256.cljs$core$IFn$_invoke$arity$1 = (function (name__10142__auto__){
return sablono.core.week_field10256.call(null,name__10142__auto__,null);
});

sablono.core.week_field10256.cljs$core$IFn$_invoke$arity$2 = (function (name__10142__auto__,value__10143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10142__auto__,value__10143__auto__);
});

sablono.core.week_field10256.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10256);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10276 = (function sablono$core$check_box10276(var_args){
var G__10278 = arguments.length;
switch (G__10278) {
case 1:
return sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box10276.call(null,name,null);
});

sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box10276.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box10276.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10276.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10276);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10280 = (function sablono$core$radio_button10280(var_args){
var G__10282 = arguments.length;
switch (G__10282) {
case 1:
return sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button10280.call(null,group,null);
});

sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button10280.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button10280.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10280.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10280);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10284 = (function sablono$core$select_options10284(coll){
var iter__7909__auto__ = (function sablono$core$select_options10284_$_iter__10285(s__10286){
return (new cljs.core.LazySeq(null,(function (){
var s__10286__$1 = s__10286;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10286__$1);
if(temp__4657__auto__){
var s__10286__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10286__$2)){
var c__7907__auto__ = cljs.core.chunk_first.call(null,s__10286__$2);
var size__7908__auto__ = cljs.core.count.call(null,c__7907__auto__);
var b__10288 = cljs.core.chunk_buffer.call(null,size__7908__auto__);
if((function (){var i__10287 = (0);
while(true){
if((i__10287 < size__7908__auto__)){
var x = cljs.core._nth.call(null,c__7907__auto__,i__10287);
cljs.core.chunk_append.call(null,b__10288,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10289 = x;
var text = cljs.core.nth.call(null,vec__10289,(0),null);
var val = cljs.core.nth.call(null,vec__10289,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10289,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10284.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10295 = (i__10287 + (1));
i__10287 = G__10295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10288),sablono$core$select_options10284_$_iter__10285.call(null,cljs.core.chunk_rest.call(null,s__10286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10288),null);
}
} else {
var x = cljs.core.first.call(null,s__10286__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10292 = x;
var text = cljs.core.nth.call(null,vec__10292,(0),null);
var val = cljs.core.nth.call(null,vec__10292,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10292,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10284.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10284_$_iter__10285.call(null,cljs.core.rest.call(null,s__10286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7909__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10284);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10296 = (function sablono$core$drop_down10296(var_args){
var G__10298 = arguments.length;
switch (G__10298) {
case 2:
return sablono.core.drop_down10296.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10296.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down10296.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10296.call(null,name,options,null);
});

sablono.core.drop_down10296.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10296.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10296);
/**
 * Creates a text area element.
 */
sablono.core.text_area10300 = (function sablono$core$text_area10300(var_args){
var G__10302 = arguments.length;
switch (G__10302) {
case 1:
return sablono.core.text_area10300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area10300.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area10300.call(null,name,null);
});

sablono.core.text_area10300.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area10300.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10300);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10304 = (function sablono$core$label10304(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10304);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10305 = (function sablono$core$submit_button10305(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10305);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10306 = (function sablono$core$reset_button10306(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10306);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10307 = (function sablono$core$form_to10307(var_args){
var args__8252__auto__ = [];
var len__8245__auto___10314 = arguments.length;
var i__8246__auto___10315 = (0);
while(true){
if((i__8246__auto___10315 < len__8245__auto___10314)){
args__8252__auto__.push((arguments[i__8246__auto___10315]));

var G__10316 = (i__8246__auto___10315 + (1));
i__8246__auto___10315 = G__10316;
continue;
} else {
}
break;
}

var argseq__8253__auto__ = ((((1) < args__8252__auto__.length))?(new cljs.core.IndexedSeq(args__8252__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10307.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8253__auto__);
});

sablono.core.form_to10307.cljs$core$IFn$_invoke$arity$variadic = (function (p__10310,body){
var vec__10311 = p__10310;
var method = cljs.core.nth.call(null,vec__10311,(0),null);
var action = cljs.core.nth.call(null,vec__10311,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to10307.cljs$lang$maxFixedArity = (1);

sablono.core.form_to10307.cljs$lang$applyTo = (function (seq10308){
var G__10309 = cljs.core.first.call(null,seq10308);
var seq10308__$1 = cljs.core.next.call(null,seq10308);
return sablono.core.form_to10307.cljs$core$IFn$_invoke$arity$variadic(G__10309,seq10308__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10307);

//# sourceMappingURL=core.js.map?rel=1500356352677