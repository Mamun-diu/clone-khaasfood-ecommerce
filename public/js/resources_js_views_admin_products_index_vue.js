(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_products_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page: 1,
      limit: 5,
      paginateValue: null
    };
  },
  methods: {
    getAllProduct: function getAllProduct() {
      this.$store.dispatch('getAllProduct');
    },
    getPage: function getPage(page) {
      if (this.page == 1 && page == 'prev') {
        this.page = 1;
      } else if (this.page > 1 && page == 'prev') {
        this.page -= 1;
      } else if (this.page == this.paginateValue && page == 'next') {
        this.page = this.paginateValue;
      } else if (this.page < this.paginateValue && page == 'next') {
        this.page += 1;
      } else {
        this.page = page;
      }
    },
    deleteProduct: function deleteProduct(id) {
      var _this = this;

      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]("/api/product/".concat(id)).then(function (res) {
            _this.getAllProduct();

            console.log(res);
            toastr.success("Your data is deleted");
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
    }
  },
  computed: {
    getProduct: function getProduct() {
      var start = (this.page - 1) * this.limit;
      var end = start + this.limit;
      this.paginateValue = this.$store.getters.paginate("Product", start, end).paginationValue;
      return this.$store.getters.paginate("Product", start, end);
    }
  },
  mounted: function mounted() {
    this.getAllProduct();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-header"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row mb-2"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-sm-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Product")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-sm-6"
};
var _hoisted_6 = {
  "class": "breadcrumb float-sm-right"
};
var _hoisted_7 = {
  "class": "breadcrumb-item"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "breadcrumb-item active"
}, "product", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "container"
};
var _hoisted_11 = {
  "class": "row justify-content-center"
};
var _hoisted_12 = {
  "class": "col-12"
};
var _hoisted_13 = {
  "class": "card"
};
var _hoisted_14 = {
  "class": "card-header bg-info text-light "
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "float-left"
}, "Product List", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create new");

var _hoisted_17 = {
  "class": "card-body"
};
var _hoisted_18 = {
  "class": "table"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" main_category_id\tsub_category_id\ttag_id\tslug\tprice\tstatus\tdiscount\tquantity\tdescription "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Id"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Main "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Sub "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Image-1"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Image-2"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Tag"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Discount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Quantity"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Action")], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit");

var _hoisted_21 = {
  "class": "d-flex justify-content-center",
  "aria-label": "Page navigation example"
};
var _hoisted_22 = {
  "class": "pagination "
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "page-link",
  href: "#"
}, "Previous", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "page-link",
  href: "#"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "page-link",
  href: "#"
}, "Next", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ol", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Dashboard'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_9])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.container-fluid ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'ProductCreate'
    },
    "class": "btn  btn-outline-light text-dark float-right"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_18, [_hoisted_19, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getProduct.paginationData, function (data) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: data.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.main.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.sub.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      width: "60",
      src: '/' + data.images[0].image,
      alt: ""
    }, null, 8
    /* PROPS */
    , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      width: "60",
      src: '/' + data.images[1].image,
      alt: ""
    }, null, 8
    /* PROPS */
    , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.tag.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.price), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.status), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.discount) + "% ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.quantity), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'ProductEdit',
        params: {
          id: data.id
        }
      },
      "class": "btn btn-sm btn-info mr-1"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_20];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      onClick: function onClick($event) {
        return $options.deleteProduct(data.id);
      },
      "class": "btn btn-sm btn-danger"
    }, "Delete", 8
    /* PROPS */
    , ["onClick"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getPage('prev');
    }, ["prevent"])),
    "class": "page-item"
  }, [_hoisted_23]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paginateValue, function (index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.getPage(index);
      }, ["prevent"]),
      "class": [index == $data.page ? 'active' : '', "page-item"],
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getPage('next');
    }, ["prevent"])),
    "class": "page-item"
  }, [_hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li  class=\"page-item\" v-if=\"i%3==0\">{{ (i/10)+1 }} </li> ")])])])])])])]);
}

/***/ }),

/***/ "./resources/js/views/admin/products/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/products/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_18719d26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=18719d26 */ "./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/views/admin/products/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_18719d26__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/admin/products/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/admin/products/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/products/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_18719d26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_18719d26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=18719d26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/products/index.vue?vue&type=template&id=18719d26");


/***/ })

}]);