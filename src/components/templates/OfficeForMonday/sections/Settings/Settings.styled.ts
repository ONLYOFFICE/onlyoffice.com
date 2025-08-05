import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSettingsGroup = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 24px;
  padding: 32px 0px;

  @media ${device.tablet} {
    display: block;
  }
`;

const StyledStepNumber = styled.div`
  color: #FF6F3D;
  font-size: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 50%;
  padding: 8px 10px;
  width: 50px;
  height: 50px;
  line-height: 30px;
  margin-bottom: 24px;
  text-align: center;
`;

const StyledStepBlock = styled.div`
  background-color: #F5F6F8;
  border-radius: 9px;
  padding: 24px;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 100%;
    margin-bottom: 24px;
    gap: 24px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 24px;
  }
`;

const StyledStepBlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledStepText = styled.div`
  font-size: 16px;
  line-height: 150%;
  text-align: left;

  span {
    color: #0073EA;
    font-weight: 700;
  }

  i {
    font-weight: 700;
  }

  a {
    color: #FF6F3D;
    text-decoration: underline;
  }
`;

const StyledStepImage = styled.img`
  @media (max-width: 1280px) {
    width: 100%;
  }

  @media ${device.tablet} {
    width: auto;
  }
`;


const StyledNoticeImg = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  background-size: 120px;
  background-position: 72px 92px;
  background-image: url("/images/templates/office-for-monday/settings/union.svg");
`;

const StyledNotice = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  p {
    font-size: 16px;
    text-align: left;
  }

  @media ${device.mobile} {
    p {
      font-size: 14px;
    }
  }
`;

export {
  StyledSettingsGroup,
  StyledStepNumber,
  StyledStepBlock,
  StyledStepBlockText,
  StyledStepText,
  StyledStepImage,
  StyledNotice,
  StyledNoticeImg
};
