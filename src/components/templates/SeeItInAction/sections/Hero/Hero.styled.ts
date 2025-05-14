import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledHeroText = styled(Text)`
  /* margin-bottom: 24px; */
`;

export { StyledHeroHeading, StyledHeroText };
