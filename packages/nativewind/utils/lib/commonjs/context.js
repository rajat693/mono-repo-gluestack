"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyleContext = exports.ParentContext = void 0;
var _react = require("react");
const ParentContext = exports.ParentContext = /*#__PURE__*/(0, _react.createContext)({});
const useStyleContext = () => {
  return (0, _react.useContext)(ParentContext);
};
exports.useStyleContext = useStyleContext;
//# sourceMappingURL=context.js.map