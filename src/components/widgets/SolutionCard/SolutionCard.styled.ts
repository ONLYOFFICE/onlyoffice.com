import styled from "styled-components";
import { ISolutionCard } from "./SolutionCard.types";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledSolutionCard = styled.div<{
  $large?: ISolutionCard["large"];
}>`
  width: 100%;
  max-width: ${(props) => (props.$large ? "544px" : "352px")};
  text-align: center;

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const StyledSolutionCardImg = styled(Link)<{
  $large?: ISolutionCard["large"];
}>`
  border-radius: 6px;
  padding-bottom: ${(props) => (props.$large ? "49.634%" : "80.267%")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f3f4f4;

  @media ${device.tabletS} {
    padding-bottom: initial;
    height: ${(props) => (props.$large ? "270px" : "240px")};
  }

  @media ${device.mobile} {
    padding-bottom: initial;
    height: ${(props) => (props.$large ? "143px" : "240px")};
  }
`;

const StyledSolutionCardHeading = styled(Heading)`
  font-size: 22px;
  line-height: 30px;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledSolutionCardBody = styled.div`
  display: grid;
  row-gap: 16px;
  padding: 32px 16px;

  @media ${device.mobile} {
    row-gap: 12px;
    padding: 24px 12px;
  }
`;

const StyledSolutionCardText = styled.div`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledSolutionCardCustomLinks = styled(Text)`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export {
  StyledSolutionCard,
  StyledSolutionCardImg,
  StyledSolutionCardHeading,
  StyledSolutionCardBody,
  StyledSolutionCardText,
  StyledSolutionCardCustomLinks,
};
