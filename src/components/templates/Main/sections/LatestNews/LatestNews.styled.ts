import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledLatestNewsHeading = styled(Heading)`
  margin: 0 auto 60px;
  max-width: 618px;

  @media ${device.tablet} {
    margin: 0 auto 56px;
  }

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledLatestNewsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  @media ${device.tablet} {
    padding: 0 40px;
    margin: 0 -40px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 40px;
    padding: 0;
    margin: 0;
    overflow-x: initial;
  }
`;

const StyledLatestNewsItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.tablet} {
    min-width: 288px;
    max-width: 288px;
  }

  @media ${device.mobile} {
    min-height: 100%;
    max-width: 100%;
  }
`;

const StyledLatestNewsItemHeading = styled(Heading)`
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  a {
    position: relative;
    padding-right: 28px;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 24px;
      height: 24px;
      background-image: url(${getAssetUrl('/images/icons/chevron-right-orange.svg')});
      background-repeat: no-repeat;
      background-size: contain;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
`;

const StyledLatestNewsCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
  background-color: #ffffff;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

  > div {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media ${device.tablet} {
    padding: 16px;
  }
`;

export {
  StyledLatestNewsHeading,
  StyledLatestNewsItems,
  StyledLatestNewsItem,
  StyledLatestNewsItemHeading,
  StyledLatestNewsCards,
};
