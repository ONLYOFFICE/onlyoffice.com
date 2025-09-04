import type React from "react";
import { StyledLink } from "./Link.styled";
import { ILink } from "./Link.types";

const Link = ({
  id,
  className,
  label,
  children,
  href,
  rel,
  download,
  type,
  target,
  tabIndex,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textTransform,
  textUnderline,
  hover,
  style,
  onClick,
  ...rest
}: ILink) => {
  const asProp = !href || download ? "a" : undefined;
  const hasClickNoHref = !href && typeof onClick === "function";

  return (
    <StyledLink
      id={id}
      {...(asProp && { as: asProp })}
      className={className}
      href={href ?? "#"}
      rel={!rel && target === "_blank" ? "noopener noreferrer" : rel}
      download={download}
      type={type}
      target={target}
      tabIndex={tabIndex}
      $display={display}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $color={color}
      $textTransform={textTransform}
      $textUnderline={textUnderline}
      $hover={hover}
      style={style}
      onClick={(e: React.MouseEvent) => {
        if (hasClickNoHref) {
          e?.preventDefault?.();
          onClick?.();
          return;
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {children || label}
    </StyledLink>
  );
};

export { Link };
