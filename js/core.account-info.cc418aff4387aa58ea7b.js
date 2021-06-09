(self.webpackChunk=self.webpackChunk||[]).push([[521],{24896:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var a=n(40841),c=n.n(a),r=n(60216),i=n.n(r),o=n(32735),l=n(4390),s=n(77395),_=n(20374),u=n(57573),d=n(13799),m=n(78568),p=n(75672),g=n(37781),y=function(e){var t=e.currency;return e.is_virtual?o.createElement(_.Localize,{i18n_default_text:"Demo"}):t?(0,u.getCurrencyName)(t):o.createElement(_.Localize,{i18n_default_text:"No currency assigned"})},f=function(e){var t,n,a=e.has_error,r=e.market_type,i=e.sub_account_type,l=e.server,d=e.is_dark_mode_on,m=e.platform;return a?o.createElement("div",null,o.createElement(s.Text,{color:"disabled",size:"xs"},o.createElement(_.Localize,{i18n_default_text:"Unavailable"})),(null==l||null===(t=l.server_info)||void 0===t?void 0:t.geolocation)&&("gaming"===r||"synthetic"===r)&&o.createElement(s.Text,{color:"less-prominent",size:"xxs",className:"badge-server badge-server--disabled"},l.server_info.geolocation.region," ",1!==l.server_info.geolocation.sequence?l.server_info.geolocation.sequence:"")):o.createElement("div",null,(0,u.getCFDAccountDisplay)({market_type:r,sub_account_type:i,platform:m}),(null==l||null===(n=l.server_info)||void 0===n?void 0:n.geolocation)&&("gaming"===r||"synthetic"===r)&&o.createElement(s.Text,{color:d?"general":"colored-background",size:"xxs",className:c()("badge-server",{"badge-server-bot":(0,u.isBot)()})},l.server_info.geolocation.region," ",1!==l.server_info.geolocation.sequence?l.server_info.geolocation.sequence:""))};const b=function(e){var t=e.balance,n=e.currency,a=e.currency_icon,r=e.display_type,i=e.has_balance,l=e.has_error,d=e.has_reset_balance,m=e.is_disabled,p=e.is_virtual,g=e.loginid,b=e.market_type,h=e.onClickAccount,v=e.onClickResetVirtualBalance,w=e.selected_loginid,E=e.server,x=e.is_dark_mode_on,A=e.sub_account_type,k=e.platform;if(m&&!n)return null;var D=n?a:"IcCurrencyUnknown";return o.createElement(o.Fragment,null,o.createElement("div",{id:"dt_".concat(g),className:c()("acc-switcher__account",{"acc-switcher__account--selected":g===w,"acc-switcher__account--disabled":m}),onClick:m?void 0:h},o.createElement("span",{className:"acc-switcher__id"},o.createElement(s.Icon,{icon:p?"IcCurrencyVirtual":D,className:"acc-switcher__id-icon",size:24}),o.createElement("span",null,"currency"===r?o.createElement(y,{is_virtual:p,currency:n}):o.createElement(f,{market_type:b,sub_account_type:A,server:E,has_error:l,is_dark_mode_on:x,platform:k}),o.createElement("div",{className:c()("acc-switcher__loginid-text",{"acc-switcher__loginid-text--disabled":l})},g)),d?o.createElement(s.Button,{is_disabled:m,onClick:function(e){e.stopPropagation(),v()},className:"acc-switcher__reset-account-btn",secondary:!0,small:!0},(0,_.localize)("Reset balance")):i&&o.createElement(s.Text,{size:"xs",color:"prominent",styles:{fontWeight:"inherit"},className:"acc-switcher__balance"},n&&o.createElement(s.Money,{currency:(0,u.getCurrencyDisplayCode)(n),amount:(0,u.formatMoney)(n,t,!0),should_format:!1,show_currency:!0})))))};var h=function(e){var t=e.children,n=e.header,a=e.is_visible,c=e.toggleVisibility;return o.createElement(s.ContentExpander,{className:"acc-switcher",title:n,is_expanded:a,onToggle:c,is_title_spaced:!0},t)};h.propTypes={children:i().node,header:i().oneOfType([i().object,i().string]),is_visible:i().bool,toggleVisibility:i().func};const v=h;function w(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var x=function(e,t){return w(e).sort((function(e,n){var a=t[e.loginid].currency,c=t[n.loginid].currency,r=(0,u.isCryptocurrency)(a),i=(0,u.isCryptocurrency)(c),o=!r,l=!i;return e.is_virtual||n.is_virtual?e.is_virtual?1:-1:r&&i||o&&l?a<c?-1:1:o&&i?-1:1}))},A=function(e){return w(e).sort((function(e,t){var n=k(e),a=k(t);return n&&!a?1:a&&!n||"gaming"===e.market_type||"synthetic"===e.market_type?-1:"financial"===e.sub_account_type?"gaming"===t.market_type||"synthetic"===t.market_type?1:-1:1}))},k=function(e){return"demo"===e.account_type},D=function(e,t,n,a,c){var r=[];return t&&Object.keys(t).forEach((function(t){if(-1!==["gaming","synthetic","financial"].indexOf(t)||c!==u.CFD_PLATFORMS.DXTRADE){var i=n.find((function(n){var a="synthetic"===n.market_type?"gaming":n.market_type;return(c===u.CFD_PLATFORMS.DXTRADE||n.sub_account_type===t)&&a===e}));if(i&&c===u.CFD_PLATFORMS.MT5)a.filter((function(t){return t.supported_accounts.includes(e)&&!t.disabled})).length&&"real"===i.account_type&&(i=!1);if(!i){var o=(0,u.getCFDAccountKey)({market_type:e,sub_account_type:t,platform:c});o&&r.push({icon:(0,u.getCFDAccount)({market_type:e,sub_account_type:t,platform:c}),title:(0,u.getCFDAccountDisplay)({market_type:e,sub_account_type:t,platform:c}),type:o})}}})),r};function C(e,t,n,a,c,r,i){try{var o=e[r](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,c)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var r=e.apply(t,n);function i(e){C(r,a,c,i,o,"next",e)}function o(e){C(r,a,c,i,o,"throw",e)}i(void 0)}))}}function N(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,c=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var F=function(e){var t,n=M(o.useState(!e.is_virtual||e.should_show_real_accounts_list?0:1),2),a=n[0],r=n[1],i=M(o.useState(!0),2),l=i[0],d=i[1],p=M(o.useState(!0),2),y=p[0],f=p[1],h=M(o.useState(!0),2),w=h[0],E=h[1],C=M(o.useState(!0),2),S=C[0],z=C[1],F=M(o.useState(!0),2),I=F[0],R=F[1],L=M(o.useState(!0),2),O=L[0],j=L[1],P=o.useRef(),B=o.useRef(null);o.useEffect((function(){W()&&z(!1)}),[]),o.useEffect((function(){B.current&&(S||O)&&B.current.scrollIntoView({behavior:"smooth",block:W()?"end":"start",inline:"nearest"})}),[S,O]);var V=function(e){switch(e){case"demo_deriv":return d(!l);case"demo_dmt5":return E(!w);case"demo_dxtrade":return R(!I);case"real_deriv":return f(!y);case"real_dmt5":return z(!S);case"real_dxtrade":return j(!O);default:return!1}},W=function(){var t;return(null==e||null===(t=e.account_list)||void 0===t?void 0:t.length)>4},X=function(){U(),e.is_positions_drawer_on&&e.togglePositionsDrawer(),e.logoutClient().then((function(){e.routeBackInApp(e.history)}))},U=function(){e.toggleAccountsDialog(!1)};(0,s.useOnClickOutside)(P,U,(function(t){return e.is_visible&&!t.target.classList.contains("acc-info")}));var q=function(t){U(),e.history.push("".concat(u.routes.mt5,"#").concat(t))},$=e.is_fully_authenticated&&function(){if(!e.account_settings)return!1;var t=e.account_settings,n=t.citizen,a=t.tax_identification_number,c=t.tax_residence;return!!(n&&a&&c)}(),G=function(){q("real")},H=function(){q("demo")},K=function(){var t;t="demo",U(),e.history.push("".concat(u.routes.dxtrade,"#").concat(t))},Z=function(t,n){var a,c,r=D("gaming",null===(a=e.landing_companies)||void 0===a?void 0:a.mt_gaming_company,t,e.trading_servers,n),i=D("financial",null===(c=e.landing_companies)||void 0===c?void 0:c.mt_financial_company,t,e.trading_servers,n);return[].concat(N(r),N(i))},J=function(){var t=T(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(U(),e.account_loginid!==n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.switchAccount(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=T(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(),e.resetVirtualBalance();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=0===a,ee=function(){return A(e.mt5_login_list).filter(k)},te=function(){return A(e.dxtrade_accounts_list).filter(k)},ne=function(){return A(e.mt5_login_list).filter((function(e){return!k(e)}))},ae=function(){return e.available_crypto_currencies.length<1&&!e.has_fiat||!e.is_virtual},ce=e.is_eu&&("malta"===e.landing_company_shortcode||"iom"===e.landing_company_shortcode&&0!==e.upgradeable_landing_companies.length),re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.filter((function(e){return t?k(e):!k(e)})).reduce((function(e,t){return e.balance+=t.balance,e}),{balance:0})},ie=function(t){if(e.is_eu){var n=(0,u.getAccountTypeFields)({category:"real",type:t});return e.isAccountOfTypeDisabled(null==n?void 0:n.account_type)}return!e.has_active_real_account};if(!e.is_logged_in)return!1;var oe,le,se,_e=Y?e.is_mt5_allowed&&e.is_dxtrade_allowed||e.is_mt5_allowed&&!e.is_dxtrade_allowed?(0,_.localize)("Total assets in your Deriv and DMT5 real accounts."):!e.is_mt5_allowed&&e.is_dxtrade_allowed?(0,_.localize)("Total assets in your Deriv and Deriv X real accounts."):(0,_.localize)("Total assets in your Deriv real accounts."):e.is_mt5_allowed&&e.is_dxtrade_allowed?(0,_.localize)("Total assets in your Deriv, DMT5 and Deriv X demo accounts."):e.is_mt5_allowed&&!e.is_dxtrade_allowed?(0,_.localize)("Total assets in your Deriv and DMT5 demo accounts."):!e.is_mt5_allowed&&e.is_dxtrade_allowed?(0,_.localize)("Total assets in your Deriv and Deriv X demo accounts."):(0,_.localize)("Total assets in your Deriv demo accounts."),ue=o.createElement("div",{className:"acc-switcher__list-wrapper"},o.createElement(v,{header:(0,_.localize)("Deriv Accounts"),is_visible:l,toggleVisibility:function(){V("demo_deriv")}},o.createElement("div",{className:"acc-switcher__accounts"},x(e.account_list,e.accounts).filter((function(e){return e.is_virtual})).map((function(t){return o.createElement(b,{is_dark_mode_on:e.is_dark_mode_on,key:t.loginid,balance:e.accounts[t.loginid].balance,currency:e.accounts[t.loginid].currency,currency_icon:"IcCurrency-".concat(t.icon),display_type:"currency",has_balance:"balance"in e.accounts[t.loginid],has_reset_balance:e.accounts[e.account_loginid].is_virtual,is_disabled:t.is_disabled,is_virtual:t.is_virtual,loginid:t.loginid,onClickAccount:t.is_disabled?void 0:function(){return J(t.loginid)},onClickResetVirtualBalance:Q,selected_loginid:e.account_loginid})})))),e.is_mt5_allowed&&o.createElement(o.Fragment,null,o.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),o.createElement(v,{header:(0,_.localize)("DMT5 Accounts"),is_visible:w,toggleVisibility:function(){V("demo_dmt5")}},e.is_loading_mt5?o.createElement("div",{className:"acc-switcher__accounts--is-loading"},o.createElement(g._z,{speed:3})):o.createElement(o.Fragment,null,!!ee().length&&o.createElement("div",{className:"acc-switcher__accounts"},ee().map((function(t){return o.createElement(b,{is_dark_mode_on:e.is_dark_mode_on,key:t.login,market_type:t.market_type,sub_account_type:t.sub_account_type,balance:t.balance,currency:t.currency,currency_icon:"IcMt5-".concat((0,u.getCFDAccount)({market_type:t.market_type,sub_account_type:t.sub_account_type,platform:u.CFD_PLATFORMS.MT5})),has_balance:"balance"in t,has_error:t.has_error,loginid:t.display_login,onClickAccount:H,platform:u.CFD_PLATFORMS.MT5})}))),Z(ee(),u.CFD_PLATFORMS.MT5).map((function(t){return o.createElement("div",{key:t.title,className:"acc-switcher__new-account"},o.createElement(s.Icon,{icon:"IcMt5-".concat(t.icon),size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},t.title),o.createElement(s.Button,{onClick:function(){return e=t.type,sessionStorage.setItem("open_cfd_account_type","demo.".concat(e)),void H();var e},className:"acc-switcher__new-account-btn",is_disabled:e.mt5_disabled_signup_types.demo,secondary:!0,small:!0},(0,_.localize)("Add")))}))))),e.is_dxtrade_allowed&&o.createElement(v,{header:(0,_.localize)("Deriv X Accounts"),is_visible:I,toggleVisibility:function(){V("demo_dxtrade")}},o.createElement(o.Fragment,null,!!te().length&&o.createElement("div",{className:"acc-switcher__accounts"},te().map((function(t){return o.createElement(b,{is_dark_mode_on:e.is_dark_mode_on,key:t.login,market_type:t.market_type,balance:t.balance,currency:t.currency,currency_icon:"IcDxtrade-".concat((0,u.getCFDAccount)({market_type:t.market_type,platform:u.CFD_PLATFORMS.DXTRADE})),has_balance:"balance"in t,loginid:t.display_login,onClickAccount:K,platform:u.CFD_PLATFORMS.DXTRADE})}))),Z(te(),u.CFD_PLATFORMS.DXTRADE).map((function(t){return o.createElement("div",{key:t.title,className:"acc-switcher__new-account"},o.createElement(s.Icon,{icon:"IcDxtrade-".concat(t.icon),size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},t.title),o.createElement(s.Button,{onClick:function(){return e=t.type,sessionStorage.setItem("open_cfd_account_type","demo.".concat(e)),void K();var e},className:"acc-switcher__new-account-btn",secondary:!0,small:!0,is_disabled:e.dxtrade_disabled_signup_types.demo||!!e.dxtrade_accounts_list_error},(0,_.localize)("Add")))}))))),de=o.createElement("div",{ref:B,className:"acc-switcher__list-wrapper"},o.createElement(o.Fragment,null,o.createElement(v,{header:(0,_.localize)("Deriv Accounts"),is_visible:y,toggleVisibility:function(){V("real_deriv")}},o.createElement("div",{className:"acc-switcher__accounts"},x(e.account_list,e.accounts).filter((function(e){return!e.is_virtual})).map((function(t){return o.createElement(b,{is_dark_mode_on:e.is_dark_mode_on,key:t.loginid,balance:e.accounts[t.loginid].balance,currency:e.accounts[t.loginid].currency,currency_icon:"IcCurrency-".concat(t.icon),display_type:"currency",has_balance:"balance"in e.accounts[t.loginid],is_disabled:t.is_disabled,is_virtual:t.is_virtual,is_eu:e.is_eu,loginid:t.loginid,onClickAccount:t.is_disabled?void 0:function(){return J(t.loginid)},selected_loginid:e.account_loginid})}))),(e.is_eu||e.is_virtual||!ae()||ce?e.upgradeable_landing_companies:[]).map((function(t,n){return o.createElement("div",{key:n,className:"acc-switcher__new-account"},o.createElement(s.Icon,{icon:"IcDeriv",size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},(0,m.GH)(t,{account_residence:e.client_residence})),o.createElement(s.Button,{id:"dt_core_account-switcher_add-new-account",onClick:function(){e.openRealAccountSignup(t)},className:"acc-switcher__new-account-btn",secondary:!0,small:!0},(0,_.localize)("Add")))})),!(e.is_virtual&&e.can_upgrade_to)&&ae()&&(!e.is_eu||e.is_eu&&e.can_change_fiat_currency)&&o.createElement(s.Button,{className:"acc-switcher__btn",secondary:!0,onClick:e.account_list.filter((function(e){return!e.is_virtual})).some((function(e){return"Real"!==e.title}))?function(){return e.openRealAccountSignup("manage")}:function(){U(),e.toggleSetCurrencyModal()}},e.has_fiat&&0===(null===(t=e.available_crypto_currencies)||void 0===t?void 0:t.length)?(0,_.localize)("Manage account"):(0,_.localize)("Add or manage account")))),e.is_mt5_allowed&&o.createElement(o.Fragment,null,o.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),o.createElement(v,{header:(0,_.localize)("DMT5 Accounts"),is_visible:S,toggleVisibility:function(){V("real_dmt5")}},e.is_loading_mt5?o.createElement("div",{className:"acc-switcher__accounts--is-loading"},o.createElement(g._z,{speed:3})):o.createElement(o.Fragment,null,!!ne().length&&o.createElement("div",{className:"acc-switcher__accounts"},ne().map((function(t){return o.createElement(b,{is_dark_mode_on:e.is_dark_mode_on,key:t.login,market_type:t.market_type,sub_account_type:t.sub_account_type,balance:t.balance,currency:t.currency,currency_icon:"IcMt5-".concat((0,u.getCFDAccount)({market_type:t.market_type,sub_account_type:t.sub_account_type,platform:u.CFD_PLATFORMS.MT5})),has_balance:"balance"in t,has_error:t.has_error,loginid:t.display_login,onClickAccount:G,server:(n=t,a=n.error?n.error.details.server:n.server,e.mt5_login_list.length>1?e.mt5_login_list.find((function(e){return e.server===a})):null),platform:u.CFD_PLATFORMS.MT5});var n,a}))),Z(ne(),u.CFD_PLATFORMS.MT5).map((function(t){return o.createElement("div",{key:t.title,className:c()("acc-switcher__new-account",{"acc-switcher__new-account--disabled":e.mt5_login_list_error})},o.createElement(s.Icon,{icon:"IcMt5-".concat(t.icon),size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},t.title),o.createElement(s.Button,{onClick:function(){return n=t.type,a="synthetic"===n?e.has_malta_account:e.has_maltainvest_account,void(e.is_eu&&!a?(U(),e.openAccountNeededModal("synthetic"===n?e.standpoint.gaming_company:e.standpoint.financial_company,"synthetic"===n?(0,_.localize)("Deriv Synthetic"):(0,_.localize)("Deriv Financial"),"synthetic"===n?(0,_.localize)("DMT5 Synthetic"):(0,_.localize)("DMT5 Financial"))):($?sessionStorage.setItem("open_cfd_account_type","real.".concat(n,".set_password")):sessionStorage.setItem("open_cfd_account_type","real.".concat(n)),G()));var n,a},className:"acc-switcher__new-account-btn",secondary:!0,small:!0,is_disabled:e.mt5_disabled_signup_types.real||ie(t.type)||"financial_stp"===t.type&&(e.is_pending_authentication||!!e.mt5_login_list_error)},(0,_.localize)("Add")))}))))));return o.createElement("div",{className:"acc-switcher__list",ref:P},o.createElement(s.Tabs,{active_index:a,className:"acc-switcher__list-tabs",onTabItemClick:function(e){return r(e)},top:!0},o.createElement("div",{label:(0,_.localize)("Real"),id:"real_account_tab"},o.createElement(s.DesktopWrapper,null,o.createElement(s.ThemedScrollbars,{height:"354px"},de)),o.createElement(s.MobileWrapper,null,o.createElement(s.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},de))),o.createElement("div",{label:(0,_.localize)("Demo"),id:"dt_core_account-switcher_demo-tab"},o.createElement(s.DesktopWrapper,null,o.createElement(s.ThemedScrollbars,{height:"354px"},ue)),o.createElement(s.MobileWrapper,null,o.createElement(s.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},ue)))),o.createElement("div",{className:c()("acc-switcher__separator",{"acc-switcher__separator--auto-margin":e.is_mobile})}),o.createElement("div",{className:"acc-switcher__total"},o.createElement(s.Text,{line_height:"s",size:"xs",weight:"bold",color:"prominent"},o.createElement(_.Localize,{i18n_default_text:"Total assets"})),o.createElement(s.Text,{size:"xs",color:"prominent",className:"acc-switcher__balance"},o.createElement(s.Money,{currency:Y?e.obj_total_balance.currency:"USD",amount:(0,u.formatMoney)(Y?e.obj_total_balance.currency:"USD",Y?(oe=re(e.mt5_login_list,!1),le=re(e.dxtrade_accounts_list,!1),se=e.obj_total_balance.amount_real,se+=e.obj_total_balance.amount_mt5>0?e.obj_total_balance.amount_mt5:oe.balance,se+=e.obj_total_balance.amount_dxtrade>0?e.obj_total_balance.amount_dxtrade:le.balance):function(){var t=e.account_list.find((function(e){return e.is_virtual})).loginid,n=e.accounts[t]?e.accounts[t].balance:0,a=re(e.mt5_login_list),c=re(e.dxtrade_accounts_list),r=n;return Array.isArray(e.mt5_login_list)&&(r+=a.balance),Array.isArray(e.dxtrade_accounts_list)&&(r+=c.balance),r}(),!0),show_currency:!0,should_format:!1}))),o.createElement(s.Text,{color:"less-prominent",line_height:"xs",size:"xxxs",className:"acc-switcher__total-subtitle"},_e),o.createElement("div",{className:"acc-switcher__separator"}),o.createElement("div",{className:"acc-switcher__footer"},e.is_uk&&e.has_any_real_account&&o.createElement(s.Button,{className:"acc-switcher__compare",type:"button",has_effect:!0,onClick:function(){U(),e.toggleAccountTypesModal(!0)},text:(0,_.localize)("Compare"),secondary:!0}),o.createElement("div",{id:"dt_logout_button",className:"acc-switcher__logout",onClick:X},o.createElement(s.Text,{color:"prominent",size:"xs",align:"left",className:"acc-switcher__logout-text"},(0,_.localize)("Log out")),o.createElement(s.Icon,{icon:"IcLogout",className:"acc-switcher__logout-icon drawer__icon",onClick:X}))))};F.propTypes={available_crypto_currencies:i().array,account_list:i().array,account_loginid:i().string,accounts:i().object,can_change_fiat_currency:i().bool,can_upgrade_to:i().string,has_fiat:i().bool,has_any_real_account:i().bool,has_active_real_account:i().bool,is_eu:i().bool,is_fully_authenticated:i().bool,is_loading_mt5:i().bool,is_loading_dxtrade:i().bool,is_logged_in:i().bool,is_mt5_allowed:i().bool,is_pending_authentication:i().bool,is_positions_drawer_on:i().bool,is_uk:i().bool,is_virtual:i().bool,is_visible:i().bool,landing_company_shortcode:i().string,logoutClient:i().func,mt5_disabled_signup_types:i().object,mt5_login_list:i().array,dxtrade_disabled_signup_types:i().object,obj_total_balance:i().object,openRealAccountSignup:i().func,switchAccount:i().func,resetVirtualBalance:i().func,toggleAccountsDialog:i().func,toggleAccountTypesModal:i().func,togglePositionsDrawer:i().func,toggleSetCurrencyModal:i().func,updateMt5LoginList:i().func};var I=(0,d.withRouter)((0,p.$j)((function(e){var t=e.client,n=e.common,a=e.ui;return{available_crypto_currencies:t.available_crypto_currencies,account_loginid:t.loginid,accounts:t.accounts,account_settings:t.account_settings,can_change_fiat_currency:t.can_change_fiat_currency,account_list:t.account_list,can_upgrade_to:t.can_upgrade_to,client_residence:t.residence,is_dark_mode_on:a.is_dark_mode_on,is_eu:t.is_eu,is_fully_authenticated:t.is_fully_authenticated,is_loading_mt5:t.is_populating_mt5_account_list,is_loading_dxtrade:t.is_populating_dxtrade_account_list,is_logged_in:t.is_logged_in,is_dxtrade_allowed:t.is_dxtrade_allowed,is_mt5_allowed:t.is_mt5_allowed,is_pending_authentication:t.is_pending_authentication,is_uk:t.is_uk,is_virtual:t.is_virtual,has_fiat:t.has_fiat,has_any_real_account:t.has_any_real_account,landing_company_shortcode:t.landing_company_shortcode,mt5_disabled_signup_types:t.mt5_disabled_signup_types,mt5_login_list:t.mt5_login_list,mt5_login_list_error:t.mt5_login_list_error,dxtrade_accounts_list:t.dxtrade_accounts_list,dxtrade_accounts_list_error:t.dxtrade_accounts_list_error,dxtrade_disabled_signup_types:t.dxtrade_disabled_signup_types,obj_total_balance:t.obj_total_balance,switchAccount:t.switchAccount,resetVirtualBalance:t.resetVirtualBalance,isAccountOfTypeDisabled:t.isAccountOfTypeDisabled,has_malta_account:t.has_malta_account,has_maltainvest_account:t.has_maltainvest_account,has_active_real_account:t.has_active_real_account,openAccountNeededModal:a.openAccountNeededModal,logoutClient:t.logout,landing_companies:t.landing_companies,upgradeable_landing_companies:t.upgradeable_landing_companies,updateMt5LoginList:t.updateMt5LoginList,routeBackInApp:n.routeBackInApp,standpoint:t.standpoint,is_positions_drawer_on:a.is_positions_drawer_on,openRealAccountSignup:a.openRealAccountSignup,trading_servers:t.trading_servers,toggleAccountsDialog:a.toggleAccountsDialog,toggleAccountTypesModal:a.toggleAccountTypesModal,togglePositionsDrawer:a.togglePositionsDrawer,toggleSetCurrencyModal:a.toggleSetCurrencyModal,should_show_real_accounts_list:a.should_show_real_accounts_list,toggleShouldShowRealAccountsList:a.toggleShouldShowRealAccountsList}}))(F)),R=function(e){var t=e.disableApp,n=e.enableApp,a=e.is_visible,r=e.is_upgrade_enabled,i=e.toggle;return o.createElement(s.Modal,{id:"dt_account_switcher_modal",className:"accounts-switcher",enableApp:n,is_open:a,is_vertical_top:!0,disableApp:t,has_close_icon:!1,toggleModal:i,height:"auto",width:"calc(100vw - 32px)"},o.createElement(s.Div100vhContainer,{className:c()("acc-switcher__wrapper","acc-switcher__wrapper--is-mobile"),max_autoheight_offset:"48px"},o.createElement(I,{is_mobile:!0,is_visible:!0,toggle:i,is_upgrade_enabled:r})))};R.propTypes={children:i().any,onClose:i().func,title:i().string,visible:i().bool,wrapperClassName:i().string};const L=R;var O=function(e){var t=e.is_disabled,n=e.disabled_message,a=e.children;return t&&n?o.createElement(s.Popover,{alignment:"bottom",message:n,zIndex:99999},a):o.createElement(o.Fragment,null,a)},j=function(e){var t=e.is_virtual,n=e.currency;return o.createElement(s.Icon,{icon:"IcCurrency-".concat(t?"virtual":n||"Unknown"),className:"acc-info__id-icon acc-info__id-icon--".concat(t?"virtual":n),size:24})},P=function(e){var t=e.acc_switcher_disabled_message,n=e.balance,a=e.currency,r=e.disableApp,i=e.enableApp,d=e.is_dialog_on,m=e.is_virtual,p=e.toggleDialog,g=e.is_disabled,y=a.toLowerCase();return o.createElement("div",{className:"acc-info__wrapper"},o.createElement("div",{className:"acc-info__separator"}),o.createElement(O,{is_disabled:g,disabled_message:t},o.createElement("div",{id:"dt_core_account-info_acc-info",className:c()("acc-info",{"acc-info--show":d,"acc-info--is-virtual":m,"acc-info--is-disabled":g}),onClick:g?void 0:function(){return p()}},o.createElement("span",{className:"acc-info__id"},o.createElement(s.DesktopWrapper,null,o.createElement(j,{is_virtual:m,currency:y})),o.createElement(s.MobileWrapper,null,(m||a)&&o.createElement(j,{is_virtual:m,currency:y}))),(void 0!==n||!a)&&o.createElement("p",{className:c()("acc-info__balance",{"acc-info__balance--no-currency":!a&&!m})},a?"".concat(n," ").concat((0,u.getCurrencyDisplayCode)(a)):o.createElement(_.Localize,{i18n_default_text:"No currency assigned"})),g?o.createElement(s.Icon,{icon:"IcLock"}):o.createElement(s.Icon,{icon:"IcChevronDownBold",className:"acc-info__select-arrow"}))),o.createElement(s.MobileWrapper,null,o.createElement(L,{is_visible:d,disableApp:r,enableApp:i,toggle:p})),o.createElement(s.DesktopWrapper,null,o.createElement(l.Z,{in:d,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},o.createElement("div",{className:"acc-switcher__wrapper"},o.createElement(I,{is_visible:d,toggle:p})))))};P.propTypes={acc_switcher_disabled_message:i().string,account_type:i().string,balance:i().string,currency:i().string,is_dialog_on:i().bool,is_disabled:i().bool,is_virtual:i().bool,loginid:i().string,toggleDialog:i().func};const B=P}}]);