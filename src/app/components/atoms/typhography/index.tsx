import React from "react";
import clsx from "clsx";
import { variants } from "./variants";
import { typographyStyles } from "./typography-styles";
import { ITypography } from "./interface";

const Typography: React.FC<ITypography> = ({
  as,
  variant = "body1",
  children,
  additionalStyles,
  ...props
}) => {
  const Component = as || variants[variant];
  const styles = typographyStyles[variant];

  return (
    <Component className={clsx(styles, additionalStyles)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
