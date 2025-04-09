import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledMarketWrapper = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 56px;

    @media ${device.tabletS} {
      margin-bottom: 48px;
    }

    @media ${device.mobile} {
      margin-bottom: 32px;
    }
  }
`;

const StyledMarketSubTitle = styled(Heading)`
  margin-bottom: 12px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledMarketText = styled(Text)`
  max-width: 833px;
  margin: 0 auto;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledMarketImage = styled.div`
  width: 420px;
  height: 204px;
  margin: 48px auto 88px;
  background-image: url("/images/templates/resellers/market/promoting.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.mobile} {
    width: 230px;
    height: 169px;
    margin: 48px auto;
    background-image: url("/images/templates/resellers/market/promoting_mob.svg");
  }
`;

const StyledOOLanguages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 16px;
  text-align: start;
  margin: 56px 0;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin: 48px 0;
  }
`;

const StyledOOLanguage = styled.span<{
  $positionX: string;
  $positionY: string;
  $mobPositionX: string;
  $mobPositionY: string;
}>`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 150%;
  padding-left: 54px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 30px;
    height: 24px;
    background-image: url("/images/templates/resellers/market/flags.svg");
    background-repeat: no-repeat;
    background-position: ${({ $positionX, $positionY }) =>
      `${$positionX} ${$positionY}`};

    @media ${device.mobile} {
      width: 26px;
      height: 20px;
      background-size: auto 155px;

      background-position: ${({ $mobPositionX, $mobPositionY }) =>
        `${$mobPositionX} ${$mobPositionY}`};
    }
  }

  @media ${device.tabletS} {
    padding-left: 46px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    padding-left: 42px;
  }
`;

const StyledOOLanguageText = styled(Text)`
  max-width: 547px;
  margin: 0 auto;
  font-size: 14px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledMarketWrapper,
  StyledMarketSubTitle,
  StyledMarketText,
  StyledMarketImage,
  StyledOOLanguages,
  StyledOOLanguage,
  StyledOOLanguageText,
};
