import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroButton = styled(Button)`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: initial;
  text-transform: initial;

  @media ${device.mobile} {
    white-space: nowrap;
  }
`;

const StyledHeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 48px;

  ${StyledHeroButton} {
    margin-bottom: 8px;

    &:not(:last-child) {
      margin-right: 8px;
    }

    @media ${device.mobile} {
      margin-bottom: initial;
    }
  }

  @media ${device.mobile} {
    flex-wrap: initial;
    overflow-x: auto;
    padding: 0 16px;
    margin: 0 -16px 48px;
  }
`;

const StyledHeroBlock = styled.div`
  scroll-margin-top: 96px;

  &:not(:last-child) {
    margin-bottom: 56px;

    @media ${device.mobile} {
      margin-bottom: 48px;
    }
  }

  @media ${device.tablet} {
    scroll-margin-top: 88px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 72px;
  }
`;

const StyledHeroDescription = styled.div`
  margin-bottom: 32px;
`;

const StyledHeroHeading = styled(Heading)`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const StyledHeroProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
  }
`;

export {
  StyledHeroButtons,
  StyledHeroButton,
  StyledHeroBlock,
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroProducts,
};
