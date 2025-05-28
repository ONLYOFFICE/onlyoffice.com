import styled from "styled-components";
import { Button } from "@src/components/ui/Button";

const StyledCardList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  & > div {
    flex-direction: column;
    width: 448px;
    background-color: #fff;

    & > a {
      margin-right: 0;

      & > div {
        width: 448px;
        height: 224px;
        background-size: contain;
        background-position: center;
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