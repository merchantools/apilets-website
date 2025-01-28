"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/stickyScroll.tsx":
/*!*****************************************!*\
  !*** ./src/components/stickyScroll.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StickyScroll: function() { return /* binding */ StickyScroll; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./src/utils/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ StickyScroll auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst StickyScroll = (param)=>{\n    let { content, contentClassName } = param;\n    _s();\n    const [activeCard, setActiveCard] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll\n        // target: ref\n        container: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const cardLength = content.length;\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValueEvent)(scrollYProgress, \"change\", (latest)=>{\n        const cardsBreakpoints = content.map((_, index)=>index / cardLength);\n        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index)=>{\n            const distance = Math.abs(latest - breakpoint);\n            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {\n                return index;\n            }\n            return acc;\n        }, 0);\n        setActiveCard(closestBreakpointIndex);\n    });\n    const backgroundColors = [\n        \"var(--slate-900)\",\n        \"var(--black)\",\n        \"var(--neutral-900)\"\n    ];\n    const linearGradients = [\n        \"linear-gradient(to bottom right, _theme(colors.cyan.500), _theme(colors.emerald.500)\",\n        \"linear-gradient(to bottom right, _theme(colors.pink.500), _theme(colors.indigo.500))\",\n        \"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))\"\n    ];\n    const [backgroundGradient, setBackgroundGradient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(linearGradients[0]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);\n    }, [\n        activeCard\n    ]);\n    var _content_activeCard_content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        animate: {\n            backgroundColor: backgroundColors[activeCard % backgroundColors.length]\n        },\n        className: \"h-[30rem]  overflow-y-auto flex justify-between relative space-x-10 rounded-md px-8\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div relative flex items-start px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-40\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: activeCard === index ? 1 : 0.3\n                                    },\n                                    className: \"text-3xl font-bold text-slate-100\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                                    initial: {\n                                        opacity: 0\n                                    },\n                                    animate: {\n                                        opacity: activeCard === index ? 1 : 0.3\n                                    },\n                                    className: \"text-lg text-slate-300 max-w-lg  mt-10\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.title + index, true, {\n                            fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: backgroundGradient\n                },\n                className: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden lg:block h- max-w-lg w-full bg-opacity-30 rounded-md bg-white sticky top-0 overflow-hidden\", contentClassName),\n                children: (_content_activeCard_content = content[activeCard].content) !== null && _content_activeCard_content !== void 0 ? _content_activeCard_content : null\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/projects/CK/apilets-website/src/components/stickyScroll.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StickyScroll, \"PySmu2uyBIbRCCvdk4Ahqqod30Y=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValueEvent\n    ];\n});\n_c = StickyScroll;\nvar _c;\n$RefreshReg$(_c, \"StickyScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUNJO0FBQ3hCO0FBQ0o7QUFFNUIsTUFBTVEsZUFBZTtRQUFDLEVBQzNCQyxPQUFPLEVBQ1BDLGdCQUFnQixFQVFqQjs7SUFDQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1oscURBQWMsQ0FBQztJQUNuRCxNQUFNYSxNQUFNWCw2Q0FBTUEsQ0FBTTtJQUN4QixNQUFNLEVBQUVZLGVBQWUsRUFBRSxHQUFHVCx3REFBU0EsQ0FBQztRQUNwQyxxSUFBcUk7UUFDckksY0FBYztRQUNkVSxXQUFXRjtRQUNYRyxRQUFRO1lBQUM7WUFBZTtTQUFZO0lBQ3RDO0lBQ0EsTUFBTUMsYUFBYVIsUUFBUVMsTUFBTTtJQUVqQ2Qsa0VBQW1CQSxDQUFDVSxpQkFBaUIsVUFBVSxDQUFDSztRQUM5QyxNQUFNQyxtQkFBbUJYLFFBQVFZLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxRQUFVQSxRQUFRTjtRQUMzRCxNQUFNTyx5QkFBeUJKLGlCQUFpQkssTUFBTSxDQUFDLENBQUNDLEtBQUtDLFlBQVlKO1lBQ3ZFLE1BQU1LLFdBQVdDLEtBQUtDLEdBQUcsQ0FBQ1gsU0FBU1E7WUFDbkMsSUFBSUMsV0FBV0MsS0FBS0MsR0FBRyxDQUFDWCxTQUFTQyxnQkFBZ0IsQ0FBQ00sSUFBSSxHQUFHO2dCQUN2RCxPQUFPSDtZQUNUO1lBQ0EsT0FBT0c7UUFDVCxHQUFHO1FBQ0hkLGNBQWNZO0lBQ2hCO0lBRUEsTUFBTU8sbUJBQW1CO1FBQUM7UUFBb0I7UUFBZ0I7S0FBcUI7SUFDbkYsTUFBTUMsa0JBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHL0IsK0NBQVFBLENBQUM2QixlQUFlLENBQUMsRUFBRTtJQUUvRS9CLGdEQUFTQSxDQUFDO1FBQ1JpQyxzQkFBc0JGLGVBQWUsQ0FBQ3JCLGFBQWFxQixnQkFBZ0JkLE1BQU0sQ0FBQztJQUM1RSxHQUFHO1FBQUNQO0tBQVc7UUE0Q1JGO0lBMUNQLHFCQUNFLDhEQUFDSCxpREFBTUEsQ0FBQzZCLEdBQUc7UUFDVEMsU0FBUztZQUNQQyxpQkFBaUJOLGdCQUFnQixDQUFDcEIsYUFBYW9CLGlCQUFpQmIsTUFBTSxDQUFDO1FBQ3pFO1FBQ0FvQixXQUFVO1FBQ1Z6QixLQUFLQTs7MEJBQ0wsOERBQUNzQjtnQkFBSUcsV0FBVTswQkFDYiw0RUFBQ0g7b0JBQUlHLFdBQVU7OEJBQ1o3QixRQUFRWSxHQUFHLENBQUMsQ0FBQ2tCLE1BQU1oQixzQkFDbEIsOERBQUNZOzRCQUE2QkcsV0FBVTs7OENBQ3RDLDhEQUFDaEMsaURBQU1BLENBQUNrQyxFQUFFO29DQUNSQyxTQUFTO3dDQUNQQyxTQUFTO29DQUNYO29DQUNBTixTQUFTO3dDQUNQTSxTQUFTL0IsZUFBZVksUUFBUSxJQUFJO29DQUN0QztvQ0FDQWUsV0FBVTs4Q0FDVEMsS0FBS0ksS0FBSzs7Ozs7OzhDQUViLDhEQUFDckMsaURBQU1BLENBQUNzQyxDQUFDO29DQUNQSCxTQUFTO3dDQUNQQyxTQUFTO29DQUNYO29DQUNBTixTQUFTO3dDQUNQTSxTQUFTL0IsZUFBZVksUUFBUSxJQUFJO29DQUN0QztvQ0FDQWUsV0FBVTs4Q0FDVEMsS0FBS00sV0FBVzs7Ozs7OzsyQkFuQlhOLEtBQUtJLEtBQUssR0FBR3BCOzs7Ozs7Ozs7Ozs7Ozs7MEJBMEI3Qiw4REFBQ1k7Z0JBQ0NXLE9BQU87b0JBQUVDLFlBQVlkO2dCQUFtQjtnQkFDeENLLFdBQVcvQixnREFBRUEsQ0FDWCxxR0FDQUc7MEJBRURELENBQUFBLDhCQUFBQSxPQUFPLENBQUNFLFdBQVcsQ0FBQ0YsT0FBTyxjQUEzQkEseUNBQUFBLDhCQUErQjs7Ozs7Ozs7Ozs7O0FBSXhDLEVBQUU7R0E1RldEOztRQWFpQkgsb0RBQVNBO1FBUXJDRCw4REFBbUJBOzs7S0FyQlJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC50c3g/NTQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW90aW9uVmFsdWVFdmVudCwgdXNlU2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC91dGlscy91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBTdGlja3lTY3JvbGwgPSAoe1xuICBjb250ZW50LFxuICBjb250ZW50Q2xhc3NOYW1lLFxufToge1xuICBjb250ZW50OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGUgfCBhbnk7XG4gIH1bXTtcbiAgY29udGVudENsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZUNhcmQsIHNldEFjdGl2ZUNhcmRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICAvLyB1bmNvbW1lbnQgbGluZSAyMiBhbmQgY29tbWVudCBsaW5lIDIzIGlmIHlvdSBET05UIHdhbnQgdGhlIG92ZXJmbG93IGNvbnRhaW5lciBhbmQgd2FudCB0byBoYXZlIGl0IGNoYW5nZSBvbiB0aGUgZW50aXJlIHBhZ2Ugc2Nyb2xsXG4gICAgLy8gdGFyZ2V0OiByZWZcbiAgICBjb250YWluZXI6IHJlZixcbiAgICBvZmZzZXQ6IFsnc3RhcnQgc3RhcnQnLCAnZW5kIHN0YXJ0J10sXG4gIH0pO1xuICBjb25zdCBjYXJkTGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgdXNlTW90aW9uVmFsdWVFdmVudChzY3JvbGxZUHJvZ3Jlc3MsICdjaGFuZ2UnLCAobGF0ZXN0KSA9PiB7XG4gICAgY29uc3QgY2FyZHNCcmVha3BvaW50cyA9IGNvbnRlbnQubWFwKChfLCBpbmRleCkgPT4gaW5kZXggLyBjYXJkTGVuZ3RoKTtcbiAgICBjb25zdCBjbG9zZXN0QnJlYWtwb2ludEluZGV4ID0gY2FyZHNCcmVha3BvaW50cy5yZWR1Y2UoKGFjYywgYnJlYWtwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMobGF0ZXN0IC0gYnJlYWtwb2ludCk7XG4gICAgICBpZiAoZGlzdGFuY2UgPCBNYXRoLmFicyhsYXRlc3QgLSBjYXJkc0JyZWFrcG9pbnRzW2FjY10pKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgc2V0QWN0aXZlQ2FyZChjbG9zZXN0QnJlYWtwb2ludEluZGV4KTtcbiAgfSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9ycyA9IFsndmFyKC0tc2xhdGUtOTAwKScsICd2YXIoLS1ibGFjayknLCAndmFyKC0tbmV1dHJhbC05MDApJ107XG4gIGNvbnN0IGxpbmVhckdyYWRpZW50cyA9IFtcbiAgICAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgX3RoZW1lKGNvbG9ycy5jeWFuLjUwMCksIF90aGVtZShjb2xvcnMuZW1lcmFsZC41MDApJyxcbiAgICAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgX3RoZW1lKGNvbG9ycy5waW5rLjUwMCksIF90aGVtZShjb2xvcnMuaW5kaWdvLjUwMCkpJyxcbiAgICAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tb3JhbmdlLTUwMCksIHZhcigtLXllbGxvdy01MDApKScsXG4gIF07XG5cbiAgY29uc3QgW2JhY2tncm91bmRHcmFkaWVudCwgc2V0QmFja2dyb3VuZEdyYWRpZW50XSA9IHVzZVN0YXRlKGxpbmVhckdyYWRpZW50c1swXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kR3JhZGllbnQobGluZWFyR3JhZGllbnRzW2FjdGl2ZUNhcmQgJSBsaW5lYXJHcmFkaWVudHMubGVuZ3RoXSk7XG4gIH0sIFthY3RpdmVDYXJkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgYW5pbWF0ZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcnNbYWN0aXZlQ2FyZCAlIGJhY2tncm91bmRDb2xvcnMubGVuZ3RoXSxcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9J2gtWzMwcmVtXSAgb3ZlcmZsb3cteS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIHNwYWNlLXgtMTAgcm91bmRlZC1tZCBweC04J1xuICAgICAgcmVmPXtyZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdiByZWxhdGl2ZSBmbGV4IGl0ZW1zLXN0YXJ0IHB4LTQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS50aXRsZSArIGluZGV4fSBjbGFzc05hbWU9J215LTQwJz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBhY3RpdmVDYXJkID09PSBpbmRleCA/IDEgOiAwLjMsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTEwMCc+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogYWN0aXZlQ2FyZCA9PT0gaW5kZXggPyAxIDogMC4zLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWxnIHRleHQtc2xhdGUtMzAwIG1heC13LWxnICBtdC0xMCc+XG4gICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2gtNDAnIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kR3JhZGllbnQgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAnaGlkZGVuIGxnOmJsb2NrIGgtIG1heC13LWxnIHctZnVsbCBiZy1vcGFjaXR5LTMwIHJvdW5kZWQtbWQgYmctd2hpdGUgc3RpY2t5IHRvcC0wIG92ZXJmbG93LWhpZGRlbicsXG4gICAgICAgICAgY29udGVudENsYXNzTmFtZVxuICAgICAgICApfT5cbiAgICAgICAge2NvbnRlbnRbYWN0aXZlQ2FyZF0uY29udGVudCA/PyBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTW90aW9uVmFsdWVFdmVudCIsInVzZVNjcm9sbCIsIm1vdGlvbiIsImNuIiwiU3RpY2t5U2Nyb2xsIiwiY29udGVudCIsImNvbnRlbnRDbGFzc05hbWUiLCJhY3RpdmVDYXJkIiwic2V0QWN0aXZlQ2FyZCIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsImNvbnRhaW5lciIsIm9mZnNldCIsImNhcmRMZW5ndGgiLCJsZW5ndGgiLCJsYXRlc3QiLCJjYXJkc0JyZWFrcG9pbnRzIiwibWFwIiwiXyIsImluZGV4IiwiY2xvc2VzdEJyZWFrcG9pbnRJbmRleCIsInJlZHVjZSIsImFjYyIsImJyZWFrcG9pbnQiLCJkaXN0YW5jZSIsIk1hdGgiLCJhYnMiLCJiYWNrZ3JvdW5kQ29sb3JzIiwibGluZWFyR3JhZGllbnRzIiwiYmFja2dyb3VuZEdyYWRpZW50Iiwic2V0QmFja2dyb3VuZEdyYWRpZW50IiwiZGl2IiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsIml0ZW0iLCJoMiIsImluaXRpYWwiLCJvcGFjaXR5IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/stickyScroll.tsx\n"));

/***/ })

});