import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroDescription = styled.div`
  margin-bottom: 24px;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 8px;
`;

const StyledHeroIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  gap: 24px;
  margin-bottom: 56px;

  @media ${device.mobile} {
    gap: 12px;
    margin-bottom: 32px;
  }
`;

const StyledHeroProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  &:not(:last-child) {
    margin-bottom: 56px;

    @media ${device.mobile} {
      margin-bottom: 48px;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
  }
`;

const StyledHeroInfoProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${device.mobile} {
    grid-template-columns: initial;
  }
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroIcons,
  StyledHeroProducts,
  StyledHeroInfoProducts,
};
