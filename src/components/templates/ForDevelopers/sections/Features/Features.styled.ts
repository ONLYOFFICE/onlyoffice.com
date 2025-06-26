import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  > div {
    border-bottom: 1px solid #E2E2E2;
    padding: 112px 0;

    p {
      margin: 0 auto;
      padding: 24px 0 56px;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      max-width: 736px;
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

      &:nth-child(2n) {
        text-align: right;

      .featureList {
        padding-right: 40px;

        &::before {
          content: "";
          width: 6px;
          height: 6px;
          right: 0;
          margin-right: 20px;
          left: auto;
          position: absolute;
          background: #ff6f3d;
          transform: rotate(45deg) translateY(-50%);

          @media ${device.mobile} {
            top: 8px;
          }
        }
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
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledFeatureIconsButton = styled.a<{ isPrimary?: boolean, isLink?: boolean }>`
  padding: 12px 24px;
  font-size: 12px;
  line-height: 26px;
  border-radius: 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;

  @media ${device.mobile} {
    display: block;
    width: 100%;
  }

  color: ${({ isPrimary, isLink }) => (isLink ? "#ff6f3d" : (isPrimary ? "#ffffff" : "#ffffff"))};
  background-color: ${({ isPrimary, isLink }) => (isLink ? "" : (isPrimary ? "#ff6f3d" : "#444444"))};

  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;

export {
  StyledFeaturesContent,
  StyledFeatureIconsButton
};
