"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tva = void 0;
var _tailwindVariants = require("tailwind-variants");
var _deepMerge = require("./deepMerge");
const tvatemp = options => {
  const parentVariants = options === null || options === void 0 ? void 0 : options.parentVariants;
  const parentCompoundVariants = options === null || options === void 0 ? void 0 : options.parentCompoundVariants;
  delete options.parentVariants;
  delete options.parentCompoundVariants;
  options.variants = (0, _deepMerge.deepMergeObjects)(parentVariants, options.variants);
  if (Array.isArray(parentCompoundVariants) && parentCompoundVariants.length > 0) {
    if (!options.compoundVariants) {
      options.compoundVariants = [];
    }
    options.compoundVariants = [...parentCompoundVariants, ...options.compoundVariants];
  }
  const callback = (0, _tailwindVariants.tv)(options);
  return inlineProps => {
    const {
      parentVariants: inlineParentVariants = {},
      ...variant
    } = inlineProps;
    const mergedVariants = (0, _deepMerge.deepMergeObjects)(inlineParentVariants, variant);
    return callback({
      ...mergedVariants
    });
  };
};
const tva = exports.tva = tvatemp;
//# sourceMappingURL=tva.js.map