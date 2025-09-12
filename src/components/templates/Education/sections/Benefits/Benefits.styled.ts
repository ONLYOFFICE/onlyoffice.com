import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled, { keyframes } from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const StyledBenefitsHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 56px;
  font-size: 40px;
  line-height: 54px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledBenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 22px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
  }
`;

const StyledBenefitTitle = styled.button<{ $isActive: boolean }>`
  font-size: 32px;
  line-height: 43px;
  font-weight: 700;
  letter-spacing: -0.02em;
  padding-bottom: 20px;
  color: ${({ $isActive }) => ($isActive ? "#333333" : "#CCCCCC")};
  background-image: ${({ $isActive }) =>
    $isActive
      ? `url(${getAssetUrl('/images/templates/education/benefits/line.svg')})`
      : "none"};
  background-repeat: no-repeat;
  background-position: 0 bottom;
  transition: color 0.2s, background-image 0.2s;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media ${device.tabletS} {
    font-size: 30px;
    line-height: 32px;
    text-align: center;
    background-position-x: center;
  }

  @media ${device.mobile} {
    padding-bottom: 15px;
    background-size: contain;
    max-width: 195px;
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledBenefit = styled.div`
  display: grid;
  animation: ${fadeInRight} 0.2s ease;

  a {
    justify-self: center;
  }
`;

const StyledBenefitContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 56px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StyledBenefitList = styled.ul`
  display: grid;
  gap: 16px;

  @media ${device.mobile} {
    gap: 8px;
  }
`;

const StyledBenefitListItem = styled.li`
  display: flex;
  font-size: 16px;
  line-height: 24px;

  &::before {
    display: inline-flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    content: "⬥";
    color: rgb(255, 111, 61);
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledBenefitImage = styled.img`
  width: 310px;
  height: 324px;

  @media ${device.mobile} {
    width: 206px;
    height: 216px;
    justify-self: center;
    order: -1;
  }
`;

export {
  StyledBenefitsHeading,
  StyledBenefitsWrapper,
  StyledBenefitTitle,
  StyledBenefit,
  StyledBenefitContent,
  StyledBenefitList,
  StyledBenefitListItem,
  StyledBenefitImage,
};
