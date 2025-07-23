import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";

const StyledSection = styled(Section)`
  text-align: center;
  background-image: url("images/templates/desktop/featured/wave.svg");
  background-repeat: repeat-x;
  background-position: center bottom;
  background-size: auto;
`;

const StyledTitle = styled(Heading)`
  font-size: 24px;
  line-height: 1.33em;
  margin-bottom: 52px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const StyledBadgeRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 0 128px;
  @media ${device.tablet} {
    gap: 16px;
  }
  @media ${device.mobile} {
    padding: 0 0 48px;
  }
`;

const StyledBadge = styled(Link)<{ $image: string, $positionX?: string }>`
  aspect-ratio: 140 / 130;
  background-image: url("${(props) => props.$image}");
  background-position: ${(props) => props.$positionX ? props.$positionX : "center"} 0;
  background-size: ${(props) => props.$positionX ? "4150%" : "contain"};
  background-repeat: no-repeat;
  width: 140px;

  @media ${device.tabletS} {
    width: calc(15vw - 16px);
  }

  @media ${device.mobile} {
    width: calc(25vw - 16px);
  }
`;

export { StyledSection, StyledTitle, StyledBadgeRow, StyledBadge };
