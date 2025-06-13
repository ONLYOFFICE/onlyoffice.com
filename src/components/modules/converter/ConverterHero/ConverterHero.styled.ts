import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const StyledConverterHeroSection = styled(Section)`
  background-color: rgba(189, 236, 255, 0.32);
`;

const StyledConverterHeroContainer = styled(Container)`
  position: relative;

  &::before,
  &::after {
    content: "";
    background-image: url("/images/modules/converter/fs_left_right.svg");
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    height: 460px;
    left: -380px;
    width: 332px;
  }

  &::after {
    background-position-x: right;
    height: 480px;
    right: -352px;
    width: 305px;
  }
`;

const StyledConverterHeroWrapper = styled.div``;

const StyledConverterHeroHeading = styled(Heading)`
  max-width: 736px;
  margin: 0 auto 56px;
  text-align: center;
`;

const StyledConverterHeroConverterBlock = styled.div`
  max-width: 736px;
  margin: 0 auto 72px;
`;

export {
  StyledConverterHeroSection,
  StyledConverterHeroContainer,
  StyledConverterHeroWrapper,
  StyledConverterHeroHeading,
  StyledConverterHeroConverterBlock,
};
