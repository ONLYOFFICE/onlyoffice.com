import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSecurityItems = styled.div`
  display: grid;
  row-gap: 56px;
  column-gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tabletS} {
    row-gap: 48px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    row-gap: 34px;
  }
`;

const StyledText = styled(Text)`
  padding: 32px 0 56px;
`;

const SecurityItem = styled.div<{ $icon?: string; $iconPosition?: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:before {
    content: "";
    display: block;
    background-image: ${(props) =>
      props.$icon
        ? `url(${props.$icon})`
        : `url(${getAssetUrl('/images/templates/workspace-enterprise/security/icons-sprite.svg')})`};
    background-repeat: no-repeat;
    background-size: ${(props) => (props.$icon ? "contain" : "auto 64px")};
    background-position: ${(props) =>
      props.$iconPosition ? `${props.$iconPosition}px center` : "center"};
    margin-bottom: 8px;
    height: 64px;
    width: 64px;
  }

  &:first-child {
    grid-column: span 2;
    padding-right: calc(50% + 32px);
    position: relative;
    height: 240px;
    justify-content: center;

    > h4 {
      font-size: 24px;

      @media ${device.tabletS} {
        font-size: 22px;
      }
    }
    &:before {
      position: absolute;
      right: 0;
      top: 0;
      margin-bottom: 0px;
      height: 100%;
      width: 50%;
    }
  }

  @media ${device.mobile} {
    align-items: center;
    > p {
      text-align: center;
    }

    &:before {
      margin-bottom: 0px;
    }

    &:first-child {
      padding-right: 0;
      position: initial;
      height: initial;

      > h4 {
        font-size: 18px;
      }
      &:before {
        height: 157px;
        position: initial;
        width: 100%;
      }
    }
  }
`;

export { StyledSecurityItems, StyledText, SecurityItem };
