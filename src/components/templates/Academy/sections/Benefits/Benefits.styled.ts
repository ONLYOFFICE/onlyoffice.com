import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const BenefitsWrapper = styled(Section)`
  border-bottom: 1px solid #e2e2e2;
`;

const BenefitsIntro = styled.div`
  text-align: center;
  margin: 0 auto 0px;
  max-width: 928px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 0 56px;

  @media ${device.mobile} {
    padding: 0 0 32px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 32px;

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    grid-column: span 2;
  }
  & > :nth-child(4),
  & > :nth-child(5) {
    grid-column: span 3;
  }

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(1),
    & > :nth-child(2) {
      grid-column: span 1;
    }
    & > :nth-child(3),
    & > :nth-child(4) {
      grid-column: span 1;
    }
    & > :nth-child(5) {
      grid-column: span 2;
    }
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;

    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5) {
      grid-column: span 1;
    }
  }
`;

const BenefitCard = styled.div`
  grid-template-columns: auto 64px;
  border: 1px solid #e2e2e2;
  align-items: center;
  border-radius: 6px;
  background-color: #f9f9f9;
  display: grid;
  padding: 32px;
  gap: 16px;
  text-align: left;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const BenefitText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BenefitIcon = styled.div<{ $position: number }>`
  background-image: url(/images/templates/academy/benefits/icons.svg);
  background-position: 0 ${(props) => props.$position}px;
  background-repeat: no-repeat;
  background-size: 64px auto;
  width: 64px;
  height: 64px;
`;

export {
  BenefitsWrapper,
  BenefitsIntro,
  BenefitsGrid,
  BenefitCard,
  BenefitText,
  BenefitIcon,
};
