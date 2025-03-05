import { StyledBadge } from "./Badge.styled";
import { IBadge } from "./Badge.types";

const Badge = ({
  id,
  className,
  label,
  children,
  verticalAlign = "text-top",
}: IBadge) => {
  return (
    <StyledBadge id={id} className={className} $verticalAlign={verticalAlign}>
      {children || label}
    </StyledBadge>
  );
};

export { Badge };
