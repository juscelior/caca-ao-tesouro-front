(window["webpackJsonpcaca-ao-tesouro-front"]=window["webpackJsonpcaca-ao-tesouro-front"]||[]).push([[0],{44:function(e,t,a){e.exports=a(92)},49:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(41),c=a.n(r),s=(a(49),a(17)),i=a(18),o=a(20),m=a(19),u=a(21),d=a(1),p=a.n(d),E=a(8),y=a(42),f=a.n(y),h=a(43),g=a.n(h),b=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#909090"}},t)},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={delay:100,result:null,pass:0},a.handleScan=a.handleScan.bind(Object(E.a)(a)),a.openImageDialog=a.openImageDialog.bind(Object(E.a)(a)),a.finishVideo=a.finishVideo.bind(Object(E.a)(a)),a.next=a.next.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleScan",value:function(e){this.setState({result:e,pass:1})}},{key:"openImageDialog",value:function(){this.refs.qrReader1.openImageDialog()}},{key:"finishVideo",value:function(){this.setState({pass:2})}},{key:"next",value:function(){this.props.onFinish()}},{key:"handleError",value:function(e){alert(e),console.error(e)}},{key:"render",value:function(){return l.a.createElement("div",null,0===this.state.pass&&l.a.createElement(f.a,{ref:"qrReader1",delay:this.state.delay,style:{height:240,width:320},onError:this.handleError,onScan:this.handleScan,legacyMode:!0,facingMode:"rear"}),0===this.state.pass&&l.a.createElement("input",{type:"button",value:"Submit QR Code",onClick:this.openImageDialog}),1===this.state.pass&&l.a.createElement(g.a,{className:"react-player",url:this.state.result,width:"100%",height:"100%",onEnded:this.finishVideo}),1===this.state.pass&&l.a.createElement("div",{className:"player-wrapper"},this.state.result),2===this.state.pass&&l.a.createElement("p",null,l.a.createElement(b,null," >"),"  V\xe1 para o 12 andar"),2===this.state.pass&&l.a.createElement("input",{type:"button",value:"Ir para proximo andar",onClick:this.next}))}}]),t}(l.a.Component),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(t?"url(":"","assets/").concat(e,".svg").concat(t?")":"")},w=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#FF6AC1"}},t)},L=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#EFF59B"}},t)},j=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#9AEDFE"}},t)},x=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#57EE89"}},t)},C=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#57C7FF"}},t)},I=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#909090"}},t)},O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,{ref:function(t){return e.parallax=t},pages:5,scrolling:!1},l.a.createElement(p.a.Layer,{offset:0,speed:0,factor:4,style:{backgroundImage:k("stars",!0),backgroundSize:"cover"}}),l.a.createElement(p.a.Layer,{offset:1,speed:1,style:{backgroundColor:"#ff9100"}}),l.a.createElement(p.a.Layer,{offset:2,speed:1,style:{backgroundColor:"#243B4A"}}),l.a.createElement(p.a.Layer,{offset:3,speed:1,style:{backgroundColor:"#805E73"}}),l.a.createElement(p.a.Layer,{offset:4,speed:1,style:{backgroundColor:"#87BCDE"}}),l.a.createElement(p.a.Layer,{offset:1.3,speed:-.3,style:{pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("satellite4"),style:{width:"15%",marginLeft:"70%"}})),l.a.createElement(p.a.Layer,{offset:1,speed:.8,style:{opacity:.1}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"55%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"15%"}})),l.a.createElement(p.a.Layer,{offset:1.75,speed:.5,style:{opacity:.1}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"70%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"40%"}})),l.a.createElement(p.a.Layer,{offset:2,speed:.2,style:{opacity:.2}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"10%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"75%"}})),l.a.createElement(p.a.Layer,{offset:2.6,speed:-.1,style:{opacity:.4}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"60%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"25%",marginLeft:"30%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"10%",marginLeft:"80%"}})),l.a.createElement(p.a.Layer,{offset:3.6,speed:.4,style:{opacity:.6}},l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"20%",marginLeft:"5%"}}),l.a.createElement("img",{alt:"",src:k("cloud"),style:{display:"block",width:"15%",marginLeft:"75%"}})),l.a.createElement(p.a.Layer,{offset:3.5,speed:-.4,style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:k("earth"),style:{width:"60%"}})),l.a.createElement(p.a.Layer,{offset:3,speed:-.3,style:{backgroundSize:"80%",backgroundPosition:"center",backgroundImage:k("clients",!0)}}),l.a.createElement(p.a.Layer,{offset:0,speed:.5,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{class:"main-content"},l.a.createElement("div",{className:"item",style:{height:"250px"}},l.a.createElement("img",{src:"./assets/Wiz_BPO_negativa.png",alt:"Wiz BPO",style:{height:"100%"}})),l.a.createElement("div",{className:"item",style:{whiteSpace:"pre",fontFamily:"Menlo-Regular, Menlo, monospace",fontSize:14,lineHeight:"10px",color:"white"}},l.a.createElement("p",null,l.a.createElement(I,null," >"),"  ",l.a.createElement(C,null,"Bem vindo intercambista!")),l.a.createElement("p",null,l.a.createElement(I,null," >"),"  npm install wiz-bpo --save"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(I,null," 1"),"  ",l.a.createElement(w,null,"new")," Wizzer",l.a.createElement(I,null,"({")),l.a.createElement("p",null,l.a.createElement(I,null," 2"),"      ",l.a.createElement(L,null,"output"),l.a.createElement(w,null,":")," _nova_percep\xe7\xe3o",l.a.createElement(I,null,",")),l.a.createElement("p",null,l.a.createElement(I,null," 3"),"      ",l.a.createElement(L,null,"publicport"),l.a.createElement(w,null,":")," ",l.a.createElement(x,null,"'5\xba andar ala sul'")),l.a.createElement("p",null,l.a.createElement(I,null," 4"),"          ",l.a.createElement(w,null,"||"),"\xa0",l.a.createElement(x,null,"'12\xba andar norte'")),l.a.createElement("p",null,l.a.createElement(I,null," 5"),"          ",l.a.createElement(w,null,"||"),"\xa0",l.a.createElement(x,null,"'12\xba andar sul'")),l.a.createElement("p",null,l.a.createElement(I,null," 6"),"          ",l.a.createElement(w,null,"||"),"\xa0",l.a.createElement(x,null,"'16\xba andar ala norte'")),l.a.createElement("p",null,l.a.createElement(I,null," 7"),"          ",l.a.createElement(w,null,"||"),"\xa0",l.a.createElement(x,null,"'16\xba andar ala sul'"),l.a.createElement(I,null,",")),l.a.createElement("p",null,l.a.createElement(I,null," 8"),"  ",l.a.createElement(I,null,"})"),l.a.createElement(w,null,"."),l.a.createElement(j,null,"start"),l.a.createElement(I,null,"()"))),l.a.createElement("div",{className:"item button-jittery"},l.a.createElement("button",{onClick:function(){return e.parallax.scrollTo(1)}},"Iniciar!")))),l.a.createElement(p.a.Layer,{offset:1,speed:0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(v,{onFinish:function(){return e.parallax.scrollTo(2)}})),l.a.createElement(p.a.Layer,{offset:2,speed:0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(v,{onFinish:function(){return e.parallax.scrollTo(3)}})),l.a.createElement(p.a.Layer,{offset:3,speed:0,onClick:function(){return e.parallax.scrollTo(4)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(v,{onFinish:function(){return e.parallax.scrollTo(4)}})),l.a.createElement(p.a.Layer,{offset:4,speed:-0,style:{display:"flex",alignItems:"center",justifyContent:"center"}})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.1405b9a3.chunk.js.map