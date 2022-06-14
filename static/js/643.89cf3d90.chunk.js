"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[643],{7451:function(e,n,i){i.d(n,{Z:function(){return c}});var l="footer_footer__XzyJ6",r=i(6672),t=i(7313),a=i(1589),s=i(6417),c=function(){var e,n,i=(0,t.useContext)(a.R);return(0,s.jsxs)("footer",{className:l,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"https://github.com/LefanTan","aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.XXB,{size:30})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/lefantan/","aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.BUd,{size:30})}),(0,s.jsx)("a",{href:null===(e=i.profile)||void 0===e?void 0:e.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.B$y,{size:30})}),(0,s.jsx)("a",{href:"mailto:".concat(null===(n=i.user)||void 0===n?void 0:n.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.SRX,{size:30})})]}),(0,s.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},6143:function(e,n,i){i.d(n,{Z:function(){return h}});var l=i(9439),r=i(7313),t=i(3925),a=i(7918),s=i(1394),c=i(8988),o={header:"header_header__9bmGt",hide:"header_hide__F0WrX",light_switch:"header_light_switch__6p2qm",menu_button:"header_menu_button__H7u9N",side_nav:"header_side_nav__JzshD",header_anchor:"header_header_anchor__Rp0yN",title:"header_title__jbr14",cancel_button:"header_cancel_button__+XRgc",menu_active:"header_menu_active__uGGre",mobileNavEnter:"header_mobileNavEnter__MmzAJ",mobileNavEnterActive:"header_mobileNavEnterActive__i3GlP",mobileNavExit:"header_mobileNavExit__pTBqd",mobileNavExitActive:"header_mobileNavExitActive__U7IgW"},d=i(3258),u=i(6417),h=function(){var e=(0,r.useState)(!1),n=(0,l.Z)(e,2),i=n[0],h=n[1],m=(0,r.useState)(!1),v=(0,l.Z)(m,2),_=v[0],f=v[1],j=(0,d.Z)("(max-width: 700px)"),x=(0,r.useRef)(null),p=(0,r.useRef)(null),b=0,N=0,g=function(e,n){var i=!1;return function(){i||(e.apply(void 0,arguments),i=!0,setTimeout((function(){i=!1}),n))}}((function(e){var n,i=null===(n=x.current)||void 0===n?void 0:n.clientHeight;if(i&&x.current){var l=b-window.scrollY;l>0?N+=l:N=0,N>=i||window.scrollY<i||l>=i&&!x.current.classList.contains(o.show)?x.current.classList.remove(o.hide):l<0&&x.current.classList.add(o.hide),b=window.scrollY}}),10);return(0,r.useEffect)((function(){var e;if(p.current){var n=Array.from(null===(e=p.current)||void 0===e?void 0:e.querySelectorAll("a[href]:not([disabled]), button:not([disabled])"));(null===n||void 0===n?void 0:n[0]).focus();var i=function(e){e.preventDefault(),n.includes(e.target)||h(!1)};return document.addEventListener("focus",i,!0),function(){return document.removeEventListener("focus",i,!0)}}}),[i]),(0,r.useEffect)((function(){return window.addEventListener("scroll",g),function(){return window.removeEventListener("scroll",g)}}),[g]),(0,r.useEffect)((function(){var e=document.querySelector("html");e&&(_&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[_]),(0,u.jsxs)(u.Fragment,{children:[j&&(0,u.jsx)(s.Z,{unmountOnExit:!0,timeout:500,in:i,classNames:{enter:o.mobileNavEnter,enterActive:o.mobileNavEnterActive,exit:o.mobileNavExit,exitActive:o.mobileNavExitActive},children:(0,u.jsx)("nav",{ref:p,className:"".concat(o.side_nav),children:(0,u.jsxs)("ul",{onClick:function(){return h(!1)},children:[(0,u.jsx)("button",{className:o.cancel_button,"aria-label":"hide menu",children:(0,u.jsx)(t.fWx,{size:40})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#about",replace:!0,className:o.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"title"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#projects",replace:!0,className:o.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#contact",replace:!0,className:o.header_anchor,children:"Contact"})})]})})}),(0,u.jsxs)("header",{ref:x,className:o.header,children:[(0,u.jsx)("button",{onClick:function(){return f(!_)},"aria-label":"dark mode switch",role:"checkbox","aria-checked":_,className:"".concat(o.light_switch," ").concat(_?o.light_switch_active:"")}),j?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"title"})}),(0,u.jsx)("button",{onClick:function(){return h(!i)},className:o.menu_button,"aria-label":"side menu",children:(0,u.jsx)(t.Tkb,{size:30})})]}):(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.header_anchor,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#about",replace:!0,className:o.header_anchor,children:"About"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#home",replace:!0,className:o.title,children:(0,u.jsx)("img",{src:c,alt:"home"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#projects",replace:!0,className:o.header_anchor,children:"Projects"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.fO,{to:"/#contact",replace:!0,className:o.header_anchor,children:"Contact"})})]})})]})]})}},3258:function(e,n,i){var l=i(9439),r=i(7313);n.Z=function(e){var n=(0,r.useState)(!1),i=(0,l.Z)(n,2),t=i[0],a=i[1],s=(0,r.useCallback)((function(e){a(e.matches)}),[]);return(0,r.useEffect)((function(){return window.matchMedia(e).addEventListener("change",s),a(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",s)}}),[e,s]),t}},7718:function(e,n,i){i.d(n,{Z:function(){return d}});var l=i(7313),r="modal_wrapper__PEMla",t="modal_content__nbT1w",a="modal_close_button__F9yVC",s="modal_hidden__qKwFa",c=i(4972),o=i(6417),d=function(e){var n=(0,l.useRef)(null),i=(0,l.useRef)(null),d=(0,l.useCallback)((function(i){n.current&&e.onCloseClick&&!n.current.contains(i.target)&&e.onCloseClick()}),[e]);(0,l.useEffect)((function(){return document.addEventListener("mousedown",d),function(){return document.removeEventListener("mousedown",d)}}),[d]);var u=(0,l.useCallback)((function(e){var n=Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')),i=n[0];i.focus();var l=function(e){e.preventDefault(),n.includes(e.target)?e.target.focus():i.focus()};return document.addEventListener("focus",l,!0),{onClose:function(){document.removeEventListener("focus",l,!0)}}}),[]);return(0,l.useEffect)((function(){if(document.body.style.overflow=e.isOpen?"hidden":"auto",i.current){var n,l={onClose:function(){return null}};e.isOpen?l=u(i.current):null===(n=l)||void 0===n||n.onClose()}}),[e.isOpen,u]),(0,o.jsxs)("dialog",{ref:i,open:e.isOpen,"aria-label":e.ariaModalLabel,"aria-modal":e.isOpen,"aria-describedby":"modalDescription",className:"".concat(r," ").concat(e.isOpen?"":s),children:[(0,o.jsx)("button",{tabIndex:0,onClick:e.onCloseClick,className:a,children:(0,o.jsx)(c.tgW,{"aria-label":"close modal button",size:30})}),(0,o.jsxs)("div",{ref:n,className:t,children:[(0,o.jsx)("div",{id:"modalDescription",className:s,children:e.ariaModalDescription}),e.children]})]})}},9643:function(e,n,i){i.r(n),i.d(n,{default:function(){return P}});var l=i(9439),r=i(7313),t=i(3201),a=i(773),s=i(7890),c=i(9083),o=i(7451),d=i(6143),u=i(8540),h=i(3258),m=i(7718),v="project-details_main__jBMd9",_="project-details_content__Z4muM",f="project-details_row_space_between__txf3W",j="project-details_heading__KHBnJ",x="project-details_title__TohrW",p="project-details_line__ztad3",b="project-details_line_box__7uPPA",N="project-details_description_container__z95U5",g="project-details_description__PUcI2",w="project-details_image_button__ucXha",k="project-details_stack_links_container__3Q8g9",E="project-details_container__IwjmE",C="project-details_container_title__jXxQ2",L="project-details_lessons_container__omVc4",O="project-details_gallery__bPZU+",A="project-details_gallery_images__oqBxf",y="project-details_modal_content__ixHwA",Z=i(1589),S=i(6417),P=function(){var e,n,i,P,M,R=(0,s.UO)(),U=(0,s.s0)(),D=(0,r.useContext)(Z.R),z=(0,r.useState)(),G=(0,l.Z)(z,2),T=G[0],I=G[1],B=(0,h.Z)("(max-width: 700px)"),X=(0,r.useState)(),H=(0,l.Z)(X,2),W=H[0],q=H[1],F=(0,r.useState)(!1),J=(0,l.Z)(F,2),V=J[0],Y=J[1],K=(0,r.useState)(!0),Q=(0,l.Z)(K,2),$=Q[0],ee=Q[1],ne=null===T||void 0===T||null===(e=T.mediaUrls)||void 0===e?void 0:e[0],ie=null===T||void 0===T||null===(n=T.mediaUrls)||void 0===n?void 0:n[1];(0,r.useEffect)((function(){var e;if(D.projects){var n=null===(e=D.projects)||void 0===e?void 0:e.find((function(e){var n;return(null===(n=e.title.match(/\w+/g))||void 0===n?void 0:n.join("-").toLocaleLowerCase())===R.name}));n?I(n):U("/404",{replace:!0})}}),[R,D.projects]);var le=(0,r.useCallback)((function(e){Y(!0),q(e)}),[]),re=(0,r.memo)((function(e){var n=(0,r.useState)(!1),i=(0,l.Z)(n,2),t=i[0],a=i[1];return(0,S.jsxs)("button",{className:w,onClick:function(){return e.onClick(e.url)},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.style,children:[t&&(0,S.jsx)("h2",{children:"EXPAND"}),(0,S.jsx)("img",{src:e.url,alt:e.alt})]})}));return(0,S.jsxs)("div",{onLoad:function(){(0,u.Z)(!1),$&&window.scroll(0,0),$&&ee(!1)},className:"body",children:[(0,S.jsx)(d.Z,{}),(0,S.jsx)(m.Z,{isOpen:V,ariaModalLabel:"Gallery Image Modal",ariaModalDescription:"Clear view of an Image",onCloseClick:function(){return Y(!1)},children:(0,S.jsx)("div",{className:y,children:(0,S.jsx)("img",{src:W,alt:"selected media"})})}),(0,S.jsxs)("main",{className:v,children:[(0,S.jsx)("img",{src:c,className:"old-texture",alt:"old texture",style:{opacity:.3}}),(0,S.jsxs)("div",{className:_,children:[(0,S.jsx)("h1",{className:j,children:"GOOD OL' PROJECT NEWS"}),(0,S.jsx)("div",{className:p,"aria-label":"line"}),(0,S.jsxs)("div",{className:f+" "+b,children:[(0,S.jsx)("h3",{children:null!==T&&void 0!==T&&T.inProgress?"IN PROGRESS":""}),(0,S.jsx)("h3",{children:"PERSONAL"})]}),(0,S.jsx)("div",{className:p,"aria-label":"line"}),(0,S.jsx)("h2",{className:x,children:null===T||void 0===T?void 0:T.title.toLocaleUpperCase()}),(0,S.jsxs)("section",{className:N,children:[(0,S.jsxs)("span",{className:g,children:[(null===T||void 0===T?void 0:T.mainMediaUrl)&&(0,S.jsx)(re,{onClick:le,url:null===T||void 0===T?void 0:T.mainMediaUrl,alt:"main media"},null===T||void 0===T?void 0:T.mainMediaUrl),(0,S.jsx)(a.D,{components:{p:"h1"},children:(null===T||void 0===T||null===(i=T.description)||void 0===i?void 0:i[0])||""}),(0,S.jsx)(a.D,{children:(null===T||void 0===T||null===(P=T.description)||void 0===P?void 0:P.slice(1))||""})]}),(0,S.jsxs)("div",{className:k,children:[(0,S.jsx)("h2",{children:"TECH STACK"}),(0,S.jsx)("p",{children:null===T||void 0===T||null===(M=T.stack)||void 0===M?void 0:M.join(", ")}),(0,S.jsxs)("div",{children:[(null===T||void 0===T?void 0:T.repo)&&(0,S.jsx)("a",{href:T.repo,target:"_blank",rel:"noreferrer",children:"REPO"}),(null===T||void 0===T?void 0:T.link)&&(0,S.jsx)("a",{href:T.link,target:"_blank",rel:"noreferrer",children:"WEBSITE"})]})]})]}),(0,S.jsxs)("section",{children:[(null===T||void 0===T?void 0:T.purposeAndGoal)&&(0,S.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,S.jsx)("div",{ref:i,className:"".concat(E," ").concat(n?"visual-show":"visual-hide"),children:(0,S.jsxs)("span",{children:[(0,S.jsx)("h2",{className:C,children:"PURPOSE & GOALS"}),ne&&(0,S.jsx)(re,{onClick:le,url:ne,alt:"second media",style:{float:"right",marginLeft:B?"0rem":"2rem"}},ne),(0,S.jsx)(a.D,{children:(null===T||void 0===T?void 0:T.purposeAndGoal)||""})]})})}}),(null===T||void 0===T?void 0:T.problems)&&(0,S.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,S.jsx)("div",{ref:i,className:"".concat(E," ").concat(n?"visual-show":"visual-hide"),children:(0,S.jsxs)("span",{children:[(0,S.jsx)("h2",{className:C,children:"PROBLEMS FACED"}),T.purposeAndGoal?ie&&(0,S.jsx)(re,{onClick:le,url:ie,alt:"third media",style:{marginRight:B?"0rem":"2rem"}},ie):ne&&(0,S.jsx)(re,{onClick:le,url:ne,alt:"second media",style:{marginRight:B?"0rem":"2rem"}},ne),(0,S.jsx)(a.D,{children:(null===T||void 0===T?void 0:T.problems)||""})]})})}})]}),(null===T||void 0===T?void 0:T.lessonsLearned)&&(0,S.jsx)(t.ZP,{triggerOnce:!0,threshold:.25,children:function(e){var n=e.inView,i=e.ref;return(0,S.jsxs)("div",{ref:i,className:"".concat(L," ").concat(n?"visual-show":"visual-hide"),children:[(0,S.jsx)("h2",{children:"LESSONS LEARNED"}),(0,S.jsx)(a.D,{children:(null===T||void 0===T?void 0:T.lessonsLearned)||""})]})}}),(null===T||void 0===T?void 0:T.mediaUrls)&&(null===T||void 0===T?void 0:T.mediaUrls.length)>0&&(0,S.jsxs)("section",{className:O,children:[(0,S.jsx)("div",{children:(0,S.jsx)("h3",{children:"GALLERY"})}),(0,S.jsx)(t.ZP,{triggerOnce:!0,threshold:.15,children:function(e){var n,i=e.inView,l=e.ref;return(0,S.jsxs)("div",{ref:l,className:"".concat(A," ").concat(i?"visual-show":"visual-hide"),children:[T.mainMediaUrl&&(0,S.jsx)(re,{onClick:le,url:T.mainMediaUrl,alt:"main gallery media"}),null===T||void 0===T||null===(n=T.mediaUrls)||void 0===n?void 0:n.map((function(e,n){return(0,S.jsx)(re,{onClick:le,url:e,alt:n+" gallery media"},e)}))]})}})]})]})]}),(0,S.jsx)(o.Z,{})]})}},8988:function(e,n,i){e.exports=i.p+"static/media/title.0c9205db55d73f8d52ee.png"}}]);