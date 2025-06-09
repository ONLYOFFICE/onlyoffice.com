import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledCardItemHeading = styled(Heading)`
  margin-bottom: 16px;
  transition-duration: 300ms;
`;

const StyledCardItemImg = styled.div<{
  $image: string;
}>`
  width: 55px;
  height: 55px;
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: grayscale(1);
  transition-duration: 300ms;
`;

const StyledCardItemLink = styled(Link)`
  position: absolute;
  top: -32px;
  left: 0;
  padding-left: 32px;
  visibility: hidden;
  opacity: 0;
  transition-duration: 300ms;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: transparent;
    background-image: url("/images/icons/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition-duration: 300ms;
  }
`;

const StyledCardItem = styled.li`
  width: 100%;
  max-width: 544px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 7px 25px rgba(0,0,0,0.1);
  transition-duration: 300ms;
  padding: 32px 32px 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);

    ${StyledCardItemHeading} {
      color: #ff6f3d;
    }

    ${StyledCardItemImg} {
      filter: grayscale(0);
    }

    ${StyledCardItemLink} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledCardItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const StyledCardItemContent = styled.div`
  min-height: 280px;
  padding-bottom: 42px;
  flex-grow: 1;
`;

const StyledCardItemBottom = styled.div`
  display: flex;
  align-items: center;
  height: 118px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  position: relative;
  gap: 16px;
`;

const StyledCardItemSubtitle = styled(Heading)`
  font-weight: 400;
`;

export {
  StyledCardItem,
  StyledCardItemTop,
  StyledCardItemContent,
  StyledCardItemHeading,
  StyledCardItemLink,
  StyledCardItemBottom,
  StyledCardItemImg,
  StyledCardItemSubtitle,
 };