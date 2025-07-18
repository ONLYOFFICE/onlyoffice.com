import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledHero = styled(Section)`
  margin-top: -72px;
  text-align: center;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledDescription = styled(Text)`
  font-size: 16px;
  line-height: 1.6em;
  padding: 24px 0 0;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 1.33em;
  }
`;

const StyledEditionCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 32px;
  padding: 56px 0px;

  @media ${device.desktop} {
    overflow-y: hidden;
    overflow-x: auto;
    justify-content: start;
    padding: 56px 40px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding: 40px 0 32px 40px;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 24px 16px 32px;
  }
`;

const StyledEditionCard = styled.div<{ $positionX: string }>`
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  display: block;
  position: relative;
  padding: 112px 32px 72px;
  min-width: 352px;
  width: 352px;

  @media ${device.tablet} {
    scroll-snap-align: center;
    box-sizing: border-box;
    min-width: 288px;
  }

  @media ${device.mobile} {
    flex: 0 0 90%;
    padding: 88px 16px 62px;
    max-width: 272px;
  }

  &:before {
    background-image: url("/images/icons/editions-icons.svg");
    background-position: ${(props) => props.$positionX};
    content: "";
    display: block;
    height: 72px;
    left: calc(50% - 36px);
    position: absolute;
    top: 20px;
    width: 72px;
  }
`;

const StyledEditionDescription = styled(Text)`
  color: #666666;
  font-size: 14px;
  line-height: 1.6;
  padding-top: 16px;
  text-align: left;

  > span {
    display: block;
    padding: 8px 0;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledEditionLink = styled(Link)`
  font-size: 13px;
  transition: color 0.2s;
  bottom: 32px;
  display: block;
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const StyledCards = styled.div`
  padding-top: 88px;

  @media ${device.mobile} {
    padding-top: 48px;
  }
`;

export {
  StyledHero,
  StyledDescription,
  StyledCards,
  StyledEditionCards,
  StyledEditionCard,
  StyledEditionDescription,
  StyledEditionLink
};
