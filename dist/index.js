import{useState as e,useEffect as n}from"react";function t(t,r){const[o,i]=e(r);return n((()=>{if("undefined"==typeof window)return;const e=window.matchMedia(t),n=()=>i(e.matches);return e.addEventListener("change",n),n(),()=>e.removeEventListener("change",n)}),[t]),o}export{t as useMediaQuery};
//# sourceMappingURL=index.js.map
