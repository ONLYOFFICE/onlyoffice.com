import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledAwardsSection = styled(Section)`
  margin-top: -195px;
`;

const StyledAwardsContainer = styled(Container)``;

const StyledAwardsImgLink = styled(Link)`
  display: block;
  width: 172px;
  height: 172px;
  margin: 0 auto;
  background-image: url("/images/templates/office-for-ios/awards/award.webp");
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: visible;
`;

const StyledAwardsHeading = styled(Heading)`
  margin-top: 30px;
`;

const StyledAwardsText = styled(Text)`
  margin-top: 20px;
`;

export {
  StyledAwardsSection,
  StyledAwardsContainer,
  StyledAwardsImgLink,
  StyledAwardsHeading,
  StyledAwardsText,
};
