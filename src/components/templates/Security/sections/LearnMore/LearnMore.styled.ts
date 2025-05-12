import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { StyledBlogCardBody, StyledBlogCardImg } from "@src/components/widgets/BlogCard/BlogCard.styled";
import { Section } from "@src/components/ui/Section";

const StyledSection = styled(Section)`
  background: #f9f9f9;
  border-bottom: 1px solid #DEDAD8;
`;

const StyledLearnMoreHeading = styled(Heading)`
  font-size: 32px;
  line-height: 1.33em;
  margin: 0 auto 56px;
  max-width: 1120px;

  @media ${device.tabletS} {
    font-size: 30px;
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin: 0 auto 24px;
  }
`;

const StyledLearnMoreItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  .blog-card ${StyledBlogCardImg} {
    border-radius: 3px 3px 0 0;
  }

  .blog-card ${StyledBlogCardBody} {
    border-radius: 0 0 3px 3px;
    padding: 22px 32px 32px;

    h3 {
      margin-bottom: 16px;
    }

    p {
      line-height: 1.8em;
    }
  }

  .blog-card {
    border-radius: 0 0 3px 3px;

    @media ${device.tabletS} {
      min-width: 328px;
      height: initial;
    }

    @media ${device.mobile} {
      min-width: 240px;

      p, a {
        font-size: 13px;
      }
    }
  }

  @media ${device.tabletS} {
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }
  
  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

export { StyledLearnMoreHeading, StyledLearnMoreItems, StyledSection };
