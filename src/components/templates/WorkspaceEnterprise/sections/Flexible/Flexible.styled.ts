import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSection = styled(Section)`
  background-color: #f5f5f5;
  background-image: url(${getAssetUrl('/images/templates/workspace-enterprise/flexible-choice/bg.png')});
  background-repeat: no-repeat;
  background-size: 2623px auto;
  background-position: calc(50% - 207px) 0;
`;

const StyledFlexibleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 788px;
`;

const StyledFlexibleHeading = styled(Heading)`
  &::before {
    content: "";
    background-image: url(${getAssetUrl('/images/templates/workspace-enterprise/flexible-choice/icon.svg')});
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto 24px;
    text-align: center;
    width: 88px;
    height: 54px;
  }
`;

export {
  StyledSection,
  StyledFlexibleContainer,
  StyledFlexibleHeading,
};
