import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledGetAccessSection = styled(Section)`
  background: url("/images/templates/nonprofit-organizations/get-access/bg.png"), linear-gradient(162.82deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);
  background-size: 2210px auto;
  background-position: 50% 70%;
  background-repeat: no-repeat;
`;

const StyledGetAccessIcon = styled.div`
  width: 152px;
  height: 75px;
  background: url("/images/templates/nonprofit-organizations/get-access/icon.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 24px;
`;

const StyledGetAccessHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledGetAccessText = styled (Text)`
  margin-bottom: 40px;
`;

export {
  StyledGetAccessSection,
  StyledGetAccessIcon,
  StyledGetAccessHeading,
  StyledGetAccessText
};