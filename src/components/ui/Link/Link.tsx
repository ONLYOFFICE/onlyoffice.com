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
  display = "inline-block",
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textUnderline,
  hover,
  style,
}: ILink) => {
  return (
    <StyledLink
      id={id}
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
      $textUnderline={textUnderline}
      $hover={hover}
      style={style}
    >
      {children || label}
    </StyledLink>
  );
};

export { Link };
