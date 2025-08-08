import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledScreenshotsBlock = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const StyledScreenshotsBlockItem = styled(Link)`
  display: block;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  position: relative;
  border: 1px solid #f5f5f5;
  background-color: #fff;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledScreenshotsBlockItemImg = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 224px;
  background-color: #f9f9f9;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-size: auto 224px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledScreenshotsBlockItemBottom = styled.div`
  display: grid;
  gap: 8px;
  padding: 32px;
  justify-items: center;
  text-align: center;
`;

const StyledScreenshotsBlockItemTitle = styled.span`
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  font-weight: bold;
`;

const StyledScreenshotsBlockItemDescription = styled.span`
  font-size: 13px;
  line-height: 160%;
  color: #666666;
`;

const StyledScreenshotsBlockItemFormat = styled.span`
  font-size: 13px;
  line-height: 150%;
  color: #aaaaaa;
`;

export {
  StyledScreenshotsBlock,
  StyledScreenshotsBlockItem,
  StyledScreenshotsBlockItemImg,
  StyledScreenshotsBlockItemBottom,
  StyledScreenshotsBlockItemTitle,
  StyledScreenshotsBlockItemDescription,
  StyledScreenshotsBlockItemFormat,
};
