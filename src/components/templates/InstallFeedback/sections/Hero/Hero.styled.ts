import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { StyledQuestionHeading } from "./sub-components/QuestionBlock/QuestionBlock.styled";
import { LoaderButton } from "@src/components/ui/LoaderButton";

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

export {
  StyledHeroHeading,
  StyledHeroForm,
  StyledHeroInputTextBlock,
  StyledHeroQuestionHeading,
  StyledHeroInputText,
  StyledHeroTextAreaBlock,
  StyledHeroTextArea,
  StyledHeroLoaderButton,
}