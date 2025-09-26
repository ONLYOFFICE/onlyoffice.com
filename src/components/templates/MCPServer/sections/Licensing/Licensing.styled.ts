import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

const StyledSection = styled(Section)`
  border-top: 1px solid #e2e2e2;
  background: #f9f9f9;
  color: #333333;
`;
const StyledImage = styled.div<{ $src: string }>`
  aspect-ratio: 2.36;
  background-image: url(${(props) => props.$src});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 544px;

  @media ${device.tablet} {
    margin: 0 auto;
    min-width: 422px;
  }

  @media ${device.mobile} {
    min-width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  text-align: left;
  width: 100%;

  @media ${device.tabletS} {
    gap: 32px;
  }

  @media ${device.mobile} {
    gap: 24px;
    text-align: center;

    > h2 {
      margin: 0 auto;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  gap: 24px;
`;

export { StyledSection, StyledImage, Left, StyledContainer };
