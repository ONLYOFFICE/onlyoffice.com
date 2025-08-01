import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledBenefitsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const StyledBenefitsWrapperLeft = styled.div`
    margin-top: 50px;
`;

const StyledBenefitsWrapperRight = styled.div<{ $BenefitsImgUrl: string }>`
    background-image: url(${({ $BenefitsImgUrl }) => $BenefitsImgUrl});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: block;
    height: 720px;
    width: 635px;

    @media ${device.tablet} {
        margin: auto;
        background-size: contain;
        max-width: 100%;
    }

    @media ${device.mobile} {
        background-size: 100% 100%;
        max-height: 450px;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: 32px;
    margin-bottom: 32px;

    @media ${device.mobile} {
        font-size: 20px;
    }
`;

const BlockText = styled.div`

`;

const StyledText = styled(Text)`
    margin-top: 28px;
    padding: 8px 0 8px 70px;
    position: relative;

    &::before {
        content: "";
        background-image: url("/images/templates/projects-for-android/benefits/projects-icons.svg");
        background-position-x: 0;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        height: 48px;
        left: 0;
        transform: translateY(-50%);
        width: 48px;
    }

    &:nth-child(2)::before {
        background-position-x: -445px;
    }

    &:nth-child(3)::before {
        background-position-x: -510px;
    }

    &:nth-child(4)::before {
        background-position-x: -256px;
    }

    &:nth-child(5)::before {
        background-position-x: -320px;
    }

    &:nth-child(6)::before {
        background-position-x: -384px;
    }
`;

const StyledButton = styled(Button)<{$locale?: string; $HeroImgUrl: string;}>`
  background-color: transparent;
  background-image: url(${({ $HeroImgUrl }) => $HeroImgUrl});
  background-repeat: no-repeat;
  background-position: -12px -12px;
  background-size: 193px auto;
  display: block;
  height: 51px;
  margin-right: 9px;
  margin-top: 35px;
  width: 170px;
${({ $locale }) => $locale === "zh" && `
    background-position: 3px 3px;
    background-size: 165px auto;
  `}
  
  &:hover {
    background-color: transparent;
  }
`;

export {
    StyledBenefitsWrapper,
    StyledBenefitsWrapperLeft,
    StyledBenefitsWrapperRight,
    StyledHeading,
    BlockText,
    StyledText,
    StyledButton
}