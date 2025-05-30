import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 32px;
  }
`;

const StyledExperienceLeft = styled.div``;

const StyledExperienceHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledExperienceText = styled(Text)`
  margin-bottom: 40px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }
`;

const StyledExperienceSubtitle = styled(Text)`
  position: relative;
`;

const StyledExperienceSubtitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  border-top: 1px solid #666666;
  padding-top: 24px;
  position: relative;
  align-items: center;

  @media ${device.tabletS} {
    padding-top: 12px;
    gap: 8px;
  }

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    background-image: url("/images/icons/wifi-offline.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-shrink: 0;

    @media ${device.mobile} {
      width: 37px;
      height: 37px;
    }
  }
`;

const StyledExperienceRight = styled.div`
  width: 504px;
  height: 290px;
  flex-shrink: 0;
  background-image: url("/images/templates/docspace-enterprise/experience/experience-image.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 288px;
    height: 170px;
  }
`;

export {
  StyledExperienceWrapper,
  StyledExperienceLeft,
  StyledExperienceHeading,
  StyledExperienceText,
  StyledExperienceSubtitle,
  StyledExperienceSubtitleWrapper,
  StyledExperienceRight,
};
