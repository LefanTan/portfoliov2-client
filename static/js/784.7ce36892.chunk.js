"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[784],{5390:function(e,n,i){i.d(n,{Z:function(){return c}});var l="footer_footer__YdBAO",r=i(6355),t=i(2791),a=i(4363),s=i(184),c=function(){var e,n,i=(0,t.useContext)(a.R);return(0,s.jsxs)("footer",{className:l,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"https://github.com/LefanTan","aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.XXB,{size:30})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/lefantan/","aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.BUd,{size:30})}),(0,s.jsx)("a",{href:null===(e=i.profile)||void 0===e?void 0:e.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.B$y,{size:30})}),(0,s.jsx)("a",{href:"mailto:".concat(null===(n=i.user)||void 0===n?void 0:n.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.SRX,{size:30})})]}),(0,s.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},9662:function(e,n,i){i.d(n,{Z:function(){return h}});var l=i(9439),r=i(2791),t=i(5880),a=i(3495),s=i(532),c=i(8988),o={header:"header_header__Xrmhv",hide:"header_hide__PiW0E",light_switch:"header_light_switch__3Gobk",menu_button:"header_menu_button__p1yFy",side_nav:"header_side_nav__tZT8Y",header_anchor:"header_header_anchor__BB8-W",title:"header_title__IvpjC",cancel_button:"header_cancel_button__Ok9Vd",menu_active:"header_menu_active__rELfo",mobileNavEnter:"header_mobileNavEnter__wAH9B",mobileNavEnterActive:"header_mobileNavEnterActive__Bl+To",mobileNavExit:"header_mobileNavExit__b1M2m",mobileNavExitActive:"header_mobileNavExitActive__U9fVH"},d=i(197),u=i(184),h=function(){var e=(0,r.useState)(!1),n=(0,l.Z)(e,2),i=n[0],h=n[1],v=(0,r.useState)(!1),m=(0,l.Z)(v,2),_=m[0],f=m[1],x=(0,d.Z)("(max-width: 700px)"),j=(0,r.useRef)(null),p=(0,r.useRef)(null),b=0,N=0,g=function(e,n){var i=!1;return function(){i||(e.apply(void 0,arguments),i=!0,setTimeout((function(){i=!1}),n))}}((function(e){var n,i=null===(n=j.current)||void 0===n?void 0:n.clientHeight;if(i&&j.current){var l=b-window.scrollY;l>0?N+=l:N=0,N>=i||window.scrollY<i||l>=i&&!j.current.classList.contains(o.show)?j.current.classList.remove(o.hide):l<0&&j.current.classList.add(o.hide),b=window.scrollY}}),10);return(0,r.useEffect)((function(){var e;if(p.current){var n=Array.from(null===(e=p.current)||void 0===e?void 0:e.querySelectorAll("a[href]:not([disabled]), button:not([disabled])"));(null===n||void 0===n?void 0:n[0]).focus();var i=function(e){e.preventDefault(),n.includes(e.target)||h(!1)};return document.addEventListener("focus",i,!0),function(){return document.removeEventListener("focus",i,!0)}}}),[i]),(0,r.useEffect)((function(){return window.addEventListener("scroll",g),function(){return window.removeEventListener("scroll",g)}}),[g]),(0,r.useEffect)((function(){var e=document.querySelector("html");e&&(_&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[_]),(0,u.jsxs)(u.Fragment,{children:[x&&(0,u.jsx)(s.Z,{unmountOnExit:!0,timeout:500,in:i,classNames:{enter:o.mobileNavEnter,enterActive:o.mobileNavEnterActive,exit:o.mobileNavExit,exitActive:o.mobileNavExitActive},children:(0,u.jsx)("nav",{ref:p,className:"".concat(o.side_nav),children:(0,u.jsxs)("ul",{onClick:function(){return h(!1)},children:[(0,u.jsx)("button",{className:o.cancel_button,"aria-label":"hide menu",children:(0,u.jsx)(t.fWx,{size:40})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#about",replace:!0,className:o.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"title"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#projects",replace:!0,className:o.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#contact",replace:!0,className:o.header_anchor,children:"Contact"})})]})})}),(0,u.jsxs)("header",{ref:j,className:o.header,children:[(0,u.jsx)("button",{onClick:function(){return f(!_)},"aria-label":"dark mode switch",role:"checkbox","aria-checked":_,className:"".concat(o.light_switch," ").concat(_?o.light_switch_active:"")}),x?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"title"})}),(0,u.jsx)("button",{onClick:function(){return h(!i)},className:o.menu_button,"aria-label":"side menu",children:(0,u.jsx)(t.Tkb,{size:30})})]}):(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#about",replace:!0,className:o.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"home"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#projects",replace:!0,className:o.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#contact",replace:!0,className:o.header_anchor,children:"Contact"})})]})})]})]})}},197:function(e,n,i){var l=i(9439),r=i(2791);n.Z=function(e){var n=(0,r.useState)(!1),i=(0,l.Z)(n,2),t=i[0],a=i[1],s=(0,r.useCallback)((function(e){a(e.matches)}),[]);return(0,r.useEffect)((function(){return window.matchMedia(e).addEventListener("change",s),a(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",s)}}),[e,s]),t}},5578:function(e,n,i){i.d(n,{Z:function(){return d}});var l=i(2791),r="modal_wrapper__kCicp",t="modal_content__pW8-v",a="modal_close_button__d-3YR",s="modal_hidden__yRlHd",c=i(7425),o=i(184),d=function(e){var n=(0,l.useRef)(null),i=(0,l.useRef)(null),d=(0,l.useCallback)((function(i){n.current&&e.onCloseClick&&!n.current.contains(i.target)&&e.onCloseClick()}),[e]);(0,l.useEffect)((function(){return document.addEventListener("mousedown",d),function(){return document.removeEventListener("mousedown",d)}}),[d]);var u=(0,l.useCallback)((function(e){var n=Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')),i=n[0];i.focus();var l=function(e){e.preventDefault(),n.includes(e.target)?e.target.focus():i.focus()};return document.addEventListener("focus",l,!0),{onClose:function(){document.removeEventListener("focus",l,!0)}}}),[]);return(0,l.useEffect)((function(){if(document.body.style.overflow=e.isOpen?"hidden":"auto",i.current){var n,l={onClose:function(){return null}};e.isOpen?l=u(i.current):null===(n=l)||void 0===n||n.onClose()}}),[e.isOpen,u]),(0,o.jsxs)("dialog",{ref:i,open:e.isOpen,"aria-label":e.ariaModalLabel,"aria-modal":e.isOpen,"aria-describedby":"modalDescription",className:"".concat(r," ").concat(e.isOpen?"":s),children:[(0,o.jsx)("button",{tabIndex:0,onClick:e.onCloseClick,className:a,children:(0,o.jsx)(c.tgW,{"aria-label":"close modal button",size:30})}),(0,o.jsxs)("div",{ref:n,className:t,children:[(0,o.jsx)("div",{id:"modalDescription",className:s,children:e.ariaModalDescription}),e.children]})]})}},5784:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var l=i(9439),r=i(2791),t=i(8105),a=i(5125),s=i(6871),c=i(9083),o=i(5390),d=i(9662),u=i(2333),h=i(197),v=i(5578),m="project-details_main__VSaCU",_="project-details_content__PV9Nw",f="project-details_row_space_between__V3xIh",x="project-details_heading__+rxVs",j="project-details_title__n0lTe",p="project-details_line__1TsYj",b="project-details_line_box__MflKA",N="project-details_description_container__oc49o",g="project-details_description__Xk73u",k="project-details_image_button__sG1NW",w="project-details_stack_links_container__py67t",E="project-details_container__cSyH0",C="project-details_container_title__HpqPx",O="project-details_lessons_container__On9Tw",L="project-details_gallery__VNh2R",y="project-details_gallery_images__HuFi-",A="project-details_modal_content__WpEqS",S=i(4363),Z=i(184),R=function(){var e,n,i,R,M,P=(0,s.UO)(),U=(0,s.s0)(),D=(0,r.useContext)(S.R),T=(0,r.useState)(),H=(0,l.Z)(T,2),V=H[0],B=H[1],G=(0,h.Z)("(max-width: 700px)"),I=(0,r.useState)(),W=(0,l.Z)(I,2),Y=W[0],z=W[1],F=(0,r.useState)(!1),X=(0,l.Z)(F,2),q=X[0],J=X[1],K=(0,r.useState)(!0),$=(0,l.Z)(K,2),Q=$[0],ee=$[1],ne=null===V||void 0===V||null===(e=V.mediaUrls)||void 0===e?void 0:e[0],ie=null===V||void 0===V||null===(n=V.mediaUrls)||void 0===n?void 0:n[1];(0,r.useEffect)((function(){var e;if(D.projects){var n=null===(e=D.projects)||void 0===e?void 0:e.find((function(e){var n;return(null===(n=e.title.match(/\w+/g))||void 0===n?void 0:n.join("-").toLocaleLowerCase())===P.name}));n?B(n):U("/404",{replace:!0})}}),[P,D.projects]);var le=(0,r.useCallback)((function(e){J(!0),z(e)}),[]),re=(0,r.memo)((function(e){var n=(0,r.useState)(!1),i=(0,l.Z)(n,2),t=i[0],a=i[1];return(0,Z.jsxs)("button",{className:k,onClick:function(){return e.onClick(e.url)},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.style,children:[t&&(0,Z.jsx)("h2",{children:"EXPAND"}),(0,Z.jsx)("img",{src:e.url,alt:e.alt})]})}));return(0,Z.jsxs)("div",{onLoad:function(){(0,u.Z)(!1),Q&&window.scroll(0,0),Q&&ee(!1)},className:"body",children:[(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(v.Z,{isOpen:q,ariaModalLabel:"Gallery Image Modal",ariaModalDescription:"Clear view of an Image",onCloseClick:function(){return J(!1)},children:(0,Z.jsx)("div",{className:A,children:(0,Z.jsx)("img",{src:Y,alt:"selected media"})})}),(0,Z.jsxs)("main",{className:m,children:[(0,Z.jsx)("img",{src:c,className:"old-texture",alt:"old texture",style:{opacity:.3}}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("h1",{className:x,children:"GOOD OL' PROJECT NEWS"}),(0,Z.jsx)("div",{className:p,"aria-label":"line"}),(0,Z.jsxs)("div",{className:f+" "+b,children:[(0,Z.jsx)("h3",{children:null!==V&&void 0!==V&&V.inProgress?"IN PROGRESS":""}),(0,Z.jsx)("h3",{children:"PERSONAL"})]}),(0,Z.jsx)("div",{className:p,"aria-label":"line"}),(0,Z.jsx)("h2",{className:j,children:null===V||void 0===V?void 0:V.title.toLocaleUpperCase()}),(0,Z.jsxs)("section",{className:N,children:[(0,Z.jsxs)("span",{className:g,children:[(null===V||void 0===V?void 0:V.mainMediaUrl)&&(0,Z.jsx)(re,{onClick:le,url:null===V||void 0===V?void 0:V.mainMediaUrl,alt:"main media"},null===V||void 0===V?void 0:V.mainMediaUrl),(0,Z.jsx)(a.D,{components:{p:"h1"},children:(null===V||void 0===V||null===(i=V.description)||void 0===i?void 0:i[0])||""}),(0,Z.jsx)(a.D,{children:(null===V||void 0===V||null===(R=V.description)||void 0===R?void 0:R.slice(1))||""})]}),(0,Z.jsxs)("div",{className:w,children:[(0,Z.jsx)("h2",{children:"TECH STACK"}),(0,Z.jsx)("p",{children:null===V||void 0===V||null===(M=V.stack)||void 0===M?void 0:M.join(", ")}),(0,Z.jsxs)("div",{children:[(null===V||void 0===V?void 0:V.repo)&&(0,Z.jsx)("a",{href:V.repo,target:"_blank",rel:"noreferrer",children:"REPO"}),(null===V||void 0===V?void 0:V.link)&&(0,Z.jsx)("a",{href:V.link,target:"_blank",rel:"noreferrer",children:"WEBSITE"})]})]})]}),(0,Z.jsxs)("section",{children:[(null===V||void 0===V?void 0:V.purposeAndGoal)&&(0,Z.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,Z.jsx)("div",{ref:i,className:"".concat(E," ").concat(n?"visual-show":"visual-hide"),children:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("h2",{className:C,children:"PURPOSE & GOALS"}),ne&&(0,Z.jsx)(re,{onClick:le,url:ne,alt:"second media",style:{float:"right",marginLeft:G?"0rem":"2rem"}},ne),(0,Z.jsx)(a.D,{children:(null===V||void 0===V?void 0:V.purposeAndGoal)||""})]})})}}),(null===V||void 0===V?void 0:V.problems)&&(0,Z.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,Z.jsx)("div",{ref:i,className:"".concat(E," ").concat(n?"visual-show":"visual-hide"),children:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("h2",{className:C,children:"PROBLEMS FACED"}),V.purposeAndGoal?ie&&(0,Z.jsx)(re,{onClick:le,url:ie,alt:"third media",style:{marginRight:G?"0rem":"2rem"}},ie):ne&&(0,Z.jsx)(re,{onClick:le,url:ne,alt:"second media",style:{marginRight:G?"0rem":"2rem"}},ne),(0,Z.jsx)(a.D,{children:(null===V||void 0===V?void 0:V.problems)||""})]})})}})]}),(null===V||void 0===V?void 0:V.lessonsLearned)&&(0,Z.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,Z.jsxs)("div",{ref:i,className:"".concat(O," ").concat(n?"visual-show":"visual-hide"),children:[(0,Z.jsx)("h2",{children:"LESSONS LEARNED"}),(0,Z.jsx)(a.D,{children:(null===V||void 0===V?void 0:V.lessonsLearned)||""})]})}}),(null===V||void 0===V?void 0:V.mediaUrls)&&(null===V||void 0===V?void 0:V.mediaUrls.length)>0&&(0,Z.jsxs)("section",{className:L,children:[(0,Z.jsx)("div",{children:(0,Z.jsx)("h3",{children:"GALLERY"})}),(0,Z.jsx)(t.ZP,{triggerOnce:!0,threshold:.15,children:function(e){var n,i=e.inView,l=e.ref;return(0,Z.jsxs)("div",{ref:l,className:"".concat(y," ").concat(i?"visual-show":"visual-hide"),children:[V.mainMediaUrl&&(0,Z.jsx)(re,{onClick:le,url:V.mainMediaUrl,alt:"main gallery media"}),null===V||void 0===V||null===(n=V.mediaUrls)||void 0===n?void 0:n.map((function(e,n){return(0,Z.jsx)(re,{onClick:le,url:e,alt:n+" gallery media"},e)}))]})}})]})]})]}),(0,Z.jsx)(o.Z,{})]})}},9083:function(e,n,i){e.exports=i.p+"static/media/old_texture.20c74704c5803dfa713a.jpg"},8988:function(e,n,i){e.exports=i.p+"static/media/title.0c9205db55d73f8d52ee.png"}}]);
//# sourceMappingURL=784.7ce36892.chunk.js.map