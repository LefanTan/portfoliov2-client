"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[534],{4534:function(e,t,i){i.r(t),i.d(t,{default:function(){return Ne}});var n=i(9439),a=i(2791),r="about_section__gFgZb",s="about_main_container__9i42F",l="about_news_container__Va1o2",o="about_line_top__7lRTP",c="about_line_right__aGhJ-",d="about_line_bottom__4R7PJ",u="about_line_left__twEdZ",m="about_rotate_background__cIA2U",h="about_cutout_button__rV+LC",_="about_left_article__F3TiV",x="about_paragraph__uOM6O",f="about_read_more__faiRy",v="about_right_article__c6u7B",j="about_opacity_enter__+PEzI",p="about_opacity_enter_active__NzJlM",b="about_opacity_exit__QPRY7",g="about_opacity_exit_active__6mJ42",N=i(3077),w=i(9685),k=i(9554),E=i(9239),L=i(9083),y=i(532),Z=i(5880),S=i(184),C=function(){var e,t,i,C,M,O,R,T,z=(0,a.useContext)(N.R),A=(0,a.useRef)(null),I=(0,a.useState)(!1),D=(0,n.Z)(I,2),B=D[0],U=D[1],q=(0,a.useState)(!1),F=(0,n.Z)(q,2),J=F[0],W=F[1],H=(0,a.useState)(!0),X=(0,n.Z)(H,2),P=X[0],G=X[1],V=(0,a.useState)(""),Y=(0,n.Z)(V,2),Q=Y[0],K=Y[1],$=(0,a.useState)(""),ee=(0,n.Z)($,2),te=ee[0],ie=ee[1],ne=(0,a.useCallback)((function(){var e,t;if(A.current){var i=(null===(e=A.current)||void 0===e?void 0:e.clientWidth)/(null===(t=A.current)||void 0===t?void 0:t.clientHeight)<=1.5;W(i&&""!==te),G(!i)}}),[te]);return(0,a.useEffect)((function(){var e,t,i,n,a,r;if(null!==(e=z.profile)&&void 0!==e&&e.aboutMe){var s=(null===(t=z.profile)||void 0===t?void 0:t.aboutMe.length)<500?null===(i=z.profile)||void 0===i?void 0:i.aboutMe.length:500;K(null===(n=z.profile)||void 0===n?void 0:n.aboutMe.slice(0,s)),ie(null===(a=z.profile)||void 0===a?void 0:a.aboutMe.slice(s,null===(r=z.profile)||void 0===r?void 0:r.aboutMe.length))}}),[z.profile]),(0,a.useEffect)((function(){return window.addEventListener("resize",ne),ne(),function(){return window.removeEventListener("resize",ne)}}),[ne]),(0,S.jsxs)("section",{ref:A,id:"about",className:r,children:[(0,S.jsx)("img",{src:L,className:"old-texture flipX",alt:"old texture"}),(0,S.jsx)(y.Z,{appear:!0,in:!B,unmountOnExit:!0,timeout:200,classNames:{enter:j,enterDone:p,exit:b,exitActive:g},children:(0,S.jsxs)("div",{className:s,children:[(0,S.jsx)("img",{src:w,alt:"rotating background",className:m}),(0,S.jsx)("button",{className:h,onClick:function(){return U(!0)},children:(0,S.jsx)("img",{src:(null===(e=z.profile)||void 0===e||null===(t=e.mediaUrls)||void 0===t?void 0:t.at(0))||E,alt:"lefan's cool cutout"})})]})}),(0,S.jsx)(y.Z,{appear:!0,in:B,unmountOnExit:!0,timeout:400,classNames:{enter:j,enterDone:p,exit:b,exitActive:g},children:(0,S.jsxs)("div",{className:l,children:[(0,S.jsx)("div",{className:o}),(0,S.jsx)("div",{className:c}),(0,S.jsx)("div",{className:d}),(0,S.jsx)("div",{className:u}),(0,S.jsxs)("div",{className:_,children:[(0,S.jsx)("h1",{children:"ABOUT ME"}),(0,S.jsxs)("span",{className:x,children:[(0,S.jsx)("img",{src:null===(i=z.profile)||void 0===i||null===(C=i.mediaUrls)||void 0===C?void 0:C.at(1),alt:"profile"}),(0,S.jsx)(k.D,{components:{p:"h1"},children:Q[0]}),(0,S.jsx)(k.D,{children:Q.slice(1)+(J&&!P?"...":"")+(P?te:"")}),J&&(0,S.jsx)("button",{onClick:function(){return G(!P)},className:f,children:P?"Read less >":"Read more >"})]})]}),(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)("h2",{children:"SKILLS"}),(0,S.jsx)("p",{children:null===(M=z.profile)||void 0===M||null===(O=M.skills)||void 0===O?void 0:O.join(", ")}),(0,S.jsx)("img",{src:null===(R=z.profile)||void 0===R||null===(T=R.mediaUrls)||void 0===T?void 0:T.at(2),alt:"profile 2"}),(0,S.jsxs)("button",{onClick:function(){return U(!1)},children:["EXIT ",(0,S.jsx)(Z.fWx,{size:35})]})]})]})})]})},M="contact_section__Wt67u",O="contact_links_container__kgEfJ",R="contact_title__Wn-gg",T="contact_link__nidTD",z="contact_forms__D5xL8",A="contact_submit__qBJkM",I=i(3423),D=i(6355),B={_origin:"https://api.emailjs.com"},U=function(e,t,i){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},q=i(3144),F=i(5671),J=(0,q.Z)((function e(t){(0,F.Z)(this,e),this.status=t.status,this.text=t.responseText})),W=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,a){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,i=new J(t);200===i.status||"OK"===i.text?n(i):a(i)})),r.addEventListener("error",(function(e){var t=e.target;a(new J(t))})),r.open("POST",B._origin+e,!0),Object.keys(i).forEach((function(e){r.setRequestHeader(e,i[e])})),r.send(t)}))},H=function(e,t,i,n){var a=n||B._userID,r=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(i);U(a,e,t);var s=new FormData(r);return s.append("lib_version","3.4.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a),W("/api/v1.0/email/send-form",s)},X=i(197),P=function(){var e,t,i,n=(0,a.useContext)(N.R),r=(0,X.Z)("(max-width: 800px)"),s=(0,a.useRef)(null);return(0,S.jsxs)("section",{id:"contact",className:M,children:[(0,S.jsx)("img",{src:L,className:"old-texture",alt:"old texture"}),(0,S.jsxs)("div",{className:O,children:[(0,S.jsx)("h1",{className:R,children:"Let's Talk"}),(0,S.jsxs)("address",{children:[(0,S.jsxs)("a",{href:null===(e=n.profile)||void 0===e?void 0:e.linkedin,className:T,"aria-label":"linkedin",target:"_blank",rel:"noreferrer",children:[(0,S.jsx)(D.BUd,{style:{marginBottom:"2px"},size:"2.5rem"}),r?"":"LinkedIn"]}),(0,S.jsxs)("a",{href:null===(t=n.profile)||void 0===t?void 0:t.github,className:T,"aria-label":"github",target:"_blank",rel:"noreferrer",children:[(0,S.jsx)(D.XXB,{size:"2.5rem"})," ",r?"":"Github"]}),(0,S.jsxs)("a",{href:null===(i=n.profile)||void 0===i?void 0:i.resumeUrl,className:T,"aria-label":"resume",target:"_blank",rel:"noreferrer",children:[(0,S.jsx)(D.B$y,{size:"2.5rem",style:{marginBottom:"5px"}}),r?"":"Resume"]})]})]}),(0,S.jsxs)("form",{ref:s,onSubmit:function(e){e.preventDefault(),s.current&&H("service_s2du2od","template_dqmuthk",s.current,"user_z7fnBEw9AAY4ybnnXG6f8").then((function(){var e;alert("Thanks for the email, I'll get back to you soon!"),null===(e=s.current)||void 0===e||e.reset()})).catch((function(e){return console.error("Send email failed...",e)}))},className:z,children:[(0,S.jsx)("img",{src:I,alt:"letter"}),(0,S.jsx)("label",{htmlFor:"name",children:"Name"}),(0,S.jsx)("input",{type:"text",name:"name",id:"name",required:!0}),(0,S.jsx)("label",{htmlFor:"email",children:"Email"}),(0,S.jsx)("input",{type:"email",name:"email",id:"email",required:!0}),(0,S.jsx)("label",{htmlFor:"content",children:"Content"}),(0,S.jsx)("textarea",{name:"message",id:"content",required:!0}),(0,S.jsx)("button",{type:"submit",className:A,children:"SEND"})]})]})},G=i(5390),V=i(9662),Y=i(2333),Q=i(1413),K="projects_section__3Lk70",$="projects_title__+3TAy",ee="projects_project_container__fpkWb",te="projects_image_button__IFtI6",ie="projects_spread_row__fzBsu",ne="projects_show_more_button__pWS6T",ae=i(3504),re=function(){var e=(0,a.useContext)(N.R),t=(0,a.useRef)(null),i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1],o=(0,a.useState)(),c=(0,n.Z)(o,2),d=c[0],u=c[1],m=(0,a.useState)(),h=(0,n.Z)(m,2),_=h[0],x=h[1],f=(0,a.useCallback)((function(){var t,i;window.matchMedia("(max-width: 835px)").matches?(u(null===(t=e.projects)||void 0===t?void 0:t.slice(0,2)),x(null===(i=e.projects)||void 0===i?void 0:i.slice(2))):(u(e.projects),x(void 0))}),[e.projects]);(0,a.useEffect)((function(){return window.matchMedia("(max-width: 835px)").addEventListener("change",f),function(){return window.matchMedia("(max-width: 835px)").removeEventListener("change",f)}}),[f]),(0,a.useEffect)((function(){u(e.projects),f()}),[f]);var v=function(e){var t,i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1];return(0,S.jsxs)("div",{className:ee,children:[(0,S.jsxs)(ae.rU,{to:"/project/".concat(null===(t=e.title.match(/\w+/g))||void 0===t?void 0:t.join("-").toLocaleLowerCase()),"aria-label":e.title,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},className:te,children:[s&&(0,S.jsx)("h2",{children:"SEE MORE"}),(0,S.jsx)("img",{src:e.mainMediaUrl,alt:"".concat(e.title," demo")})]}),(0,S.jsxs)("div",{className:ie,children:[(0,S.jsx)("h2",{children:e.title.toLocaleUpperCase()}),(0,S.jsx)(k.D,{children:e.shortDescription})]})]})};return(0,S.jsxs)("section",{id:"projects",className:K,children:[(0,S.jsx)("img",{src:L,className:"old-texture",alt:"old texture",style:{opacity:.15}}),(0,S.jsx)("h1",{className:$,children:"PROJECTS"}),(0,S.jsxs)("div",{ref:t,children:[null===d||void 0===d?void 0:d.map((function(e){return(0,S.jsx)(v,(0,Q.Z)({},e),e.id)})),s&&(null===_||void 0===_?void 0:_.map((function(e){return(0,S.jsx)(v,(0,Q.Z)({},e),e.id)})))]}),_&&(null===_||void 0===_?void 0:_.length)>0&&(0,S.jsx)("button",{onClick:function(){return l(!s)},className:ne,children:s?"SHOW LESS":"SHOW MORE"})]})},se="welcome_section__82+rd",le="welcome_welcome_container__G8uP0",oe="welcome_title__sF7WT",ce="welcome_see_more__isEG-",de="welcome_tv_container__zpL7O",ue="welcome_tv__bfL1t",me="welcome_photo__CGuJv",he="welcome_circle__JB5ZQ",_e="welcome_rotate__Q6vCZ",xe="welcome_dot__ru4wp",fe=i(424),ve=i(615),je=i(5612),pe=i(8674),be=i(4300),ge=function(){var e,t,i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1],o=(0,a.useContext)(N.R);return(0,S.jsxs)("section",{id:"home",className:se,children:[(0,S.jsx)("img",{src:L,className:"old-texture",alt:"old texture"}),(0,S.jsxs)("div",{className:le,children:[(0,S.jsx)("h1",{className:oe,children:"WELCOME"}),(0,S.jsx)("p",{children:"Hey there! My name is Jia Hui (Lefan) Tan, and I like building websites/application that looks good, works well, and accessible for everyone!"}),(0,S.jsx)("a",{href:"#about",className:ce,"aria-label":"see more"})]}),(0,S.jsxs)("div",{className:de,children:[(0,S.jsx)("img",{src:be,alt:"dot background",className:xe}),(0,S.jsx)("button",{onClick:function(){return l(!s)},"aria-label":"tv switch","aria-pressed":s,className:s?_e:""}),(0,S.jsx)("img",{alt:"tv",src:fe,className:ue}),(0,S.jsx)("img",{alt:"face",src:null!==(e=null===(t=o.profile)||void 0===t?void 0:t.mainMediaUrl)&&void 0!==e?e:ve,className:me}),(0,S.jsx)("img",{alt:"noise gif",src:je,className:me,style:{opacity:s?.45:1}}),(0,S.jsx)("img",{alt:"noise gif",src:pe,className:me,style:{opacity:s?0:1}}),(0,S.jsx)("div",{className:he})]})]})};var Ne=function(){return(0,S.jsxs)("div",{className:"body",children:[(0,S.jsx)(V.Z,{}),(0,S.jsxs)("main",{onLoad:function(){return(0,Y.Z)(!1)},children:[(0,S.jsx)(ge,{}),(0,S.jsx)(C,{}),(0,S.jsx)(re,{}),(0,S.jsx)(P,{})]}),(0,S.jsx)(G.Z,{})]})}},5390:function(e,t,i){i.d(t,{Z:function(){return c}});var n="footer_footer__XzyJ6",a=i(9083),r=i(6355),s=i(2791),l=i(3077),o=i(184),c=function(e){var t,i,c,d,u=e.disableTexture,m=(0,s.useContext)(l.R);return(0,o.jsxs)("footer",{className:n,children:[!u&&(0,o.jsx)("img",{src:a,className:"old-texture ",alt:"old texture"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:null===(t=m.profile)||void 0===t?void 0:t.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.XXB,{size:30})}),(0,o.jsx)("a",{href:null===(i=m.profile)||void 0===i?void 0:i.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.BUd,{size:30})}),(0,o.jsx)("a",{href:null===(c=m.profile)||void 0===c?void 0:c.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.B$y,{size:30})}),(0,o.jsx)("a",{href:"mailto:".concat(null===(d=m.user)||void 0===d?void 0:d.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.SRX,{size:30})})]}),(0,o.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},9662:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(9439),a={header:"header_header__9bmGt",hide:"header_hide__F0WrX",light_switch:"header_light_switch__6p2qm",header_anchor:"header_header_anchor__Rp0yN",title:"header_title__jbr14",cancel_button:"header_cancel_button__+XRgc",menu_active:"header_menu_active__uGGre",side_nav:"header_side_nav__JzshD",mobileNavEnter:"header_mobileNavEnter__MmzAJ",mobileNavEnterActive:"header_mobileNavEnterActive__i3GlP",mobileNavExit:"header_mobileNavExit__pTBqd",mobileNavExitActive:"header_mobileNavExitActive__U7IgW"},r=i(5880),s=i(532),l=i(2791),o=i(3495),c=i(197),d=i(8988),u=i(9083),m=i(184),h=function(){var e=(0,l.useState)(!1),t=(0,n.Z)(e,2),i=t[0],h=t[1],_=(0,l.useState)(!1),x=(0,n.Z)(_,2),f=x[0],v=x[1],j=(0,c.Z)("(max-width: 700px)"),p=(0,l.useRef)(null),b=0,g=0,N=function(e,t){var i=!1;return function(){i||(e.apply(void 0,arguments),i=!0,setTimeout((function(){i=!1}),t))}}((function(e){var t,i=null===(t=p.current)||void 0===t?void 0:t.clientHeight;if(i&&p.current){var n=b-window.scrollY;n>0?g+=n:g=0,g>=i||window.scrollY<i||n>=i&&!p.current.classList.contains(a.show)?p.current.classList.remove(a.hide):n<0&&p.current.classList.add(a.hide),b=window.scrollY}}),50);return(0,l.useEffect)((function(){return window.addEventListener("scroll",N),function(){return window.removeEventListener("scroll",N)}}),[N]),(0,l.useEffect)((function(){var e=document.querySelector("html");e&&(f&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[f]),(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsx)(s.Z,{unmountOnExit:!0,timeout:500,in:i,classNames:{enter:a.mobileNavEnter,enterActive:a.mobileNavEnterActive,exit:a.mobileNavExit,exitActive:a.mobileNavExitActive},children:(0,m.jsxs)("nav",{className:"".concat(a.side_nav),children:[(0,m.jsx)("img",{src:u,className:"old-texture",alt:"old texture"}),(0,m.jsxs)("ul",{onClick:function(){return h(!1)},children:[(0,m.jsx)("button",{className:a.cancel_button,"aria-label":"hide menu",children:(0,m.jsx)(r.fWx,{size:40})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.header_anchor,children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#projects",replace:!0,className:a.header_anchor,children:"Projects"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#about",replace:!0,className:a.header_anchor,children:"About"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#contact",replace:!0,className:a.header_anchor,children:"Contact"})})]})]})}),(0,m.jsxs)("header",{ref:p,className:a.header,children:[(0,m.jsx)("img",{src:u,className:"old-texture",alt:"old pattern",style:{zIndex:8,opacity:.2}}),(0,m.jsx)("button",{onClick:function(){return v(!f)},"aria-label":"switch",className:"".concat(a.light_switch," ").concat(f?a.light_switch_active:"")}),j?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})}),(0,m.jsx)("button",{onClick:function(){return h(!0)},"aria-label":"side menu",children:(0,m.jsx)(r.Tkb,{size:30})})]}):(0,m.jsx)("nav",{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.header_anchor,children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#projects",replace:!0,className:a.header_anchor,children:"Projects"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#about",replace:!0,className:a.header_anchor,children:"About"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#contact",replace:!0,className:a.header_anchor,children:"Contact"})})]})})]})]})}},197:function(e,t,i){var n=i(9439),a=i(2791);t.Z=function(e){var t=(0,a.useState)(!1),i=(0,n.Z)(t,2),r=i[0],s=i[1],l=(0,a.useCallback)((function(e){s(e.matches)}),[]);return(0,a.useEffect)((function(){return window.matchMedia(e).addEventListener("change",l),s(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",l)}}),[e,l]),r}},9239:function(e,t,i){e.exports=i.p+"static/media/cutout.d4730e2a813b32221451.png"},3423:function(e,t,i){e.exports=i.p+"static/media/letter.3fb9f487930a72a5b5ad.png"},8674:function(e,t,i){e.exports=i.p+"static/media/loading_anim.14fec56ba05c2173e722.gif"},4300:function(e,t,i){e.exports=i.p+"static/media/pattern.ec4cb2974b6e5518a072.png"},9685:function(e,t,i){e.exports=i.p+"static/media/rotating.92bb3eb8dee03a6518c3.jpg"},8988:function(e,t,i){e.exports=i.p+"static/media/title.0c9205db55d73f8d52ee.png"},424:function(e,t,i){e.exports=i.p+"static/media/tv.e655846c85f7c3ed3a29.png"},5612:function(e,t,i){e.exports=i.p+"static/media/tv_noise.f111f9f0105293f3dffb.gif"},615:function(e,t,i){e.exports=i.p+"static/media/tv_photo.918d5f50d9927464c4a4.jpg"}}]);
//# sourceMappingURL=534.b453bc60.chunk.js.map