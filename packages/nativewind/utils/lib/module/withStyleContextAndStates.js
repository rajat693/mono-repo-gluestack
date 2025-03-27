'use client';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { extractDataClassName } from './utils';
import { ParentContext } from './context';
export { useStyleContext } from './context';
export const withStyleContextAndStates = Component => {
  return /*#__PURE__*/React.forwardRef(({
    context,
    className,
    states,
    ...props
  }, ref) => {
    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      return extractDataClassName(className, states);
    }, [className, states]);
    return /*#__PURE__*/React.createElement(ParentContext.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(Component, _extends({
      className: classNamesFinal
    }, props, {
      ref: ref
    })));
  });
};
//# sourceMappingURL=withStyleContextAndStates.js.map