import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledQuoteWrapper = styled.div`
  display: grid;
  justify-items: center;
  background-image: url(${getAssetUrl('/images/templates/education/quote/quotes.svg')});
  background-repeat: no-repeat;
  background-size: 196px 160px;
  background-position: center 18px;

  @media ${device.mobile} {
    background-position-y: 8px;
  }
`;

const StyledQuotePartnerLogo = styled.img`
  margin-bottom: 32px;
`;

const StyledQuoteText = styled(Text)`
  max-width: 736px;
  text-align: center;
  font-style: italic;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 16px;

  @media ${device.tabletS} {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 19px;
  }
`;

const StyledQuoteAuthor = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;
  color: #666666;
`;

const StyledQuoteAuthorPosition = styled.span`
  font-size: 12px;
  line-height: 19px;
  color: #aaaaaa;
  text-align: center;
  margin-bottom: 32px;
`;

const StyledQuoteAuthorStory = styled(Link)`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledQuoteWrapper,
  StyledQuotePartnerLogo,
  StyledQuoteText,
  StyledQuoteAuthor,
  StyledQuoteAuthorPosition,
  StyledQuoteAuthorStory,
};
