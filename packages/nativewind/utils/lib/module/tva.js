import { tv } from 'tailwind-variants';
import { deepMergeObjects } from './deepMerge';
const tvatemp = options => {
  const parentVariants = options === null || options === void 0 ? void 0 : options.parentVariants;
  const parentCompoundVariants = options === null || options === void 0 ? void 0 : options.parentCompoundVariants;
  delete options.parentVariants;
  delete options.parentCompoundVariants;
  options.variants = deepMergeObjects(parentVariants, options.variants);
  if (Array.isArray(parentCompoundVariants) && parentCompoundVariants.length > 0) {
    if (!options.compoundVariants) {
      options.compoundVariants = [];
    }
    options.compoundVariants = [...parentCompoundVariants, ...options.compoundVariants];
  }
  const callback = tv(options);
  return inlineProps => {
    const {
      parentVariants: inlineParentVariants = {},
      ...variant
    } = inlineProps;
    const mergedVariants = deepMergeObjects(inlineParentVariants, variant);
    return callback({
      ...mergedVariants
    });
  };
};
export const tva = tvatemp;
//# sourceMappingURL=tva.js.map