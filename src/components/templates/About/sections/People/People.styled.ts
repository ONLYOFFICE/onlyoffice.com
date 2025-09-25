import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledPeopleSection = styled(Section)`
  position: relative;
`;

const StyledPeopleWorldBg = styled.div`
  width: 65px;
  height: 55px;
  margin: 0 auto 38px;
  background-image: url(${getAssetUrl('/images/icons/world.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledPeopleHeading = styled(Heading)`
  font-size: 36px;
  line-height: 1.3em;
  margin: 5px 0;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledPeopleLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 30px auto 0;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledPeopleLeafBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${getAssetUrl('/images/templates/about/people/bg-leaf.png')});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

export {
  StyledPeopleSection,
  StyledPeopleWorldBg,
  StyledPeopleHeading,
  StyledPeopleLink,
  StyledPeopleLeafBg,
}