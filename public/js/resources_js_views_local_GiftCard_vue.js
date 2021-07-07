(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_local_GiftCard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      quantity: 1
    };
  },
  methods: {
    quantityIncrease: function quantityIncrease() {
      if (this.quantity < 10) {
        this.quantity += 1;
      }
    },
    quantityDecrease: function quantityDecrease() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    quantityChange: function quantityChange() {
      var _this = this;

      setTimeout(function () {
        if (_this.quantity > 10) {
          _this.quantity = 10;
        }

        if (_this.quantity < 1) {
          _this.quantity = 1;
        }
      }, 10);
    },
    scrollTop: function scrollTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {},
  mounted: function mounted() {
    this.scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6\"><div class=\"large-image d-flex \"><div><img class=\"w-100\" src=\"/assets/image/gift-card.png\" alt=\"\"></div></div><div class=\"small-image d-flex\"><img class=\"w-25\" src=\"/assets/image/gift-card.png\" alt=\"\"><img class=\"w-25\" src=\"/assets/image/gift-card.png\" alt=\"\"></div></div>", 1);

var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "ml-3"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "mt-5"
}, "GIFT CARD ", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  style: {
    "margin-right": "7px",
    "font-size": "40px"
  }
}, "৳"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("300 ")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "quantity d-inline-block"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button disabled class=\"btn btn-primary text-danger mt-n1 ml-2\">ADD TO CART</button><br><hr><p><span style=\"font-weight:bold;color:#666;\">SKU:</span> N/A </p><p><span style=\"font-weight:bold;color:#666;\">Category:</span> Gift </p><p><span style=\"font-weight:bold;color:#666;\">Tag:</span> <span class=\"text-danger\">SOLD OUT</span></p><p><span style=\"font-weight:bold;color:#666;\">Share:</span><i class=\"ml-2 fab fa-facebook-f\"></i><i class=\"ml-2 fab fa-twitter\"></i><i class=\"ml-2 fas fa-envelope\"></i><i class=\"ml-2 fab fa-linkedin-in\"></i><i class=\"ml-2 fab fa-whatsapp\"></i></p>", 7);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [_hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.quantityDecrease && $options.quantityDecrease.apply($options, arguments);
    }),
    "class": "low"
  }, "-"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.quantity = $event;
    }),
    onKeydown: _cache[3] || (_cache[3] = function () {
      return $options.quantityChange && $options.quantityChange.apply($options, arguments);
    }),
    type: "number",
    name: "",
    id: "",
    min: "1",
    max: "10"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quantity]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.quantityIncrease && $options.quantityIncrease.apply($options, arguments);
    }),
    "class": "high"
  }, "+")]), _hoisted_9])])]), _hoisted_16, _hoisted_17]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.large-image{\n        position : relative;\n}\n.large-image span{\n        position : absolute;\n        top : 40px;\n        right : 40px;\n        border-radius: 50%;\n}\n.quantity{\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n}\n.quantity input[type=number]{\n        width: 40px;\n        border-left: 0;\n        border-right: 0;\n        border-top: 2px solid #ddd;\n        border-bottom: 2px solid #ddd;\n        padding-top: 7px;\n        padding-bottom: 7px;\n        text-align: center;\n}\n.quantity input[type=number]:focus{\n        box-shadow: none;\n        outline : none;\n}\n.quantity .low{\n        display: inline-block;\n        margin-top: -10px;\n        padding: 7px 7px;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px;\n        border: 2px solid #ddd;\n        cursor: pointer;\n        transition : 0.2s;\n}\n.quantity .high{\n        display: inline-block;\n        margin-top: -10px;\n        padding: 7px 5px;\n        border-top-right-radius: 20px;\n        border-bottom-right-radius: 20px;\n        border: 2px solid #ddd;\n        cursor: pointer;\n        transition : 0.2s;\n}\n.quantity .low:hover{\n        background : #6CA300;\n        color : #fff;\n}\n.quantity .high:hover{\n        background : #6CA300;\n        color : #fff;\n}\n\n\n\n\n\n\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_style_index_0_id_5261b93a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_style_index_0_id_5261b93a_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_style_index_0_id_5261b93a_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/local/GiftCard.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/local/GiftCard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GiftCard_vue_vue_type_template_id_5261b93a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GiftCard.vue?vue&type=template&id=5261b93a */ "./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a");
/* harmony import */ var _GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GiftCard.vue?vue&type=script&lang=js */ "./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js");
/* harmony import */ var _GiftCard_vue_vue_type_style_index_0_id_5261b93a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css */ "./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css");




;
_GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _GiftCard_vue_vue_type_template_id_5261b93a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/local/GiftCard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GiftCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_template_id_5261b93a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_template_id_5261b93a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GiftCard.vue?vue&type=template&id=5261b93a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=template&id=5261b93a");


/***/ }),

/***/ "./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GiftCard_vue_vue_type_style_index_0_id_5261b93a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/local/GiftCard.vue?vue&type=style&index=0&id=5261b93a&lang=css");


/***/ })

}]);