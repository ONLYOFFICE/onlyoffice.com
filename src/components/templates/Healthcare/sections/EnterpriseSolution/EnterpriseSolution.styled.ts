import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledESSection = styled(Section)`
  position: relative;
`;

const StyledBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(/images/templates/healthcare/enterprise-solution/bg.png);
  background-repeat: no-repeat;
  background-position: 61% -270px;
  width: 100%;
  height: 100%;
  
  @media ${device.mobile} {
    background-image: none
  }
`;

const StyledESContainer = styled(Container)`
  img {
    margin-bottom: -36px;
    margin-left: -44px;

    @media ${device.mobile} {
      height: 131px;
      margin-bottom: -26px;
      margin-left: -28px;
      width: 164px;
    }
  }
`;

const StyledESTop = styled.div`
  text-align: center;
`;

const StyledESHeading = styled(Heading)`
  color: #FFFFFF;

  &.features-subheader {
    font-weight: 400;
    margin: 16px 0 32px;
  }

  @media ${device.mobile} {
    letter-spacing: -0.01em;
    margin: 24px 0 16px;
  }
`;

const StyledHeroList = styled.ul`
  color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5em;
  margin: 0 auto;
  max-width: 860px;
  row-gap: 12px;

  @media ${device.tabletS} {
    max-width: 688px;
  }

  @media ${device.mobile} {
    display: block;
    font-size: 13px;
    text-align: center;
  }
`;

const StyledHeroListItem = styled.li`
  display: inline-block;
  margin-right: 12px;
  padding-left: 20px;
  position: relative;

  @media ${device.mobile} {
    display: inline;
    margin-right: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 4px;
    width: 6px;
    height: 6px;
    background: #FFFFFF;
    transform: rotate(45deg) translateY(-50%);

    @media ${device.mobile} {
      top: 8px;
    }
  }
`;

export {
  StyledESSection,
  StyledBgImage,
  StyledESContainer,
  StyledESTop,
  StyledESHeading,
  StyledHeroList,
  StyledHeroListItem,
};
