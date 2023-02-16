"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10621:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Versions"},l="Versions",o={type:"mdx",permalink:"/versions",source:"@site/src/pages/versions.md",title:"Versions",description:"Release History",frontMatter:{title:"Versions"}},s=[{value:"Release History",id:"release-history",level:2},{value:"2.1.0",id:"210",level:3},{value:"2.0.0",id:"200",level:3},{value:"Releases",id:"releases",level:2},{value:"Release Cycle",id:"release-cycle",level:2},{value:"Versioning",id:"versioning",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"versions"},"Versions"),(0,a.kt)("h2",{id:"release-history"},"Release History"),(0,a.kt)("h3",{id:"210"},"2.1.0"),(0,a.kt)("p",null,"Latest Release: 2.1.0 (released: 2022-12-21)\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractus-x-release/blob/main/CHANGELOG.md"},"Changelog")),(0,a.kt)("h3",{id:"200"},"2.0.0"),(0,a.kt)("p",null,"Latest Release: 2.0.0 (released: 2022-12-14)\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractus-x-release/blob/main/CHANGELOG.md"},"Changelog")),(0,a.kt)("h2",{id:"releases"},"Releases"),(0,a.kt)("p",null,"To realize an active open-source community the Catena-X association will support the coordination of the Eclipse Tractus-X project in 2023, which was initiated by the companies of the Catena-X consortia."),(0,a.kt)("p",null,"A release roadmap will be published soon and will include a timeline of more than six months to allow end-user and software providers sufficient time to adopt changes. In case of breaking changes, the changes will be announced early enough and an upgrade period will to be coordinated with all affected partners in the future."),(0,a.kt)("h2",{id:"release-cycle"},"Release Cycle"),(0,a.kt)("p",null,"Tractus-X releases are currently planned to happen four times a year depending on the type of service. The release process can be divided in three phases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature Definition"),(0,a.kt)("li",{parentName:"ul"},"Feature Implementation"),(0,a.kt)("li",{parentName:"ul"},"Bug Fixing and Stabilization")),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Following the ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," terminology, Tractus-X versions are expressed as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MAJOR version (1.Y.Z) when you make incompatible API changes."),(0,a.kt)("li",{parentName:"ul"},"MINOR version (X.1.Z) when you add functionality in a backwards compatible manner."),(0,a.kt)("li",{parentName:"ul"},"PATCH version (X.Y.1) when you make backwards compatible bug fixes.")))}p.isMDXComponent=!0}}]);