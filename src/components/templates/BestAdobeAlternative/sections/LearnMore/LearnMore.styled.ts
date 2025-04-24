import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledLearnMoreWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const StyledLearnMoreHeading = styled(Heading)`
  max-width: 864px;
  margin: 0 auto 96px;

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledBlogCardWrapper = styled.div`
  max-width: 928px;
  margin: 0 auto 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin-bottom: 32px;
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
  StyledLearnMoreWrapper,
  StyledLearnMoreHeading,
  StyledBlogCardWrapper,
  StyledBlogCardImg,
  StyledBlogCardLink,
  StyledBlogCardText,
};
