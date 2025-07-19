import React, {
  forwardRef,
  type ElementType,
  type ComponentPropsWithRef,
  type ReactElement,
} from "react";

type Props<T extends ElementType = "button"> = {
  as?: T;
} & ComponentPropsWithRef<T>;

const Button = forwardRef(
  <T extends ElementType = "button">(
    { as: Component = "button", ...props }: Props<T>,
    ref: React.Ref<T>
  ): ReactElement => {
    return (
      <Component
        ref={ref}
        {...(Component === "button" && !("type" in props)
          ? { type: "button" }
          : {})}
        {...props}
      >
        {props.children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
