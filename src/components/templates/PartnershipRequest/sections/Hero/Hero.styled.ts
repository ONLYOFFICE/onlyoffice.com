import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroDescription = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 32px;
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
};
