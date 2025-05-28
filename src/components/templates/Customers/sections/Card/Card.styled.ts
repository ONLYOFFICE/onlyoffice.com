import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";

const StyledCardList = styled.div<{
  $showMore: boolean;
}>`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  & > div {
    height: 100%;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
    transition: opacity 0.5s ease-in-out, box-shadow 0.3s ease, display 0s linear 0.5s;
    transition-behavior: allow-discrete;

    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    &:nth-child(n + 9) {
      display: ${(props) => (props.$showMore ? "none" : "flex")};
      opacity: ${(props) => (props.$showMore ? "0" : "1")};

      @starting-style {
        opacity: 0;
      }
    }

    & > a {
      margin-right: 0;

      & > div {
        background-size: contain;
        background-position: center;
        background-color: #F9F9F9;

        @media ${device.tablet} {
          margin: 0 auto;
        }
      }
    }

    & > h4 {
      padding: 32px 32px 36px;
    }
  }
`;

const StyledCardButton = styled(Button)`
  display: block;
  margin: 48px auto 0;
`;

export { StyledCardList, StyledCardButton };