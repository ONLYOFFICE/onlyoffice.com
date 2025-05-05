import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledLearnMoreWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const StyledLearnMoreHeading = styled(Heading)`
  max-width: 502px;
  margin: 0 auto 56px;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledBlogCard = styled.div`
  display: grid;
  grid-template-columns: 448px 1fr;
  gap: 32px;
  align-items: center;

  @media ${device.tabletS} {
    grid-template-columns: 328px 1fr;
    align-items: start;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledBlogCardLink = styled(Link)`
  display: inline-block;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 16px;

  @media ${device.mobile} {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 26px;
  }
`;

export {
  StyledLearnMoreWrapper,
  StyledLearnMoreHeading,
  StyledBlogCard,
  StyledBlogCardLink,
};
