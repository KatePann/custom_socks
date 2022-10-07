"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{54537:function(e,n,r){function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(n,{Z:function(){return Z}});var u=r(73463),a=r.n(u),i=r(47677),c=r.n(i),s=r(2784),p=r.n(s),d=r(48570),f=r(69939),l=r(44282),v=r(81346),m=[],P=[null,null];function h(e,n){var r=e[1];return[n.payload,r+1]}var y=function(){return[null,0]};var w=Object.prototype.hasOwnProperty;function O(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function g(e,n){if(O(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!w.call(n,r[o])||!O(e[r[o]],n[r[o]]))return!1;return!0}var C=r(18717);function E(e){return function(n,r){var t=e(n,r);function o(){return t}return o.dependsOnOwnProps=!1,o}}function S(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function M(e,n){return function(n,r){r.displayName;var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=S(e);var o=t(n,r);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=S(o),o=t(n,r)),o},t}}function R(e,n,r){return t({},r,{},e,{},n)}var b=[function(e){return"function"==typeof e?function(e){return function(n,r){r.displayName;var t,o=r.pure,u=r.areMergedPropsEqual,a=!1;return function(n,r,i){var c=e(n,r,i);return a?o&&u(c,t)||(t=c):(a=!0,t=c),t}}}(e):void 0},function(e){return e?void 0:function(){return R}}];function x(e,n,r,t){return function(o,u){return r(e(o,u),n(t,u),u)}}function T(e,n,r,t,o){var u,a,i,c,s,p=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,m,P=!d(l,a),h=!p(o,u);return u=o,a=l,P&&h?(i=e(u,a),n.dependsOnOwnProps&&(c=n(t,a)),s=r(i,c,a)):P?(e.dependsOnOwnProps&&(i=e(u,a)),n.dependsOnOwnProps&&(c=n(t,a)),s=r(i,c,a)):h?(v=e(u,a),m=!f(v,i),i=v,m&&(s=r(i,c,a)),s):s}(o,v):(i=e(u=o,a=v),c=n(t,a),s=r(i,c,a),l=!0,s)}}function N(e,n,r){for(var t=n.length-1;t>=0;t--){var o=n[t](e);if(o)return o}return function(n,t){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function q(e,n){return e===n}var D,j,k,B,H,F,K,A,W,L,U,Z=(j=(D={}).connectHOC,k=void 0===j?function(e,n){void 0===n&&(n={});var r=n,u=r.getDisplayName,i=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,w=r.methodName,O=void 0===w?"connectAdvanced":w,g=r.renderCountProp,C=void 0===g?void 0:g,E=r.shouldHandleStateChanges,S=void 0===E||E,M=r.storeKey,R=void 0===M?"store":M,b=r.withRef,x=void 0!==b&&b,T=r.forwardRef,N=void 0!==T&&T,q=r.context,D=void 0===q?v.E:q,j=o(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);c()(void 0===C,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),c()(!x,"withRef is removed. To access the wrapped instance, use a ref on the connected component"),c()("store"===R,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var k=D;return function(n){var r=n.displayName||n.name||"Component",u=i(r),v=t({},j,{getDisplayName:i,methodName:O,renderCountProp:C,shouldHandleStateChanges:S,storeKey:R,displayName:u,wrappedComponentName:r,WrappedComponent:n}),w=j.pure,g=w?s.useMemo:function(e){return e()};function E(r){var a=(0,s.useMemo)((function(){var e=r.forwardedRef,n=o(r,["forwardedRef"]);return[r.context,e,n]}),[r]),i=a[0],w=a[1],O=a[2],C=(0,s.useMemo)((function(){return i&&i.Consumer&&(0,d.isContextConsumer)(p().createElement(i.Consumer,null))?i:k}),[i,k]),E=(0,s.useContext)(C),M=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch),R=Boolean(E)&&Boolean(E.store);c()(M||R,'Could not find "store" in the context of "'+u+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+u+" in connect options.");var b=M?r.store:E.store,x=(0,s.useMemo)((function(){return function(n){return e(n.dispatch,v)}(b)}),[b]),T=(0,s.useMemo)((function(){if(!S)return P;var e=new f.Z(b,M?null:E.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[b,M,E]),N=T[0],q=T[1],D=(0,s.useMemo)((function(){return M?E:t({},E,{subscription:N})}),[M,E,N]),j=(0,s.useReducer)(h,m,y),B=j[0][0],H=j[1];if(B&&B.error)throw B.error;var F=(0,s.useRef)(),K=(0,s.useRef)(O),A=(0,s.useRef)(),W=(0,s.useRef)(!1),L=g((function(){return A.current&&O===K.current?A.current:x(b.getState(),O)}),[b,B,O]);(0,l.L)((function(){K.current=O,F.current=L,W.current=!1,A.current&&(A.current=null,q())})),(0,l.L)((function(){if(S){var e=!1,n=null,r=function(){if(!e){var r,t,o=b.getState();try{r=x(o,K.current)}catch(e){t=e,n=e}t||(n=null),r===F.current?W.current||q():(F.current=r,A.current=r,W.current=!0,H({type:"STORE_UPDATED",payload:{error:t}}))}};return N.onStateChange=r,N.trySubscribe(),r(),function(){if(e=!0,N.tryUnsubscribe(),N.onStateChange=null,n)throw n}}}),[b,N,x]);var U=(0,s.useMemo)((function(){return p().createElement(n,t({},L,{ref:w}))}),[w,n,L]);return(0,s.useMemo)((function(){return S?p().createElement(C.Provider,{value:D},U):U}),[C,U,D])}var M=w?p().memo(E):E;if(M.WrappedComponent=n,M.displayName=u,N){var b=p().forwardRef((function(e,n){return p().createElement(M,t({},e,{forwardedRef:n}))}));return b.displayName=u,b.WrappedComponent=n,a()(b,n)}return a()(M,n)}}:j,H=void 0===(B=D.mapStateToPropsFactories)?[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:E((function(){return{}}))}]:B,K=void 0===(F=D.mapDispatchToPropsFactories)?[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:E((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?E((function(n){return(0,C.DE)(e,n)})):void 0}]:F,W=void 0===(A=D.mergePropsFactories)?b:A,U=void 0===(L=D.selectorFactory)?function(e,n){var r=n.initMapStateToProps,t=n.initMapDispatchToProps,u=n.initMergeProps,a=o(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=r(e,a),c=t(e,a),s=u(e,a);return(a.pure?T:x)(i,c,s,e,a)}:L,function(e,n,r,u){void 0===u&&(u={});var a=u,i=a.pure,c=void 0===i||i,s=a.areStatesEqual,p=void 0===s?q:s,d=a.areOwnPropsEqual,f=void 0===d?g:d,l=a.areStatePropsEqual,v=void 0===l?g:l,m=a.areMergedPropsEqual,P=void 0===m?g:m,h=o(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),y=N(e,H,"mapStateToProps"),w=N(n,K,"mapDispatchToProps"),O=N(r,W,"mergeProps");return k(U,t({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:y,initMapDispatchToProps:w,initMergeProps:O,pure:c,areStatesEqual:p,areOwnPropsEqual:f,areStatePropsEqual:v,areMergedPropsEqual:P},h))})}}]);
//# sourceMappingURL=537-27e5724f1281b633b7b1.js.map