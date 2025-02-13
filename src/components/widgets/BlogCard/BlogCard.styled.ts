import styled from "styled-components";
import { IBlogCard } from "./BlogCard.types";
import { Link } from "@src/components/ui/Link";

const StyledBlogCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 544px;
`;

const StyledBlogCardLink = styled(Link)`
  margin-right: 32px;
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
