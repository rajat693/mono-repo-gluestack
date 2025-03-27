"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cn = cn;
var _clsx = _interopRequireDefault(require("clsx"));
var _tailwindMerge = require("tailwind-merge");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function cn(...inputs) {
  return (0, _tailwindMerge.twMerge)((0, _clsx.default)(inputs));
}
//# sourceMappingURL=cn.js.map