(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(14),i=c.n(s),o=(c(19),c(20),c(3)),l=c(4),r=c.n(l),j=c(0),d=Object(a.createContext)(),b=function(e){var t=e.children,c=Object(a.useState)({}),n=Object(o.a)(c,2),s=n[0],i=n[1],l=function(e){var t=e.coords.latitude,c=e.coords.longitude,a={method:"GET",url:"https://api.openweathermap.org/data/2.5/find?lat=".concat(t,"&lon=").concat(c,"&appid=2c9c7ab97001a33b80cab75254178bc8")};r()(a).then((function(e){i(e.data.list[0]),localStorage.setItem("userLocation",JSON.stringify(e.data.list[0]))})).catch((function(e){console.error(e)}))};Object(a.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(l):i({name:"\u0130stanbul",coord:{lat:41.015137,lon:28.97953}})}),[]);var b={activeCity:s,setactiveCity:i};return Object(j.jsx)(d.Provider,{value:b,children:t})},u=function(){return Object(a.useContext)(d)};function m(){var e=u(),t=e.activeCity,c=e.setactiveCity,n=Object(a.useState)(!1),s=Object(o.a)(n,2),i=s[0],l=s[1],r=Object(a.useState)([{name:"\u0130stanbul",coord:{lat:41.015137,lon:28.97953}},{name:"Bal\u0131kesir",coord:{lat:39.6511,lon:27.8842}},{name:"Ankara",coord:{lat:39.925533,lon:32.866287}},{name:"Bolu",coord:{lat:40.731647,lon:31.589813}},{name:"Elaz\u0131\u011f",coord:{lat:38.6667,lon:39.2167}}]),d=Object(o.a)(r,1)[0];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userLocation"));l(e.name===t.name)}),[t]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"defaultDropdown","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false",children:[Object(j.jsx)("i",{className:"fas fa-city"}),"   ",t.name]}),Object(j.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"defaultDropdown",children:[!i&&Object(j.jsx)("li",{children:Object(j.jsxs)("button",{onClick:function(){return function(){var e=localStorage.getItem("userLocation");c(JSON.parse(e))}()},className:"dropdown-item",children:[Object(j.jsx)("i",{className:"fas fa-map-marker-alt"}),"  My Location"]})}),d.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return c(e)},className:"dropdown-item",children:e.name})},t)}))]})]})})}var O=n.a.memo(m),x=(c(40),Object(a.createContext)()),h=function(e){var t=e.children,c=u().activeCity,n=Object(a.useState)({}),s=Object(o.a)(n,2),i=s[0],l=s[1];Object(a.useEffect)((function(){if(c&&void 0!==c.coord){var e=c.coord.lat,t=c.coord.lon,a={method:"GET",url:"https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&&units=metric&exclude=hourly&appid=2c9c7ab97001a33b80cab75254178bc8")};r()(a).then((function(e){l(e.data)})).catch((function(e){console.error(e)}))}}),[c]);var d={weatherDetail:i,setDetail:l};return Object(j.jsx)(x.Provider,{value:d,children:t})};function f(e){var t=e.cardName,c=void 0===t?"":t,n=Object(a.useContext)(x).weatherDetail,s=u().activeCity;return Object(a.useEffect)((function(){}),[n]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"card-list row justify-content-center",children:n.daily&&n.daily.map((function(e,t){return Object(j.jsxs)("div",{className:"card col-2 p-0",children:[Object(j.jsxs)("div",{className:"info-header pl-3 pr-3",children:[Object(j.jsxs)("div",{className:"city-name",children:[" ",s.name," "]}),Object(j.jsx)("div",{className:"date",children:new Date(1e3*e.dt).toDateString()})]}),Object(j.jsxs)("div",{className:"icon",children:["Clear"===e.weather[0].main&&Object(j.jsx)("div",{icon:"sunny","data-label":e.weather[0].main,children:Object(j.jsx)("span",{className:"sun"})}),"Clouds"===e.weather[0].main&&Object(j.jsxs)("div",{icon:"cloudy","data-label":e.weather[0].main,children:[Object(j.jsx)("span",{className:"cloud"}),Object(j.jsx)("span",{className:"cloud"})]}),"snowly"===c&&Object(j.jsxs)("div",{icon:"snowy","data-label":e.weather[0].main,children:[Object(j.jsx)("span",{className:"snowman"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})]}),"Rain"===e.weather[0].main&&Object(j.jsxs)("div",{icon:"stormy","data-label":e.weather[0].main,children:[Object(j.jsx)("span",{className:"cloud"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})]}),"moon"===c&&Object(j.jsxs)("div",{icon:"supermoon","data-label":e.weather[0].main,children:[Object(j.jsx)("span",{className:"moon"}),Object(j.jsx)("span",{className:"meteor"})]})]}),Object(j.jsx)("div",{className:"weather-info",children:Object(j.jsxs)("div",{className:"info-body row m-0 text-center",children:[Object(j.jsxs)("div",{className:"centigrade mb-1 col-6",children:[Object(j.jsx)("div",{className:"cent-icon mb-2 mt-2",children:Object(j.jsx)("i",{className:"fas fa-temperature-low"})}),Object(j.jsx)("div",{className:"info-text",children:e.temp.max})]}),Object(j.jsxs)("div",{className:"wind mb-1 col-6",children:[Object(j.jsx)("div",{className:"wind-icon mb-2 mt-2",children:Object(j.jsx)("i",{className:"fas fa-wind"})}),Object(j.jsx)("div",{className:"info-text",children:e.wind_speed})]})]})})]},t)}))})})}var v=n.a.memo(f);var p=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(O,{}),Object(j.jsx)(v,{})]})};var w=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(b,{children:Object(j.jsx)(h,{children:Object(j.jsx)(p,{})})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.d9def8af.chunk.js.map