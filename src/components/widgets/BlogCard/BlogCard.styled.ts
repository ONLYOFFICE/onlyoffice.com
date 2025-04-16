import styled from "styled-components";
import { device } from "@src/utils/device";
import { IBlogCard } from "./BlogCard.types";

const StyledBlogCard = styled.div<{ $isLarge: IBlogCard["isLarge"] }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.$isLarge ? "544px" : "352px")};
  height: 100%;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledBlogCardImg = styled.div<{
  $imgUrl: IBlogCard["imgUrl"];
  $isLarge: IBlogCard["isLarge"];
}>`
  display: block;
  padding-bottom: ${(props) => (props.$isLarge ? "50.368%" : "50.287%")};
  background-image: ${(props) => `url(${props.$imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledBlogCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledBlogCardWrapper = styled.div<{ $isLarge: IBlogCard["isLarge"] }>`
  flex: 1 1 auto;

  h3 {
    &:not(:last-child) {
      margin-bottom: ${(props) => (props.$isLarge ? "16px" : "8px")};
    }

    a {
      display: block;
      transition: color 0.2s;

      &:hover {
        color: #ff6f3d;
      }
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
