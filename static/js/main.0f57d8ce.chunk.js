(this.webpackJsonpsketch=this.webpackJsonpsketch||[]).push([[0],{33:function(e,t,n){e.exports=n(57)},38:function(e,t,n){},49:function(e,t){},50:function(e,t){},51:function(e,t){},52:function(e,t){},53:function(e,t){},54:function(e,t){},56:function(e){e.exports=JSON.parse('["bird","book","car","cat","chair","flower","plane","sheep","ship","strawberry"]')},57:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(28),c=n.n(o);n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(39);var l=n(5);function u(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",flexFlow:"row nowrap"}},t)}function s(e){var t=e.children,n=e.size,a=void 0===n?1:n;return r.a.createElement("div",{style:{flex:a,flexBasis:"0%"}},t)}var i=n(15),m=n(16),f=n(18),d=n(17),p=n(29),h=n.n(p),b=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings,typeSpeed:50,backSpeed:50};this.typed=new h.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrap"},r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))}}]),n}(r.a.Component),v=n(30),E=n.n(v),g=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return a.createElement("section",{className:E()(this.props.className,"nes-container",{"with-title":this.props.title,"is-dark":this.props.dark}),style:this.props.style},this.props.title&&a.createElement("h2",{className:"title"},this.props.title),this.props.children)}}]),n}(a.Component);function y(e){var t=x.find((function(t){return t.status===e}));if(t.text.length>0)return t.text}var x=[{status:"gameStart",text:"let's get started."},{status:"gameSuccess",text:"You know, that was a damn \nfine sketch!"},{status:"gameFailure",text:"Not good enough, but here's \nan other chance."},{status:"gameEndSuccess",text:"Very Good, you scores 2 points."},{status:"gameEndFailure",text:"Womp,womp... Try harder next time,and\nmaybe you'll score more"},{status:"welcome",text:'This game has been modeled-off Google`s <a href="https://quickdraw.withgoogle.com/">Quick Draw!</a> game,\n and uses a sampling from the Quick, Draw! <a href="https://github.com/googlecreativelab/quickdraw-dataset">dataset</a>.'},{status:"toYouby",text:"Brought to you by the EPFL extention School."}],w=n(7),k={position:"absolute",left:"850px",top:"15px"},j={position:"absolute",left:"800px",top:"70px"},O={height:"160px"};function S(){var e=Object(a.useContext)(U),t=e.resetRounds,n=e.score,o=e.dispatch;return r.a.createElement(g,{style:O,title:"Sketch!",dark:!0},r.a.createElement(u,null,r.a.createElement(s,null,"you scored : ",n,r.a.createElement(b,{strings:[y("gameEndFailure")]})),r.a.createElement(s,null,r.a.createElement(u,null,"\xa0"),r.a.createElement(u,null,r.a.createElement(w.b,{to:"/"},r.a.createElement("button",{type:"button",style:k,className:"nes-btn"},"Home")),r.a.createElement(w.b,{to:"/game"},r.a.createElement("button",{className:"nes-btn is-warning",style:j,onClick:function(){t(),o({type:"reset"})}},"Try Again."))))))}var C=n(12);function R(e,t){switch(t.type){case"reset":return 0;case"one":return e+1;case"two":return e+2;default:return e}}var N=r.a.forwardRef((function(e,t){var n,o,c=!1;return Object(a.useEffect)((function(){var e=t.current,n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,e.height,e.width)})),r.a.createElement("canvas",{height:300,width:300,ref:t,onMouseDown:function(){return c=!0},onMouseUp:function(){c=!1,n=void 0,o=void 0},onMouseMove:function(e){return function(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left,r=e.clientY-t.top;if(c){var u=function(e,t,n,a,r){var o=e.getContext("2d");return o.strokeStyle="#000000",o.lineWidth=12,o.lineJoin="round",o.beginPath(),o.moveTo(a,r),o.lineTo(t,n),o.closePath(),o.stroke(),[t,n]}(e.target,a,r,n,o),s=Object(l.a)(u,2);n=s[0],o=s[1]}}(e)}})})),P=n(24),F=n.n(P),T=n(32);function D(e,t){var n,a=(n=e,C.b.fromPixels(n.current).resizeNearestNeighbor([28,28]).mean(2).expandDims(2).expandDims().toFloat().div(255));return t.then((function(e){return e.predict(a).data()})).then(function(){var e=Object(T.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a(t).data();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var B=n(2),M={position:"absolute",left:"500px",top:"300px"},W={position:"absolute",left:"500px",top:"250px"};function I(){var e=Object(a.useContext)(U),t=e.currentRound,n=e.nextRound,o=e.score,c=e.dispatch,u=e.ref,s=e.model,i=e.labels,m=Object(a.useState)(""),f=Object(l.a)(m,2),d=f[0],p=f[1],h=Object(a.useContext)(J),b=h.seconds,v=h.resetTimer,E=Object(B.f)();function g(){console.log("Prediction: "+d),D(u,s).then((function(e){p(i[e[0]]),i[e[0]]===i[t]&&(b<10?(c({type:"one"}),console.log("+1")):(c({type:"two"}),console.log("+2")))})),n(),v(),E.push("game")}return r.a.createElement("div",null,b>0?r.a.createElement("div",null,r.a.createElement("button",{style:M,className:"nes-btn is-warning",id:"clear",onClick:function(){var e=u.current;e.getContext("2d").fillRect(0,0,e.height,e.width)}},"Clear the canvas."),r.a.createElement("button",{className:"nes-btn is-warning",style:W,onClick:function(){return g()},id:"predict"},"Predict the drawing."),r.a.createElement("div",null,"your Score : ",o)):g())}var J=r.a.createContext({});function Y(){var e=Object(a.useContext)(U),t=e.currentRound,n=e.labels,o=function(){var e=Object(a.useState)(20),t=Object(l.a)(e,2),n=t[0],r=t[1];return[setInterval((function(){0===n?clearInterval():r(n-1)}),1e3),n,function(){return r(20)}]}(),c=Object(l.a)(o,3),u=c[0],s=c[1],i=c[2];return Object(a.useEffect)((function(){return function(){return clearInterval(u)}}),[t,n,u]),r.a.createElement("div",null,"you have ",s," to draw ",n[t],r.a.createElement(J.Provider,{value:{seconds:s,resetTimer:i}},r.a.createElement(I,null)))}var q={position:"relative",left:"850px",top:"-20px"};function z(){var e=Object(a.useContext)(U),t=e.currentRound,n=e.ref,o=e.labels;return r.a.createElement(g,{title:"Sketch! - Round "+(t+1)+" of "+o.length,dark:!0},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("button",{type:"button",style:q,className:"nes-btn"},"Home"))),r.a.createElement(u,null,r.a.createElement(s,null,r.a.createElement(N,{ref:n})),r.a.createElement(s,null,r.a.createElement(u,null,r.a.createElement(b,{strings:[y("gameFailure")]})),r.a.createElement(u,null),r.a.createElement(u,null,"\xa0"),r.a.createElement(u,null,r.a.createElement(Y,null)))))}var G=C.c("/Sketch/model/model.json"),H=n(56),Q=r.a.createRef(),U=r.a.createContext();function A(){var e=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),r=n[0],o=n[1];return[r,o,function(){return o(r+1)},function(){return o(0)}]}(),t=Object(l.a)(e,4),n=t[0],o=t[1],c=t[2],u=t[3],s=Object(a.useReducer)(R,0),i=Object(l.a)(s,2),m=i[0],f=i[1];return r.a.createElement(U.Provider,{value:{currentRound:n,setCurrentRound:o,nextRound:c,resetRounds:u,score:m,dispatch:f,ref:Q,model:G,labels:H}},n>9?r.a.createElement(S,null):r.a.createElement(z,null))}function L(){return r.a.createElement(g,{dark:!0},r.a.createElement(s,null,r.a.createElement("h1",null,"Sketch!"),r.a.createElement(u,null,r.a.createElement(b,{strings:[y("welcome")]})),r.a.createElement(u,null,"\xa0"),r.a.createElement(u,null,y("toYouby")),r.a.createElement(u,null,"\xa0"),r.a.createElement(w.b,{to:"/game"},r.a.createElement("button",{type:"button",className:"nes-btn"},"Play game"))))}c.a.render(r.a.createElement(w.a,{basename:"/Sketch"},r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(B.a,{path:"/game"},r.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.0f57d8ce.chunk.js.map