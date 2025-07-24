import styled, { css } from "styled-components";
import { device } from "@src/utils/device";

const StyledMakeEditsWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 32px;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 40px;
  }
`;

const StyledMakeEditsImage = styled.div<{
  $imageUrl: string;
  $image2xUrl: string;
}>`
  padding-bottom: 35.447%;
  width: 100%;
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.$image2xUrl &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$image2xUrl});
      }
    `}
`;

export { StyledMakeEditsWrapper, StyledMakeEditsImage };
