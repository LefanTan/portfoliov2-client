"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[643],{7451:function(e,i,n){n.d(i,{Z:function(){return c}});var l="footer_footer__YdBAO",r=n(9083),t=n(6672),a=n(7313),s=n(1589),o=n(6417),c=function(e){var i,n,c,d,u=e.disableTexture,h=(0,a.useContext)(s.R);return(0,o.jsxs)("footer",{className:l,children:[!u&&(0,o.jsx)("img",{src:r,className:"old-texture ",alt:"old texture"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:null===(i=h.profile)||void 0===i?void 0:i.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.XXB,{size:30})}),(0,o.jsx)("a",{href:null===(n=h.profile)||void 0===n?void 0:n.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.BUd,{size:30})}),(0,o.jsx)("a",{href:null===(c=h.profile)||void 0===c?void 0:c.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.B$y,{size:30})}),(0,o.jsx)("a",{href:"mailto:".concat(null===(d=h.user)||void 0===d?void 0:d.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.SRX,{size:30})})]}),(0,o.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},6143:function(e,i,n){n.d(i,{Z:function(){return h}});var l=n(9439),r={header:"header_header__Xrmhv",hide:"header_hide__PiW0E",light_switch:"header_light_switch__3Gobk",header_anchor:"header_header_anchor__BB8-W",title:"header_title__IvpjC",cancel_button:"header_cancel_button__Ok9Vd",menu_active:"header_menu_active__rELfo",side_nav:"header_side_nav__tZT8Y",mobileNavEnter:"header_mobileNavEnter__wAH9B",mobileNavEnterActive:"header_mobileNavEnterActive__Bl+To",mobileNavExit:"header_mobileNavExit__b1M2m",mobileNavExitActive:"header_mobileNavExitActive__U9fVH"},t=n(3925),a=n(1394),s=n(7313),o=n(7918),c=n(3258),d=n(8988),u=n(6417),h=function(){var e=(0,s.useState)(!1),i=(0,l.Z)(e,2),n=i[0],h=i[1],v=(0,s.useState)(!1),m=(0,l.Z)(v,2),_=m[0],f=m[1],x=(0,c.Z)("(max-width: 700px)"),j=(0,s.useRef)(null),p=(0,s.useRef)(null),b=0,N=0,g=function(e,i){var n=!1;return function(){n||(e.apply(void 0,arguments),n=!0,setTimeout((function(){n=!1}),i))}}((function(e){var i,n=null===(i=j.current)||void 0===i?void 0:i.clientHeight;if(n&&j.current){var l=b-window.scrollY;l>0?N+=l:N=0,N>=n||window.scrollY<n||l>=n&&!j.current.classList.contains(r.show)?j.current.classList.remove(r.hide):l<0&&j.current.classList.add(r.hide),b=window.scrollY}}),10);return(0,s.useEffect)((function(){var e;if(p.current){var i=Array.from(null===(e=p.current)||void 0===e?void 0:e.querySelectorAll("a[href]:not([disabled]), button:not([disabled])"));(null===i||void 0===i?void 0:i[0]).focus();var n=function(e){e.preventDefault(),i.includes(e.target)||h(!1)};return document.addEventListener("focus",n,!0),function(){return document.removeEventListener("focus",n,!0)}}}),[n]),(0,s.useEffect)((function(){return window.addEventListener("scroll",g),function(){return window.removeEventListener("scroll",g)}}),[g]),(0,s.useEffect)((function(){var e=document.querySelector("html");e&&(_&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[_]),(0,u.jsxs)(u.Fragment,{children:[x&&(0,u.jsx)(a.Z,{unmountOnExit:!0,timeout:500,in:n,classNames:{enter:r.mobileNavEnter,enterActive:r.mobileNavEnterActive,exit:r.mobileNavExit,exitActive:r.mobileNavExitActive},children:(0,u.jsx)("nav",{ref:p,className:"".concat(r.side_nav),children:(0,u.jsxs)("ul",{onClick:function(){return h(!1)},children:[(0,u.jsx)("button",{className:r.cancel_button,"aria-label":"hide menu",children:(0,u.jsx)(t.fWx,{size:40})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"title"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})})}),(0,u.jsxs)("header",{ref:j,className:r.header,children:[(0,u.jsx)("button",{onClick:function(){return f(!_)},"aria-label":"dark mode switch",role:"checkbox","aria-checked":_,className:"".concat(r.light_switch," ").concat(_?r.light_switch_active:"")}),x?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"title"})}),(0,u.jsx)("button",{onClick:function(){return h(!n)},"aria-label":"side menu",children:(0,u.jsx)(t.Tkb,{size:30})})]}):(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#home",replace:!0,className:r.title,children:(0,u.jsx)("img",{src:d,alt:"home"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})})]})]})}},3258:function(e,i,n){var l=n(9439),r=n(7313);i.Z=function(e){var i=(0,r.useState)(!1),n=(0,l.Z)(i,2),t=n[0],a=n[1],s=(0,r.useCallback)((function(e){a(e.matches)}),[]);return(0,r.useEffect)((function(){return window.matchMedia(e).addEventListener("change",s),a(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",s)}}),[e,s]),t}},7718:function(e,i,n){n.d(i,{Z:function(){return d}});var l=n(7313),r="modal_wrapper__kCicp",t="modal_content__pW8-v",a="modal_close_button__d-3YR",s="modal_hidden__yRlHd",o=n(4972),c=n(6417),d=function(e){var i=(0,l.useRef)(null),n=(0,l.useRef)(null),d=(0,l.useCallback)((function(n){i.current&&e.onCloseClick&&!i.current.contains(n.target)&&e.onCloseClick()}),[e]);(0,l.useEffect)((function(){return document.addEventListener("mousedown",d),function(){return document.removeEventListener("mousedown",d)}}),[d]);var u=(0,l.useCallback)((function(e){var i=Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')),n=i[0];n.focus();var l=function(e){e.preventDefault(),i.includes(e.target)?e.target.focus():n.focus()};return document.addEventListener("focus",l,!0),{onClose:function(){document.removeEventListener("focus",l,!0)}}}),[]);return(0,l.useEffect)((function(){if(document.body.style.overflow=e.isOpen?"hidden":"auto",n.current){var i,l={onClose:function(){return null}};e.isOpen?l=u(n.current):null===(i=l)||void 0===i||i.onClose()}}),[e.isOpen,u]),(0,c.jsxs)("dialog",{ref:n,open:e.isOpen,"aria-label":e.ariaModalLabel,"aria-modal":e.isOpen,"aria-describedby":"modalDescription",className:"".concat(r," ").concat(e.isOpen?"":s),children:[(0,c.jsx)("button",{tabIndex:0,onClick:e.onCloseClick,className:a,children:(0,c.jsx)(o.tgW,{"aria-label":"close modal button",size:30})}),(0,c.jsxs)("div",{ref:i,className:t,children:[(0,c.jsx)("div",{id:"modalDescription",className:s,children:e.ariaModalDescription}),e.children]})]})}},9643:function(e,i,n){n.r(i),n.d(i,{default:function(){return R}});var l=n(9439),r=n(7313),t=n(7890),a="project-details_main__VSaCU",s="project-details_content__PV9Nw",o="project-details_row_space_between__V3xIh",c="project-details_heading__+rxVs",d="project-details_title__n0lTe",u="project-details_line__1TsYj",h="project-details_line_box__MflKA",v="project-details_description_container__oc49o",m="project-details_description__Xk73u",_="project-details_image_button__sG1NW",f="project-details_stack_links_container__py67t",x="project-details_container__cSyH0",j="project-details_container_title__HpqPx",p="project-details_lessons_container__On9Tw",b="project-details_gallery__VNh2R",N="project-details_gallery_images__HuFi-",g="project-details_modal_content__WpEqS",k=n(1589),w=n(9083),E=n(8540),C=n(773),O=n(6143),L=n(7451),A=n(7718),y=n(3201),S=n(3258),Z=n(6417),R=function(){var e,i,n,R,M,P=(0,t.UO)(),U=(0,t.s0)(),D=(0,r.useContext)(k.R),T=(0,r.useState)(),H=(0,l.Z)(T,2),V=H[0],B=H[1],G=(0,S.Z)("(max-width: 700px)"),I=(0,r.useState)(),W=(0,l.Z)(I,2),Y=W[0],z=W[1],X=(0,r.useState)(!1),q=(0,l.Z)(X,2),F=q[0],J=q[1],K=(0,r.useState)(!0),$=(0,l.Z)(K,2),Q=$[0],ee=$[1],ie=null===V||void 0===V||null===(e=V.mediaUrls)||void 0===e?void 0:e[0],ne=null===V||void 0===V||null===(i=V.mediaUrls)||void 0===i?void 0:i[1];(0,r.useEffect)((function(){var e;if(D.projects){var i=null===(e=D.projects)||void 0===e?void 0:e.find((function(e){var i;return(null===(i=e.title.match(/\w+/g))||void 0===i?void 0:i.join("-").toLocaleLowerCase())===P.name}));i?B(i):U("/404",{replace:!0})}}),[P,D.projects]);var le=(0,r.useCallback)((function(e){J(!0),z(e)}),[]),re=(0,r.memo)((function(e){var i=(0,r.useState)(!1),n=(0,l.Z)(i,2),t=n[0],a=n[1];return(0,Z.jsxs)("button",{className:_,onClick:function(){return e.onClick(e.url)},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.style,children:[t&&(0,Z.jsx)("h2",{children:"EXPAND"}),(0,Z.jsx)("img",{src:e.url,alt:e.alt})]})}));return(0,Z.jsxs)("div",{onLoad:function(){(0,E.Z)(!1),Q&&window.scroll(0,0),Q&&ee(!1)},className:"body",children:[(0,Z.jsx)(O.Z,{}),(0,Z.jsx)(A.Z,{isOpen:F,ariaModalLabel:"Gallery Image Modal",ariaModalDescription:"Clear view of an Image",onCloseClick:function(){return J(!1)},children:(0,Z.jsx)("div",{className:g,children:(0,Z.jsx)("img",{src:Y,alt:"selected media"})})}),(0,Z.jsxs)("main",{className:a,children:[(0,Z.jsx)("img",{src:w,className:"old-texture",alt:"old texture",style:{opacity:.3}}),(0,Z.jsxs)("div",{className:s,children:[(0,Z.jsx)("h1",{className:c,children:"GOOD OL' PROJECT NEWS"}),(0,Z.jsx)("div",{className:u,"aria-label":"line"}),(0,Z.jsxs)("div",{className:o+" "+h,children:[(0,Z.jsx)("h3",{children:null!==V&&void 0!==V&&V.inProgress?"IN PROGRESS":""}),(0,Z.jsx)("h3",{children:"PERSONAL"})]}),(0,Z.jsx)("div",{className:u,"aria-label":"line"}),(0,Z.jsx)("h2",{className:d,children:null===V||void 0===V?void 0:V.title.toLocaleUpperCase()}),(0,Z.jsxs)("section",{className:v,children:[(0,Z.jsxs)("span",{className:m,children:[(null===V||void 0===V?void 0:V.mainMediaUrl)&&(0,Z.jsx)(re,{onClick:le,url:null===V||void 0===V?void 0:V.mainMediaUrl,alt:"main media"},null===V||void 0===V?void 0:V.mainMediaUrl),(0,Z.jsx)(C.D,{components:{p:"h1"},children:(null===V||void 0===V||null===(n=V.description)||void 0===n?void 0:n[0])||""}),(0,Z.jsx)(C.D,{children:(null===V||void 0===V||null===(R=V.description)||void 0===R?void 0:R.slice(1))||""})]}),(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsx)("h2",{children:"TECH STACK"}),(0,Z.jsx)("p",{children:null===V||void 0===V||null===(M=V.stack)||void 0===M?void 0:M.join(", ")}),(0,Z.jsxs)("div",{children:[(null===V||void 0===V?void 0:V.repo)&&(0,Z.jsx)("a",{href:V.repo,target:"_blank",rel:"noreferrer",children:"REPO"}),(null===V||void 0===V?void 0:V.link)&&(0,Z.jsx)("a",{href:V.link,target:"_blank",rel:"noreferrer",children:"WEBSITE"})]})]})]}),(0,Z.jsxs)("section",{children:[(null===V||void 0===V?void 0:V.purposeAndGoal)&&(0,Z.jsx)(y.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var i=e.inView,n=e.ref;return(0,Z.jsx)("div",{ref:n,className:"".concat(x," ").concat(i?"visual-show":"visual-hide"),children:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("h2",{className:j,children:"PURPOSE & GOALS"}),ie&&(0,Z.jsx)(re,{onClick:le,url:ie,alt:"second media",style:{float:"right"}},ie),(0,Z.jsx)(C.D,{children:(null===V||void 0===V?void 0:V.purposeAndGoal)||""})]})})}}),(null===V||void 0===V?void 0:V.problems)&&(0,Z.jsx)(y.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var i=e.inView,n=e.ref;return(0,Z.jsx)("div",{ref:n,className:"".concat(x," ").concat(i?"visual-show":"visual-hide"),children:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("h2",{className:j,children:"PROBLEMS FACED"}),V.purposeAndGoal?ne&&(0,Z.jsx)(re,{onClick:le,url:ne,alt:"third media",style:{marginRight:G?"0rem":"2rem"}},ne):ie&&(0,Z.jsx)(re,{onClick:le,url:ie,alt:"second media",style:{marginRight:G?"0rem":"2rem"}},ie),(0,Z.jsx)(C.D,{children:(null===V||void 0===V?void 0:V.problems)||""})]})})}})]}),(null===V||void 0===V?void 0:V.lessonsLearned)&&(0,Z.jsx)(y.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var i=e.inView,n=e.ref;return(0,Z.jsxs)("div",{ref:n,className:"".concat(p," ").concat(i?"visual-show":"visual-hide"),children:[(0,Z.jsx)("h2",{children:"LESSONS LEARNED"}),(0,Z.jsx)(C.D,{children:(null===V||void 0===V?void 0:V.lessonsLearned)||""})]})}}),(null===V||void 0===V?void 0:V.mediaUrls)&&(null===V||void 0===V?void 0:V.mediaUrls.length)>0&&(0,Z.jsxs)("section",{className:b,children:[(0,Z.jsx)("div",{children:(0,Z.jsx)("h3",{children:"GALLERY"})}),(0,Z.jsx)(y.ZP,{triggerOnce:!0,threshold:.15,children:function(e){var i,n=e.inView,l=e.ref;return(0,Z.jsxs)("div",{ref:l,className:"".concat(N," ").concat(n?"visual-show":"visual-hide"),children:[V.mainMediaUrl&&(0,Z.jsx)(re,{onClick:le,url:V.mainMediaUrl,alt:"main gallery media"}),null===V||void 0===V||null===(i=V.mediaUrls)||void 0===i?void 0:i.map((function(e,i){return(0,Z.jsx)(re,{onClick:le,url:e,alt:i+" gallery media"},e)}))]})}})]})]})]}),(0,Z.jsx)(L.Z,{disableTexture:!0})]})}},8988:function(e,i,n){e.exports=n.p+"static/media/title.0c9205db55d73f8d52ee.png"}}]);