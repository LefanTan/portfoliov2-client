"use strict";(self.webpackChunkportfoliov2_client=self.webpackChunkportfoliov2_client||[]).push([[507],{7451:function(e,n,i){i.d(n,{Z:function(){return c}});var t="footer_footer__XzyJ6",r=i(9083),o=i(6672),l=i(7313),a=i(1589),s=i(6417),c=function(e){var n,i,c,d,u=e.disableTexture,h=(0,l.useContext)(a.R);return(0,s.jsxs)("footer",{className:t,children:[!u&&(0,s.jsx)("img",{src:r,className:"old-texture ",alt:"old texture"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:null===(n=h.profile)||void 0===n?void 0:n.github,"aria-label":"github link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.XXB,{size:30})}),(0,s.jsx)("a",{href:null===(i=h.profile)||void 0===i?void 0:i.linkedin,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.BUd,{size:30})}),(0,s.jsx)("a",{href:null===(c=h.profile)||void 0===c?void 0:c.resumeUrl,"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.B$y,{size:30})}),(0,s.jsx)("a",{href:"mailto:".concat(null===(d=h.user)||void 0===d?void 0:d.email),"aria-label":"linkedin link",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.SRX,{size:30})})]}),(0,s.jsx)("p",{children:"JIAHUI (LEFAN) TAN \xa9 2021"})]})}},6143:function(e,n,i){i.d(n,{Z:function(){return v}});var t=i(9439),r={header:"header_header__9bmGt",hide:"header_hide__F0WrX",light_switch:"header_light_switch__6p2qm",header_anchor:"header_header_anchor__Rp0yN",title:"header_title__jbr14",cancel_button:"header_cancel_button__+XRgc",menu_active:"header_menu_active__uGGre",side_nav:"header_side_nav__JzshD",mobileNavEnter:"header_mobileNavEnter__MmzAJ",mobileNavEnterActive:"header_mobileNavEnterActive__i3GlP",mobileNavExit:"header_mobileNavExit__pTBqd",mobileNavExitActive:"header_mobileNavExitActive__U7IgW"},o=i(3925),l=i(1394),a=i(7313),s=i(7918),c=i(3258),d=i(8988),u=i(9083),h=i(6417),v=function(){var e=(0,a.useState)(!1),n=(0,t.Z)(e,2),i=n[0],v=n[1],_=(0,a.useState)(!1),f=(0,t.Z)(_,2),p=f[0],m=f[1],x=(0,c.Z)("(max-width: 700px)"),j=(0,a.useRef)(null),b=(0,a.useRef)(null),g=0,N=0,w=function(e,n){var i=!1;return function(){i||(e.apply(void 0,arguments),i=!0,setTimeout((function(){i=!1}),n))}}((function(e){var n,i=null===(n=j.current)||void 0===n?void 0:n.clientHeight;if(i&&j.current){var t=g-window.scrollY;t>0?N+=t:N=0,N>=i||window.scrollY<i||t>=i&&!j.current.classList.contains(r.show)?j.current.classList.remove(r.hide):t<0&&j.current.classList.add(r.hide),g=window.scrollY}}),50);return(0,a.useEffect)((function(){var e;if(b.current){var n=Array.from(null===(e=b.current)||void 0===e?void 0:e.querySelectorAll("a[href]:not([disabled]), button:not([disabled])"));n.at(0).focus();var i=function(e){e.preventDefault(),n.includes(e.target)||v(!1)};return document.addEventListener("focus",i,!0),function(){return document.removeEventListener("focus",i,!0)}}}),[i]),(0,a.useEffect)((function(){return window.addEventListener("scroll",w),function(){return window.removeEventListener("scroll",w)}}),[w]),(0,a.useEffect)((function(){var e=document.querySelector("html");e&&(p&&!e.classList.contains(".black-and-white")?e.classList.add("black-and-white"):e.classList.remove("black-and-white"))}),[p]),(0,h.jsxs)(h.Fragment,{children:[x&&(0,h.jsx)(l.Z,{unmountOnExit:!0,timeout:500,in:i,classNames:{enter:r.mobileNavEnter,enterActive:r.mobileNavEnterActive,exit:r.mobileNavExit,exitActive:r.mobileNavExitActive},children:(0,h.jsxs)("nav",{ref:b,className:"".concat(r.side_nav),children:[(0,h.jsx)("img",{src:u,className:"old-texture",alt:"old texture"}),(0,h.jsxs)("ul",{onClick:function(){return v(!1)},children:[(0,h.jsx)("button",{className:r.cancel_button,"aria-label":"hide menu",children:(0,h.jsx)(o.fWx,{size:40})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#home",replace:!0,className:r.title,children:(0,h.jsx)("img",{src:d,alt:"title"})})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})]})}),(0,h.jsxs)("header",{ref:j,className:r.header,children:[(0,h.jsx)("img",{src:u,className:"old-texture",alt:"old pattern",style:{zIndex:8,opacity:.2}}),(0,h.jsx)("button",{onClick:function(){return m(!p)},"aria-label":"switch",className:"".concat(r.light_switch," ").concat(p?r.light_switch_active:"")}),x?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.fO,{to:"/#home",replace:!0,className:r.title,children:(0,h.jsx)("img",{src:d,alt:"title"})}),(0,h.jsx)("button",{onClick:function(){return v(!i)},"aria-label":"side menu",children:(0,h.jsx)(o.Tkb,{size:30})})]}):(0,h.jsx)("nav",{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#home",replace:!0,className:r.header_anchor,children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#projects",replace:!0,className:r.header_anchor,children:"Projects"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#home",replace:!0,className:r.title,children:(0,h.jsx)("img",{src:d,alt:"title"})})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#about",replace:!0,className:r.header_anchor,children:"About"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.fO,{to:"/#contact",replace:!0,className:r.header_anchor,children:"Contact"})})]})})]})]})}},3258:function(e,n,i){var t=i(9439),r=i(7313);n.Z=function(e){var n=(0,r.useState)(!1),i=(0,t.Z)(n,2),o=i[0],l=i[1],a=(0,r.useCallback)((function(e){l(e.matches)}),[]);return(0,r.useEffect)((function(){return window.matchMedia(e).addEventListener("change",a),l(window.matchMedia(e).matches),function(){return window.matchMedia(e).removeEventListener("change",a)}}),[e,a]),o}},7718:function(e,n,i){i.d(n,{Z:function(){return d}});var t=i(7313),r="modal_wrapper__PEMla",o="modal_content__nbT1w",l="modal_close_button__F9yVC",a="modal_hidden__qKwFa",s=i(4972),c=i(6417),d=function(e){var n=(0,t.useRef)(null),i=(0,t.useRef)(null);return(0,t.useEffect)((function(){if(document.body.style.overflow=e.isOpen?"hidden":"auto",i.current){var n,t={onClose:function(){return null}};e.isOpen?t=function(e){var n=Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')),i=n[0];i.focus();var t=function(e){e.preventDefault(),n.includes(e.target)?e.target.focus():i.focus()};return document.addEventListener("focus",t,!0),{onClose:function(){document.removeEventListener("focus",t,!0)}}}(i.current):null===(n=t)||void 0===n||n.onClose()}}),[e.isOpen]),(0,c.jsxs)("dialog",{ref:i,open:e.isOpen,"aria-label":e.ariaModalLabel,"aria-modal":e.isOpen,"aria-describedby":"modalDescription",className:"".concat(r," ").concat(e.isOpen?"":a),children:[(0,c.jsx)("button",{tabIndex:0,onClick:e.onCloseClick,className:l,children:(0,c.jsx)(s.tgW,{size:30})}),(0,c.jsxs)("div",{ref:n,className:o,children:[(0,c.jsx)("div",{id:"modalDescription",className:a,children:e.ariaModalDescription}),e.children]})]})}},5507:function(e,n,i){i.r(n),i.d(n,{default:function(){return E}});var t=i(9439),r=i(7313),o=i(7890),l={main:"project-details_main__jBMd9",content:"project-details_content__Z4muM",onload:"project-details_onload__Jcap2",old_texture:"project-details_old_texture__infqr index_old-texture__l7KkJ",row:"project-details_row__fLnWI",row_space_between:"project-details_row_space_between__txf3W",heading:"project-details_heading__KHBnJ",title:"project-details_title__TohrW",line:"project-details_line__ztad3",line_box:"project-details_line_box__7uPPA",description_container:"project-details_description_container__z95U5",description:"project-details_description__PUcI2",image_button:"project-details_image_button__ucXha",stack_links_container:"project-details_stack_links_container__3Q8g9",container:"project-details_container__IwjmE",container_title:"project-details_container_title__jXxQ2",lessons_container:"project-details_lessons_container__omVc4",gallery_images:"project-details_gallery_images__oqBxf",modal_content:"project-details_modal_content__ixHwA",stack_goals_container:"project-details_stack_goals_container__kuVyN",right_side:"project-details_right_side__9m7bX"},a=i(1589),s=i(9083),c=i(8540),d=i(1200),u=i(6143),h=i(7451),v=i(7718);function _(){return _=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},_.apply(this,arguments)}function f(e,n){return f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},f(e,n)}var p=new Map,m=new WeakMap,x=0,j=void 0;function b(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(i=e.root)?(m.has(i)||(x+=1,m.set(i,x.toString())),m.get(i)):"0":e[n]);var i})).toString()}function g(e,n,i,t){if(void 0===i&&(i={}),void 0===t&&(t=j),"undefined"===typeof window.IntersectionObserver&&void 0!==t){var r=e.getBoundingClientRect();return n(t,{isIntersecting:t,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var o=function(e){var n=b(e),i=p.get(n);if(!i){var t,r=new Map,o=new IntersectionObserver((function(n){n.forEach((function(n){var i,o=n.isIntersecting&&t.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=o),null==(i=r.get(n.target))||i.forEach((function(e){e(o,n)}))}))}),e);t=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:o,elements:r},p.set(n,i)}return i}(i),l=o.id,a=o.observer,s=o.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(n),a.observe(e),function(){c.splice(c.indexOf(n),1),0===c.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),p.delete(l))}}var N=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function w(e){return"function"!==typeof e.children}var k=function(e){var n,i;function t(n){var i;return(i=e.call(this,n)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,n){e&&i.props.triggerOnce&&i.unobserve(),w(i.props)||i.setState({inView:e,entry:n}),i.props.onChange&&i.props.onChange(e,n)},i.state={inView:!!n.initialInView,entry:void 0},i}i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,f(n,i);var o=t.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,n=e.threshold,i=e.root,t=e.rootMargin,r=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=g(this.node,this.handleChange,{threshold:n,root:i,rootMargin:t,trackVisibility:r,delay:o},l)}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!w(this.props)){var e=this.state,n=e.inView,i=e.entry;return this.props.children({inView:n,entry:i,ref:this.handleNode})}var t=this.props,o=t.children,l=t.as,a=t.tag,s=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(t,N);return r.createElement(l||a||"div",_({ref:this.handleNode},s),o)},t}(r.Component);k.displayName="InView",k.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var y=i(6417),E=function(){var e,n,i,_,f,p,m=(0,o.UO)(),x=(0,o.s0)(),j=(0,r.useContext)(a.R),b=(0,r.useState)(),g=(0,t.Z)(b,2),N=g[0],w=g[1],E=(0,r.useState)(),O=(0,t.Z)(E,2),C=O[0],L=O[1],A=(0,r.useState)(!1),M=(0,t.Z)(A,2),S=M[0],V=M[1],R=(0,r.useState)(!0),U=(0,t.Z)(R,2),I=U[0],P=U[1],Z=null===N||void 0===N||null===(e=N.mediaUrls)||void 0===e?void 0:e.at(0),D=null===N||void 0===N||null===(n=N.mediaUrls)||void 0===n?void 0:n.at(1);null===N||void 0===N||null===(i=N.mediaUrls)||void 0===i||i.at(2);(0,r.useEffect)((function(){var e;if(j.projects){var n=null===(e=j.projects)||void 0===e?void 0:e.find((function(e){var n;return(null===(n=e.title.match(/\w+/g))||void 0===n?void 0:n.join("-").toLocaleLowerCase())===m.name}));n?w(n):x("/404",{replace:!0})}}),[m,j.projects]);var z=function(e){var n=(0,r.useState)(!1),i=(0,t.Z)(n,2),o=i[0],a=i[1];return(0,y.jsxs)("button",{className:l.image_button,onClick:e.onClick,onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.style,children:[o&&(0,y.jsx)("h2",{children:"EXPAND"}),(0,y.jsx)("img",{src:e.url,alt:e.alt})]})};return(0,y.jsxs)("div",{onLoad:function(){(0,c.Z)(!1),I&&window.scroll(0,0),I&&P(!1)},className:"body",children:[(0,y.jsx)(u.Z,{}),(0,y.jsx)(v.Z,{isOpen:S,ariaModalLabel:"Gallery Image Modal",ariaModalDescription:"Clear view of an Image",onCloseClick:function(){return V(!1)},children:(0,y.jsx)("div",{className:l.modal_content,children:(0,y.jsx)("img",{src:C,alt:"selected media"})})}),(0,y.jsxs)("main",{className:l.main,children:[(0,y.jsx)("img",{src:s,className:l.old_texture,alt:"old texture"}),(0,y.jsxs)("div",{className:l.content,children:[(0,y.jsx)("h1",{className:l.heading,children:"GOOD OL' PROJECT NEWS"}),(0,y.jsx)("div",{className:l.line,"aria-label":"line"}),(0,y.jsxs)("div",{className:l.row_space_between+" "+l.line_box,children:[(0,y.jsx)("h3",{children:null!==N&&void 0!==N&&N.inProgress?"IN PROGRESS":""}),(0,y.jsx)("h3",{children:"PERSONAL"})]}),(0,y.jsx)("div",{className:l.line,"aria-label":"line"}),(0,y.jsx)("h2",{className:l.title,children:null===N||void 0===N?void 0:N.title.toLocaleUpperCase()}),(0,y.jsxs)("section",{className:l.description_container,children:[(0,y.jsxs)("span",{className:l.description,children:[(null===N||void 0===N?void 0:N.mainMediaUrl)&&(0,y.jsx)(z,{onClick:function(){V(!0),L(null===N||void 0===N?void 0:N.mainMediaUrl)},url:null===N||void 0===N?void 0:N.mainMediaUrl,alt:"main media"},null===N||void 0===N?void 0:N.mainMediaUrl),(0,y.jsx)(d.D,{components:{p:"h1"},children:(null===N||void 0===N||null===(_=N.description)||void 0===_?void 0:_.at(0))||""}),(0,y.jsx)(d.D,{children:(null===N||void 0===N||null===(f=N.description)||void 0===f?void 0:f.slice(1))||""})]}),(0,y.jsxs)("div",{className:l.stack_links_container,children:[(0,y.jsx)("h2",{children:"TECH STACK"}),(0,y.jsx)("p",{children:null===N||void 0===N||null===(p=N.stack)||void 0===p?void 0:p.join(", ")}),(0,y.jsxs)("div",{children:[(null===N||void 0===N?void 0:N.repo)&&(0,y.jsx)("a",{href:N.repo,target:"_blank",rel:"noreferrer",children:"REPO"}),(null===N||void 0===N?void 0:N.link)&&(0,y.jsx)("a",{href:N.link,target:"_blank",rel:"noreferrer",children:"WEBSITE"})]})]})]}),(0,y.jsxs)("section",{children:[(null===N||void 0===N?void 0:N.purposeAndGoal)&&(0,y.jsx)(k,{triggerOnce:!0,delay:1,children:function(e){var n=e.inView,i=e.ref;return(0,y.jsx)("div",{ref:i,className:"".concat(l.container," ").concat(n?"visual-show":"visual-hide"),children:(0,y.jsxs)("span",{children:[(0,y.jsx)("h2",{className:l.container_title,children:"PURPOSE & GOALS"}),Z&&(0,y.jsx)(z,{onClick:function(){V(!0),L(Z)},url:Z,alt:"second media",style:{float:"right"}},Z),(0,y.jsx)(d.D,{children:(null===N||void 0===N?void 0:N.purposeAndGoal)||""})]})})}}),(null===N||void 0===N?void 0:N.problems)&&(0,y.jsx)(k,{triggerOnce:!0,children:function(e){var n=e.inView,i=e.ref;return(0,y.jsx)("div",{ref:i,className:"".concat(l.container," ").concat(n?"visual-show":"visual-hide"),children:(0,y.jsxs)("span",{children:[(0,y.jsx)("h2",{className:l.container_title,children:"PROBLEMS FACED"}),D&&(0,y.jsx)(z,{onClick:function(){V(!0),L(D)},url:D,alt:"third media",style:{marginRight:"2rem"}},D),(0,y.jsx)(d.D,{children:(null===N||void 0===N?void 0:N.problems)||""})]})})}})]}),(null===N||void 0===N?void 0:N.lessonsLearned)&&(0,y.jsx)(k,{triggerOnce:!0,children:function(e){var n=e.inView,i=e.ref;return(0,y.jsxs)("div",{ref:i,className:"".concat(l.lessons_container," ").concat(n?"visual-show":"visual-hide"),children:[(0,y.jsx)("h2",{children:"LESSONS LEARNED"}),(0,y.jsx)(d.D,{children:(null===N||void 0===N?void 0:N.lessonsLearned)||""})]})}}),(null===N||void 0===N?void 0:N.mediaUrls)&&(null===N||void 0===N?void 0:N.mediaUrls.length)>0&&(0,y.jsx)("section",{className:l.gallery,children:(0,y.jsxs)("div",{className:l.gallery_images,children:[(0,y.jsx)("div",{children:(0,y.jsx)("h3",{children:"GALLERY"})}),N.mainMediaUrl&&(0,y.jsx)(z,{onClick:function(){V(!0),L(N.mainMediaUrl)},url:N.mainMediaUrl,alt:"main media"}),null===N||void 0===N?void 0:N.mediaUrls.map((function(e,n){return(0,y.jsx)(z,{onClick:function(){V(!0),L(e)},url:e,alt:n+" media"},e)}))]})})]})]}),(0,y.jsx)(h.Z,{disableTexture:!0})]})}},8988:function(e,n,i){e.exports=i.p+"static/media/title.0c9205db55d73f8d52ee.png"}}]);