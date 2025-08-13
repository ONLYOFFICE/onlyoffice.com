import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroDescription = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledHeroText = styled(Text)`
  color: #666666;
  font-size: 18px;
  line-height: 1.6em;
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroText,
};
