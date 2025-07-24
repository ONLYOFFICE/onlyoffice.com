import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const HeadWhy = styled(Heading)<{ $src: string }>`
  background-color: #f5f5f5;
  width: 100%;
  margin: 0 0 48px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  gap: 16px;
  align-items: center;

  &:before {
    content: "";
    display: block;
    background-image: url("${(props) => props.$src}");
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
  @media ${device.mobile} {
    padding: 4px 0;
    margin: 0 0 24px;
  }
`;

const BenefitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
  justify-content: start;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const BenefitItem = styled.div`
  max-width: calc(50% - 16px);
  text-align: left;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 24px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 4px;
  }
`;

const Benefit = styled.div`
  padding: 56px 0 0;
  @media ${device.mobile} {
    padding: 24px 0 0;
  }
`;

const BenefitImg = styled.div<{ $src: string }>`
  content: "";
  height: 64px;
  width: 64px;
  background-image: url("${(props) => props.$src}");
  background-repeat: no-repeat;
`;

const BenefitBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 48px 0 0;

  @media ${device.mobile} {
    padding: 24px 0;
  }
`;

export {
  StyledContainer,
  HeadWhy,
  BenefitsWrapper,
  BenefitItem,
  Benefit,
  BenefitImg,
  BenefitBody,
  StyledLink,
};
