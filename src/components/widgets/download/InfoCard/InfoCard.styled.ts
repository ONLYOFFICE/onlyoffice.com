import styled from "styled-components";
import { IInfoCard } from "./InfoCard.types";
import { Link } from "@src/components/ui/Link";

const StyledInfoCard = styled(Link)<{
  $iconUrl: IInfoCard["icon"]["url"];
  $iconPositionX: IInfoCard["icon"]["positionX"];
  $iconPositionY: IInfoCard["icon"]["positionY"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9px;
  border: 1px solid #d8d8d8;
  padding: 23px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #808080;
  transition: border-color 0.2s;

  &::before {
    content: "";
    display: inline-flex;
    margin-right: 16px;
    width: 56px;
    min-width: 56px;
    height: 56px;
    background-image: url(${(props) => props.$iconUrl});
    background-position-x: ${(props) => props.$iconPositionX};
    background-position-y: ${(props) => props.$iconPositionY};
    background-repeat: no-repeat;
  }

  &:hover {
    border-color: #ff6f3d;
  }
`;

export { StyledInfoCard };
