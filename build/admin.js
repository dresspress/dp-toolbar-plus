/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin.scss":
/*!************************!*\
  !*** ./src/admin.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.scss */ "./src/admin.scss");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);



/* global dpToolbarSettings */










const Notices = () => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store).getNotices().filter(notice => {
    return notice.type === 'snackbar';
  }), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SnackbarList, {
    className: "dp-toolbar-settings-notices",
    notices: notices,
    onRemove: removeNotice
  });
};

let roleOptions = [];
let capList = [];
const settings = dpToolbarSettings;
const roles = dpToolbarSettings.roles;

for (const [option, role] of Object.entries(roles)) {
  roleOptions.push({
    label: role.name,
    value: option
  });
  capList = capList.concat(Object.keys(role.capabilities));
}

capList = lodash__WEBPACK_IMPORTED_MODULE_9___default().uniq(capList);

const DisplayRule = ({
  label = '',
  onChange,
  active = false,
  action = '',
  logged_in = false,
  not_logged_in = true,
  roles = [],
  caps = [],
  scope = ''
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Enable display rule for front-end Toolbar', 'dp-toolbar-plus'),
    checked: active,
    onChange: active => {
      onChange({
        active
      });
    }
  }), active && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "dp-toolbar-display-rule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, {
    align: "center",
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    labelPosition: "side",
    value: action,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show Toolbar', 'dp-toolbar-plus'),
      value: 'show'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Hide Toolbar', 'dp-toolbar-plus'),
      value: 'hide'
    }],
    onChange: action => {
      onChange({
        action
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    labelPosition: "side",
    value: scope,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('for all users', 'dp-toolbar-plus'),
      value: 'all'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('for all users except administrators', 'dp-toolbar-plus'),
      value: 'not_admins'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('for logged in users', 'dp-toolbar-plus'),
      value: 'logged_in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('for non-logged in users', 'dp-toolbar-plus'),
      value: 'not_logged_in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('for custom user scope', 'dp-toolbar-plus'),
      value: 'custom'
    }],
    onChange: scope => {
      onChange({
        scope
      });
    }
  })), scope == 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "dp-toolbar-custom-scope"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All non-logged in users', 'dp-toolbar-plus'),
    checked: not_logged_in,
    onChange: not_logged_in => {
      onChange({
        not_logged_in
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('All logged in users ', 'dp-toolbar-plus'),
    checked: logged_in,
    onChange: logged_in => {
      onChange({
        logged_in
      });
    }
  }), logged_in && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "dp-toolbar-roles-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('with one of selected roles:', 'dp-toolbar-plus')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "dp-toolbar-roles-option-list"
  }, roleOptions.map((role, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
      key: index,
      label: role.label,
      checked: roles.includes(role.value),
      value: role.value,
      onChange: state => {
        roles = state ? lodash__WEBPACK_IMPORTED_MODULE_9___default().union(roles, [role.value]) : lodash__WEBPACK_IMPORTED_MODULE_9___default().without(roles, role.value);
        onChange({
          roles
        });
      }
    });
  }))), logged_in && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: 'dp-toolbar-caps-control'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('AND have one of selected capabilities:', 'textdomai'),
    value: caps,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('e.g. manage_options'),
    suggestions: capList,
    tokenizeOnSpace: true,
    onChange: caps => {
      onChange({
        caps
      });
    },
    __experimentalExpandOnFocus: true,
    __experimentalValidateInput: value => {
      return capList.includes(value);
    }
  })))));
};

class Page extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
    const defaultRule = {
      active: false,
      action: '',
      user: true,
      guest: true,
      roles: [],
      caps: []
    };
    this.state = {
      front_display_rule: settings.front_display_rule,
      // admin_display_rule: settings.admin_display_rule,
      disable_user_pref: settings.disable_user_pref,
      auto_hide_show: settings.auto_hide_show,
      remove_wp_logo: settings.remove_wp_logo,
      isSaving: false
    };
  }

  componentDidMount() {}

  render() {
    const {
      front_display_rule,
      admin_display_rule,
      disable_user_pref,
      auto_hide_show,
      remove_wp_logo,
      isSaving
    } = this.state;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "dp-admin-page-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "dp-admin-page-header-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", {
      className: "dp-admin-page-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Toolbar Settings', 'dp-toolbar-plus')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "dp-admin-page-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "dp-admin-page-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      opened: true,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('General', 'dp-toolbar-plus')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Remove WP logo from toolbar', 'dp-toolbar-plus'),
      checked: remove_wp_logo,
      onChange: remove_wp_logo => {
        this.setState({
          remove_wp_logo
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      opened: true,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Front-end Toolbar', 'dp-toolbar-plus')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(DisplayRule, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Front-end Toolbar display rule', 'dp-toolbar-plus')
    }, front_display_rule, {
      onChange: rule => {
        this.setState({
          front_display_rule: { ...front_display_rule,
            ...rule
          }
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Force disable Toolbar preference from Edit Profile page', 'dp-toolbar-plus'),
      checked: disable_user_pref,
      onChange: disable_user_pref => {
        this.setState({
          disable_user_pref
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Automatically hide and show the toolbar', 'dp-toolbar-plus'),
      checked: auto_hide_show,
      onChange: auto_hide_show => {
        this.setState({
          auto_hide_show
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "dp-admin-page-save-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      isPrimary: true,
      isBusy: isSaving,
      onClick: () => {
        this.setState({
          isSaving: true
        });
        let settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_4___default().models.Settings)({
          dp_toolbar_settings: {
            front_display_rule,
            disable_user_pref,
            auto_hide_show,
            remove_wp_logo
          }
        });
        settings.save().then(() => {
          this.setState({
            isSaving: false
          });
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.dispatch)('core/notices').createNotice('success', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Settings saved.', 'dp-toolbar-plus'), {
            type: 'snackbar',
            isDismissible: true,
            id: 'save-settings-notice',
            actions: [{
              url: '/',
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('View site')
            }]
          });
        }).catch(error => {
          // TODO: Catch error and display for better user experience.
          console.error('Error:', error);
        });
      }
    }, isSaving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Saving', 'dp-toolbar-plus') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save Settings', 'dp-toolbar-plus')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Notices, null)));
  }

}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {
  const pageWrap = document.getElementById('dp-toolbar-settings-page-wrap');

  if (pageWrap) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Page, null), pageWrap);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=admin.js.map