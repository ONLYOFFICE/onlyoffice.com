import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCollaborationsFeaturesWrapper = styled.div`
  display: grid;
  gap: 224px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  @media ${device.mobile} {
    gap: 50px;
  }
`;

const StyledCollaborationsFeatures = styled.div`
  display: grid;
  grid-template-columns: 620px auto;
  gap: 50px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    grid-template-columns: auto 620px;
  }

  @media ${device.tablet} {
    &:nth-child(even) {
      grid-template-columns: 1fr;
    }
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledCollaborationsFeaturesImage = styled.div<{
  $isEven: boolean;
}>`
  max-width: 620px;
  width: 100%;
  order: ${({ $isEven }) => ($isEven ? 2 : 1)};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    > span {
      opacity: 1;
    }

    @media ${device.tablet} {
      box-shadow: none;
      cursor: default;
    }
  }

  @media ${device.tablet} {
    justify-self: center;
    pointer-events: none;
  }

  @media ${device.tablet} {
    justify-self: center;
    order: 1;
  }
`;

const StyledCollaborationsFeaturesImageOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  font-size: 24px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledCollaborationsFeaturesContent = styled.div<{ $isEven: boolean }>`
  display: grid;
  gap: 16px;
  order: ${({ $isEven }) => ($isEven ? 1 : 2)};

  @media ${device.tablet} {
    order: 2;
  }
`;

export {
  StyledCollaborationsFeaturesWrapper,
  StyledCollaborationsFeatures,
  StyledCollaborationsFeaturesImage,
  StyledCollaborationsFeaturesImageOverlay,
  StyledCollaborationsFeaturesContent,
};
