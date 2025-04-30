import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledBlogCardWrapper = styled.div`
  max-width: 952px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;

  @media ${device.tabletS} {
    gap: 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledBlogCardImg = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;

const StyledBlogCardLink = styled(Link)`
  display: inline-block;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 16px;
`;

const StyledBlogCardText = styled(Text)`
  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export {
  StyledBlogCardWrapper,
  StyledBlogCardImg,
  StyledBlogCardLink,
  StyledBlogCardText,
};
