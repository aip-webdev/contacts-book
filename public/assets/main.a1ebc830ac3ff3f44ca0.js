!function(){"use strict";var t,e={4695:function(t,e,n){var r=n(7294),a=n(3935),o=n(9711),i=n(6720),c=n(1807),l=n(6974),s=n(4235),u=(0,s.Z)({container:{display:"grid !important",placeItems:"center",height:"100vh"}}),m=n(4065),p=n(2658);function d(){var t=u();return r.createElement(m.Z,{className:t.container},r.createElement(p.Z,{sx:{color:"secondary.main"},variant:"h2",component:"h1",align:"center"},"PAGE NOT FOUND",r.createElement(p.Z,{variant:"h6",component:"p"},"Go to the ",r.createElement(o.rU,{to:"/home"},"your page"))))}var f,h,g,b,x,v,y,E,w,Z,k,C,S,O=n(1508),N=(0,s.Z)({box:{fontWeight:"500"}}),I={mainFirst:"hsl(197,66%,21%)",mainFirst08:"hsla(197,66%,21%,0.8)",mainFirst06:"hsla(197,66%,21%,0.6)",mainFirst02:"hsla(197,66%,21%,0.2)",mainSecond:"hsl(79,55%,92%)",mainSecond08:"hsla(126,15%,72%,0.8)",mainSecond06:"hsl(126,15%,72%)",red:"#dd1b1b",black06:"rgba(0, 0, 0, 0.6)",black03:"rgba(0, 0, 0, 0.3)"},P=n(4345),W=(0,P.Z)({breakpoints:{values:{xs:0,sm:320,md:640,lg:1040,xl:1440}},components:{MuiCssBaseline:{styleOverrides:{body:{overflowX:"hidden",fontWeight:"400",backgroundColor:I.mainSecond06,width:"100vw",overflow:"hidden",margin:"0",height:"100vh"}}}},palette:{primary:{main:I.mainFirst,contrastText:I.mainSecond},secondary:{main:I.mainFirst,contrastText:I.mainSecond},text:{primary:I.mainFirst,secondary:I.mainSecond,disabled:I.black06}}}),j=(0,s.Z)({box:(f={backgroundColor:I.mainSecond,display:"flex",flexDirection:"column",height:"calc(100vh - 65px)",flexGrow:"1","& a":{textDecoration:"none",color:"rgba(18, 69, 89, 0.8)"}},f[W.breakpoints.up("md")]={flexDirection:"row"},f["&::-webkit-scrollbar"]={paddingRight:"10px",width:"7px",height:"4px",zIndex:100,backgroundColor:I.mainSecond06},f["&::-webkit-scrollbar-track"]={borderRadius:"10px","-webkit-box-shadow":"inset 0 0 6px rgba(0, 0, 0, 0.4)",backgroundColor:I.mainSecond08},f["&::-webkit-scrollbar-thumb"]={borderRadius:"10px","-webkit-box-shadow":"inset 0 0 6px rgba(0, 0, 0, 0.4)",backgroundColor:I.mainSecond06},f["&::-webkit-scrollbar-thumb:hover"]={borderRadius:"3px",backgroundColor:I.mainFirst},f),closeTabButton:(h={top:"50%",color:"#124559 !important",right:"-4%",position:"absolute !important",transform:"translateY(-50%)",backgroundColor:"transparent !important"},h[W.breakpoints.up("md")]={right:"0%"},h),tabs:(g={borderRight:1,borderColor:I.mainFirst,minHeight:"60px !important",padding:"0.5em 1em"},g[W.breakpoints.up("md")]={minWidth:"180px",maxWidth:"180px"},g[W.breakpoints.up("lg")]={minWidth:"230px",maxWidth:"260px"},g[W.breakpoints.up("xl")]={minWidth:"260px",maxWidth:"260px"},g["& .Mui-selected"]={color:"".concat(I.mainFirst," !important"),borderColor:"".concat(I.mainFirst," !important")},g["& .MuiTabs-indicator"]={backgroundColor:I.mainFirst06},g["& .MuiButtonBase-root"]={color:"".concat(I.mainFirst," !important"),fontWeight:"700 !important",fontSize:" 1rem !important",lineHeight:"1.5 !important",display:"inline-flex",flexDirection:"row","& .MuiOutlinedInput-root":{opacity:"1",color:"".concat(I.mainSecond08," !important"),backgroundColor:"transparent !important"}},g),tab:{position:"relative"}}),M=(0,s.Z)({box:(b={padding:"1em"},b[W.breakpoints.up("md")]={padding:"1em 1em 0 1em"},b),tabPanel:{flex:"1 1 auto"}}),B=function(t,e,n){(0,r.useEffect)((function(){return window.addEventListener(t,e),function(){return window.removeEventListener(t,e)}}),[e,t,n])},F=function(){var t=function(){var t=(0,r.useState)({height:0,width:0}),e=t[0],n=t[1];return(0,r.useEffect)((function(){n({height:window.innerHeight,width:window.innerWidth})}),[]),B("resize",(function(){return n({height:window.innerHeight,width:window.innerWidth})})),e}().width,e=(0,r.useState)({isSm:!0,isMd:!0,isLg:!0,isXl:!0}),n=e[0],a=e[1];n.isSm,n.isMd,n.isLg,n.isXl;return(0,r.useEffect)((function(){a(t<640?{isSm:!0,isMd:!1,isLg:!1,isXl:!1}:t<1040?{isSm:!1,isMd:!0,isLg:!1,isXl:!1}:t<1440?{isSm:!1,isMd:!1,isLg:!0,isXl:!1}:{isSm:!1,isMd:!1,isLg:!1,isXl:!0})}),[t]),n},L=function(){return L=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},L.apply(this,arguments)},T=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},A=r.memo((function(t){var e=t.children,n=t.value,a=t.index,o=T(t,["children","value","index"]),i=M(),c=F().isSm;return r.createElement("div",L({className:i.tabPanel,role:"tabpanel",hidden:n!==a},function(t,e){return t?{id:"simple-tabpanel-".concat(e),"aria-labelledby":"simple-tab-".concat(e)}:{id:"vertical-tabpanel-".concat(e),"aria-labelledby":"vertical-tab-".concat(e)}}(c,a),o),n===a&&r.createElement(O.Z,{className:i.box},e))})),D=n(5725),G=n(7720),R=n(7109),H=function(){return H=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},H.apply(this,arguments)},z=function(t){var e,n=0;for(e=0;e<t.length;e+=1)n=t.charCodeAt(e)+((n<<5)-n);var r="#";for(e=0;e<3;e+=1){r+="00".concat((n>>8*e&255).toString(16)).substr(-2)}return r},U=r.memo((function(t){var e,n=t.firstName,a=void 0===n?"":n,o=t.lastname,i=void 0===o?"":o;return r.createElement(R.Z,H({},(e="".concat(a," ").concat(i),{sx:{bgcolor:z(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])})))})),_=(0,s.Z)({title:(x={color:I.mainFirst08,fontSize:"1rem !important",fontWeight:"600 !important",letterSpacing:"0.015em  !important",margin:"0 0 1px 0 !important",alignSelf:"center"},x[W.breakpoints.up("md")]={fontSize:"1.1rem !important",fontWeight:"500  !important",letterSpacing:"0.015em  !important"},x)}),X=(0,s.Z)({removeBtn:{lineHeight:"40px",border:"none !important",margin:"0 !important",padding:"0 !important",textAlign:"center","&:hover":{color:"".concat(I.red," !important")}}}),V=n(1986),q=n(6914),K=r.memo((function(t){var e=t.onClickRemoveBtn,n=t.classname,a=X();return r.createElement(q.Z,{type:"button",className:null!=n?n:a.removeBtn,onClick:e,startIcon:r.createElement(V.Z,null)})})),Y=r.memo((function(t){var e=t.contact,n=t.onClickRemoveBtn,a=(e.id,e.email),o=e.name,i=e.lastName,c=e.tel,l=(e.group,_());return r.createElement(r.Fragment,null,r.createElement(D.ZP,{spacing:2,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",sx:{margin:"0 -1em 1em !important"}},r.createElement(D.ZP,{item:!0,xs:2,md:1},r.createElement(U,{firstName:o,lastname:i&&i})),r.createElement(D.ZP,{item:!0,xs:!0},r.createElement(p.Z,{className:l.title},o)),i&&r.createElement(D.ZP,{item:!0,xs:!0},r.createElement(p.Z,{className:l.title},i)),r.createElement(D.ZP,{item:!0,xs:!0},r.createElement(p.Z,{className:l.title},r.createElement("a",{href:"mailto:".concat(a)},a))),c&&r.createElement(D.ZP,{item:!0,xs:!0},r.createElement(p.Z,{className:l.title},r.createElement("a",{href:"tel:".concat(c)},c))),r.createElement(D.ZP,{item:!0,xs:2,md:1},r.createElement(K,{onClickRemoveBtn:function(){n(e)}}))),r.createElement(G.Z,null))})),$=n(4656),J=n(2640),Q=(0,s.Z)({addingTab:(v={},v[W.breakpoints.down("md")]={maxWidth:"170px !important"},v.padding="0 29px !important",v.color="".concat(I.mainFirst," !important"),v.opacity="1 !important",v),tabInput:(y={width:"auto",minWidth:"130px !important",maxWidth:"200px !important"},y[W.breakpoints.up("md")]={minWidth:"100%",maxWidth:"100%",opacity:"1"},y["& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input"]={color:I.mainFirst,border:"none",display:"inline-flex",justifyContent:"center",alignItems:"center",fontWeight:"700",fontSize:"1rem",height:"1rem",lineHeight:"1.5",padding:"0",minHeight:"48px !important"},y["& input:-internal-autofill-selected"]={color:"".concat(I.mainSecond08," !important"),backgroundColor:"transparent !important"},y["& input[placeholder]"]={color:"".concat(I.mainFirst," !important"),backgroundColor:"transparent !important",display:"inline-flex",justifyContent:"center",alignItems:"center",fontWeight:"700",fontSize:"1rem",lineHeight:"1.5",textAlign:"center"},y)}),tt=n(5116),et=function(t){var e=t.action,n=t.ref;B("click",(function(t){var r;t.target instanceof Node&&!(null===(r=n.current)||void 0===r?void 0:r.contains(t.target))&&e()}),[])},nt=n(2026),rt=(0,s.Z)({addingBtn:{backgroundColor:"transparent",border:"none",color:"".concat(I.mainFirst," !important"),marginLeft:"20px",width:"40px","&:hover":{backgroundColor:I.black03,borderRadius:"50% !important"}}}),at=r.memo((function(t){var e=t.onClickAddingBtn,n=t.classname,a=rt();return r.createElement(q.Z,{type:"button",className:null!=n?n:a.addingBtn,onClick:e},r.createElement(nt.Z,null))})),ot=n(4671),it=n(42),ct=function(t){return{login:function(e){return t((function(t){return(0,it.Z)(t,{isAuth:!0,authUserId:e})}))}}},lt=function(t){return{logout:function(){return t((function(t){return(0,it.Z)(t,{isAuth:!1,authUserId:""})}))}}},st=n(1889),ut=function(t){return{createNewUser:function(e){return t((function(t){return{users:(0,st.Z)(e,t.users)}}))}}},mt=n(3019),pt=n(6513),dt=n(6835),ft=function(t,e){return e.find((function(e){return e.id===t}))},ht=function(){return ht=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},ht.apply(this,arguments)},gt=function(t,e){return{addNewGroup:function(n,r){var a=ft(n,e().contacts),o=ht(ht({},a),{contactsGroups:(0,mt.Z)((0,st.Z)(r,a.contactsGroups))});return t((function(t){return{contacts:(0,pt.Z)((0,dt.Z)(a,t.contacts),o,t.contacts)}}))}}},bt=n(6152),xt=function(){return xt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},xt.apply(this,arguments)},vt=function(t,e){return{removeGroup:function(n,r){var a=ft(n,e().contacts),o=xt(xt({},a),{contactsGroups:(0,bt.Z)([r],a.contactsGroups)});return t((function(t){return{contacts:(0,pt.Z)((0,dt.Z)(a,t.contacts),o,t.contacts)}}))}}},yt=function(){return yt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},yt.apply(this,arguments)},Et=function(t,e){return{addNewContact:function(n,r){var a=ft(n,e().contacts),o=yt(yt({},a),{contactsList:(0,st.Z)(r,a.contactsList)});return t((function(t){return{contacts:(0,pt.Z)((0,dt.Z)(a,t.contacts),o,t.contacts)}}))}}},wt=function(){return wt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},wt.apply(this,arguments)},Zt=function(t,e){return{removeContact:function(n,r){var a=ft(n,e().contacts),o=wt(wt({},a),{contactsList:(0,bt.Z)([r],a.contactsList)});return t((function(t){return{contacts:(0,pt.Z)((0,dt.Z)(a,t.contacts),o,t.contacts)}}))}}},kt=function(t){return{addNewContactData:function(e){return t((function(t){return{contacts:(0,st.Z)(e,t.contacts)}}))}}},Ct=function(t){return{setSearchValue:function(e){return t((function(t){return(0,it.Z)(t,{searchField:e})}))}}},St=function(){return St=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},St.apply(this,arguments)},Ot=(0,ot.Z)((function(t,e){return St(St(St(St(St(St(St(St(St({users:[{id:"someId1",email:"some1@gmail.com",password:"somePass1"}],contacts:[{id:"someId1",contactsList:[{id:"someContactID1",name:"Name1",lastName:"Lastname1",email:"contact1@gmail.com",tel:"+71111111111",group:"all"},{id:"someContactID2",name:"Name2",lastName:"Lastname2",email:"contact2@gmail.com",tel:"+72222222222",group:"friends"},{id:"someContactID3",name:"Name3",lastName:"Lastname3",email:"contact3@gmail.com",tel:"+73333333333",group:"all"},{id:"someContactID4",name:"Name4",lastName:"Lastname4",email:"contact4@gmail.com",tel:"+74444444444",group:"friends"},{id:"someContactID5",name:"Name5",lastName:"Lastname5",email:"contact5@gmail.com",tel:"+75555555555",group:"all"},{id:"someContactID6",name:"Name6",lastName:"Lastname6",email:"contact6@gmail.com",tel:"+76666666666",group:"friends"},{id:"someContactID7",name:"Name7",lastName:"Lastname7",email:"contact7@gmail.com",tel:"+77777777777",group:"all"},{id:"someContactID8",name:"Name8",lastName:"Lastname8",email:"contact8@gmail.com",tel:"+788888888888",group:"friends"},{id:"someContactID9",name:"Name9",lastName:"Lastname9",email:"contact9@gmail.com",tel:"+79999999999",group:"all"}],contactsGroups:["all","friends"]}],error:!1,loading:!1,isAuth:!1,authUserId:"",searchField:""},ct(t)),lt(t)),ut(t)),gt(t,e)),vt(t,e)),Et(t,e)),Zt(t,e)),kt(t)),Ct(t))})),Nt=function(){return Nt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},Nt.apply(this,arguments)},It=r.memo((function(t){var e=(0,r.useRef)(null),n=Q(),a=(t.contact,r.useState("")),o=a[0],i=a[1],c=t.contact,l=c.id,s=(c.contactsList,c.contactsGroups),u=F(),m=u.isSm,p=u.isMd;et({action:function(){return i("")},ref:e});var d=Ot((function(t){return t.addNewGroup}));return r.createElement(J.Z,Nt({className:n.addingTab,label:r.createElement(r.Fragment,null,r.createElement(tt.Z,{ref:e,"aria-pressed":!0,className:n.tabInput,type:"text",placeholder:"Add group",value:o,onClick:function(t){i(" ".concat(o.trim()))},onKeyPress:function(t){return function(t){"Enter"===t.key&&(d(l,o.trim().toLowerCase()),i(""),t.target.blur())}(t)},onChange:function(t){return function(t){var e,n=null===(e=t.target)||void 0===e?void 0:e.value;i(n)}(t)}}),o&&r.createElement(at,{onClickAddingBtn:function(){d(l,o.trim().toLowerCase()),i("")}}))},te(m||p,s.length)))})),Pt=(0,s.Z)({modalBack:{position:"absolute",top:"0",left:"0",width:"100vw",backgroundColor:"rgba(0, 0, 0, 0.2)",display:"grid",placeItems:"center",zIndex:"10000",height:"100vh"},modal:(E={backgroundColor:"white",minWidth:"320px",maxWidth:"320px",position:"relative",margin:"0 auto"},E[W.breakpoints.up("md")]={maxWidth:"100vw"},E)}),Wt=r.memo((function(t){var e=t.children,n=(0,r.useState)(),o=n[0],i=n[1],c=Pt(),s=(0,r.useRef)(null),u=(0,l.s0)();return(0,r.useEffect)((function(){var t;i(null!==(t=document.querySelector("#modal"))&&void 0!==t?t:void 0)}),[]),et({action:function(){return u(-1)},ref:s}),o?a.createPortal(r.createElement("div",{className:c.modalBack},r.createElement("div",{ref:s,className:c.modal},e)),o):null})),jt=n(9062),Mt=r.memo((function(){return r.createElement(Wt,null,r.createElement(jt.Z,{color:"primary"}))})),Bt=(0,s.Z)({addingBtn:(w={backgroundColor:"transparent",border:"none",width:"50px",position:"absolute !important",bottom:"0 !important",right:"30% !important"},w[W.breakpoints.up("md")]={marginLeft:"10px",position:"relative !important",bottom:"initial !important",right:"initial !important","&:hover":{backgroundColor:I.black06,borderRadius:"50% !important"}},w),openInputFieldsButton:{minWidth:"40px !important",boxShadow:"2px 1px 2px 1px rgba(18, 69, 89, 0.9)",borderRadius:"50% !important",height:"40px",fontWeight:"700 !important",padding:"0 !important",textAlign:"center",lineHeight:"40px !important",margin:"0 !important",transition:"all 0.25s linear !important","&:hover":{boxShadow:"2px 1px 2px 1px rgba(18, 69, 89, 0.9) inset"}},removeBtn:(Z={position:"absolute !important",bottom:"4% !important",left:"24% !important"},Z[W.breakpoints.up("md")]={position:"relative !important",bottom:"initial !important",left:"initial !important"},Z.lineHeight="40px",Z.border="none !important",Z.margin="0 !important",Z.padding="0 !important",Z.textAlign="center",Z["&:hover"]={color:"".concat(I.red," !important")},Z),stack:(k={display:"flex !important",position:"relative",margin:"0 0 1em 0",padding:"0 0 3em 0",flexFlow:"column wrap !important",alignContent:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"},k[W.breakpoints.up("md")]={margin:"0 1em 1em 0",justifyContent:"space-between !important",flexFlow:"row nowrap !important",alignItems:"baseline !important",alignSelf:"center"},k),tabInput:{opacity:"1","& .MuiOutlinesInput-root":{opacity:"1"},"& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input":{border:"none",display:"inline-flex",justifyContent:"center",alignItems:"center",fontWeight:"700",fontSize:"1rem",height:"1rem",lineHeight:"1.5",padding:"0"},"& input[placeholder]":(C={margin:"0 0 0.5em 0"},C[W.breakpoints.up("md")]={textAlign:"center",display:"inline-flex",justifyContent:"center",alignItems:"center",fontWeight:"700",fontSize:"1rem",lineHeight:"1.5",margin:"0"},C)}}),Ft=n(6447),Lt=n(3462),Tt=n(9074),At=function(){return At=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},At.apply(this,arguments)},Dt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},Gt=((0,Lt.Z)("id",Math.random().toString(36).substring(2,15)),function(t){var e=Dt(t,[]);return(0,Tt.Z)(At({},e),{id:"".concat(Math.random().toString(36).substring(2,15))})}),Rt=(0,s.Z)({formControl:(S={color:I.mainFirst,flex:"1 0 auto",position:"absolute !important",bottom:"0"},S[W.breakpoints.up("md")]={bottom:"initial",position:"relative !important"},S["& #demo-simple-select-standard-label"]={color:I.mainFirst},S)}),Ht=n(6446),zt=n(7666),Ut=n(9560),_t=n(1753),Xt=r.memo((function(t){var e=t.labelName,n=t.list,a=t.onChangeSelect,o=Rt(),i=(0,r.useState)(n[0]),c=i[0],l=i[1];return r.createElement(Ht.Z,{className:o.formControl,variant:"standard"},r.createElement(zt.Z,{id:"demo-simple-select-standard-label"},"Group name"),r.createElement(Ut.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:c,onChange:function(t){return function(t){var e=t.target.value;l(e),a(e)}(t)},label:e},n.map((function(t,e){return r.createElement(_t.Z,{key:e,value:t},t.toUpperCase())}))))})),Vt=function(){return Vt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},Vt.apply(this,arguments)},qt=r.memo((function(t){var e=t.groupNames,n=t.onClickAddingBtn,a=(0,r.useState)("all"),o=a[0],i=a[1],c=(0,r.useState)({name:"",lastName:"",email:"",tel:""}),l=c[0],s=c[1],u=(0,r.useState)(!1),m=u[0],p=u[1],d=Bt();return m?r.createElement(Ft.Z,{className:d.stack},r.createElement(r.Fragment,null,r.createElement(Xt,{labelName:"Group name",list:e,onChangeSelect:i}),Object.keys(l).map((function(t,e){return r.createElement(tt.Z,{key:e+t,"aria-pressed":!0,className:d.tabInput,type:"text",placeholder:"Add ".concat(t),value:Object.values(l)[e],onBlur:function(){var n;return s(Vt(Vt({},l),((n={})[t]="".concat(Object.values(l)[e].trim()),n)))},onClick:function(){var n;return s(Vt(Vt({},l),((n={})[t]=" ".concat(Object.values(l)[e].trim()),n)))},onChange:function(e){return function(t,e){var n,r,a=null===(r=t.target)||void 0===r?void 0:r.value;s(Vt(Vt({},l),((n={})[e]=a,n)))}(e,t)}})})),r.createElement(at,{classname:d.addingBtn,onClickAddingBtn:function(){n(Gt(Vt(Vt({},l),{group:o}))),p(!1),s({name:"",lastName:"",email:"",tel:""}),i("all")}}),r.createElement(K,{classname:d.removeBtn,onClickRemoveBtn:function(){return p(!1)}}))):r.createElement(q.Z,{className:d.openInputFieldsButton,onClick:function(){return p(!0)}},"+")})),Kt=n(5352),Yt=n(8880),$t=n(6946),Jt=n(374),Qt=function(){return Qt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},Qt.apply(this,arguments)},te=function(t,e){return t?{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}:{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},ee=r.memo((function(){var t=(0,r.useState)(0),e=t[0],n=t[1],a=(0,r.useState)(""),o=a[0],i=(a[1],(0,r.useState)()),c=i[0],l=i[1],s=F().isSm,u=j(),m=Ot((function(t){return t.authUserId}),Jt.Z),p=Ot((function(t){return t.contacts}),Jt.Z),d=Ot((function(t){return t.searchField}),Jt.Z),f=Ot((function(t){return t.addNewContact})),h=(Ot((function(t){return t.addNewGroup})),Ot((function(t){return t.removeContact}))),g=Ot((function(t){return t.removeGroup}));if((0,r.useEffect)((function(){if(p&&p&&0!==p.length){var t=(0,Yt.Z)((0,$t.Z)("id",m))(p);t&&l(t)}}),[p]),(0,r.useEffect)((function(){if(d&&c){var t=Qt(Qt({},c),{contactsList:c.contactsList.filter((function(t){return!d||!!Object.values(t).find((function(t){return t.includes(d)}))}))});c&&l(t)}}),[d]),!c)return r.createElement(Mt,null);var b=c.id,x=c.contactsList,v=c.contactsGroups,y=function(t){f(b,t)},E=function(t){h(b,t)};return r.createElement(O.Z,{className:u.box},r.createElement($.Z,{orientation:s?"horizontal":"vertical",variant:"scrollable",value:e,onChange:function(t,e){n(e)},"aria-label":"Groups",className:u.tabs},v.map((function(t,e){return r.createElement(J.Z,Qt({className:u.tab,key:e,label:"all"===t?t:r.createElement(r.Fragment,null,t,r.createElement(Kt.Z,{onClick:function(e){return function(t,e){e.stopPropagation(),g(b,t)}(t,e)},className:u.closeTabButton}))},te(s,e)))})),r.createElement(It,{contact:c})),v.map((function(t,n){return r.createElement(A,{key:n,value:e,index:n},r.createElement(qt,{groupNames:v,onClickAddingBtn:y}),"all"===t&&!o&&x.length>0&&x.map((function(t){return r.createElement(Y,{key:t.id,contact:t,onClickRemoveBtn:E})})),"all"!==t&&x.length>0&&x.filter((function(e){return e.group===t})).map((function(t){return r.createElement(Y,{key:t.id,contact:t,onClickRemoveBtn:E})})))})))})),ne=function(t){var e=t.children,n=Ot((function(t){return t.isAuth})),a=(0,l.s0)();return(0,r.useEffect)((function(){n||a("/signin")}),[n]),e},re=function(){var t=N();return r.createElement(ne,null,r.createElement(O.Z,{className:t.box},r.createElement(ee,null)))},ae=(0,s.Z)({container:{display:"grid !important",placeItems:"center",height:"100vh",padding:"0 !important"},box:{width:"320px",height:"460px",display:"flex",padding:"62px",boxShadow:"0 0 12px rgb(0 0 0 / 50%)",fontWeight:"500",borderRadius:"3%",flexDirection:"column",backgroundColor:"#124559",minWidth:"320px"},input:{marginBottom:"2rem !important","& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input":{borderColor:"".concat(I.mainSecond06),borderWidth:"1.5px !important"}}}),oe=n(571);function ie(t){return!!t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)}var ce,le,se,ue=(0,P.Z)({breakpoints:{values:{xs:0,sm:320,md:640,lg:1040,xl:1440}},components:{MuiCssBaseline:{styleOverrides:{body:{overflowX:"hidden",fontWeight:"400",backgroundColor:I.mainSecond06,width:"100vw",overflow:"hidden",margin:"0 0 0 0",height:"100vh"}}}},palette:{secondary:{main:I.mainFirst,contrastText:I.mainFirst},primary:{main:I.mainSecond06,contrastText:I.mainFirst},text:{primary:I.mainSecond,secondary:I.mainSecond,disabled:I.black06}}}),me=n(1421),pe=function(){return pe=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},pe.apply(this,arguments)},de=function(t,e,n,r){return new(n||(n=Promise))((function(a,o){function i(t){try{l(r.next(t))}catch(t){o(t)}}function c(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}l((r=r.apply(t,e||[])).next())}))},fe=function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},he=r.memo((function(t){var e=t.children,n=t.authUser,a=ae(),o=(0,r.useState)(""),c=o[0],l=o[1],s=(0,r.useState)(""),u=s[0],p=s[1],d=(0,r.useState)({errorMail:!1,errorMailText:""}),f=d[0],h=f.errorMail,g=f.errorMailText,b=d[1],x=(0,r.useState)({errorPass:!1,errorPassText:""}),v=x[0],y=v.errorPass,E=v.errorPassText,w=x[1],Z=(0,r.useState)(e),k=Z[0],C=Z[1],S=(0,r.useState)(),N=S[0],I=S[1];(0,r.useEffect)((function(){I(Gt({email:c,password:u}))}),[c,u]);return(0,r.useEffect)((function(){if(e)try{de(void 0,void 0,void 0,(function(){return fe(this,(function(t){return[2,r.Children.map(e,(function(t){return r.isValidElement(t)?r.cloneElement(t,pe(pe({},oe.Z),{handleClick:function(t){return function(t){var e=t.id,r=t.email,a=t.password;if(!r)return b({errorMail:!0,errorMailText:"Enter your e-mail"}),a?void 0:void w({errorPass:!0,errorPassText:"Enter your password"});if(a)if(ie(r)){if(a.length<6)w({errorPass:!0,errorPassText:"The password must contain at least 6 characters"});else if(!y&&!h){var o=n({id:e,email:r,password:a});o?"mailError"===o.type?b({errorMail:!0,errorMailText:o.message}):w({errorPass:!0,errorPassText:o.message}):(l(""),p(""))}}else b({errorMail:!0,errorMailText:"Incorrect e-mail"});else w({errorPass:!0,errorPassText:"Enter your password"})}(t)},inputError:h&&y,user:N})):t}))]}))})).then((function(t){C(t)}))}catch(t){console.log(t)}}),[e,h&&y,N]),r.createElement(me.a,{theme:ue},r.createElement(i.ZP,null),r.createElement(m.Z,{className:a.container},r.createElement(O.Z,{className:a.box,component:"form",autoComplete:"off"},r.createElement(tt.Z,{error:h,className:a.input,id:"outlined-required",label:"E-mail",type:"email",autoComplete:"email",variant:"outlined",helperText:g,value:c,onChange:function(t){return function(t){var e,n=null===(e=t.target)||void 0===e?void 0:e.value;l(n),(""===n||ie(n))&&b({errorMail:!1,errorMailText:""})}(t)}}),r.createElement(tt.Z,{error:y,className:a.input,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",helperText:E,value:u,onChange:function(t){return function(t){var e,n=null===(e=t.target)||void 0===e?void 0:e.value;p(n),(""===n||n.length>=6)&&w({errorPass:!1,errorPassText:""})}(t)}}),!!k&&k)))})),ge=n(6307),be=n(856),xe=(0,s.Z)({block:{display:"flex",flexDirection:"column"},firstButton:{"&:hover":{boxShadow:"0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)"}},secondButton:{padding:"6px 0",width:"100%"},span:{fontSize:"1 rem",color:"".concat(I.mainSecond06," !important"),margin:"15px auto 15px"}}),ve=r.memo((function(t){var e=xe(),n=t.inputError,a=t.handleClick,o=t.user,i=(0,l.s0)();return r.createElement("div",{className:e.block},r.createElement(q.Z,{className:e.firstButton,disabled:n,variant:"contained",endIcon:r.createElement(ge.Z,null),onClick:function(){return a&&a(o)}},"Sign in"),r.createElement("span",{className:e.span},"New to this site?"),r.createElement(q.Z,{className:e.secondButton,onClick:function(){return i("/signup")},variant:"outlined",endIcon:r.createElement(be.Z,null)},"Create account"))})),ye=function(){var t=Ot((function(t){return[t.users,t.loading,t.error,t.isAuth,t.login]})),e=t[0],n=t[1],a=t[2],o=t[3],i=t[4],c=(0,l.s0)();return o?r.createElement(l.Fg,{to:"/contacts"}):r.createElement(he,{authUser:function(t){if(!n&&!a){var r=(0,Yt.Z)((0,$t.Z)("email",t.email))(e);return r?r.password!==t.password?{type:"mailPassword",message:"Wrong password"}:(i(r.id),void c("/contacts")):{type:"mailError",message:"Account with this address is not registered"}}}},r.createElement(ve,null))},Ee=n(4456),we=(0,s.Z)({block:{display:"flex",flexDirection:"column"},firstButton:{"&:hover":{boxShadow:"0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)"}},secondButton:{padding:"6px 0",width:"100%"},span:{fontSize:"1 rem",color:"".concat(I.mainSecond06," !important"),margin:"15px auto 15px"}}),Ze=r.memo((function(t){var e=t.inputError,n=t.handleClick,a=t.user,o=we(),i=(0,l.s0)();return r.createElement(r.Fragment,null,r.createElement(q.Z,{className:o.firstButton,disabled:e,variant:"contained",onClick:function(){return n&&n(a)},endIcon:r.createElement(ge.Z,null)},"Create account"),r.createElement("span",{className:o.span},"Already have an account?"),r.createElement(q.Z,{className:o.secondButton,onClick:function(){return i("/signin")},variant:"outlined",endIcon:r.createElement(Ee.Z,null)},"Sign in"))})),ke=function(){var t=Ot((function(t){return[t.users,t.loading,t.error,t.isAuth,t.login,t.createNewUser,t.addNewContactData]})),e=t[0],n=t[1],a=t[2],o=t[3],i=t[4],c=t[5],s=t[6],u=(0,l.s0)();return o?r.createElement(l.Fg,{to:"/contacts"}):r.createElement(he,{authUser:function(t){if(!n&&!a)try{var r=Gt({email:"some@gmail.com",name:"Name",lastName:"Lastname",tel:"88002000600",group:"all"});if((0,Yt.Z)((0,$t.Z)("email",t.email))(e))return{type:"mailError",message:"An account with this address has already been registered"};c(t),s({id:t.id,contactsList:[r],contactsGroups:["all"]}),i(t.id),u("/contacts")}catch(t){console.log(t)}}},r.createElement(Ze,null))},Ce=(0,s.Z)({"& .MuiPaper-root":{minHeight:"65px",maxHeight:"65px",position:"fixed",width:"100vw"},appBar:{minHeight:"65px",maxHeight:"65px",position:"fixed !important",width:"100vw",zIndex:1e3},link:{textDecoration:"none"},toolbar:(ce={height:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"320px",padding:"0 10px !important",width:"100vw",margin:"0 auto"},ce[W.breakpoints.up("xl")]={width:"1400px"},ce),title:{color:I.mainSecond,fontSize:"1.35rem !important",fontWeight:"500 !important",letterSpacing:"0.08em !important",minWidth:"20vw",display:"flex",justifyContent:"center",alignItems:"center",cursor:"none"},title__icon:{marginRight:"5px"}}),Se=n(3720),Oe=n(4386),Ne=(0,s.Z)({formControl:{minWidth:"140px !important",margin:"0 auto 0 0 !important",position:"relative",minHeight:"50px"},textField:{"& .MuiInputLabel-root, .MuiOutlinedInput-root":{color:I.mainSecond,"&.Mui-focused":{color:I.mainSecond}},"& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input":{borderColor:"".concat(I.mainSecond," !important"),borderWidth:"1.5px !important"},"& .MuiOutlinedInput-input":{paddingRight:"35px"}},searchIcon:{color:I.mainSecond,position:"absolute",right:"5%",top:"50%",transform:"translateY(-50%)"}}),Ie=n(2761),Pe=r.memo((function(t){var e=t.handler,n=t.searchTextVal,a=Ne();return r.createElement(Ht.Z,{className:a.formControl,variant:"outlined"},r.createElement(tt.Z,{className:a.textField,id:"search",label:"Search",color:"info",type:"text",value:n,onChange:e}),r.createElement(Ie.Z,{className:a.searchIcon}))})),We=(0,s.Z)({button:(le={padding:"10px 18px 10px 10px !important",borderWidth:"1.5px !important","&:hover":{borderWidth:"1.7px solid !important"}},le[ue.breakpoints.up("md")]={padding:"10px 20px !important",minWidth:"108px !important"},le)}),je=r.memo((function(t){var e=F().isSm,n=We(),a=t.btnIcon,o=t.onClick,i=t.text,c=t.btnClassName,l=void 0===c?n.button:c;return r.createElement(q.Z,{className:l,onClick:o,variant:"contained",endIcon:a},!e&&i)})),Me=n(4151),Be=n(6909),Fe=r.memo((function(){var t=F().isSm,e=Ce(),n=(0,l.s0)(),a=Ot((function(t){return t.isAuth})),i=Ot((function(t){return t.logout})),c=Ot((function(t){return t.searchField})),s=Ot((function(t){return t.setSearchValue}));(0,r.useEffect)((function(){a||n("/signin")}),[]);return r.createElement(Se.Z,{position:"static",className:e.appBar},r.createElement(Oe.Z,{className:e.toolbar},!t&&r.createElement(p.Z,{className:e.title},r.createElement(Be.Z,{className:e.title__icon}),"Contacts"),r.createElement(Pe,{searchTextVal:c,handler:function(t){return function(t){var e,n=null===(e=t.target)||void 0===e?void 0:e.value;s(n)}(t)}}),r.createElement(o.rU,{className:e.link,to:"/signin"},r.createElement(je,{onClick:function(){i()},text:"Logout",btnIcon:r.createElement(Me.Z,null)}))))})),Le=(0,s.Z)({content:(se={minWidth:" 320px",maxWidth:"639px",paddingTop:"65px",height:"100vh",margin:"0 auto"},se[W.breakpoints.up("md")]={minWidth:"640px",maxWidth:"999px"},se[W.breakpoints.up("lg")]={minWidth:"1000px",maxWidth:"1399px"},se[W.breakpoints.up("xl")]={minWidth:"1400px",maxWidth:"1400px"},se)}),Te=r.memo((function(t){var e=t.children,n=Le();return r.createElement(O.Z,{className:n.content},e)})),Ae=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1];return(0,r.useEffect)((function(){n(!0)}),[]),e?r.createElement(r.Fragment,null,r.createElement(Fe,null),r.createElement(Te,null,r.createElement(l.j3,null))):r.createElement(Mt,null)},De=document.getElementById("root");(De&&De.hasChildNodes()?a.hydrate:a.render)(r.createElement(o.VK,null,r.createElement((function(){return r.createElement(c.Z,{theme:W},r.createElement(i.ZP,null),r.createElement(l.Z5,null,r.createElement(l.AW,{path:"/",element:r.createElement(Ae,null)},r.createElement(l.AW,{index:!0,element:r.createElement(l.Fg,{to:"/contacts"})}),r.createElement(l.AW,{path:"/contacts",element:r.createElement(re,null)})),r.createElement(l.AW,{path:"/signin",element:r.createElement(ye,null)}),r.createElement(l.AW,{path:"/signup",element:r.createElement(ke,null)}),r.createElement(l.AW,{path:"*",element:r.createElement(d,null)})))}),null)),De)}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,t=[],r.O=function(e,n,a,o){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],o=t[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var s=a();void 0!==s&&(e=s)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,a,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={179:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],c=n[1],l=n[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var u=l(r)}for(e&&e(n);s<i.length;s++)o=i[s],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var a=r.O(void 0,[216],(function(){return r(4695)}));a=r.O(a)}();