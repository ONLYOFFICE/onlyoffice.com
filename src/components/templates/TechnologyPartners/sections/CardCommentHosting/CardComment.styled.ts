import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";


const StyledCardCommentWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
  margin: 0 auto;
  max-width: 1120px;
  position: relative;
  text-align: center;

  &::before {
    background-image: url("/images/templates/technology-partners/cardcomment/quotes.svg");
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 161px;
    left: calc(50% - 97px);
    position: absolute;
    top: 56px;
    width: 196px;

    @media ${device.tablet} {
      background-size: 154px 160px;
    }

    @media ${device.mobile} {
      background-size: 130px auto;
      left: calc(50% - 65px);
      top: 16px;
    }
  }
`;

const StyledCardCommentContent = styled.div`
  margin: 0 auto;
  padding: 136px 0 56px;
  position: relative;
  max-width: 736px;
  width: 100%;

  @media ${device.tablet} {
    padding-left: 56px;
    padding-right: 56px;
    max-width: none;
  }

  @media ${device.mobile} {
    padding: 56px 16px 16px;
  }
`;

const StyledCardCommentHeading = styled(Text)`
  font-style: italic;
  font-size: 24px;
  line-height: 1.6em;

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const StyledText = styled(Text)`
  font-size: 13px;
  line-height: 1.6em;
  margin: 16px 0;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export {
  StyledCardCommentWrapper,
  StyledCardCommentContent,
  StyledCardCommentHeading,
  StyledLink,
  StyledText,
};
