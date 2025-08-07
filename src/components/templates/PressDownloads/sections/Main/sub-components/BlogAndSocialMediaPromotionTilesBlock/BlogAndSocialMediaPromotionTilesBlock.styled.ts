import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";

const StyledBlogAndMediaCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 40px 0 80px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin-bottom: 48px;
  }
`;

const StyledBlogAndMediaCard = styled(Link)`
  display: block;
  transition: box-shadow 0.3s;
  position: relative;
  border: 1px solid #f5f5f5;
  background-color: #fff;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    @media ${device.mobile} {
      box-shadow: none;
    }
  }

  @media ${device.mobile} {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

const StyledBlogAndMediaCardImage = styled.div<{ $imgUrl: string }>`
  width: 100%;
  padding-bottom: 63%;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: 100% 250px;
  background-position: center;
  background-size: contain;
`;

const StyledBlogAndMediaCardContent = styled.div`
  display: grid;
  gap: 8px;
  justify-items: center;
  padding: 32px;
  text-align: center;

  @media ${device.mobile} {
    padding: 24px 0 0;
    justify-items: start;
    text-align: start;
  }
`;

const StyledBlogAndMediaCardTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
`;

const StyledBlogAndMediaCardFormat = styled.span`
  font-size: 13px;
  line-height: 150%;
  color: #aaaaaa;
`;

const StyledMediaInquiresText = styled.span`
  display: inline-block;
  font-size: 16px;
  line-height: 1.5em;
  color: #333333;
  margin-bottom: 24px;
`;

const StyledBlogAndMediaContent = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledBlogAndMediaContentText = styled(Text)`
  font-size: 13px;
  line-height: 1.5em;
  color: #999999;
`;

export {
  StyledMediaInquiresText,
  StyledBlogAndMediaContent,
  StyledBlogAndMediaCardWrapper,
  StyledBlogAndMediaCard,
  StyledBlogAndMediaCardImage,
  StyledBlogAndMediaCardContent,
  StyledBlogAndMediaCardTitle,
  StyledBlogAndMediaCardFormat,
  StyledBlogAndMediaContentText,
};
