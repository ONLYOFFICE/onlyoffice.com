import styled from "styled-components";
import { IBadge } from "./Badge.types";

const StyledBadge = styled.span<{ $verticalAlign?: IBadge["verticalAlign"] }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid #ff6f3d;
  border-radius: 1px;
  padding: 3px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.1em;
  min-height: 20px;
  color: #ff6f3d;
  vertical-align: ${(props) => props.$verticalAlign};
  text-transform: uppercase;
`;

export { StyledBadge };
