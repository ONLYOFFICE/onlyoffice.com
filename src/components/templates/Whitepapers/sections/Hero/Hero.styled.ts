import styled from "styled-components";
import { Heading } from '@src/components/ui/Heading';
import { Text } from '@src/components/ui/Text';

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledHeroText = styled(Text)`
  max-width: 544px;
  margin: 0 auto;
  padding: 10px 0;
  line-height: 160%;
`;

export { StyledHeroHeading, StyledHeroText };