(this["webpackJsonpe-commerce_project"]=this["webpackJsonpe-commerce_project"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),c=a.n(i),l=(a(37),a(5)),s=a.n(l),o=a(30),m=a(11),p=a(7),u=a(8),d=a(10),b=a(9),h=(a(39),a(40),a(41),a(1));var g=Object(h.f)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.linkUrl,c=e.history,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item")},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"bg-img"}),r.a.createElement("div",{className:"content",onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{class:"subtitle"},"Shop Now")))})),f=(a(46),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://media.tenor.com/images/b268608343797c9610bccd4585feaf55/tenor.gif",id:1,linkUrl:"/shop/hats"},{title:"jackets",imageUrl:"https://media.tenor.com/images/9b0419a884db01926da4bbccbcc2b816/tenor.gif",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://thumbs.gfycat.com/AccomplishedDefinitiveArcticwolf-size_restricted.gif",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){return r.a.createElement(g,{id:e.id,title:e.title,imageUrl:e.imageUrl,size:e.size,linkUrl:e.linkUrl})})))}}]),a}(r.a.Component));var v=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(f,null))},E=a(13);a(47);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("title",null,"Group"),U=r.a.createElement("desc",null,"Created with Sketch."),N=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),j=function(e){var t=e.svgRef,a=e.title,n=k(e,["svgRef","title"]);return r.a.createElement("svg",w({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?y:a?r.a.createElement("title",null,a):null,U,N)},O=r.a.forwardRef((function(e,t){return r.a.createElement(j,w({svgRef:t},e))})),S=(a.p,a(16)),C=a.n(S);a(48),a(52);C.a.initializeApp({apiKey:"AIzaSyCoPXzokR_oo1ZdU8OM1Gjq7dEKtoHUbDo",authDomain:"ecommerce-beffd.firebaseapp.com",databaseURL:"https://ecommerce-beffd.firebaseio.com",projectId:"ecommerce-beffd",storageBucket:"ecommerce-beffd.appspot.com",messagingSenderId:"652362237742",appId:"1:652362237742:web:91244e963261879fba5cbf",measurementId:"G-8KTE4JCXV2"});var x=C.a.auth(),B=C.a.firestore(),P=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B.doc("users/".concat(t.uid)),e.next=3,a.get();case 3:if(e.sent.exists){e.next=15;break}return n=t.displayName,r=t.email,i=new Date,e.prev=7,e.next=10,a.set({displayName:n,email:r,createdAt:i});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log("user doesn't exist ".concat(e.t0));case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}(),A=new C.a.auth.GoogleAuthProvider;A.setCustomParameters({prompt:"select_account"});var T=function(){return x.signInWithPopup(A)};C.a;var I=function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(E.b,{to:"/e-commerce_project",className:"logo-container"},r.a.createElement(O,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(E.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(E.b,{to:"/shop/hats",className:"option"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return x.signOut()}},"SIGN-OUT"):r.a.createElement(E.b,{to:"/sign-in"},r.a.createElement("div",{className:"option"},"SIGN-IN"))))},W=(a(54),a(15)),J=a(12),R=(a(55),function(e){var t=e.handleChange,a=e.label,n=Object(J.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),G=(a(56),a(57),function(e){var t=e.children,a=e.IsSignGoogle,n=Object(J.a)(e,["children","IsSignGoogle"]);return r.a.createElement("button",Object.assign({className:a?"google-sign":"custom-button"},n),t)}),z=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,i,c,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.email,i=n.password,t.prev=2,t.next=5,x.signInWithEmailAndPassword(r,i);case 5:return c=t.sent,l=c.user,t.next=9,P(l);case 9:e.setState({email:"",password:""}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(W.a)({},n,r))},e.state={email:"",password:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(R,{type:"text",name:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(R,{type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),r.a.createElement("div",{className:"btn"},r.a.createElement(G,{type:"submit"},"Sign In"),r.a.createElement(G,{onClick:T,type:"button",IsSignGoogle:!0},"Sign In With Google"))))}}]),a}(r.a.Component),D=(a(58),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,i,c,l,o,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,l=n.confirmpassword,c===l){t.next=5;break}return alert("Passwords are not matching"),t.abrupt("return");case 5:return t.prev=5,t.next=8,x.createUserWithEmailAndPassword(i,c);case 8:return o=t.sent,m=o.user,t.next=12,P(m,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmpassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(W.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmpassword:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(R,{name:"displayName",label:"Display Name",handleChange:this.handleChange,value:this.state.displayName,type:"text",required:!0}),r.a.createElement(R,{name:"email",label:"Email",handleChange:this.handleChange,value:this.state.email,type:"email",required:!0}),r.a.createElement(R,{name:"password",label:"Password",handleChange:this.handleChange,value:this.state.password,type:"password",required:!0}),r.a.createElement(R,{name:"confirmpassword",label:"Confirm Password",handleChange:this.handleChange,value:this.state.confirmpassword,type:"password",required:!0}),r.a.createElement(G,{type:"submit"},"Register Now")))}}]),a}(r.a.Component));var M=function(){return r.a.createElement("div",{className:"SignInSignOut"},r.a.createElement("div",null,r.a.createElement("h1",null,"I already have an Account"),r.a.createElement("span",null,"Sign in with email and password"),r.a.createElement(z,null)),r.a.createElement("div",null,r.a.createElement("h1",null,"Register Now"),r.a.createElement("span",null,"Register Now with email and password"),r.a.createElement(D,null)))},F=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}];a(59),a(60);var V=function(e){var t=e.name,a=e.imageUrl,n=e.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},"Rs.",n)))};var q=function(e){var t=e.title,a=(e.id,e.items);return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(J.a)(e,["id"]);return r.a.createElement(V,Object.assign({key:t},a))}))))},H=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={collection:F},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.collection;return r.a.createElement("div",null,r.a.createElement("h1",null,"SHOP PAGE"),r.a.createElement("div",null,e.map((function(e){var t=e.id,a=Object(J.a)(e,["id"]);return r.a.createElement(q,Object.assign({id:t},a))}))))}}]),a}(r.a.Component),L=function(e){return console.log(e),r.a.createElement("h1",null,"HATS")},K=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=x.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,P(a);case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(o.a)({id:t.id},t.data())}),console.log(e.state.currentUser)}));case 5:e.setState({currentUser:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(I,{currentUser:this.state.currentUser}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/e-commerce_project",component:v}),r.a.createElement(h.a,{path:"/e-commerce_project/shop/hats",component:L}),r.a.createElement(h.a,{path:"/sign-in",component:M}),r.a.createElement(h.a,{path:"/shop",component:H}))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.efabb1cf.chunk.js.map