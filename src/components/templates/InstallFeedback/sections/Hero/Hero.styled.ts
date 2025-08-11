import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { LoaderButton } from "@src/components/ui/LoaderButton";
import { Text } from "@src/components/ui/Text";
import { StyledQuestionHeading } from "./sub-components/QuestionBlock/QuestionBlock.styled";
import { Button } from "@src/components/ui/Button";

const StyledHeroHeading = styled(Heading)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin: 12px 0;
  padding: 10px 0;
`;

const StyledHeroForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledHeroInputTextBlock = styled.div``;

const StyledHeroQuestionHeading = styled(StyledQuestionHeading)``;

const StyledHeroInputText = styled(Input)`
  width: 100%;
  max-width: 432px;
  height: 36px;

  & input {
    padding: 0 16px;
  }
`;

const StyledHeroTextAreaBlock = styled.div``;

const StyledHeroTextArea = styled(TextArea)`
  width: 428px;
  height: 108px;
`;

const StyledHeroLoaderButton = styled(LoaderButton)`
  width: fit-content;
`;

const StyledHeroLoaderButtonWrapper = styled.div`
  position: relative;
`;

const StyledHeroLoaderStatusLoadText = styled(Text)`
  position: absolute;
  top: -20px;
  left: 0;
`;

const StyledHeroPopupStatus = styled.div`
  position: relative;
  padding: 32px;
  box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
`;

const StyledHeroPopupWrapper = styled.div`
  max-width: 544px;
  margin: 0 auto;
`;

const StyledHeroCrossButton = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/icons/close.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const StyledHeroStatusHeading = styled(Heading)`
  margin-bottom: 17px;
`;

const StyledHeroStatusText = styled(Text)`
  margin-bottom: 17px;
`;

const StyledHeroPopupCloseButton = styled(Button)``;

export {
  StyledHeroHeading,
  StyledHeroForm,
  StyledHeroInputTextBlock,
  StyledHeroQuestionHeading,
  StyledHeroInputText,
  StyledHeroTextAreaBlock,
  StyledHeroTextArea,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoaderStatusLoadText,
  StyledHeroLoaderButton,
  StyledHeroPopupStatus,
  StyledHeroPopupWrapper,
  StyledHeroCrossButton,
  StyledHeroStatusHeading,
  StyledHeroStatusText,
  StyledHeroPopupCloseButton,
}