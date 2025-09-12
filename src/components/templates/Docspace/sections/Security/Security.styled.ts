import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSection = styled(Section)`
  background-color: #333333;
  background-image: url(${getAssetUrl('/images/templates/docspace/security/bg-shield.svg')});
  background-repeat: no-repeat;
  background-position-x: calc(50% - 360px);
  background-position-y: 50%;
  background-size: 572px auto;
  color: #fff;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 0 32px;
  align-items: center;

  @media ${device.mobile} {
    gap: 40px;
    padding: 0 16px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  gap: 56px 32px;
  flex-wrap: wrap;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const StyledLink = styled(Link)`
  &:after {
    background-image: url(${getAssetUrl('/images/templates/docspace/security/arrow-icon.svg')});
    background-repeat: no-repeat;
    display: inline-block;
    content: "";
    height: 20px;
    margin: 0 0 0 10px;
    position: relative;
    top: 4px;
    width: 20px;
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledCardContainer,
  StyledLink,
};
