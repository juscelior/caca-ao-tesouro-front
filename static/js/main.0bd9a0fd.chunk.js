(window["webpackJsonpcaca-ao-tesouro-front"]=window["webpackJsonpcaca-ao-tesouro-front"]||[]).push([[0],{45:function(e,t,a){e.exports=a(94)},50:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(41),s=a.n(r),i=(a(50),a(17)),c=a(18),o=a(20),u=a(19),m=a(5),d=a(21),p=a(1),f=a.n(p),E=a(42),y=a.n(E),h=a(43),g=a.n(h),b=a(44),v=a.n(b),w=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#909090"}},t)},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={delay:100,result:null,pass:0},a.handleScan=a.handleScan.bind(Object(m.a)(a)),a.openImageDialog=a.openImageDialog.bind(Object(m.a)(a)),a.onVideoFinish=a.onVideoFinish.bind(Object(m.a)(a)),a.nextStep=a.nextStep.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dest(this.props.equip);if(e){var t=e.label,a=e.url,n=e.id;this.setState({label:t,url:a,id:n})}}},{key:"componentDidUpdate",value:function(e){if(this.props.equip!==e.equip){var t=this.props.dest(this.props.equip);if(t){var a=t.label,n=t.url,l=t.id;this.setState({label:a,url:n,id:l})}}}},{key:"handleScan",value:function(e){e===this.state.id?this.setState({result:this.state.url,pass:1}):alert("Lugar errado! V\xe1 para o "+this.state.label)}},{key:"openImageDialog",value:function(){this.refs.qrcode.openImageDialog()}},{key:"onVideoFinish",value:function(){this.setState({pass:2})}},{key:"nextStep",value:function(){this.props.onFinish()}},{key:"handleError",value:function(e){alert(e),console.error(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"item",style:{whiteSpace:"pre",fontFamily:"Menlo-Regular, Menlo, monospace",fontSize:35,lineHeight:"55px",color:"white",textAlign:"center"}},l.a.createElement("h1",null,"Instru\xe7\xf5es"),l.a.createElement("ol",{style:{textAlign:"left",width:"100%"}},l.a.createElement("li",null,"V\xe1 para o ",this.state.label),l.a.createElement("li",null,"Encontre o QR"),l.a.createElement("li",null,"Assista o v\xeddeo at\xe9 o final"),l.a.createElement("li",null,"Descubra o pr\xf3ximo desafio!"))),0===this.state.pass&&l.a.createElement("div",{className:"qr-code"},l.a.createElement(g.a,{ref:"qrcode",delay:this.state.delay,style:{height:240,width:320},onError:this.handleError,onScan:this.handleScan,legacyMode:!0,className:"qrcode",facingMode:"rear"})),0===this.state.pass&&l.a.createElement("div",{className:"item button-hand",style:{height:"55vh"}},l.a.createElement("button",{onClick:this.openImageDialog},"Ler QR Code",l.a.createElement("div",{className:"hands"}))),1===this.state.pass&&l.a.createElement(v.a,{className:"react-player",url:this.state.result,width:"100%",height:"100%",onEnded:this.onVideoFinish}),1===this.state.pass&&l.a.createElement("div",{className:"player-wrapper"},this.state.result),2===this.state.pass&&l.a.createElement("p",null,l.a.createElement(w,null," >"),"  V\xe1 para o 12 andar"),2===this.state.pass&&l.a.createElement("div",{className:"item button-parrot"},l.a.createElement("button",{onClick:this.nextStep},"Pr\xf3ximo",l.a.createElement("div",{className:"parrot"}),l.a.createElement("div",{className:"parrot"}),l.a.createElement("div",{className:"parrot"}),l.a.createElement("div",{className:"parrot"}),l.a.createElement("div",{className:"parrot"}),l.a.createElement("div",{className:"parrot"}))))}}]),t}(l.a.Component),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(t?"url(":"","assets/").concat(e,".svg").concat(t?")":"")},L=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#FF6AC1"}},t)},q=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#EFF59B"}},t)},C=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#9AEDFE"}},t)},S=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#57EE89"}},t)},j=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#57C7FF"}},t)},N=function(e){var t=e.children;return l.a.createElement("span",{style:{color:"#909090"}},t)},F=function(e){function t(e){var a;Object(i.a)(this,t);return(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={steps:[{id:"5andarsul",url:"https://www.youtube.com/watch?v=EN37lf2XrFQ&feature=youtu.be",label:"5\xba andar ala sul"},{id:"12andarsul",url:"https://www.youtube.com/watch?v=cjPlLM6UOY4&feature=youtu.be",label:"12\xba andar ala sul"},{id:"12andarnorte",url:"https://www.youtube.com/watch?v=D27944kmN_Y&feature=youtu.be",label:"12\xba andar ala norte"},{id:"16andarsul",url:"https://www.youtube.com/watch?v=BpF7XWTKMGI&feature=youtu.be",label:"16\xba andar ala sul"},{id:"16andarnorte",url:"https://www.youtube.com/watch?v=WwCnJsSnnRo&feature=youtu.be",label:"16\xba andar ala norte"}],route:[{id:"1",steps:["5andarsul","12andarsul","12andarnorte","16andarsul","16andarnorte"]},{id:"2",steps:["16andarsul","16andarnorte","5andarsul","12andarsul","12andarnorte"]},{id:"3",steps:["12andarnorte","5andarsul","12andarsul","16andarnorte","16andarsul"]}],equip:"0"},a.setEquip=a.setEquip.bind(Object(m.a)(a)),a.getStep=a.getStep.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setEquip",value:function(e){this.setState({equip:e})}},{key:"getStep",value:function(e){var t=this,a=this.state.route.find((function(e){return e.id===t.state.equip}));if(a)return this.state.steps.find((function(t){return t.id===a.steps[e]}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f.a,{ref:function(t){return e.parallax=t},pages:8,scrolling:!1},l.a.createElement(f.a.Layer,{offset:0,speed:0,factor:4,style:{backgroundImage:x("stars",!0),backgroundSize:"cover"}}),l.a.createElement(f.a.Layer,{offset:1,speed:1,style:{backgroundColor:"#eb145f"}}),l.a.createElement(f.a.Layer,{offset:2,speed:1,style:{backgroundColor:"#2774ac"}}),l.a.createElement(f.a.Layer,{offset:3,speed:1,style:{backgroundColor:"#8060a5"}}),l.a.createElement(f.a.Layer,{offset:4,speed:1,style:{backgroundColor:"#ff9100"}}),l.a.createElement(f.a.Layer,{offset:5,speed:1,style:{backgroundColor:"#243B4A"}}),l.a.createElement(f.a.Layer,{offset:6,speed:1,style:{backgroundColor:"#805E73"}}),l.a.createElement(f.a.Layer,{offset:7,speed:1,style:{backgroundColor:"#87BCDE"}}),l.a.createElement(f.a.Layer,{offset:1,speed:.8,style:{opacity:.2}},l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"55%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"10%",marginLeft:"15%"}})),l.a.createElement(f.a.Layer,{offset:1.05,speed:.3,style:{pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:x("compass"),style:{width:"15%",marginLeft:"65%"}})),l.a.createElement(f.a.Layer,{offset:1.75,speed:.5,style:{opacity:.2}},l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"70%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"40%"}})),l.a.createElement(f.a.Layer,{offset:1.85,speed:.3,style:{pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:x("map"),style:{width:"15%",marginLeft:"15%"}})),l.a.createElement(f.a.Layer,{offset:2,speed:.2,style:{opacity:.2}},l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"10%",marginLeft:"10%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"75%"}})),l.a.createElement(f.a.Layer,{offset:2.6,speed:-.1,style:{opacity:.4}},l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"60%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"25%",marginLeft:"30%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"10%",marginLeft:"80%"}})),l.a.createElement(f.a.Layer,{offset:3.6,speed:.4,style:{opacity:.6}},l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"20%",marginLeft:"5%"}}),l.a.createElement("img",{alt:"",src:x("cloud"),style:{display:"block",width:"15%",marginLeft:"75%"}})),l.a.createElement(f.a.Layer,{offset:4.5,speed:-.4,style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}},l.a.createElement("img",{alt:"",src:x("earth"),style:{width:"60%"}})),l.a.createElement(f.a.Layer,{offset:3,speed:-.3,style:{backgroundSize:"80%",backgroundPosition:"center",backgroundImage:x("clients",!0)}}),l.a.createElement(f.a.Layer,{offset:0,speed:.5,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"item",style:{height:"250px"}},l.a.createElement("img",{src:"assets/Wiz_BPO_negativa.png",alt:"Wiz BPO",style:{height:"100%"}})),l.a.createElement("div",{className:"item",style:{whiteSpace:"pre",fontFamily:"Menlo-Regular, Menlo, monospace",fontSize:14,lineHeight:"10px",color:"white"}},l.a.createElement("p",null,l.a.createElement(N,null," >"),"  ",l.a.createElement(j,null,"Bem vindo intercambista!")),l.a.createElement("p",null,l.a.createElement(N,null," >"),"  npm install wiz-bpo --save"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(N,null," 1"),"  ",l.a.createElement(L,null,"new")," Wizzer",l.a.createElement(N,null,"({")),l.a.createElement("p",null,l.a.createElement(N,null," 2"),"      ",l.a.createElement(q,null,"output"),l.a.createElement(L,null,":")," _nova_percep\xe7\xe3o",l.a.createElement(N,null,",")),l.a.createElement("p",null,l.a.createElement(N,null," 3"),"      ",l.a.createElement(q,null,"publicport"),l.a.createElement(L,null,":")," ",l.a.createElement(S,null,"'5\xba andar ala sul'")),l.a.createElement("p",null,l.a.createElement(N,null," 4"),"          ",l.a.createElement(L,null,"||"),"\xa0",l.a.createElement(S,null,"'12\xba andar norte'")),l.a.createElement("p",null,l.a.createElement(N,null," 5"),"          ",l.a.createElement(L,null,"||"),"\xa0",l.a.createElement(S,null,"'12\xba andar sul'")),l.a.createElement("p",null,l.a.createElement(N,null," 6"),"          ",l.a.createElement(L,null,"||"),"\xa0",l.a.createElement(S,null,"'16\xba andar ala norte'")),l.a.createElement("p",null,l.a.createElement(N,null," 7"),"          ",l.a.createElement(L,null,"||"),"\xa0",l.a.createElement(S,null,"'16\xba andar ala sul'"),l.a.createElement(N,null,",")),l.a.createElement("p",null,l.a.createElement(N,null," 8"),"  ",l.a.createElement(N,null,"})"),l.a.createElement(L,null,"."),l.a.createElement(C,null,"start"),l.a.createElement(N,null,"()"))),l.a.createElement("div",{className:"item button-jittery"},l.a.createElement("button",{onClick:function(){return e.parallax.scrollTo(1)}},"Iniciar!")))),l.a.createElement(f.a.Layer,{offset:1,speed:0,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"item",style:{whiteSpace:"pre",fontFamily:"Menlo-Regular, Menlo, monospace",fontSize:20,lineHeight:"20px",color:"white",height:"50vh"}},l.a.createElement(y.a,{width:480,height:480,displayQuantityOfSide:2,currentFigureScale:1.2,navigation:!1,enableHeading:!0,active:0},l.a.createElement("img",{src:x("backpack"),alt:"Time 1",onClick:function(){return e.setEquip("1")}}),l.a.createElement("img",{src:x("backpack_1"),alt:"Time 2",onClick:function(){return e.setEquip("2")}}),l.a.createElement("img",{src:x("backpack_2"),alt:"Time 3",onClick:function(){return e.setEquip("3")}}))),l.a.createElement("div",{className:"item button-jittery",style:{height:"50vh"}},"0"!==this.state.equip&&l.a.createElement("button",{onClick:function(){return e.parallax.scrollTo(2)}},"Time ",this.state.equip,", come\xe7ar!")))),l.a.createElement(f.a.Layer,{offset:2,speed:0,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},"0"!==this.state.equip&&l.a.createElement(k,{id:"stp-1",equip:this.state.equip,onFinish:function(){return e.parallax.scrollTo(3)},dest:function(t){return e.getStep("0")}})),l.a.createElement(f.a.Layer,{offset:3,speed:0,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},"0"!==this.state.equip&&l.a.createElement(k,{id:"stp-2",equip:this.state.equip,onFinish:function(){return e.parallax.scrollTo(4)},dest:function(t){return e.getStep("1")}})),l.a.createElement(f.a.Layer,{offset:4,speed:0,onClick:function(){return e.parallax.scrollTo(4)},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},"0"!==this.state.equip&&l.a.createElement(k,{id:"stp-3",equip:this.state.equip,onFinish:function(){return e.parallax.scrollTo(5)},dest:function(t){return e.getStep("2")}})),l.a.createElement(f.a.Layer,{offset:5,speed:0,onClick:function(){return e.parallax.scrollTo(4)},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},"0"!==this.state.equip&&l.a.createElement(k,{id:"stp-4",equip:this.state.equip,onFinish:function(){return e.parallax.scrollTo(6)},dest:function(t){return e.getStep("3")}})),l.a.createElement(f.a.Layer,{offset:6,speed:0,onClick:function(){return e.parallax.scrollTo(4)},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},"0"!==this.state.equip&&l.a.createElement(k,{id:"stp-5",equip:this.state.equip,onFinish:function(){return e.parallax.scrollTo(7)},dest:function(t){return e.getStep("4")}})),l.a.createElement(f.a.Layer,{offset:7,speed:-0,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0bd9a0fd.chunk.js.map