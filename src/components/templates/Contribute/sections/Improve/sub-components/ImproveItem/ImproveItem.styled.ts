import styled from "styled-components";
import { device } from "@src/utils/device";
import { IImproveItem } from "./ImproveItem.types";
import { Link } from "@src/components/ui/Link";

const StyledImproveItem = styled.div<{
  $icon: IImproveItem["icon"]["url"];
  $positionX?: IImproveItem["icon"]["positionX"];
  $mobilePositionX?: IImproveItem["icon"]["mobilePositionX"];
}>`
  display: grid;
  grid-template-columns: 130px auto;
  align-self: center;
  gap: 24px;

  &::before {
    content: "";
    display: block;
    width: 130px;
    height: 130px;
    background-image: ${(props) => `url(${props.$icon})`};
    background-repeat: no-repeat;
    background-size: auto 130px;
    background-position-x: ${(props) => props.$positionX};
    background-position-y: center;

    @media ${device.mobile} {
      width: 87px;
      height: 87px;
      background-size: auto 87px;
      background-position-x: ${(props) => props.$mobilePositionX};
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: initial;
    justify-items: center;
    gap: 8px;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 0;
  }
`;

const StyledImproveContent = styled.div`
  display: grid;
  align-self: center;
  justify-items: start;
  gap: 16px;

  @media ${device.tabletS} {
    justify-items: initial;
  }
`;

const StyledImproveLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export { StyledImproveItem, StyledImproveContent, StyledImproveLink };
