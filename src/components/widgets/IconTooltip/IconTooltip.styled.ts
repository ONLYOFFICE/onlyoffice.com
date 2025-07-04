import styled from "styled-components";
import { IIconTooltip } from "./IconTooltip.types";
import { Link } from "@src/components/ui/Link";

const StyledIconTooltip = styled(Link)<{
  $iconUrl: IIconTooltip["icon"]["url"];
  $iconPositionX: IIconTooltip["icon"]["positionX"];
  $iconPositionY: IIconTooltip["icon"]["positionY"];
}>`
  border-radius: 6px;
  width: 48px;
  min-width: 48px;
  height: 48px;
  background-image: url(${(props) => props.$iconUrl});
  background-position-x: ${(props) => props.$iconPositionX};
  background-position-y: ${(props) => props.$iconPositionY};
  background-repeat: no-repeat;
`;

export { StyledIconTooltip };
