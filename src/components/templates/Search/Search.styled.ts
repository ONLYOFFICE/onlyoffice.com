import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";

const StyledSearchList = styled.ol`
  padding-left: 15px;
`;

const StyledSearchItem = styled.li`
  padding-left: 5px;
  font-size: 14px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const StyledSearchLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    text-decoration: none;
  }
`;

const StyledSearchMark = styled.mark`
  background-color: #ffea0d;
`;

const StyledSearchNoResults = styled.div`
  margin: 0 auto;
  max-width: 775px;
  text-align: center;
`;

const StyledSearchNoResultsImg = styled.img`
  margin-bottom: 80px;
  max-width: 100%;
  filter: grayscale(100%);
  object-fit: contain;

  @media ${device.tablet} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledSearchNoResultsHeading = styled(Heading)`
  margin-bottom: 60px;

  @media ${device.tablet} {
    margin-bottom: 48px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

export {
  StyledSearchList,
  StyledSearchItem,
  StyledSearchLink,
  StyledSearchMark,
  StyledSearchNoResults,
  StyledSearchNoResultsImg,
  StyledSearchNoResultsHeading,
};
