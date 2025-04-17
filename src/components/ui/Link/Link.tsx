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
}: ILink) => {
  const asProp = download ? "a" : undefined;

  return (
    <StyledLink
      id={id}
      {...(asProp && { as: asProp })}
      className={className}
      href={href ?? ""}
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
    >
      {children || label}
    </StyledLink>
  );
};

export { Link };
