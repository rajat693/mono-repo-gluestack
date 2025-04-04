function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef, useMemo } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';
import { ButtonContext } from './Context';
export const Button = StyledButton => /*#__PURE__*/forwardRef(({
  children,
  isDisabled,
  isHovered: isHoveredProp,
  isPressed: isPressedProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    pressProps: pressableProps,
    isPressed
  } = usePress({
    isDisabled
  });
  const {
    isFocused,
    focusProps
  } = useFocus();
  const {
    isHovered,
    hoverProps
  } = useHover();
  const contextValue = useMemo(() => {
    return {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    };
  }, [isHovered, isHoveredProp, isFocused, isFocusedProp, isPressed, isPressedProp, isDisabled, isFocusVisible, isFocusVisibleProp]);
  return /*#__PURE__*/React.createElement(ButtonContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    role: (props === null || props === void 0 ? void 0 : props.role) || 'button',
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    dataSet: {
      hover: isHoveredProp || isHovered ? 'true' : 'false',
      focus: isFocusedProp || isFocused ? 'true' : 'false',
      active: isPressedProp || isPressed ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false'
    },
    disabled: isDisabled
  }, props, {
    onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressableProps.onPressIn),
    onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressableProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
  }), typeof children === 'function' ? children({
    hovered: isHovered,
    focused: isFocused,
    pressed: isPressed,
    disabled: props.disabled ?? undefined,
    focusVisible: isFocusVisible
  }) : children));
});
//# sourceMappingURL=Button.js.map