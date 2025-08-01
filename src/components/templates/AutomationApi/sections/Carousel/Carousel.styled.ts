import styled from "styled-components";
import { device } from "@src/utils/device";

export const StyledCarouselText = styled.div`
  text-align: center;

  p {
    padding: 32px 0;
    font-size: 16px;
    line-height: 150%;
  }

  a {
    display: block;
    margin-top: 32px;
  }

  h1 {
    margin-bottom: 16px;
  }

  .swiper-wrapper {
    > div > div > div {
      padding-top: 11.5%;
      padding-bottom: 59%;
    }
  }

  @media ${device.mobile} {
    h2 {
      font-size: 20px;
      line-height: 133%;
    }

    p {
      font-size: 14px;
      padding: 16px 0;
    }

    a {
      font-size: 14px;
    }
  }
`;
