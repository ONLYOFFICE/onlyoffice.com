import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledWhyOOWorkspaceWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const StyledWhyOOWorkspaceText = styled(Text)`
  margin: 24px 0 56px;

  @media ${device.mobile} {
    margin: 16px 0 24px;
  }
`;

const StyledWhyOOWorkspaceFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.tabletS} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledWhyOOWorkspaceFeatureCard = styled.div<{ $icon: string }>`
  padding-top: 112px;
  display: grid;
  gap: 16px;
  text-align: center;
  justify-items: center;
  position: relative;
  align-content: start;

  &::before {
    content: "";
    width: 96px;
    height: 96px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(${({ $icon }) => $icon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media ${device.mobile} {
      width: 64px;
      height: 64px;
    }
  }

  @media ${device.tabletS} {
    max-width: 328px;
    width: 100%;

    &:last-child {
      max-width: 100%;
    }
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }

  @media ${device.mobile} {
    padding-top: 80px;
  }
`;


export {
  StyledWhyOOWorkspaceWrapper,
  StyledWhyOOWorkspaceText,
  StyledWhyOOWorkspaceFeatures,
  StyledWhyOOWorkspaceFeatureCard,
};
