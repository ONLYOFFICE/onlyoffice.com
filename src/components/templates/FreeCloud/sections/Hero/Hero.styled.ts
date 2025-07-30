import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledHeroFormWrapper = styled.div`
  width: 736px;
  padding: 56px 96px 88px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  text-align: center;
`;

const StyledHeroStep = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledHeroStepNumber = styled(Text)`
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  vertical-align: bottom;
  opacity: 0.2;
  position: relative;
  left: 10px;
`;

const StyledHeroStepText = styled(Text)`
  margin-bottom: 16px;
`;

const StyledHeroStepSubText = styled(Text)`
  margin-bottom: 56px;
`;

const StyledHeroStepSecond = styled(Text)`
  margin-bottom: 24px;
`;

const StyledHeroForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: left;
`;

const StyledHeroFormNameWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export {
  StyledHeroHeading,
  StyledHeroFormWrapper,
  StyledHeroStep,
  StyledHeroStepNumber,
  StyledHeroStepText,
  StyledHeroStepSubText,
  StyledHeroStepSecond,
  StyledHeroForm,
  StyledHeroFormNameWrapper
};