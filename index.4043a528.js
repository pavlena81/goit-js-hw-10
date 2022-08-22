const e=document.querySelector("#search-box");document.querySelector(".country-list");function t(e){return e.preventDefault(),fetch("https://restcountries.com/#api-endpoints-v3-name").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}e.addEventListener("click",(()=>{t().then((e=>renderUserList(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.4043a528.js.map
