import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Tabs } from "@src/components/widgets/Tabs/Tabs";
import { StyledTabsItem } from "@src/components/widgets/Tabs/Tabs.styled";

const StyledTabs = styled(Tabs)<{ $selected: string }>`
  ${StyledTabsItem} {
    font-size: 14px;
    gap: 16px;
    align-items: center;

    @media ${device.mobile} {
    font-size: 12px;
  }

    &::before {
      content: '';
      position: relative;
      width: 18px;
      height: 18px;
      background: url("/images/templates/office-for-zapier/features/features.svg") no-repeat;
      background-size: 456px auto;
    }

    &:nth-child(1)::before { background-position: -15px -15px; }
    &:nth-child(2)::before { background-position: -15px -15px; }

    ${props => props.$selected && css`
      &:nth-child(${props.$selected})::before { background-position: -48px -15px; }
    `}
  }
  padding: 0;

  > div:not(:first-child) {
    padding: 48px 0 0;

    @media ${device.tabletS} {
      padding: 32px 0 0;
    }

    @media ${device.mobile} {
      padding: 24px 0 0;
    }
  }
`;

const StyledDocumentsHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 720px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 48px;

  @media ${device.tablet} {
    row-gap: 40px;
  }

  @media ${device.mobile} {
    row-gap: 32px;
  }
`;

const StyledColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;

  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #333333;
  }

  > div {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;

    h4 {
      font-size: 16px;
    }
  }
`;

const StyledColumn = styled.div`
  > div:not(:first-child) {
    margin-top: 32px;

    @media ${device.tablet} {
      margin-top: 24px;
    }

    @media ${device.mobile} {
      margin-top: 16px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 16px;
    color: #333333;
    font-size: 16px;
    line-height: 1.5;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      background-color: #ff6f3d;
    }

    &:last-child {
      margin-bottom: 0;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
  }
`;

const StyledIcon = styled.div<{ $positionX: number }>`
  background: url("/images/templates/office-for-zapier/features/features.svg")
    ${(props) => props.$positionX}px 0 no-repeat;
  background-size: auto 72px;
  background-position-y: center;
`;


export {
  StyledFeaturesWrapper,
  StyledColumnsContainer,
  StyledColumn,
  StyledDocumentsHeading,
  StyledTabs,
  StyledColumnHeader,
  StyledIcon,
};
