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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ "./src/admin.scss");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);








class App extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.setStyle = this.setStyle.bind(this);
    this.state = {
      adminSettings: {},
      exampleSelect: "",
      exampleText: "",
      exampleText2: "",
      exampleText3: "",
      exampleToggle: false,
      isAPILoaded: false
    };
  }

  componentDidMount() {
    _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().loadPromise.then(() => {
      this.settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().models.Settings)();
      const {
        isAPILoaded
      } = this.state;

      if (isAPILoaded === false) {
        this.settings.fetch().then(response => {
          console.log(response);
          const adminSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.mapKeys)(response["dp_admin_settings"], (v, k) => (0,lodash__WEBPACK_IMPORTED_MODULE_5__.camelCase)(k));
          console.log('adminSettings', adminSettings);
          this.setState({
            adminSettings: adminSettings,
            exampleSelect: response["wholesomecode_wholesome_plugin_example_select"],
            exampleText: response["wholesomecode_wholesome_plugin_example_text"],
            exampleText2: response["wholesomecode_wholesome_plugin_example_text_2"],
            exampleText3: response["wholesomecode_wholesome_plugin_example_text_3"],
            exampleToggle: Boolean(response["wholesomecode_wholesome_plugin_example_toggle"]),
            isAPILoaded: true
          });
          console.log(this.state);
        });
      }
    });
  }

  setStyle(name, value) {
    // console.log(target.name);
    // console.log(target.value);
    document.querySelector('#adminmenumain').style.setProperty("--dp-menu-width", value);
    const adminSettings = this.state.adminSettings;
    adminSettings[name] = value;
    const settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().models.Settings)({
      adminSettings
    });
    settings.save();
    this.setState({
      adminSettings
    });
  }

  render() {
    const {
      exampleSelect,
      exampleText,
      exampleText2,
      exampleText3,
      exampleToggle,
      adminSettings,
      isAPILoaded
    } = this.state;
    const settings = adminSettings;
    console.log(settings);

    if (!isAPILoaded) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
    }

    const units = [{
      value: 'px',
      label: 'px',
      default: 160
    }, {
      value: '%',
      label: '%',
      default: 20
    }, {
      value: 'em',
      label: 'em',
      default: 10
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wholesome-plugin__header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wholesome-plugin__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wholesome-plugin__title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Wholesome Plugin Settings", "wholesome-plugin"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: "admin-plugins"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: () => {
        const {
          adminSettings
        } = this.state;
        const settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_2___default().models.Settings)({
          ["dp_admin_settings"]: adminSettings
        });
        settings.save().then(res => {
          console.log('after save', res);
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Save", "wholesome-plugin")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wholesome-plugin__main"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Panel Body One", "wholesome-plugin"),
      icon: "admin-plugins"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("An example dropdown field.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Layout", "wholesome-plugin") // onChange={(value) => this.setStyle('layout', value)}
      ,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Please Select...", "wholesome-plugin"),
        value: "top"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Option 1", "wholesome-plugin"),
        value: "main"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Option 2", "wholesome-plugin"),
        value: "split"
      }],
      value: exampleSelect
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("This is an example text field.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Admin menu width", "wholesome-plugin"),
      onChange: value => this.setStyle('menuWidth', value),
      value: settings.menuWidth,
      disabledUnits: false,
      units: units // isPressEnterToChange={true}
      // min={0}

    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("This is an example text field.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("font size", "wholesome-plugin"),
      onChange: value => this.setStyle('menuWidth', this.state.adminSettings.menuWidth),
      value: parseInt(settings.menuWidth) // disabledUnits={false}
      // units={units}
      // isPressEnterToChange={true}
      // min={0}
      ,
      allowReset: true,
      resetFallbackValue: 16,
      withInputField: false
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Panel Body Two", "wholesome-plugin"),
      icon: "admin-plugins"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Panel Body Three", "wholesome-plugin"),
      icon: "admin-plugins"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Use PanelRow to place controls inline.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Example Text 2", "wholesome-plugin"),
      onChange: exampleText2 => this.setState({
        exampleText2
      }),
      value: exampleText2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("This control is inline.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Example Text 3", "wholesome-plugin"),
      onChange: exampleText3 => this.setState({
        exampleText3
      }),
      value: exampleText3
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Panel Body Four", "wholesome-plugin"),
      icon: "admin-plugins"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      checked: exampleToggle,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("An example toggle.", "wholesome-plugin"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Example Toggle", "wholesome-plugin") // onChange={(value) => this.setStyle('panel')}

    })))));
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const htmlOutput = document.getElementById("wholesome-plugin-settings");
  let customizer = document.createElement('div');
  customizer.id = 'dp-admin-customizer';
  document.body.append(customizer);
  customizer = document.getElementById("dp-admin-customizer"); // if (customizer) {

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), customizer); // 
});
}();
/******/ })()
;
//# sourceMappingURL=admin.js.map