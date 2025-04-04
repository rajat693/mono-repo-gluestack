import React from 'react';
export declare const Button: <T>(StyledButton: React.ComponentType<T>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<T & Omit<import("./types").InterfaceButtonProps, "children"> & {
    children?: React.ReactNode | (({ hovered, pressed, focused, focusVisible, disabled, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
        focusVisible?: boolean | undefined;
        disabled?: boolean | undefined;
    }) => React.ReactNode);
}> & React.RefAttributes<unknown>>;
//# sourceMappingURL=Button.d.ts.map