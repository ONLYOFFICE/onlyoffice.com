import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 352px;
  height: 100%;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledBlogCardImg = styled.div<{ $imgUrl: string }>`
  display: block;
  padding-bottom: 50.287%;
  background-image: ${(props) => `url(${props.$imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledBlogCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledBlogCardWrapper = styled.div`
  flex: 1 1 auto;

  h3 {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardWrapper,
};
