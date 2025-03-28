import React, { forwardRef } from 'react';
import { useButtonContext } from './Context';
export const ButtonIcon = (StyledButtonIcon) => forwardRef((props, ref) => {
    const { hover, focus, active, disabled, focusVisible } = useButtonContext();
    return (<StyledButtonIcon states={{
            hover: hover,
            focus: focus,
            active: active,
            disabled: disabled,
            focusVisible: focusVisible,
        }} {...props} ref={ref}/>);
});
