'use client';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ParentContext } from './context';
export { useStyleContext } from './context';
export const withStyleContext = Component => {
  return /*#__PURE__*/React.forwardRef(({
    context,
    ...props
  }, ref) => {
    return /*#__PURE__*/React.createElement(ParentContext.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      ref: ref
    })));
  });
};
//# sourceMappingURL=withStyleContext.js.map