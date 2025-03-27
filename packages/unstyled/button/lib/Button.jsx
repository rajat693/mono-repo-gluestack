import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef, useMemo } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';
import { ButtonContext } from './Context';
export const Button = (StyledButton) => forwardRef(({ children, isDisabled, isHovered: isHoveredProp, isPressed: isPressedProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp, ...props }, ref) => {
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const { pressProps: pressableProps, isPressed } = usePress({
        isDisabled,
    });
    const { isFocused, focusProps } = useFocus();
    const { isHovered, hoverProps } = useHover();
    const contextValue = useMemo(() => {
        return {
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
        };
    }, [
        isHovered,
        isHoveredProp,
        isFocused,
        isFocusedProp,
        isPressed,
        isPressedProp,
        isDisabled,
        isFocusVisible,
        isFocusVisibleProp,
    ]);
    return (<ButtonContext.Provider value={contextValue}>
          <StyledButton ref={ref} role={props?.role || 'button'} states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
        }} dataSet={{
            hover: isHoveredProp || isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
        }} disabled={isDisabled} {...props} onPressIn={composeEventHandlers(props?.onPressIn, pressableProps.onPressIn)} onPressOut={composeEventHandlers(props?.onPressOut, pressableProps.onPressOut)} 
    // @ts-ignore - web only
    onHoverIn={composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)} 
    // @ts-ignore - web only
    onHoverOut={composeEventHandlers(props?.onHoverOut, hoverProps.onHoverOut)} 
    // @ts-ignore - web only
    onFocus={composeEventHandlers(composeEventHandlers(props?.onFocus, focusProps.onFocus), focusRingProps.onFocus)} 
    // @ts-ignore - web only
    onBlur={composeEventHandlers(composeEventHandlers(props?.onBlur, focusProps.onBlur), focusRingProps.onBlur)}>
            {typeof children === 'function'
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: props.disabled ?? undefined,
                focusVisible: isFocusVisible,
            })
            : children}
          </StyledButton>
        </ButtonContext.Provider>);
});
