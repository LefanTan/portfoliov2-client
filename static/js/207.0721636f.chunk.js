"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[207],{5207:function(e,t,n){n.r(t),n.d(t,{default:function(){return ze}});var i=n(9439),r=n(7313),a="about_section__1P66k",o="about_init_container__brlQu",s="about_news_container__5ol6r",l="about_line_top__WTixe",c="about_line_right__073Qy",d="about_line_bottom__SgTdl",u="about_line_left__-tFX6",m="about_rotate_background__CK5C+",h="about_cutout_button__lSL6H",_="about_left_article__4XMOV",f="about_paragraph__BQO8Y",v="about_read_more__e0QGZ",x="about_right_article__3c6Uv",p="about_opacity_enter__ZXHYF",b="about_opacity_enter_active__Yc-Ia",j="about_opacity_exit__J0sWR",w="about_opacity_exit_active__nMrNU",g="about_card_hide__ZBfZg",N="about_card_show__NwTYf",k=n(1589),E=n(9685),y=n(773),C=n(1585),O=n(9239),L=n(1394),S=n(3925),Z=n(3201),M=n(6417),R=function(){var e,t,n,R,A,B,T,z=(0,r.useContext)(k.R),U=(0,r.useRef)(null),D=(0,r.useState)(!1),X=(0,i.Z)(D,2),H=X[0],I=X[1],P=(0,r.useState)(!1),W=(0,i.Z)(P,2),q=W[0],F=W[1],V=(0,r.useState)(!0),Y=(0,i.Z)(V,2),J=Y[0],Q=Y[1],G=(0,r.useState)(""),K=(0,i.Z)(G,2),$=K[0],ee=K[1],te=(0,r.useState)(""),ne=(0,i.Z)(te,2),ie=ne[0],re=ne[1],ae=(0,r.useCallback)((function(){var e,t;if(U.current){var n=(null===(e=U.current)||void 0===e?void 0:e.clientWidth)/(null===(t=U.current)||void 0===t?void 0:t.clientHeight)<=1.5;F(n&&""!==ie),Q(!n)}}),[ie]);return(0,r.useEffect)((function(){var e,t,n,i,r,a;if(null!==(e=z.profile)&&void 0!==e&&e.aboutMe){var o=(null===(t=z.profile)||void 0===t?void 0:t.aboutMe.length)<500?null===(n=z.profile)||void 0===n?void 0:n.aboutMe.length:500;ee(null===(i=z.profile)||void 0===i?void 0:i.aboutMe.slice(0,o)),re(null===(r=z.profile)||void 0===r?void 0:r.aboutMe.slice(o,null===(a=z.profile)||void 0===a?void 0:a.aboutMe.length))}}),[z.profile]),(0,r.useEffect)((function(){return window.addEventListener("resize",ae),ae(),function(){return window.removeEventListener("resize",ae)}}),[ae]),(0,M.jsxs)("section",{ref:U,id:"about",className:a,children:[(0,M.jsx)(L.Z,{appear:!0,in:!H,unmountOnExit:!0,timeout:200,classNames:{enter:p,enterDone:b,exit:j,exitActive:w},children:(0,M.jsxs)("div",{className:o,children:[(0,M.jsx)("img",{src:E,alt:"rotating background",className:m}),(0,M.jsx)(Z.ZP,{triggerOnce:!0,rootMargin:"-30% 0px",children:function(e){var t,n,i=e.inView,r=e.ref;return(0,M.jsx)("button",{ref:r,className:h,onClick:function(){return I(!0)},children:(0,M.jsx)("div",{children:(0,M.jsx)("img",{src:(null===(t=z.profile)||void 0===t||null===(n=t.mediaUrls)||void 0===n?void 0:n[0])||O,alt:"lefan's cool cutout",className:i?N:g})})})}})]})}),(0,M.jsx)(L.Z,{appear:!0,in:H,unmountOnExit:!0,timeout:400,classNames:{enter:p,enterDone:b,exit:j,exitActive:w},children:(0,M.jsxs)("div",{className:s,children:[(0,M.jsx)("div",{className:l}),(0,M.jsx)("div",{className:c}),(0,M.jsx)("div",{className:d}),(0,M.jsx)("div",{className:u}),(0,M.jsxs)("div",{className:_,children:[(0,M.jsx)("h1",{children:"ABOUT ME"}),(0,M.jsxs)("span",{className:f,children:[(0,M.jsx)("img",{src:null!==(e=null===(t=z.profile)||void 0===t||null===(n=t.mediaUrls)||void 0===n?void 0:n[1])&&void 0!==e?e:C,alt:"profile"}),(0,M.jsx)(y.D,{components:{p:"h1"},children:$[0]}),(0,M.jsx)(y.D,{children:$.slice(1)+(q&&!J?"...":"")+(J?ie:"")}),q&&(0,M.jsx)("button",{onClick:function(){return Q(!J)},className:v,children:J?"< Read less":"Read more >"})]})]}),(0,M.jsxs)("div",{className:x,children:[(0,M.jsx)("h2",{children:"SKILLS"}),(0,M.jsx)("p",{children:null===(R=z.profile)||void 0===R||null===(A=R.skills)||void 0===A?void 0:A.join(", ")}),(0,M.jsx)("img",{src:null===(B=z.profile)||void 0===B||null===(T=B.mediaUrls)||void 0===T?void 0:T[2],alt:"profile 2"}),(0,M.jsxs)("button",{onClick:function(){return I(!1)},children:["EXIT ",(0,M.jsx)(S.fWx,{size:35})]})]})]})})]})},A="contact_section__hEbuq",B="contact_content__59vpP",T="contact_links_container__s9Q20",z="contact_title__O1jn9",U="contact_link__Z+yR5",D="contact_forms__zIaVG",X="contact_submit__aDkaF",H="contact_modal_content__V8+69",I=n(3423),P=n(6672),W={_origin:"https://api.emailjs.com"},q=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},F=n(3144),V=n(5671),Y=(0,F.Z)((function e(t){(0,V.Z)(this,e),this.status=t.status,this.text=t.responseText})),J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,r){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var t=e.target,n=new Y(t);200===n.status||"OK"===n.text?i(n):r(n)})),a.addEventListener("error",(function(e){var t=e.target;r(new Y(t))})),a.open("POST",W._origin+e,!0),Object.keys(n).forEach((function(e){a.setRequestHeader(e,n[e])})),a.send(t)}))},Q=function(e,t,n,i){var r=i||W._userID,a=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);q(r,e,t);var o=new FormData(a);return o.append("lib_version","3.4.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",r),J("/api/v1.0/email/send-form",o)},G=n(4972),K=n(3258),$=n(7718),ee=function(){var e=(0,r.useContext)(k.R),t=(0,K.Z)("(max-width: 700px)"),n=(0,r.useRef)(null),a=(0,r.useState)(!1),o=(0,i.Z)(a,2),s=o[0],l=o[1],c=function(e){e.preventDefault(),n.current&&Q("service_s2du2od","template_dqmuthk",n.current,"user_z7fnBEw9AAY4ybnnXG6f8").then((function(){var e;l(!0),null===(e=n.current)||void 0===e||e.reset()})).catch((function(e){return console.error("Send email failed...",e)}))};return(0,M.jsxs)("section",{id:"contact",className:A,children:[(0,M.jsx)($.Z,{isOpen:s,onCloseClick:function(){return l(!1)},ariaModalLabel:"Email Confirmation Modal",ariaModalDescription:"A modal to confirm your email being sent",children:(0,M.jsxs)("div",{className:H,children:[(0,M.jsx)("button",{onClick:function(){return l(!1)},children:(0,M.jsx)(G.tgW,{"aria-label":"close modal button",size:20})}),(0,M.jsx)("h1",{children:"Thank you for the email!"}),(0,M.jsx)("p",{children:"I'll be sure to get back to you as soon as possible"})]})}),(0,M.jsx)(Z.ZP,{triggerOnce:!0,threshold:.3,children:function(i){var r,a,o,s=i.inView,l=i.ref;return(0,M.jsxs)("div",{className:"".concat(B," ").concat(s?"visual-show":"visual-hide"),ref:l,children:[(0,M.jsxs)("div",{className:T,children:[(0,M.jsx)("h1",{className:z,children:"Let's Talk"}),(0,M.jsxs)("address",{children:[(0,M.jsxs)("a",{href:null===(r=e.profile)||void 0===r?void 0:r.linkedin,className:U,"aria-label":"linkedin",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(P.BUd,{style:{marginBottom:"2px"},size:30}),t?"":"LinkedIn"]}),(0,M.jsxs)("a",{href:null===(a=e.profile)||void 0===a?void 0:a.github,className:U,"aria-label":"github",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(P.XXB,{size:30})," ",t?"":"Github"]}),(0,M.jsxs)("a",{href:null===(o=e.profile)||void 0===o?void 0:o.resumeUrl,className:U,"aria-label":"resume",target:"_blank",rel:"noreferrer",children:[(0,M.jsx)(P.B$y,{size:30,style:{marginBottom:"5px"}}),t?"":"Resume"]})]})]}),(0,M.jsxs)("form",{ref:n,onSubmit:c,className:D,children:[(0,M.jsx)("img",{src:I,alt:"letter"}),(0,M.jsx)("label",{htmlFor:"name",children:"Name"}),(0,M.jsx)("input",{type:"text",name:"name",id:"name",required:!0}),(0,M.jsx)("label",{htmlFor:"email",children:"Email"}),(0,M.jsx)("input",{type:"email",name:"email",id:"email",required:!0}),(0,M.jsx)("label",{htmlFor:"content",children:"Content"}),(0,M.jsx)("textarea",{name:"message",id:"content",required:!0}),(0,M.jsx)("button",{type:"submit",className:X,children:"SEND"})]})]})}})]})},te=n(7451),ne=n(6143),ie=n(8540),re="projects_section__e0PfT",ae="projects_title__2x32r",oe="projects_project_container__Bfz03",se="projects_stagger_animation__Fd7fo",le="projects_image_button__OWOfx",ce="projects_spread_row__63UJx",de="projects_show_more_button__PVuUU",ue=n(9466),me=function(){var e=(0,r.useContext)(k.R),t=(0,r.useState)(!1),n=(0,i.Z)(t,2),a=n[0],o=n[1],s=(0,r.useState)(),l=(0,i.Z)(s,2),c=l[0],d=l[1],u=(0,r.useState)(),m=(0,i.Z)(u,2),h=m[0],_=m[1],f=(0,r.useCallback)((function(){var t,n;window.matchMedia("(max-width: 835px)").matches?(d(null===(t=e.projects)||void 0===t?void 0:t.slice(0,2)),_(null===(n=e.projects)||void 0===n?void 0:n.slice(2))):(d(e.projects),_(void 0))}),[e.projects]);return(0,r.useEffect)((function(){return window.matchMedia("(max-width: 835px)").addEventListener("change",f),function(){return window.matchMedia("(max-width: 835px)").removeEventListener("change",f)}}),[f]),(0,r.useEffect)((function(){d(e.projects),f()}),[f]),(0,M.jsxs)("section",{id:"projects",className:re,children:[(0,M.jsx)("h1",{className:ae,children:"PROJECTS"}),(0,M.jsx)(Z.ZP,{triggerOnce:!0,threshold:.2,children:function(e){var t=e.inView,n=e.ref;return(0,M.jsxs)("div",{ref:n,children:[null===c||void 0===c?void 0:c.map((function(e,n){return(0,M.jsx)(he,{project:e,className:t?se:"",style:{"--animation-order":n}},e.id)})),a&&(null===h||void 0===h?void 0:h.map((function(e,n){return(0,M.jsx)(he,{project:e,className:t?se:"",style:{"--animation-order":n}},e.id)})))]})}}),h&&(null===h||void 0===h?void 0:h.length)>0&&(0,M.jsx)("button",{onClick:function(){return o(!a)},className:de,children:a?"SHOW LESS":"SHOW MORE"})]})},he=function(e){var t,n=(0,r.useState)(!1),a=(0,i.Z)(n,2),o=a[0],s=a[1],l=e.project;return(0,M.jsxs)("div",{className:"".concat(oe," ").concat(e.className),style:e.style,children:[(0,M.jsxs)(ue.rU,{to:"/project/".concat(null===(t=l.title.match(/\w+/g))||void 0===t?void 0:t.join("-").toLocaleLowerCase()),"aria-label":l.title,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},className:le,children:[o&&(0,M.jsx)("h2",{children:"SEE MORE"}),(0,M.jsx)("img",{src:l.mainMediaUrl,alt:"".concat(l.title," demo")})]}),(0,M.jsxs)("div",{className:ce,children:[(0,M.jsx)("h2",{children:l.title.toLocaleUpperCase()}),(0,M.jsx)(y.D,{children:l.shortDescription})]})]})},_e="welcome_section__aesau",fe="welcome_content__tX0S1",ve="welcome_welcome_container__48WPm",xe="welcome_title__cQXUJ index_title__67h+C",pe="welcome_see_more__QLaeP",be="welcome_tv_container__EHyeS",je="welcome_tv__Btelf",we="welcome_photo__XF3kE",ge="welcome_error_container__-B-TR",Ne="welcome_tv_floor__WxgFN",ke="welcome_switch__v26r8",Ee="welcome_switch_2__ZU2E8",ye="welcome_rotate__5WfRv",Ce="welcome_dot__1+E2b",Oe="welcome_address__0W3dJ",Le=n(424),Se=n(615),Ze=n(5612),Me=n(8674),Re=n(4300),Ae=[{name:"Baby yoda compilation",link:"https://www.youtube.com/embed/w0HxMhXSgXo"},{name:"Cat with deepest meow",link:"https://www.youtube.com/embed/w7x_lWJNnNg"},{name:"James Hoffman v60 technique",link:"https://www.youtube.com/embed/AI4ynXzkSQo"},{name:"Best of Canelo Alvarez",link:"https://www.youtube.com/embed/51LorPZ6YiE"},{name:"Luke Skywalker EPIC entrance",link:"https://www.youtube.com/embed/2qf2OlsOV3c"}],Be=function(){var e,t,n,a,o,s,l=(0,r.useState)(!1),c=(0,i.Z)(l,2),d=c[0],u=c[1],m=(0,r.useState)(!1),h=(0,i.Z)(m,2),_=h[0],f=h[1],v=(0,r.useState)(0),x=(0,i.Z)(v,2),p=x[0],b=x[1],j=(0,r.useContext)(k.R);return(0,r.useEffect)((function(){var e=Math.floor(Math.random()*Ae.length);e===p&&(e=Math.floor(Math.random()*Ae.length)),b(Math.floor(Math.random()*Ae.length))}),[_,p]),(0,M.jsx)("section",{id:"home",className:_e,children:(0,M.jsxs)("div",{className:fe,children:[(0,M.jsxs)("div",{className:ve,children:[(0,M.jsx)("h1",{className:xe,children:"WELCOME"}),(0,M.jsxs)("address",{className:Oe,children:[(0,M.jsx)("a",{href:null===(e=j.profile)||void 0===e?void 0:e.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,M.jsx)(P.XXB,{size:25})}),(0,M.jsx)("a",{href:null===(t=j.profile)||void 0===t?void 0:t.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,M.jsx)(P.BUd,{size:25})}),(0,M.jsx)("a",{href:null===(n=j.profile)||void 0===n?void 0:n.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,M.jsx)(P.B$y,{size:25})}),(0,M.jsx)("a",{href:"mailto:".concat(null===(a=j.user)||void 0===a?void 0:a.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,M.jsx)(P.SRX,{size:25})})]}),(0,M.jsx)("p",{children:"Hey there! My name is Jia Hui (Lefan) Tan, and I like building websites/application that looks good, works well, and accessible for everyone!"}),(0,M.jsx)("a",{href:"#about",onClick:function(e){var t;e.preventDefault(),null===(t=document.body.querySelector("#about"))||void 0===t||t.scrollIntoView({behavior:"smooth"})},className:pe,"aria-label":"see more"})]}),(0,M.jsxs)("div",{className:be,children:[(0,M.jsx)("img",{src:Re,alt:"dot background",className:Ce}),(0,M.jsx)("button",{onClick:function(){u(!d),f(!1)},"aria-label":"first tv switch","aria-pressed":d,className:"".concat(ke," ").concat(d?ye:"")}),(0,M.jsx)("button",{onClick:function(){f(!_),u(!1)},"aria-label":"second tv switch","aria-pressed":_,className:"".concat(Ee," ").concat(_?ye:"")}),(0,M.jsx)("img",{alt:"tv",src:Le,className:je}),(0,M.jsx)("img",{alt:"face",src:null!==(o=null===(s=j.profile)||void 0===s?void 0:s.mainMediaUrl)&&void 0!==o?o:Se,className:we,style:{visibility:d?"visible":"hidden"}}),(0,M.jsx)("div",{children:(0,M.jsx)("iframe",{src:Ae[p].link,className:we,title:"YouTube video player",allow:"accelerometer; autoplay; picture-in-picture",allowFullScreen:!0,style:{visibility:_?"visible":"hidden",pointerEvents:"auto"}})}),j.error&&(0,M.jsxs)("div",{className:ge,children:[(0,M.jsx)("h2",{children:"408 ERROR"}),(0,M.jsx)("p",{children:"Error connecting to portfolio API"}),(0,M.jsx)("p",{children:"(perhaps your device doesn't support IPV6)"})]}),(0,M.jsx)("img",{alt:"noise gif",src:Ze,className:we,style:{opacity:d||_||j.error?.45:1}}),(0,M.jsx)("img",{alt:"noise gif",src:Me,className:we,style:{opacity:d||_||j.error?.1:1}}),(0,M.jsx)("div",{className:Ne})]})]})})},Te=n(9083);var ze=function(){return(0,M.jsxs)("div",{onLoad:function(){return(0,ie.Z)(!1)},className:"body",children:[(0,M.jsx)(ne.Z,{}),(0,M.jsx)("img",{src:Te,className:"old-texture",alt:"old texture"}),(0,M.jsxs)("main",{children:[(0,M.jsx)(Be,{}),(0,M.jsx)(R,{}),(0,M.jsx)(me,{}),(0,M.jsx)(ee,{})]}),(0,M.jsx)(te.Z,{})]})}},7451:function(e,t,n){n.d(t,{Z:function(){return l}});var i="footer_footer__YdBAO",r=n(6672),a=n(7313),o=n(1589),s=n(6417),l=function(){var e,t,n,l,c=(0,a.useContext)(o.R);return(0,s.jsxs)("footer",{className:i,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:null===(e=c.profile)||void 0===e?void 0:e.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.XXB,{size:30})}),(0,s.jsx)("a",{href:null===(t=c.profile)||void 0===t?void 0:t.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.BUd,{size:30})}),(0,s.jsx)("a",{href:null===(n=c.profile)||void 0===n?void 0:n.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.B$y,{size:30})}),(0,s.jsx)("a",{href:"mailto:".concat(null===(l=c.user)||void 0===l?void 0:l.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.SRX,{size:30})})]}),(0,s.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},6143:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(9439),r={header:"header_header__Xrmhv",hide:"header_hide__PiW0E",light_switch:"header_light_switch__3Gobk",menu_button:"header_menu_button__p1yFy",header_anchor:"header_header_anchor__BB8-W",title:"header_title__IvpjC",cancel_button:"header_cancel_button__Ok9Vd",menu_active:"header_menu_active__rELfo",side_nav:"header_side_nav__tZT8Y",mobileNavEnter:"header_mobileNavEnter__wAH9B",mobileNavEnterActive:"header_mobileNavEnterActive__Bl+To",mobileNavExit:"header_mobileNavExit__b1M2m",mobileNavExitActive:"header_mobileNavExitActive__U9fVH"},a=n(3925),o=n(1394),s=n(7313),l=n(7918),c=n(3258),d=n(8988),u=n(6417),m=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],m=t[1],h=(0,s.useState)(!1),_=(0,i.Z)(h,2),f=_[0],v=_[1],x=(0,c.Z)("(max-width: 700px)"),p=(0,s.useRef)(null),b=(0,s.useRef)(null),j=0,w=0,g=function(e,t){var n=!1;return function(){n||(e.apply(void 0,arguments),n=!0,setTimeout((function(){n=!1}),t))}}((function(e){var t,n=null===(t=p.current)||void 0===t?void 0:t.clientHeight;if(n&&p.current){var i=j-window.scrollY;i>0?w+=i:w=0,w>=n||window.scrollY<n||i>=n&&!p.current.classList.contains(r.show)?p.current.classList.remove(r.hide):i<0&&p.current.classList.add(r.hide),j=window.scrollY}}),10);return(0,s.useEffect)((function(){var e;if(b.current){var t=Array.from(null===(e=b.current)||void 0===e?void 0:e.querySelectorAll("a[href]:not([disabled]), button:not([disabled])"));(null===t||void 0===t?void 0:t[0]).focus();var n=function(e){e.preventDefault(),t.includes(e.target)||m(!1)};return document.addEventListener("focus",n,!0),function(){return document.removeEventListener("focus",n,!0)}}}),[n]),(0,s.useEffect)((function(){return window.addEventListener("scroll",g),function(){return window.removeEventListener("scroll",g)}}),[g]),(0,s.useEffect)((function(){var e=document.querySelector("html");e&&(f&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[f]),(0,u.jsxs)(u.Fragment,{children:[x&&(0,u.jsx)(o.Z,{unmountOnExit:!0,timeout:500,in:n,classNames:{enter:r.mobileNavEnter,enterActive:r.mobileNavEnterActive,exit:r.mobileNavExit,exitActive:r.mobileNavExitActive},children:(0,u.jsx)("nav",{ref:b,className:"".concat(r.side_nav),children:(0,u.jsxs)("ul",{onClick:function(){return m(!1)},children:[(0,u.jsx)("button",{className:r.cancel_button,"aria-label":"hide menu",children:(0,u.jsx)(a.fWx,{size:40})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"title"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})})}),(0,u.jsxs)("header",{ref:p,className:r.header,children:[(0,u.jsx)("button",{onClick:function(){return v(!f)},"aria-label":"dark mode switch",role:"checkbox","aria-checked":f,className:"".concat(r.light_switch," ").concat(f?r.light_switch_active:"")}),x?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"title"})}),(0,u.jsx)("button",{onClick:function(){return m(!n)},className:r.menu_button,"aria-label":"side menu",children:(0,u.jsx)(a.Tkb,{size:30})})]}):(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"home"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})})]})]})}},3258:function(e,t,n){var i=n(9439),r=n(7313);t.Z=function(e){var t=(0,r.useState)(!1),n=(0,i.Z)(t,2),a=n[0],o=n[1],s=(0,r.useCallback)((function(e){o(e.matches)}),[]);return(0,r.useEffect)((function(){return window.matchMedia(e).addEventListener("change",s),o(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",s)}}),[e,s]),a}},7718:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7313),r="modal_wrapper__kCicp",a="modal_content__pW8-v",o="modal_close_button__d-3YR",s="modal_hidden__yRlHd",l=n(4972),c=n(6417),d=function(e){var t=(0,i.useRef)(null),n=(0,i.useRef)(null),d=(0,i.useCallback)((function(n){t.current&&e.onCloseClick&&!t.current.contains(n.target)&&e.onCloseClick()}),[e]);(0,i.useEffect)((function(){return document.addEventListener("mousedown",d),function(){return document.removeEventListener("mousedown",d)}}),[d]);var u=(0,i.useCallback)((function(e){var t=Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')),n=t[0];n.focus();var i=function(e){e.preventDefault(),t.includes(e.target)?e.target.focus():n.focus()};return document.addEventListener("focus",i,!0),{onClose:function(){document.removeEventListener("focus",i,!0)}}}),[]);return(0,i.useEffect)((function(){if(document.body.style.overflow=e.isOpen?"hidden":"auto",n.current){var t,i={onClose:function(){return null}};e.isOpen?i=u(n.current):null===(t=i)||void 0===t||t.onClose()}}),[e.isOpen,u]),(0,c.jsxs)("dialog",{ref:n,open:e.isOpen,"aria-label":e.ariaModalLabel,"aria-modal":e.isOpen,"aria-describedby":"modalDescription",className:"".concat(r," ").concat(e.isOpen?"":s),children:[(0,c.jsx)("button",{tabIndex:0,onClick:e.onCloseClick,className:o,children:(0,c.jsx)(l.tgW,{"aria-label":"close modal button",size:30})}),(0,c.jsxs)("div",{ref:t,className:a,children:[(0,c.jsx)("div",{id:"modalDescription",className:s,children:e.ariaModalDescription}),e.children]})]})}},9239:function(e,t,n){e.exports=n.p+"static/media/cutout.d4730e2a813b32221451.png"},3423:function(e,t,n){e.exports=n.p+"static/media/letter.54b69f9d2f21a489929b.png"},8674:function(e,t,n){e.exports=n.p+"static/media/loading_anim.14fec56ba05c2173e722.gif"},4300:function(e,t,n){e.exports=n.p+"static/media/pattern.ec4cb2974b6e5518a072.png"},1585:function(e,t,n){e.exports=n.p+"static/media/profile_backup.3bdc12a8943304ed5852.jpeg"},9685:function(e,t,n){e.exports=n.p+"static/media/rotating.92bb3eb8dee03a6518c3.jpg"},8988:function(e,t,n){e.exports=n.p+"static/media/title.0c9205db55d73f8d52ee.png"},424:function(e,t,n){e.exports=n.p+"static/media/tv.c0960b40a2906e5e33bb.png"},5612:function(e,t,n){e.exports=n.p+"static/media/tv_noise.f111f9f0105293f3dffb.gif"},615:function(e,t,n){e.exports=n.p+"static/media/tv_photo.918d5f50d9927464c4a4.jpg"}}]);