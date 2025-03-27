'use client';

import { createContext, useContext } from 'react';
export const ParentContext = /*#__PURE__*/createContext({});
export const useStyleContext = () => {
  return useContext(ParentContext);
};
//# sourceMappingURL=context.js.map