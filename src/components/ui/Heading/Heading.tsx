import { StyledHeading } from "./Heading.styled";
import { IHeading } from "./Heading.types";

const Heading = ({
  id,
  className,
  label,
  children,
  color,
  level = 1,
  size,
  textAlign,
}: IHeading) => {
  const levelSize =
    size ??
    (level === 1 ? 2 : level === 2 ? 3 : level === 3 ? 4 : level === 4 ? 5 : 6);

  return (
    <StyledHeading
      as={`h${level}`}
      id={id}
      className={className}
      $color={color}
      $level={level}
      $size={levelSize}
      $textAlign={textAlign}
    >
      {children || label}
    </StyledHeading>
  );
};

export { Heading };
