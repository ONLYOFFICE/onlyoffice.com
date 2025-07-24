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
  margin-bottom: 24px;

  @media ${device.mobile} {
    gap: 12px;
  }
`;

const StyledHeroProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
    margin-top: 32px;
  }
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroIcons,
  StyledHeroProducts,
};
