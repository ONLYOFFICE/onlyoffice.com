import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const StyledHowToStart = styled(Section)`
  border-top: 1px solid #e2e2e2;
  scroll-margin-top: 72px;

  h2 {
    margin-bottom: 72px;

    @media ${device.tablet} {
      margin-bottom: 56px;
    }

    @media ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;
const StyledHowToStartInfo = styled.div`
  display: grid;
  row-gap: 24px;
  margin-top: 72px;
  justify-items: center;

  @media ${device.tablet} {
    row-gap: 48px;
    margin-top: 48px;
  }

  @media ${device.tabletS} {
    row-gap: 40px;
    margin-top: 40px;
  }

  @media ${device.mobile} {
    row-gap: 0;
    margin-top: 32px;
  }
`;

const StyledHeroHeaderBtns = styled.div`
  a {
    margin-right: 16px;
    background: #0e71eb;
    border-radius: 30px;
    padding: 7px 24px;
    font-weight: 700;

    &:hover {
      background:
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #0e71eb;
    }

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
      width: auto;
    }
  }
`;

const StyledHowToStartText = styled(Text)`
  text-align: center;
`;

export {
  StyledHowToStart,
  StyledHowToStartText,
  StyledHeroHeaderBtns,
  StyledHowToStartInfo,
};
