import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";

const StyledCollaborateList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 928px;
  width: 100%;
  margin: auto;
  padding: 40px 0 36px;
  gap: 16px;

  @media ${device.tablet} {
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
    padding: 32px 0 72px 0;
    margin: 0;
  }
`;

const StyledCollaborateItem = styled.li<{
  $title: string;
  $image: string;
  $isActive: boolean;
  $comingSoon?: boolean;
  $comingSoonText?: string;
}>`
  width: 100%;
  height: 75px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$image});
  padding: 0;
  cursor: pointer;
  text-align: center;
  list-style: none;
  position: relative;

  @media ${device.tablet} {
    width: 137px;
    min-width: 137px;
    flex: 0 0 137px;
  }

  &::after {
    content: "${(props) => props.$title}";
    width: 100%;
    position: relative;
    top: 80px;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.33;
    letter-spacing: 0.08em;
    color: ${(props) => (props.$isActive ? "#ff6f3d" : "#000000")};
    border-bottom: ${(props) =>
      props.$isActive ? "1px solid #ff6f3d" : "none"};
    white-space: ${({ $title }) => ($title === "Приватные комнаты" ? "nowrap" : "initial")};
  }

  &::before {
    content: "${(props) => (props.$comingSoon ? props.$comingSoonText : "")}";
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 110px;
    font-weight: 500;
    font-size: 13px;
    text-transform: lowercase;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #ff6f3d;
    text-align: center;
  }

  &:hover::after {
    color: #ff6f3d;
    border-bottom: ${(props) =>
      props.$isActive && props.$comingSoon ? "none" : "1px solid #ff6f3d"};
  }
`;

const StyledSliderViewport = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 0 32px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 32px 0;
  }

  @media ${device.mobile} {
    padding: 16px 0;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: unset;
  align-items: center;
  text-align: center;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export {
  StyledCollaborateList,
  StyledCollaborateItem,
  StyledSliderViewport,
  StyledContainer,
};
