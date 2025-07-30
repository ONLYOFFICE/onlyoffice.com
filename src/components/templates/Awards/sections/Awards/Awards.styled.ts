import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledAwardItem = styled.div<{ $isLink?: boolean }>`
    cursor: ${(props) => (props.$isLink ? "pointer" : "default")};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 40px;
    margin: 0 auto 32px;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s;
    }

    @media ${device.tablet} {
      flex-direction: column;
    }

    @media ${device.tablet} {
      padding: 16px;
      gap: 10px;
    }
`;

const StyledAwardImage = styled.div<{
  $image: string;
  $isSprite?: boolean;
  $position?: string;
  $size?: string;
  $width?: string;
}>`
  ${(props) =>
    props.$isSprite
      ? `
    width: ${props.$width ?? "136px"};
    height: 170px;
    background-image: url(${props.$image});
    background-repeat: no-repeat;
    background-position: ${props.$position ?? "0 0"};
    background-size: ${props.$size ?? "auto"};
  `
      : `
    img {
      display: block;
      height: auto;
      max-height: 170px;
      max-width: 245px;
      width: ${props.$width ?? "auto"};
    }
  `}
`;

const StyledAwardContent = styled.div`
    padding: 0 0 0 40px;
    border-left: 1px solid #EFEFEF;

    a {
      font-size: 14px;
    }

    @media ${device.tablet} {
      border-left: none;
      padding: 0;
      width: 100%;
    }
`;

const StyledAwardTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    display: block;
    color: #444444;
    letter-spacing: -0.02em;
    line-height: 1.33em;

    @media ${device.mobile} {
      font-size: 16px;
    }
`;

const StyledAwardDescription = styled.div`
    font-size: 14px;
    line-height: 1.6em;
    max-width: 589px;
    padding: 16px 0;
    position: relative;
    color: #666666;

    @media ${device.mobile} {
      font-size: 13px;
      line-height: 1.5em;
    }
`;

const StyledAwardLink = styled.div`
    color: #FF6F3D;
    font-size: 14px;
    line-height: 1.6em;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    @media ${device.mobile} {
      font-size: 13px;
    }
`;

const StyledAwardImageContent = styled.div`
    min-width: 245px;
    min-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { 
  StyledAwardItem,
  StyledAwardImage,
  StyledAwardContent,
  StyledAwardTitle,
  StyledAwardLink,
  StyledAwardDescription,
  StyledAwardImageContent 
};
