"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[83],{7083:function(e,t,i){i.r(t),i.d(t,{default:function(){return Ne}});var n=i(9439),a=i(7313),r="about_section__tE3Qd",s="about_main_container__cAMPB",l="about_news_container__vnfIz",o="about_line_top__Jo2M1",c="about_line_right__MVodi",d="about_line_bottom__aOOkl",u="about_line_left__Gd7v0",m="about_rotate_background__kZOBh",h="about_cutout_button__ZGenC",_="about_left_article__aFcZq",x="about_paragraph__tVk+V",f="about_read_more__3HXyz",v="about_right_article__cnxk4",j="about_opacity_enter__Ypf2K",p="about_opacity_enter_active__4brho",b="about_opacity_exit__iHCVj",g="about_opacity_exit_active__M41k-",N=i(1589),w=i(9685),k=i(1200),E=i(9239),L=i(9083),Z=i(1394),y=i(3925),M=i(6417),O=function(){var e,t,i,O,C,S,A,R,z=(0,a.useContext)(N.R),T=(0,a.useRef)(null),D=(0,a.useState)(!1),q=(0,n.Z)(D,2),U=q[0],I=q[1],B=(0,a.useState)(!1),X=(0,n.Z)(B,2),H=X[0],F=X[1],G=(0,a.useState)(!0),J=(0,n.Z)(G,2),W=J[0],V=J[1],Y=(0,a.useState)(""),P=(0,n.Z)(Y,2),K=P[0],Q=P[1],$=(0,a.useState)(""),ee=(0,n.Z)($,2),te=ee[0],ie=ee[1],ne=(0,a.useCallback)((function(){var e,t;if(T.current){var i=(null===(e=T.current)||void 0===e?void 0:e.clientWidth)/(null===(t=T.current)||void 0===t?void 0:t.clientHeight)<=1.5;F(i&&""!==te),V(!i)}}),[te]);return(0,a.useEffect)((function(){var e,t,i,n,a,r;if(null!==(e=z.profile)&&void 0!==e&&e.aboutMe){var s=(null===(t=z.profile)||void 0===t?void 0:t.aboutMe.length)<500?null===(i=z.profile)||void 0===i?void 0:i.aboutMe.length:500;Q(null===(n=z.profile)||void 0===n?void 0:n.aboutMe.slice(0,s)),ie(null===(a=z.profile)||void 0===a?void 0:a.aboutMe.slice(s,null===(r=z.profile)||void 0===r?void 0:r.aboutMe.length))}}),[z.profile]),(0,a.useEffect)((function(){return window.addEventListener("resize",ne),ne(),function(){return window.removeEventListener("resize",ne)}}),[ne]),(0,M.jsxs)("section",{ref:T,id:"about",className:r,children:[(0,M.jsx)("img",{src:L,className:"old-texture flipX",alt:"old texture"}),(0,M.jsx)(Z.Z,{appear:!0,in:!U,unmountOnExit:!0,timeout:200,classNames:{enter:j,enterDone:p,exit:b,exitActive:g},children:(0,M.jsxs)("div",{className:s,children:[(0,M.jsx)("img",{src:w,alt:"rotating background",className:m}),(0,M.jsx)("button",{className:h,onClick:function(){return I(!0)},children:(0,M.jsx)("img",{src:(null===(e=z.profile)||void 0===e||null===(t=e.mediaUrls)||void 0===t?void 0:t.at(0))||E,alt:"lefan's cool cutout"})})]})}),(0,M.jsx)(Z.Z,{appear:!0,in:U,unmountOnExit:!0,timeout:400,classNames:{enter:j,enterDone:p,exit:b,exitActive:g},children:(0,M.jsxs)("div",{className:l,children:[(0,M.jsx)("div",{className:o}),(0,M.jsx)("div",{className:c}),(0,M.jsx)("div",{className:d}),(0,M.jsx)("div",{className:u}),(0,M.jsxs)("div",{className:_,children:[(0,M.jsx)("h1",{children:"ABOUT ME"}),(0,M.jsxs)("span",{className:x,children:[(0,M.jsx)("img",{src:null===(i=z.profile)||void 0===i||null===(O=i.mediaUrls)||void 0===O?void 0:O.at(1),alt:"profile"}),(0,M.jsx)(k.D,{components:{p:"h1"},children:K[0]}),(0,M.jsx)(k.D,{children:K.slice(1)+(H&&!W?"...":"")+(W?te:"")}),H&&(0,M.jsx)("button",{onClick:function(){return V(!W)},className:f,children:W?"< Read less":"Read more >"})]})]}),(0,M.jsxs)("div",{className:v,children:[(0,M.jsx)("h2",{children:"SKILLS"}),(0,M.jsx)("p",{children:null===(C=z.profile)||void 0===C||null===(S=C.skills)||void 0===S?void 0:S.join(", ")}),(0,M.jsx)("img",{src:null===(A=z.profile)||void 0===A||null===(R=A.mediaUrls)||void 0===R?void 0:R.at(2),alt:"profile 2"}),(0,M.jsxs)("button",{onClick:function(){return I(!1)},children:["EXIT ",(0,M.jsx)(y.fWx,{size:35})]})]})]})})]})},C="contact_section__CQWZ3",S="contact_links_container__bMqVJ",A="contact_title__Kcsi8",R="contact_link__zmX8k",z="contact_forms__s9Lio",T="contact_submit__DxbDA",D=i(3423),q=i(6672),U={_origin:"https://api.emailjs.com"},I=function(e,t,i){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},B=i(3144),X=i(5671),H=(0,B.Z)((function e(t){(0,X.Z)(this,e),this.status=t.status,this.text=t.responseText})),F=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,a){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,i=new H(t);200===i.status||"OK"===i.text?n(i):a(i)})),r.addEventListener("error",(function(e){var t=e.target;a(new H(t))})),r.open("POST",U._origin+e,!0),Object.keys(i).forEach((function(e){r.setRequestHeader(e,i[e])})),r.send(t)}))},G=function(e,t,i,n){var a=n||U._userID,r=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(i);I(a,e,t);var s=new FormData(r);return s.append("lib_version","3.4.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a),F("/api/v1.0/email/send-form",s)},J=i(3258),W=function(){var e,t,i,n=(0,a.useContext)(N.R),r=(0,J.Z)("(max-width: 800px)"),s=(0,a.useRef)(null);return(0,M.jsxs)("section",{id:"contact",className:C,children:[(0,M.jsx)("img",{src:L,className:"old-texture",alt:"old texture"}),(0,M.jsxs)("div",{className:S,children:[(0,M.jsx)("h1",{className:A,children:"Let's Talk"}),(0,M.jsxs)("address",{children:[(0,M.jsxs)("a",{href:null===(e=n.profile)||void 0===e?void 0:e.linkedin,className:R,"aria-label":"linkedin",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(q.BUd,{style:{marginBottom:"2px"},size:"2.5rem"}),r?"":"LinkedIn"]}),(0,M.jsxs)("a",{href:null===(t=n.profile)||void 0===t?void 0:t.github,className:R,"aria-label":"github",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(q.XXB,{size:"2.5rem"})," ",r?"":"Github"]}),(0,M.jsxs)("a",{href:null===(i=n.profile)||void 0===i?void 0:i.resumeUrl,className:R,"aria-label":"resume",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(q.B$y,{size:"2.5rem",style:{marginBottom:"5px"}}),r?"":"Resume"]})]})]}),(0,M.jsxs)("form",{ref:s,onSubmit:function(e){e.preventDefault(),s.current&&G("service_s2du2od","template_dqmuthk",s.current,"user_z7fnBEw9AAY4ybnnXG6f8").then((function(){var e;alert("Thanks for the email, I'll get back to you soon!"),null===(e=s.current)||void 0===e||e.reset()})).catch((function(e){return console.error("Send email failed...",e)}))},className:z,children:[(0,M.jsx)("img",{src:D,alt:"letter"}),(0,M.jsx)("label",{htmlFor:"name",children:"Name"}),(0,M.jsx)("input",{type:"text",name:"name",id:"name",required:!0}),(0,M.jsx)("label",{htmlFor:"email",children:"Email"}),(0,M.jsx)("input",{type:"email",name:"email",id:"email",required:!0}),(0,M.jsx)("label",{htmlFor:"content",children:"Content"}),(0,M.jsx)("textarea",{name:"message",id:"content",required:!0}),(0,M.jsx)("button",{type:"submit",className:T,children:"SEND"})]})]})},V=i(7451),Y=i(6143),P=i(8540),K=i(1413),Q="projects_section__+Xjg7",$="projects_title__YRzOT",ee="projects_project_container__UY5e-",te="projects_image_button__iIgZ5",ie="projects_spread_row__DuLaG",ne="projects_show_more_button__G-nS8",ae=i(9466),re=function(){var e=(0,a.useContext)(N.R),t=(0,a.useRef)(null),i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1],o=(0,a.useState)(),c=(0,n.Z)(o,2),d=c[0],u=c[1],m=(0,a.useState)(),h=(0,n.Z)(m,2),_=h[0],x=h[1],f=(0,a.useCallback)((function(){var t,i;window.matchMedia("(max-width: 835px)").matches?(u(null===(t=e.projects)||void 0===t?void 0:t.slice(0,2)),x(null===(i=e.projects)||void 0===i?void 0:i.slice(2))):(u(e.projects),x(void 0))}),[e.projects]);(0,a.useEffect)((function(){return window.matchMedia("(max-width: 835px)").addEventListener("change",f),function(){return window.matchMedia("(max-width: 835px)").removeEventListener("change",f)}}),[f]),(0,a.useEffect)((function(){u(e.projects),f()}),[f]);var v=function(e){var t,i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1];return(0,M.jsxs)("div",{className:ee,children:[(0,M.jsxs)(ae.rU,{to:"/project/".concat(null===(t=e.title.match(/\w+/g))||void 0===t?void 0:t.join("-").toLocaleLowerCase()),"aria-label":e.title,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},className:te,children:[s&&(0,M.jsx)("h2",{children:"SEE MORE"}),(0,M.jsx)("img",{src:e.mainMediaUrl,alt:"".concat(e.title," demo")})]}),(0,M.jsxs)("div",{className:ie,children:[(0,M.jsx)("h2",{children:e.title.toLocaleUpperCase()}),(0,M.jsx)(k.D,{children:e.shortDescription})]})]})};return(0,M.jsxs)("section",{id:"projects",className:Q,children:[(0,M.jsx)("img",{src:L,className:"old-texture",alt:"old texture",style:{opacity:.15}}),(0,M.jsx)("h1",{className:$,children:"PROJECTS"}),(0,M.jsxs)("div",{ref:t,children:[null===d||void 0===d?void 0:d.map((function(e){return(0,M.jsx)(v,(0,K.Z)({},e),e.id)})),s&&(null===_||void 0===_?void 0:_.map((function(e){return(0,M.jsx)(v,(0,K.Z)({},e),e.id)})))]}),_&&(null===_||void 0===_?void 0:_.length)>0&&(0,M.jsx)("button",{onClick:function(){return l(!s)},className:ne,children:s?"SHOW LESS":"SHOW MORE"})]})},se="welcome_section__U0Co-",le="welcome_welcome_container__LaZYx",oe="welcome_title__qLDtI",ce="welcome_see_more__TBUj9",de="welcome_tv_container__Wel91",ue="welcome_tv__qJOn1",me="welcome_photo__+fZxh",he="welcome_circle__mTBAJ",_e="welcome_rotate__eAi6-",xe="welcome_dot__-e3Ml",fe=i(424),ve=i(615),je=i(5612),pe=i(8674),be=i(4300),ge=function(){var e,t,i=(0,a.useState)(!1),r=(0,n.Z)(i,2),s=r[0],l=r[1],o=(0,a.useContext)(N.R);return(0,M.jsxs)("section",{id:"home",className:se,children:[(0,M.jsx)("img",{src:L,className:"old-texture",alt:"old texture"}),(0,M.jsxs)("div",{className:le,children:[(0,M.jsx)("h1",{className:oe,children:"WELCOME"}),(0,M.jsx)("h4",{children:"(website in progress)"}),(0,M.jsx)("p",{children:"Hey there! My name is Jia Hui (Lefan) Tan, and I like building websites/application that looks good, works well, and accessible for everyone!"}),(0,M.jsx)("a",{href:"#about",className:ce,"aria-label":"see more"})]}),(0,M.jsxs)("div",{className:de,children:[(0,M.jsx)("img",{src:be,alt:"dot background",className:xe}),(0,M.jsx)("button",{onClick:function(){return l(!s)},"aria-label":"tv switch","aria-pressed":s,className:s?_e:""}),(0,M.jsx)("img",{alt:"tv",src:fe,className:ue}),(0,M.jsx)("img",{alt:"face",src:null!==(e=null===(t=o.profile)||void 0===t?void 0:t.mainMediaUrl)&&void 0!==e?e:ve,className:me}),(0,M.jsx)("img",{alt:"noise gif",src:je,className:me,style:{opacity:s?.45:1}}),(0,M.jsx)("img",{alt:"noise gif",src:pe,className:me,style:{opacity:s?0:1}}),(0,M.jsx)("div",{className:he})]})]})};var Ne=function(){return(0,M.jsxs)("div",{onLoad:function(){return(0,P.Z)(!1)},className:"body",children:[(0,M.jsx)(Y.Z,{}),(0,M.jsxs)("main",{children:[(0,M.jsx)(ge,{}),(0,M.jsx)(O,{}),(0,M.jsx)(re,{}),(0,M.jsx)(W,{})]}),(0,M.jsx)(V.Z,{})]})}},7451:function(e,t,i){i.d(t,{Z:function(){return c}});var n="footer_footer__XzyJ6",a=i(9083),r=i(6672),s=i(7313),l=i(1589),o=i(6417),c=function(e){var t,i,c,d,u=e.disableTexture,m=(0,s.useContext)(l.R);return(0,o.jsxs)("footer",{className:n,children:[!u&&(0,o.jsx)("img",{src:a,className:"old-texture ",alt:"old texture"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:null===(t=m.profile)||void 0===t?void 0:t.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.XXB,{size:30})}),(0,o.jsx)("a",{href:null===(i=m.profile)||void 0===i?void 0:i.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.BUd,{size:30})}),(0,o.jsx)("a",{href:null===(c=m.profile)||void 0===c?void 0:c.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.B$y,{size:30})}),(0,o.jsx)("a",{href:"mailto:".concat(null===(d=m.user)||void 0===d?void 0:d.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(r.SRX,{size:30})})]}),(0,o.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},6143:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(9439),a={header:"header_header__9bmGt",hide:"header_hide__F0WrX",light_switch:"header_light_switch__6p2qm",header_anchor:"header_header_anchor__Rp0yN",title:"header_title__jbr14",cancel_button:"header_cancel_button__+XRgc",menu_active:"header_menu_active__uGGre",side_nav:"header_side_nav__JzshD",mobileNavEnter:"header_mobileNavEnter__MmzAJ",mobileNavEnterActive:"header_mobileNavEnterActive__i3GlP",mobileNavExit:"header_mobileNavExit__pTBqd",mobileNavExitActive:"header_mobileNavExitActive__U7IgW"},r=i(3925),s=i(1394),l=i(7313),o=i(7918),c=i(3258),d=i(8988),u=i(9083),m=i(6417),h=function(){var e=(0,l.useState)(!1),t=(0,n.Z)(e,2),i=t[0],h=t[1],_=(0,l.useState)(!1),x=(0,n.Z)(_,2),f=x[0],v=x[1],j=(0,c.Z)("(max-width: 700px)"),p=(0,l.useRef)(null),b=0,g=0,N=function(e,t){var i=!1;return function(){i||(e.apply(void 0,arguments),i=!0,setTimeout((function(){i=!1}),t))}}((function(e){var t,i=null===(t=p.current)||void 0===t?void 0:t.clientHeight;if(i&&p.current){var n=b-window.scrollY;n>0?g+=n:g=0,g>=i||window.scrollY<i||n>=i&&!p.current.classList.contains(a.show)?p.current.classList.remove(a.hide):n<0&&p.current.classList.add(a.hide),b=window.scrollY}}),50);return(0,l.useEffect)((function(){return window.addEventListener("scroll",N),function(){return window.removeEventListener("scroll",N)}}),[N]),(0,l.useEffect)((function(){var e=document.querySelector("html");e&&(f&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[f]),(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsx)(s.Z,{unmountOnExit:!0,timeout:500,in:i,classNames:{enter:a.mobileNavEnter,enterActive:a.mobileNavEnterActive,exit:a.mobileNavExit,exitActive:a.mobileNavExitActive},children:(0,m.jsxs)("nav",{className:"".concat(a.side_nav),children:[(0,m.jsx)("img",{src:u,className:"old-texture",alt:"old texture"}),(0,m.jsxs)("ul",{onClick:function(){return h(!1)},children:[(0,m.jsx)("button",{className:a.cancel_button,"aria-label":"hide menu",children:(0,m.jsx)(r.fWx,{size:40})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.header_anchor,children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#projects",replace:!0,className:a.header_anchor,children:"Projects"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#about",replace:!0,className:a.header_anchor,children:"About"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#contact",replace:!0,className:a.header_anchor,children:"Contact"})})]})]})}),(0,m.jsxs)("header",{ref:p,className:a.header,children:[(0,m.jsx)("img",{src:u,className:"old-texture",alt:"old pattern",style:{zIndex:8,opacity:.2}}),(0,m.jsx)("button",{onClick:function(){return v(!f)},"aria-label":"switch",className:"".concat(a.light_switch," ").concat(f?a.light_switch_active:"")}),j?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})}),(0,m.jsx)("button",{onClick:function(){return h(!0)},"aria-label":"side menu",children:(0,m.jsx)(r.Tkb,{size:30})})]}):(0,m.jsx)("nav",{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.header_anchor,children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#projects",replace:!0,className:a.header_anchor,children:"Projects"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#home",replace:!0,className:a.title,children:(0,m.jsx)("img",{src:d,alt:"title"})})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#about",replace:!0,className:a.header_anchor,children:"About"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#contact",replace:!0,className:a.header_anchor,children:"Contact"})})]})})]})]})}},3258:function(e,t,i){var n=i(9439),a=i(7313);t.Z=function(e){var t=(0,a.useState)(!1),i=(0,n.Z)(t,2),r=i[0],s=i[1],l=(0,a.useCallback)((function(e){s(e.matches)}),[]);return(0,a.useEffect)((function(){return window.matchMedia(e).addEventListener("change",l),s(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",l)}}),[e,l]),r}},9239:function(e,t,i){e.exports=i.p+"static/media/cutout.d4730e2a813b32221451.png"},3423:function(e,t,i){e.exports=i.p+"static/media/letter.54b69f9d2f21a489929b.png"},8674:function(e,t,i){e.exports=i.p+"static/media/loading_anim.14fec56ba05c2173e722.gif"},4300:function(e,t,i){e.exports=i.p+"static/media/pattern.ec4cb2974b6e5518a072.png"},9685:function(e,t,i){e.exports=i.p+"static/media/rotating.92bb3eb8dee03a6518c3.jpg"},8988:function(e,t,i){e.exports=i.p+"static/media/title.0c9205db55d73f8d52ee.png"},424:function(e,t,i){e.exports=i.p+"static/media/tv.e655846c85f7c3ed3a29.png"},5612:function(e,t,i){e.exports=i.p+"static/media/tv_noise.f111f9f0105293f3dffb.gif"},615:function(e,t,i){e.exports=i.p+"static/media/tv_photo.918d5f50d9927464c4a4.jpg"}}]);