import styled from "styled-components";
import { device } from "@src/utils/device";
import { ICareDataItem } from "./CareData.types";
import { Heading } from "@src/components/ui/Heading";

const StyledCareDataHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledCareDataItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;

const StyledCareDataItemImage = styled.div<{
  $imageUrl: ICareDataItem["image"]["url"];
  $imagePositionX: ICareDataItem["image"]["positionX"];
  $imagePositionY: ICareDataItem["image"]["positionY"];
}>`
  margin: 0 auto 32px;
  width: 64px;
  height: 64px;
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-position-x: ${(props) => props.$imagePositionX};
  background-position-y: ${(props) => props.$imagePositionY};
`;

export { StyledCareDataHeading, StyledCareDataItems, StyledCareDataItemImage };
