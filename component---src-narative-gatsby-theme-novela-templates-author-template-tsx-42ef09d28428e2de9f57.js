(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"423O":function(t,n,e){"use strict";e.r(n);var r=e("wTIg"),a=e("q1tI"),o=e.n(a),i=e("8+79"),c=e("yDd/"),u=e("FMSq"),s=e("MUpH"),l=e("KQm4"),p=e("vuIU"),b=e("dI71"),f=e("qKvR"),d=e("Wbzz"),x=e("TJpk"),g=e("sczP"),h=e("uAKv");function m(){var t=Object(s.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return m=function(){return t},t}function j(){var t=Object(s.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return j=function(){return t},t}function O(){var t=Object(s.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return O=function(){return t},t}var v=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))||this).maxPages=3,n.count=n.props.pageCount,n.current=n.props.index,n.pageRoot=n.props.pathPrefix,n.getFullPath=function(t){return"/"===n.pageRoot?1===t?n.pageRoot:n.pageRoot+"page/"+t:1===t?n.pageRoot:n.pageRoot+"/page/"+t},n}return Object(b.a)(n,t),n.prototype.render=function(){var t=this.count,n=this.current;if(t<=1)return null;var e=this.previousPath,r=this.nextPath,a=this.current<this.count,i=this.current>1;return Object(f.jsx)(o.a.Fragment,null,Object(f.jsx)(x.Helmet,null,i&&Object(f.jsx)("link",{rel:"prev",href:e}),a&&Object(f.jsx)("link",{rel:"next",href:r})),Object(f.jsx)(P,null,i&&Object(f.jsx)(y,{to:e},"Prev"),this.getPageLinks,Object(f.jsx)(L,{"aria-hidden":"true"},Object(f.jsx)("em",null,n)," of ",t),a&&Object(f.jsx)(y,{to:r},"Next")))},Object(p.a)(n,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,n=this.current,e=this.count,r=this.maxPages,a=1===n?n:n-1,o=Object(h.i)(a,e+1-a),i=o.slice(0,r);return o[0]>2&&i.unshift(null),o[0]>1&&i.unshift(1),o[0]+1===e&&o[0]-1>0&&i.splice(o.length-1-r,0,o[0]-1),o[0]+r<e&&i.push(null),o[0]+r-1<e&&i.push(e),Object(l.a)(new Set(i)).map((function(e,r){return null===e?Object(f.jsx)(z,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(f.jsx)(k,{key:"PaginatorPage_"+e,to:t.getFullPath(e),style:{opacity:n===e?1:.3},className:"Paginator__pageLink"},e)}))}}]),n}(a.Component),w=function(t){return Object(f.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",g.a.desktop_up(O()))},y=Object(r.a)(d.Link,{target:"e167mtxe0"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),k=Object(r.a)(d.Link,{target:"e167mtxe1"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),z=Object(r.a)("span",{target:"e167mtxe2"})("opacity:0.3;",w,' &::before{content:"...";}'),L=Object(r.a)("span",{target:"e167mtxe3"})("font-weight:400;",w," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),P=Object(r.a)("nav",{target:"e167mtxe4"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",g.a.tablet(j(),z)," ",g.a.desktop_up(m(),L)),q=e("lYvG"),_=e("uXSa");function S(){var t=Object(s.a)(["\n    font-size: 14px;\n  "]);return S=function(){return t},t}function A(){var t=Object(s.a)(["\n    font-size: 14px;\n  "]);return A=function(){return t},t}function R(){var t=Object(s.a)(["\n  "]);return R=function(){return t},t}function C(){var t=Object(s.a)(["\n  "]);return C=function(){return t},t}function F(){var t=Object(s.a)(["\n    width: 136px;\n    height: 136px;\n    margin-bottom: 25px;\n  "]);return F=function(){return t},t}function D(){var t=Object(s.a)(["\n    width: 146px;\n    height: 146px;\n  "]);return D=function(){return t},t}var I=function(t){var n=t.author;return Object(f.jsx)(T,null,Object(f.jsx)(G,null,Object(f.jsx)(J,{src:n.avatar.large})),Object(f.jsx)(K,null,n.name),Object(f.jsx)(M,null,n.bio),Object(f.jsx)(Y,null,Object(f.jsx)(_.a,{links:n.social})))},T=Object(r.a)("div",{target:"e4kufcu0"})({name:"1fa23tf",styles:"position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:35px auto 110px;"}),G=Object(r.a)("div",{target:"e4kufcu1"})("position:relative;z-index:1;height:164px;width:164px;margin-bottom:35px;border-radius:50%;overflow:hidden;border:2px solid ",(function(t){return t.theme.colors.background}),";box-shadow:0px 15.619px 31.2381px rgba(0,0,0,0.15);",g.a.tablet(D())," ",g.a.phablet(F())),J=Object(r.a)(q.c,{target:"e4kufcu2"})({name:"uodor8",styles:"border-radius:50%;"}),K=Object(r.a)("h1",{target:"e4kufcu3"})("font-size:38px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";color:",(function(t){return t.theme.colors.primary}),";margin-bottom:15px;font-weight:600;",g.a.tablet(C())," ",g.a.phablet(R())),M=Object(r.a)("p",{target:"e4kufcu4"})("margin:0 auto;max-width:450px;color:",(function(t){return t.theme.colors.grey}),";font-size:18px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";line-height:1.4;text-align:center;",g.a.phablet(A())),Y=Object(r.a)("div",{target:"e4kufcu5"})("display:flex;align-items:center;margin-top:35px;",g.a.phablet(S())),E=e("Z86j"),H=e("kx/E");function N(){var t=Object(s.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return N=function(){return t},t}function U(){var t=Object(s.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return U=function(){return t},t}function Q(){var t=Object(s.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return Q=function(){return t},t}function W(){var t=Object(s.a)(["\n    margin-bottom; 15px;\n  "]);return W=function(){return t},t}function X(){var t=Object(s.a)(["\n    display: -webkit-box;\n  "]);return X=function(){return t},t}function Z(){var t=Object(s.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return Z=function(){return t},t}function B(){var t=Object(s.a)(["\n    font-size: 24px;  \n  "]);return B=function(){return t},t}function V(){var t=Object(s.a)(["\n    margin-bottom: 15px;\n  "]);return V=function(){return t},t}function $(){var t=Object(s.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return $=function(){return t},t}function tt(){var t=Object(s.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return tt=function(){return t},t}function nt(){var t=Object(s.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return nt=function(){return t},t}function et(){var t=Object(s.a)(["\n    margin-bottom: 60px;\n  "]);return et=function(){return t},t}function rt(){var t=Object(s.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return rt=function(){return t},t}function at(){var t=Object(s.a)(["\n    grid-template-columns: 1fr;\n  "]);return at=function(){return t},t}function ot(){var t=Object(s.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return ot=function(){return t},t}function it(){var t=Object(s.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return it=function(){return t},t}function ct(){var t=Object(s.a)(["\n    grid-template-columns: 1fr 1fr;\n  "]);return ct=function(){return t},t}function ut(){var t=Object(s.a)(["\n    -webkit-line-clamp: 3;\n  "]);return ut=function(){return t},t}var st=function(t){var n=t.articles,e=t.alwaysShowAllDetails;if(!n)return null;var r=1===n.length,o=Object(a.useContext)(H.a),i=o.gridLayout,c=void 0===i?"tiles":i,u=o.hasSetGridLayout,s=o.getGridLayout,l=n.reduce((function(t,n,e,r){return e%2==0&&t.push(r.slice(e,e+2)),t}),[]);return Object(a.useEffect)((function(){return s()}),[]),Object(f.jsx)(ft,{style:{opacity:u?1:0},alwaysShowAllDetails:e},l.map((function(t,n){var e=n%2!=0,a=n%2!=1;return Object(f.jsx)(mt,{key:n,gridLayout:c,hasOnlyOneArticle:r,reverse:e},Object(f.jsx)(lt,{article:t[0],narrow:e}),Object(f.jsx)(lt,{article:t[1],narrow:a}))})))},lt=function(t){var n=t.article,e=t.narrow;if(!n)return null;var r=Object(a.useContext)(H.a).gridLayout,o=e&&n.title.length>35,i=e?n.hero.narrow:n.hero.regular,c=i&&0!==Object.keys(i).length&&i.constructor===Object;return Object(f.jsx)(kt,{to:n.slug,"data-a11y":"false"},Object(f.jsx)(jt,{gridLayout:r},Object(f.jsx)(Ot,{narrow:e,gridLayout:r},c?Object(f.jsx)(q.c,{src:i}):Object(f.jsx)(q.a,null)),Object(f.jsx)("div",null,Object(f.jsx)(vt,{dark:!0,hasOverflow:o,gridLayout:r},n.title),Object(f.jsx)(wt,{narrow:e,hasOverflow:o,gridLayout:r},n.excerpt),Object(f.jsx)(yt,null,n.date," · ",n.timeToRead," min read"))))},pt=Object(f.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",g.a.phablet(ut())),bt={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},ft=Object(r.a)("div",{target:"ewq8szl0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&bt})),dt=function(t){return Object(f.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",g.a.desktop_medium(ct())," ",g.a.tablet(it()))},xt=function(t){return Object(f.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",g.a.desktop(ot())," ",g.a.tablet(at())," @media (max-width:540px){background:",t.theme.colors.card,";}",g.a.phablet(rt()))},gt=function(t){return Object(f.css)("position:relative;",g.a.tablet(et())," @media (max-width:540px){background:",t.theme.colors.card,";}",g.a.phablet(nt()))},ht=function(t){return Object(f.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},mt=Object(r.a)("div",{target:"ewq8szl1"})((function(t){return"tiles"===t.gridLayout?dt:ht})),jt=Object(r.a)("div",{target:"ewq8szl2"})((function(t){return"rows"===t.gridLayout?xt:gt})),Ot=Object(r.a)("div",{target:"ewq8szl3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",g.a.tablet(tt())," ",g.a.phablet($())),vt=Object(r.a)(E.a.h2,{target:"ewq8szl4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",pt,";",g.a.desktop(V())," ",g.a.tablet(B())," ",g.a.phablet(Z())),wt=Object(r.a)("p",{target:"ewq8szl5"})(pt,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",g.a.desktop(X())," ",g.a.phablet(W())," ",g.a.phablet(Q())),yt=Object(r.a)("div",{target:"ewq8szl6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",g.a.phablet(U())),kt=Object(r.a)(d.Link,{target:"ewq8szl7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",Ot,",&:focus ",Ot,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",g.a.phablet(N(),Ot));function zt(){var t=Object(s.a)(["\n    padding: 0;\n    background: transparent;\n  "]);return zt=function(){return t},t}function Lt(){var t=Object(s.a)(["\n    padding: 80px;\n  "]);return Lt=function(){return t},t}var Pt=function(t){var n=t.articles;return Object(f.jsx)(qt,null,Object(f.jsx)(st,{articles:n,alwaysShowAllDetails:!0}))},qt=Object(r.a)("div",{target:"e1o68q4g0"})("background:linear-gradient( 180deg,",(function(t){return t.theme.colors.card})," 0%,rgba(249,250,252,0) 91.01% );border-radius:8px;padding:88px 98px;position:relative;z-index:1;",g.a.desktop_medium(Lt())," ",g.a.desktop(zt())),_t=(n.default=function(t){var n=t.location,e=t.pageContext,r=e.additionalContext.author,a=e.group;return Object(f.jsx)(u.a,null,Object(f.jsx)(c.a,{pathname:n.pathname,title:r.name,description:r.bio}),Object(f.jsx)(i.a,{narrow:!0},Object(f.jsx)(I,{author:r}),Object(f.jsx)(Pt,{articles:a}),Object(f.jsx)(St,null,Object(f.jsx)(v,e))),Object(f.jsx)(_t,null))},Object(r.a)("div",{target:"e17276sb0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),St=Object(r.a)("div",{target:"e17276sb1"})({name:"xi606m",styles:"text-align:center;"})}}]);
//# sourceMappingURL=component---src-narative-gatsby-theme-novela-templates-author-template-tsx-42ef09d28428e2de9f57.js.map