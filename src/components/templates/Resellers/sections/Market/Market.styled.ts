import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledMarketWrapper = styled.div`
  margin: 0 auto 88px;
  max-width: 833px;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 48px;
  }
`;

const StyledMarketHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tabletS} {
    margin-bottom: 48px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledMarketSubHeading = styled(Heading)`
  margin-bottom: 12px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledMarketText = styled(Text)`
  margin-bottom: 48px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledMarketImage = styled.div`
  margin: 0 auto;
  width: 420px;
  height: 204px;
  background-image: url("/images/templates/resellers/market/promoting.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 230px;
    height: 169px;
    background-image: url("/images/templates/resellers/market/promoting_mob.svg");
  }
`;

const StyledMarketLangugesWrapper = styled.div`
  margin: 0 auto 56px;
  max-width: 547px;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledMarketLangugesText = styled(Text)`
  margin: 0 auto;
  max-width: 547px;
  text-align: center;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledMarketLanguagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 16px 44px;
  margin-bottom: 56px;

  @media ${device.tabletS} {
    gap: 16px;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 48px;
  }
`;

const StyledMarketLanguagesItem = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  min-height: 24px;

  &::before {
    content: "";
    display: inline-flex;
    margin-right: 24px;
    width: 30px;
    min-width: 30px;
    height: 24px;
    background-image: url("/images/templates/resellers/market/flags.svg");
    background-repeat: no-repeat;

    @media ${device.tabletS} {
      margin-right: 16px;
    }

    @media ${device.mobile} {
      width: 26px;
      height: 20px;
      background-size: auto 155px;
    }
  }

  &.german::before {
    background-position-x: -90px;

    @media ${device.mobile} {
      background-position-x: -76px;
    }
  }

  &.latvian::before {
    background-position-x: -182px;

    @media ${device.mobile} {
      background-position-x: -154px;
    }
  }

  &.portuguese-portugal::before {
    background-position-x: -271px;

    @media ${device.mobile} {
      background-position-x: -229px;
    }
  }

  &.czech::before {
    background-position-y: -40px;

    @media ${device.mobile} {
      background-position-y: -34px;
    }
  }

  &.finnish::before {
    background-position-x: -90px;
    background-position-y: -40px;

    @media ${device.mobile} {
      background-position-x: -76px;
      background-position-y: -34px;
    }
  }

  &.russian::before {
    background-position-x: -182px;
    background-position-y: -40px;

    @media ${device.mobile} {
      background-position-x: -154px;
      background-position-y: -34px;
    }
  }

  &.chinese-traditional::before {
    background-position-x: -271px;
    background-position-y: -80px;

    @media ${device.mobile} {
      background-position-x: -229px;
      background-position-y: -67px;
    }
  }

  &.slovak::before {
    background-position-y: -80px;

    @media ${device.mobile} {
      background-position-y: -67px;
    }
  }

  &.spanish::before {
    background-position-x: -90px;
    background-position-y: -80px;

    @media ${device.mobile} {
      background-position-x: -76px;
      background-position-y: -67px;
    }
  }

  &.chinese-simplified::before {
    background-position-x: -182px;
    background-position-y: -80px;

    @media ${device.mobile} {
      background-position-x: -154px;
      background-position-y: -67px;
    }
  }

  &.basque-basque::before {
    background-position-x: -271px;
    background-position-y: -40px;

    @media ${device.mobile} {
      background-position-x: -229px;
      background-position-y: -34px;
    }
  }

  &.english::before {
    background-position-y: -118px;

    @media ${device.mobile} {
      background-position-y: -100px;
    }
  }

  &.french::before {
    background-position-x: -90px;
    background-position-y: -118px;

    @media ${device.mobile} {
      background-position-x: -76px;
      background-position-y: -100px;
    }
  }

  &.portuguese-brazilian::before {
    background-position-x: -182px;
    background-position-y: -118px;

    @media ${device.mobile} {
      background-position-x: -154px;
      background-position-y: -100px;
    }
  }

  &.malaysia::before {
    background-position-x: -271px;
    background-position-y: -118px;

    @media ${device.mobile} {
      background-position-x: -229px;
      background-position-y: -100px;
    }
  }

  &.bulgarian::before {
    background-position-y: -159px;

    @media ${device.mobile} {
      background-position-y: -135px;
    }
  }

  &.italian::before {
    background-position-x: -90px;
    background-position-y: -159px;

    @media ${device.mobile} {
      background-position-x: -76px;
      background-position-y: -135px;
    }
  }

  &.turkish::before {
    background-position-x: -182px;
    background-position-y: -159px;

    @media ${device.mobile} {
      background-position-x: -154px;
      background-position-y: -135px;
    }
  }

  &.armenian::before {
    background-position-x: -271px;
    background-position-y: -159px;

    @media ${device.mobile} {
      background-position-x: -229px;
      background-position-y: -135px;
    }
  }

  @media ${device.tabletS} {
    line-height: 1;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledMarketWrapper,
  StyledMarketHeading,
  StyledMarketSubHeading,
  StyledMarketText,
  StyledMarketImage,
  StyledMarketLangugesWrapper,
  StyledMarketLangugesText,
  StyledMarketLanguagesList,
  StyledMarketLanguagesItem,
};
