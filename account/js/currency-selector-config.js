!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=r(e["@deriv/shared"],e["@deriv/translations"])}(window,(function(e,r){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s="./Configs/currency-selector-config.js")}({"./Configs/currency-selector-config.js":function(e,r,t){"use strict";t.r(r);var n=t("@deriv/translations"),o=t("@deriv/shared"),i=t("./Configs/currency-selector-schema.js");r.default=function(e,r){var t=e.real_account_signup_target,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{header:{active_title:c?Object(n.localize)("Select wallet currency"):Object(n.localize)("Please choose your currency"),title:c?Object(n.localize)("CURRENCY"):Object(n.localize)("Account currency")},body:r,form_value:Object(o.getDefaultFields)(t,i.default),props:{validate:Object(o.generateValidationFunction)(t,i.default)},passthrough:["legal_allowed_currencies"],icon:"IcDashboardCurrency"}}},"./Configs/currency-selector-schema.js":function(e,r,t){"use strict";t.r(r);var n=t("@deriv/translations");r.default={currency:{supported_in:["maltainvest","malta","svg","iom"],default_value:"",rules:[["req",Object(n.localize)("Select an item")]]}}},"@deriv/shared":function(r,t){r.exports=e},"@deriv/translations":function(e,t){e.exports=r}}).default}));
//# sourceMappingURL=currency-selector-config.js.map