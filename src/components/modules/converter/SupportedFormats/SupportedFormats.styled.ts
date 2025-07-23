import styled from "styled-components";
import { device } from "@src/utils/device";
import { ISupportedFormat } from "./SupportedFormats.types";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledSupportedFormats = styled(Section)`
  scroll-margin-top: 72px;

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;

const StyledSupportedFormatsHeading = styled(Heading)`
  margin-bottom: 48px;

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledSupportedFormatsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  @media ${device.tabletS} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledSupportedFormatsItem = styled.div`
  &:nth-child(1) {
    @media ${device.tabletS} {
      flex: 0 1 48%;
      order: 3;
    }

    @media ${device.mobile} {
      flex: initial;
      order: 2;
    }
  }

  &:nth-child(2) {
    @media ${device.tabletS} {
      flex: 0 1 50%;
      order: 1;
    }

    @media ${device.mobile} {
      flex: initial;
    }
  }

  &:nth-child(3) {
    @media ${device.tabletS} {
      flex: 0 1 48%;
      order: 2;
    }

    @media ${device.mobile} {
      flex: initial;
      order: 3;
    }
  }
`;

const StyledSupportedFormatsItemImage = styled.div<{
  $imageUrl: ISupportedFormat["image"]["url"];
  $imagePositionX?: ISupportedFormat["image"]["positionX"];
  $imagePositionY?: ISupportedFormat["image"]["positionY"];
}>`
  margin: 0 auto 24px;
  width: 48px;
  height: 48px;
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-position-x: ${(props) => props.$imagePositionX};
  background-position-y: ${(props) => props.$imagePositionY};
  background-repeat: no-repeat;

  @media ${device.mobile} {
    margin: 0 auto 16px;
  }
`;

const StyledSupportedFormatsItemHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledSupportedFormatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 0 30px;

  @media ${device.tablet} {
    padding: 0;
  }
`;

const StyledSupportedFormatsListItem = styled.li`
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  background-color: #f9f9f9;
`;

export {
  StyledSupportedFormats,
  StyledSupportedFormatsHeading,
  StyledSupportedFormatsItems,
  StyledSupportedFormatsItem,
  StyledSupportedFormatsItemImage,
  StyledSupportedFormatsItemHeading,
  StyledSupportedFormatsList,
  StyledSupportedFormatsListItem,
};
