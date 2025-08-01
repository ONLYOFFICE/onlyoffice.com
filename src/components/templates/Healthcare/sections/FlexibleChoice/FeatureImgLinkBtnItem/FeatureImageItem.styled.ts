import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { ContentImage } from "@src/components/widgets/ContentImage";

const StyledILBContentImage = styled(ContentImage)`
  justify-content: space-between;

  & > div:nth-child(2) div {
    background-size: auto;
  }

  @media ${device.tablet} {
    &.fc-block > div {
      margin-top: 0;
    }
    
    & > div:nth-child(2) div {
      padding-bottom: 504px;
    }
  }

  @media ${device.tablet} {
    & > div:nth-child(2) div {
      background-size: contain;
      padding-bottom: 100%;
    }
  }
`;

const StyledImgLinkBtnItemContent = styled.div`
  p {
    font-size: 16px;
    line-height: 1.5em;
    margin: 16px 0;
  }

  @media ${device.mobile} {
    p {
      font-size: 13px;
    }
  }
`;

const StyledImgLinkBtnkBox = styled.div`
  @media ${device.tablet} {
    margin-bottom: 32px;
  }
`;

const StyledImgLinkBtnItemText = styled.div`
  font-size: 16px;
  line-height: 24px;

  ul {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
    
    ul {
      margin-bottom: 24px;
    }
  }
`;

const StyledFeatureImageItemLink = styled(Link)`
  margin-right: 32px;

  @media ${device.mobile} {
    display: block;
    font-size: 13px;
    line-height: 1.6em;
    margin-bottom: 20px;
  }
`;

export {
  StyledILBContentImage,
  StyledImgLinkBtnItemContent,
  StyledImgLinkBtnItemText,
  StyledImgLinkBtnkBox,
  StyledFeatureImageItemLink,
};
