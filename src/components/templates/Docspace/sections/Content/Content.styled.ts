import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { device } from "@src/utils/device";

const StyledSection = styled(Section)`
  background-color: #f8f9f9;
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media ${device.desktop} {
    padding: 0 32px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 1.33em;

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.mobile} {
    font-size: 28px;
  }
`;

const StyledSubHeading = styled(Heading)`
  font-size: 18px;
  text-align: center;
  padding-top: 24px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledSmallHeading = styled(StyledHeading)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.33em;
  padding: 8px 16px;
  width: max-content;
  background: #ffffff;
  margin: auto;
  margin-top: 24px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 56px 0px 0;

  @media ${device.mobile} {
    padding: 32px 0px 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 56px;

  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

export {
  StyledContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSmallHeading,
  StyledCardContainer,
  StyledSection,
  StyledButton,
};
