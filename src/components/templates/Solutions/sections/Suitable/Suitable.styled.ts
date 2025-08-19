import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";

const StyledSection = styled(Section)`
  background-image: url("/images/templates/solutions/dark-bg.svg");
  background-repeat: no-repeat;
  background-size: 2443px auto;
  background-position: 72%;
  color: #ffffff;
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 401px 564px;
  gap: 128px;

  @media ${device.desktop} {
    grid-template-columns: 1fr auto;
  }
  @media ${device.tablet} {
    gap: 64px;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const IndustryList = styled.div`
  display: flex;
  gap: 32px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 8px;

    & > div {
      gap: 8px;
    }
  }
`;

const IndustryItem = styled(Link)<{
  $positionX: number;
}>`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  vertical-align: middle;
  padding-left: 52px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 36px;
    height: 36px;
    background-image: url("/images/templates/solutions/icons.svg");
    background-repeat: no-repeat;
    background-size: auto 36px;
    background-position: ${(props) => props.$positionX}px center;
    transform: translateY(-50%);
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export { StyledSection, StyledContainer, IndustryList, IndustryItem };
