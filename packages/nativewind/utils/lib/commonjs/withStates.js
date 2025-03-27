"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useStyleContext", {
  enumerable: true,
  get: function () {
    return _context.useStyleContext;
  }
});
exports.withStates = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("./utils");
var _context = require("./context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const withStates = Component => /*#__PURE__*/_react.default.forwardRef(({
  states,
  className,
  ...props
}, ref) => {
  const classNamesFinal = _react.default.useMemo(() => {
    if (!className) return;
    (0, _utils.extractDataClassName)(className, states);
  }, [className, states]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: classNamesFinal
  }, props, {
    ref: ref
  }));
});
exports.withStates = withStates;
//# sourceMappingURL=withStates.js.map