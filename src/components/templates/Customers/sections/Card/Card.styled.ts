import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";

const StyledCardList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobileS} {
    gap: 16px;
  }
`;

const StyledCardItem = styled(Link)<{
  $showMore: boolean;
}>`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out, box-shadow 0.3s ease, display 0s linear 0.5s;
  transition-behavior: allow-discrete;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    & > h4 {
      color: #FF6F3D;
    }
  }

  @media (min-width: 593px) {
    &:nth-child(n + 9) {
      display: ${(props) => (props.$showMore ? "none" : "flex")};
      opacity: ${(props) => (props.$showMore ? "0" : "1")};

      @starting-style {
        opacity: 0;
      }
    }
  }

  @media ${device.mobile} {
    &:nth-child(n + 7) {
      display: ${(props) => (props.$showMore ? "none" : "flex")};
      opacity: ${(props) => (props.$showMore ? "0" : "1")};

      @starting-style {
        opacity: 0;
      }
    }
  }
`;

const StyledCardImg = styled.div<{
  $imgUrl: string;
}>`
  display: block;
  padding-bottom: 50.287%;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledCardHeading = styled(Heading)`
  padding: 32px 32px 36px;
  transition-duration: 300ms;

  @media ${device.mobile} {
    padding: 25px 20px 36px;
  }
`;

const StyledCardButton = styled(Button)`
  display: block;
  margin: 48px auto 0;
`;

export { StyledCardList, StyledCardItem, StyledCardImg, StyledCardHeading, StyledCardButton };