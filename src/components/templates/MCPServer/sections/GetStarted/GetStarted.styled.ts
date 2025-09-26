import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSection = styled(Section)`
  background-image: url("/images/templates/mcp-server/background.svg");
  background-position: calc(50% + 220px) 0;
  background-repeat: no-repeat;
  background-size: auto 748px;
  display: flex;
  flex-direction: column;
  gap: 224px;

  @media ${device.tabletS} {
    gap: 160px;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 96px;
  }
`;

const StyledLeftArea = styled.div`
  display: grid;
  gap: 224px 32px;
  grid-template-columns: 544px 1fr;

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    gap: 160px;
  }
  @media ${device.mobile} {
    gap: 96px;
  }
`;

const GetStartedArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HubsArea = styled.div`

  @media ${device.tabletS} {
    margin: 0 auto;
  }
`;

const StyledScrollGif = styled.div<{ $src: string }>`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$src});

  @media ${device.tabletS} {
    display: none;
  }
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;
  padding-top: 16px;

  @media ${device.tabletS} {
    gap: 10px;
    justify-content: center;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledText = styled(Text)`
  padding: 16px 0 0;
`;

const QuestionsImage = styled.div`
  background-image: url("/images/templates/mcp-server/get-started/contact-us.svg");
  width: 215px;
  height: 150px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  margin: 0 auto 32px;

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const HubImg = styled.div<{ $src: string }>`
  aspect-ratio: 2.99;
  background-image: url(${(props) => props.$src});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  width: 100%;

  @media ${device.mobile} {
    min-width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: #ff6f3d;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding-top: 32px;
  max-width: 212px;

  @media ${device.tabletS} {
   margin: 0 auto;
  }

  @media ${device.mobile} {
    padding-top: 16px;
  }
`;

export {
  StyledSection,
  StyledLeftArea,
  GetStartedArea,
  HubsArea,
  StyledScrollGif,
  ButtonsArea,
  StyledText,
  QuestionsImage,
  HubImg,
  StyledLink,
};
