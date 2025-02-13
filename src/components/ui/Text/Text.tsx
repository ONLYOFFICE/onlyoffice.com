import { StyledText } from "./Text.styled";
import { IText } from "./Text.types";

const Text = ({
  id,
  className,
  label,
  children,
  as,
  size,
  display,
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  color,
  textAlign,
  textTransform,
  textDecoration,
  truncate,
}: IText) => {
  return (
    <StyledText
      id={id}
      className={className}
      as={as}
      $size={size}
      $display={display}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $fontStyle={fontStyle}
      $lineHeight={lineHeight}
      $color={color}
      $textAlign={textAlign}
      $textTransform={textTransform}
      $textDecoration={textDecoration}
      $truncate={truncate}
    >
      {children || label}
    </StyledText>
  );
};

export { Text };
