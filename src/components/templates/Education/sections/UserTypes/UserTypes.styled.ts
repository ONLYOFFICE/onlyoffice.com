import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledUserTypesWrapper = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  background: #f5f5f5;
  padding: 64px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #f9f9f9;
    z-index: 0;
    border-right: 1px solid #e2e2e2;

    @media ${device.tablet} {
      width: 100%;
      height: 50%;
      border-right: 0;
      border-bottom: 1px solid #e2e2e2;
    }
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

const StyledUserTypesItems = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const StyledUserType = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 32px;
  display: grid;
  gap: 40px;
  position: relative;
  z-index: 1;
  justify-items: center;

  @media ${device.tablet} {
    max-width: 100%;
    padding: 56px 40px;
  }

  @media ${device.mobile} {
    padding: 48px 16px;
    gap: 32px;
  }
`;

const StyledUserTypeImage = styled.img`
  width: 384px;
  height: 420px;

  @media ${device.mobile} {
    width: 288px;
    height: 316px;
  }
`;

const StyledUserTypeContent = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;
  text-align: center;
`;

const StyledUserTypeHeading = styled(Heading)`
  font-size: 32px;
  line-height: 43px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledUserTypeText = styled(Text)`
  max-width: 440px;

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledUserTypesWrapper,
  StyledUserTypesItems,
  StyledUserType,
  StyledUserTypeImage,
  StyledUserTypeContent,
  StyledUserTypeHeading,
  StyledUserTypeText,
};
