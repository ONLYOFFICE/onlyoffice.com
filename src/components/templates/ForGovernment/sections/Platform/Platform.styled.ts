import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 600px;
  column-gap: 32px;
  max-width: 1120px;
  padding-top: 112px;
  margin: auto;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  img {
    background-size: contain;
    max-width: 736px;

    @media ${device.tablet} {
      width: 90%;
    }
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
    background-color: #f5f5f5;
    background-image: url("/images/templates/for-government/platform/spd_mobile.svg");
    background-repeat: no-repeat;
    background-position-x: 50%;
    padding: 112px 0 69px;

    > div {
      text-align: center;

      p {
        text-align: center;
      }
    }

    .desktop {
      display: none;
    }
  }
`;

const StyledWrapperDark = styled.div`
  max-width: 1120px;
  height: 390px;
  background-color: #f5f5f5;
  margin: auto;

  @media ${device.desktop} {
    display: flex;
    height: auto;
    padding: 16px;
    align-items: center;
  }

  img {
    background-size: contain;
    max-width: 736px;
    display: inline-block;
    height: 470px;
    position: relative;
    top: -40px;
    width: 470px;

    @media ${device.desktop} {
      display: block;
      width: 50%;
    }
  }

  > div {
    display: inline-block;
    padding: 67px 0;
    vertical-align: top;
    max-width: 600px;

    @media ${device.desktop} {
      display: block;
      width: auto;
      padding: 0;
    }
  }

  @media ${device.desktop} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
    margin: 0 40px 0;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
    background-color: #f5f5f5;
    background-image: url("/images/templates/for-government/platform/hopewell_mobile.svg");
    background-repeat: no-repeat;
    background-position-x: 50%;
    padding: 220px 16px 48px;
    margin: 0 16px 48px;

    > div {
      text-align: center;

      p {
        text-align: center;
      }
    }

    .desktop {
      display: none;
    }
  }
`;

const StyledContent = styled.div`
  grid-template-columns: auto 600px;
  gap: 32px;
  align-items: center;
  position: relative;
  max-width: 600px;

  h3 {
    padding: 0 0 32px;
  }

  p {
    font-size: 14px;
    padding: 0 0 16px;
    line-height: 1.6em;
    text-align: left;
  }

  @media ${device.mobile} {
    padding: 48px 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border: none;
    padding-bottom: 0;
  }

  @media ${device.tablet} {
    text-align: left;

    .featureList {
      padding-left: 32px;

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        left: 0;
        margin-right: 20px;
        position: absolute;
        background: #ff6f3d;
        transform: rotate(45deg) translateY(-50%);
      }
    }
  }
}

@media ${device.tablet} {
  grid-template-columns: 1fr 1fr;
}

@media ${device.tabletS} {
  grid-template-columns: 1fr;
}
`;

const StyledPlatformWrapper = styled.div`
  padding: 200px 40px 0;
  margin: auto;

  @media ${device.tabletS} {
    padding: 108px 40px 0;
  }

  h2 {
    max-width: 1120px;
    margin: auto;
    padding-bottom: 56px;

    @media ${device.tabletS} {
      padding-bottom: 32px;
    }
  }

  p {
    color: #666666;
    font-size: 18px;
    max-width: 800px;
    margin: auto;
    padding: 0 0 24px;
    line-height: 1.6em;

    @media ${device.tabletS} {
      padding-bottom: 32px;
      font-size: 16px;
    }
  }

  img {
    display: table;
    margin: auto;
    max-width: 1120px;
    width: 90vw;
  }

  @media ${device.mobile} {
    background-color: #f5f5f5;
    padding: 56px 16px 72px;

    h2 {
      padding-bottom: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0 0 80px;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 0 0 48px;
  }
`;

export {
  StyledPlatformWrapper,
  StyledWrapperDark,
  StyledWrapper,
  StyledContent,
  StyledButtons,
};
