import styled from "styled-components";
import { IBlogCard } from "./BlogCard.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledBlogCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 544px;

  @media ${device.tablet} {
    align-items: initial;
    flex-direction: column;
  }

  @media ${device.tabletS} {
    align-items: center;
    flex-direction: initial;
    max-width: 100%;
  }

  @media ${device.mobile} {
    align-items: initial;
    flex-direction: column;
  }
`;

const StyledBlogCardLink = styled(Link)`
  margin-right: 32px;

  @media ${device.tablet} {
    margin-right: initial;
    margin-bottom: 32px;
  }

  @media ${device.tabletS} {
    margin-right: 32px;
    margin-bottom: initial;
  }

  @media ${device.mobile} {
    margin-right: initial;
    margin-bottom: 16px;
  }
`;

const StyledBlogCardImg = styled.div<{
  $imgUrl: IBlogCard["imgUrl"];
}>`
  width: 256px;
  min-width: 256px;
  height: 129px;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export { StyledBlogCard, StyledBlogCardLink, StyledBlogCardImg };
