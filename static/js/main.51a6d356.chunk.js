(this["webpackJsonpreact-cryptotracker"]=this["webpackJsonpreact-cryptotracker"]||[]).push([[0],{125:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(57),o=t.n(r),a=t(27),s=t(17),d=t(10),l=t(12),j=t(39),p=t(14),h=t(59),b="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var x=t(84),O=t.n(x),f=t(1);var g,m,v=function(n){var e=n.coinId,t=n.isDark,c=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-36e3;return console.log(t,e),fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),i=c.isLoading,r=c.data;return Object(f.jsx)("div",{children:i?"Loading chart...":Object(f.jsx)(O.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return{x:n.time_open,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:500,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:3},xaxis:{type:"datetime",labels:{show:!1,format:"M/dd"},axisTicks:{show:!1},axisBorder:{show:!1},tooltip:{enabled:!1}},yaxis:{labels:{show:!1}},plotOptions:{candlestick:{colors:{upward:"#FF6363",downward:"#219F94"}}},tooltip:{custom:function(n){var e=n.dataPointIndex,t=n.w.config.series[0].data[e],c=new Date(t.x).toLocaleDateString("ko-KR",{month:"numeric",day:"numeric"}),i=t.y[0].toFixed(2),r=t.y[1].toFixed(2),o=t.y[2].toFixed(2),a=t.y[3].toFixed(2);return'\n                <div class="apexcharts-tooltip-title">'.concat(c,'</div>\n                <div class="apexcharts-tooltip-box apexcharts-tooltip-candlestick">\n                  <div>Open: <span>').concat(i,"</span></div>\n                  <div>High: <span>").concat(r,"</span></div>\n                  <div>Left: <span>").concat(o,"</span></div>\n                  <div>Close: <span>").concat(a,"</span></div>\n                </div>")}}}})})},y=l.c.div(g||(g=Object(d.a)(['\n  display: grid;\n  grid-template:\n    "a a"\n    "a a";\n']))),k=l.c.div(m||(m=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid ",";\n  border-radius: 20% / 50%;\n  padding: 10px;\n  margin: 20px;\n  & span:nth-child(2) {\n    margin-top: 10px;\n    font-weight: bold;\n  }\n"])),(function(n){return n.theme.textColor}));var w,C,L,I,F,D,S,q,Q,z=function(n){var e=n.coinId,t=Object(a.useQuery)(["today",e],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/today")).then((function(n){return n.json()}))}(e)})),c=t.isLoading,i=t.data,r=i?i[0]:{},o=["open","close","low","high"],s=["\u2714","\ud83d\udd12","\ud83d\udcc9","\ud83d\udcc8"],d=o.map((function(n){return r[n]}));return Object(f.jsx)("div",{children:c?"Loading chart...":Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(y,{children:o.map((function(n,e){return Object(f.jsxs)(k,{children:[Object(f.jsxs)("span",{children:[s[e],n]}),Object(f.jsxs)("span",{children:["$",d[e].toFixed(2)]})]},e)}))})})})},P=t(148),B=t(90),M=t.n(B),T=l.c.h1(w||(w=Object(d.a)(["\n  font-size: 48px;\n  color: ",";\n  margin-left: 30px;\n"])),(function(n){return n.theme.accentColor})),A=l.c.span(C||(C=Object(d.a)(["\n  text-align: center;\n  display: block;\n"]))),H=l.c.div(L||(L=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),R=l.c.header(I||(I=Object(d.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),_=l.c.div(F||(F=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),J=l.c.div(D||(D=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),$=l.c.p(S||(S=Object(d.a)(["\n  margin: 20px 0px;\n"]))),E=l.c.div(q||(q=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),G=l.c.span(Q||(Q=Object(d.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var K,U,N,V,W,X,Y,Z=function(n){var e=n.isDark,t=Object(p.h)().coinId,c=Object(p.g)().state,i=Object(p.i)("/crypto-tracker/:coinId/price"),r=Object(p.i)("/crypto-tracker/:coinId/chart"),o=Object(p.f)(),s=Object(a.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),d=s.isLoading,l=s.data,u=Object(a.useQuery)(["tickers",t],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)}),{refetchInterval:5e3}),x=u.isLoading,O=u.data,g=d||x;return Object(f.jsxs)(H,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)("title",{children:(null===c||void 0===c?void 0:c.name)?c.name:g?"Loading...":null===l||void 0===l?void 0:l.name})}),Object(f.jsx)(P.a,{onClick:function(){o.push("/crypto-tracker")},variant:"outlined",startIcon:Object(f.jsx)(M.a,{}),children:"Go Back"}),Object(f.jsx)(R,{children:Object(f.jsx)(T,{children:(null===c||void 0===c?void 0:c.name)?c.name:g?"Loading...":null===l||void 0===l?void 0:l.name})}),g?Object(f.jsx)(A,{children:"Loading..."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(_,{children:[Object(f.jsxs)(J,{children:[Object(f.jsx)("span",{children:"Rank:"}),Object(f.jsx)("span",{children:null===l||void 0===l?void 0:l.rank})]}),Object(f.jsxs)(J,{children:[Object(f.jsx)("span",{children:"Symbol:"}),Object(f.jsxs)("span",{children:["$",null===l||void 0===l?void 0:l.symbol]})]}),Object(f.jsxs)(J,{children:[Object(f.jsx)("span",{children:"Price:"}),Object(f.jsx)("span",{children:null===O||void 0===O?void 0:O.quotes.USD.price.toFixed(3)})]})]}),Object(f.jsx)($,{children:null===l||void 0===l?void 0:l.description}),Object(f.jsxs)(_,{children:[Object(f.jsxs)(J,{children:[Object(f.jsx)("span",{children:"Total Suply:"}),Object(f.jsx)("span",{children:null===O||void 0===O?void 0:O.total_supply})]}),Object(f.jsxs)(J,{children:[Object(f.jsx)("span",{children:"Max Supply:"}),Object(f.jsx)("span",{children:null===O||void 0===O?void 0:O.max_supply})]})]}),Object(f.jsxs)(E,{children:[Object(f.jsx)(G,{isActive:null!==r,children:Object(f.jsx)(j.b,{to:"/crypto-tracker/".concat(t,"/chart"),children:"Chart"})}),Object(f.jsx)(G,{isActive:null!==i,children:Object(f.jsx)(j.b,{to:"/crypto-tracker/".concat(t,"/price"),children:"Price"})})]}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/crypto-tracker/:coinId/price",children:Object(f.jsx)(z,{coinId:t})}),Object(f.jsx)(p.a,{path:"/crypto-tracker/:coinId/chart",children:Object(f.jsx)(v,{isDark:e,coinId:t})})]})]})]})},nn=l.c.div(K||(K=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),en=l.c.header(U||(U=Object(d.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),tn=l.c.ul(N||(N=Object(d.a)([""]))),cn=l.c.li(V||(V=Object(d.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),rn=l.c.h1(W||(W=Object(d.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),on=l.c.span(X||(X=Object(d.a)(["\n  text-align: center;\n  display: block;\n"]))),an=l.c.img(Y||(Y=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var sn=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(f.jsxs)(nn,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)("title",{children:"\ucf54\uc778"})}),Object(f.jsx)(en,{children:Object(f.jsx)(rn,{children:"CryptoTracker"})}),e?Object(f.jsx)(on,{children:"Loading..."}):Object(f.jsx)(tn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(f.jsx)(cn,{children:Object(f.jsxs)(j.b,{to:{pathname:"/crypto-tracker/".concat(n.id),state:{name:n.name}},children:[Object(f.jsx)(an,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var dn,ln,jn,pn=function(n){var e=n.isDark;return Object(f.jsx)(j.a,{children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/crypto-tracker/:coinId",children:Object(f.jsx)(Z,{isDark:e})}),Object(f.jsx)(p.a,{path:"/crypto-tracker",children:Object(f.jsx)(sn,{})})]})})},hn=t(91),bn={bgColor:"#2f3640",textColor:"white",cardBgColor:"transparent",accentColor:"#9c88ff"},un={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},xn=t(146),On=Object(l.b)(dn||(dn=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),fn=l.c.div(ln||(ln=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),gn=l.c.div(jn||(jn=Object(d.a)(["\n  height: 24px;\n  font-size: 1.5em;\n"])));var mn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(l.a,{theme:t?bn:un,children:[Object(f.jsxs)(fn,{children:[Object(f.jsx)(gn,{children:"\ud83c\udf1e"}),Object(f.jsx)(xn.a,{onChange:function(){return i((function(n){return!n}))},inputProps:{"aria-label":"controlled"},sx:{}}),Object(f.jsx)(gn,{children:"\ud83c\udf1a"})]}),Object(f.jsx)(On,{}),Object(f.jsx)(pn,{isDark:t}),Object(f.jsx)(hn.ReactQueryDevtools,{initialIsOpen:!0})]})})},vn=new a.QueryClient;o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(a.QueryClientProvider,{client:vn,children:Object(f.jsx)(mn,{})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.51a6d356.chunk.js.map