import { device } from "@src/utils/device";
import styled from "styled-components";

export const StyledFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 112px;
  justify-content: center;

  @media ${device.tablet} {
    gap: 72px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

export const StyledFeaturesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media ${device.tabletS} {
    flex-direction: column !important;
    align-items: center;
    gap: 24px;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export const StyledFeatureContent = styled.div`
  max-width: 448px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 24px;

    @media ${device.tabletS} {
      font-size: 20px;
    }

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  a {
    line-height: 1.6em;
  }

  p,
  a {
    font-size: 16px;

    @media ${device.mobile} {
      font-size: 13px;
      line-height: 1.5em;
    }
  }

  @media ${device.tablet} {
    max-width: 300px;
  }

  @media ${device.tabletS} {
    max-width: 100%;
    align-self: start;
  }

  @media ${device.mobile} {
    gap: 8px;
  }
`;

export const StyledFeatureImage = styled.div<{
  $imgUrl: string;
  $imgUrl2x: string;
}>`
  height: 518px;
  max-width: 640px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$imgUrl});

  &.convenient {
    height: 540px;

    @media ${device.tabletS} {
      height: 71vw;
    }

    @media ${device.mobile} {
      height: 80vw;
    }
  }

  &.budget {
    height: 504px;

    @media ${device.tabletS} {
      height: 66vw;
    }

    @media ${device.mobile} {
      height: 75vw;
    }
  }

  @media ${device.tabletS} {
    height: 68vw;
  }
`;

export const StyledFeatureButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
