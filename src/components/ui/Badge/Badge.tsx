import { StyledBadge } from "./Badge.styled";
import { IBadge } from "./Badge.types";

const Badge = ({ id, className, label, children }: IBadge) => {
  return (
    <StyledBadge id={id} className={className}>
      {children || label}
    </StyledBadge>
  );
};

export { Badge };
