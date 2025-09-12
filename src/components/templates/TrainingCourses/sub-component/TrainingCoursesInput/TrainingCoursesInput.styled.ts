import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledTrainingCoursesInputSection = styled(Section)`
  padding: 16px 0 0 0;
  position: sticky;
  top: 54px;
  z-index: 1;

  @media ${device.tablet} {
    top: 32px;
  }

  @media ${device.tabletS} {
    padding: 48px 0 0 0;
    top: 8px;
  }

  @media ${device.mobile} {
    padding: 24px 0 0 0;
    top: 16px;
  }
`;

const StyledTrainingCoursesInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;

  @media ${device.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

const StyledTrainingCoursesInputLeft = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const StyledTrainingCoursesInputSubtitle = styled(Heading)`
  padding-right: 8px;
  border-right: 1px solid #ccc;

  @media ${device.mobile} {
    margin: 16px 0 12px;
    padding-right: 0;
    border-right: none;
  }
`;

const StyledTrainingCoursesInputRight = styled.div`
  position: relative;
  flex-grow: 1;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledTrainingCoursesInput = styled(Input)`
  background-color: transparent;
  border: none;

  path {
    fill: #aaa;
  }
`;

const StyledTrainingCoursesInputBtnWrapper = styled.div`
  position: relative;
`;

const StyledTrainingCoursesInputClearBtn = styled.div`
  width: 24px;
  height: 24px;
  box-sizing: content-box;
  background-image: url(${getAssetUrl('/images/icons/cross-gray.svg')});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export {
  StyledTrainingCoursesInputSection,
  StyledTrainingCoursesInputWrapper,
  StyledTrainingCoursesInputLeft,
  StyledTrainingCoursesInputSubtitle,
  StyledTrainingCoursesInputRight,
  StyledTrainingCoursesInput,
  StyledTrainingCoursesInputBtnWrapper,
  StyledTrainingCoursesInputClearBtn
};