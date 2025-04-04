import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledSection = styled(Section)`
  padding: 0;
  background-color: #f5f5f5;
`;

const StyledContainer = styled(Container)`
  padding: 112px 40px;
  border-top: 1px solid #e2e2e2;

  @media ${device.tabletS} {
    padding: 80px 40px 112px;
  }

  @media ${device.mobile} {
    padding: 48px 16px 48px;
  }
`;

const StyledBlogItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  .blog-card {
    transition: box-shadow 0.2s, hover 0.2s;

    a:hover {
      color: #ff6f3d;
    }

    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }

  @media ${device.tablet} {
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

const StyledLogos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 96px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 39px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StyledLogo = styled(Link)<{ $width: string; $position: string }>`
  display: block;
  width: ${({ $width }) => $width};
  height: 110px;
  background-image: url("/images/templates/resellers/blogs/logos.jpg");
  background-repeat: no-repeat;
  background-position-x: ${({ $position }) => $position};
`;

export {
  StyledSection,
  StyledContainer,
  StyledBlogItems,
  StyledLogos,
  StyledLogo,
};
