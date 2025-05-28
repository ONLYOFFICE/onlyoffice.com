import styled from "styled-components";
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
    flex-direction: column;
    width: 448px;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    &:nth-child(n + 9) {
      display: ${(props) => (props.$showMore ? "none" : "block")};
      opacity: ${(props) => (props.$showMore ? "0" : "1")};
      transition-duration: 500ms;
      transition-behavior: allow-discrete;

      @starting-style {
        opacity: 0;
      }
    }

    & > a {
      margin-right: 0;

      & > div {
        width: 448px;
        height: 224px;
        background-size: contain;
        background-position: center;
        background-color: #F9F9F9;
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