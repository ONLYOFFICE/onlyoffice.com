import { StyledHero } from "./../../../OfficeForSuiteCRM/sections/Hero/Hero.styled";
import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroWrapper = styled.div`
  display: flex;
`;

const StyledHeroHeading = styled(Heading)`
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 189px;
    height: 155px;
    left: -100px;
    top: -30px;
    background-image: url("/images/templates/office-for-ios/hero/heading.svg");
    background-repeat: no-repeat;
  }
`;

export { StyledHeroHeading };
