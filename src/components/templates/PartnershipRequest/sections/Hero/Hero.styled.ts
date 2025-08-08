import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroDescription = styled.div`
  margin-bottom: 24px;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 8px;
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
};
