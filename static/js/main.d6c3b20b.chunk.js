(this["webpackJsonpstopwatch-react"]=this["webpackJsonpstopwatch-react"]||[]).push([[0],{20:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(16),o=n.n(c),i=(n(25),n(18)),l=n(31),s=n(32),u=n(5),d=function(e){return function(t){var n=setInterval((function(){t("TICK")}),1e3*e.interval);return function(){return clearInterval(n)}}},m=function(e){return console.log("chec OT"),e.elapsed>=e.duration},p=function(e){return e.duration-10<=e.elapsed},E=n(14);n(26);var h=function(){var e=Object(a.useRef)(null),t=function(e,t){return Object(s.a)({id:"timer",initial:"idle",strict:!0,context:{duration:e,elapsed:0,interval:.1},on:{RESET:{target:"idle"},ADD_TIME:{actions:Object(u.b)({duration:function(e,t){return console.log(t),e.duration+60*t.amount}})}},states:{idle:{entry:Object(u.b)({duration:e,elapsed:0}),on:{TOGGLE:"running"}},running:{invoke:{id:"ticker",src:d},initial:"normal",states:{normal:{on:{"":[{target:"deadline_approaching",cond:p}],RESET:void 0}},overtime:{entry:"playSound"},deadline_approaching:{on:{"":{target:"overtime",cond:m}}}},on:{TICK:{actions:Object(u.b)({elapsed:function(e){return e.elapsed+e.interval}})},TOGGLE:"paused"}},paused:{entry:"stopSound",on:{TOGGLE:"running"}}}},t)}(60,{actions:{playSound:function(t,n){e.current.play()},stopSound:function(t,n){e.current.pause()}}}),n=Object(l.a)(t),c=Object(i.a)(n,2),o=c[0],h=c[1],v=o.context,f=v.duration,g=v.elapsed,b=v.interval;return r.a.createElement("div",{className:"App","data-state":o.toStrings().join(" "),style:{"--duration":f,"--elapsed":g,"--interval":b}},r.a.createElement("div",{className:"timerwrapper"},r.a.createElement("svg",{class:"timer-circle",viewBox:"0 0 100 100",width:"100",height:"100",fill:"none"},r.a.createElement("circle",{r:"40",cx:"50",cy:"50",pathLength:"1"}),r.a.createElement("circle",{className:"progress",r:"40",cx:"50",cy:"50",pathLength:"1"})),r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"state faded"},o.toStrings().slice(-1)),r.a.createElement("div",{className:"timer"},function(){var e=Math.ceil(f-g),t=Math.floor(Math.abs(e)/60),n=String(Math.abs(e)%60),a="";return g>f&&(a="-"),"".concat(a).concat(t,":").concat(n.padStart(2,"0"))}()),r.a.createElement("div",{className:"addtime"},r.a.createElement("button",{onClick:function(){return h({type:"ADD_TIME",amount:1})}},"+1"),r.a.createElement("button",{onClick:function(){return h({type:"ADD_TIME",amount:10})}},"+10"),r.a.createElement("button",{className:"actions",disabled:o.matches("running"),onClick:function(){return h("RESET")}},"Reset")))),r.a.createElement("div",{id:"controls"},o.matches("running")&&r.a.createElement("button",{onClick:function(){return h("TOGGLE")}},r.a.createElement(E.a,null)),(o.matches("idle")||o.matches("paused"))&&r.a.createElement("button",{onClick:function(){return h("TOGGLE")}},r.a.createElement(E.b,null))),r.a.createElement("audio",{ref:e},r.a.createElement("source",{src:"Ready_to_Fight_-_David_Fesliyan.mp3",type:"audio/mpeg"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d6c3b20b.chunk.js.map