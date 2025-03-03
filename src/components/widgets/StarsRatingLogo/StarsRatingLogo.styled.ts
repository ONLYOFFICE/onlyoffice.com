import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledStarsRatingLogo = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 150px auto 50px;
  column-gap: 12px;

  a {
    img {
      object-fit: contain;

      @media ${device.mobile} {
        width: 110px;
      }
    }
  }

  @media ${device.mobile} {
    grid-template-columns: 110px auto 50px;
  }
`;

export { StyledStarsRatingLogo };
