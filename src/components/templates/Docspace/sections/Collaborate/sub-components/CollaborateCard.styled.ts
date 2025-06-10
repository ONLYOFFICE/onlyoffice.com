import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

const StyledCollaborateCard = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 32px;

  @media ${device.desktop} {
    width: calc(100vw - 96px);
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const StyledCollaborateCardTitle = styled.h3<{ $id: string, $soon: string }>`
  color: #444444;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33em;
  letter-spacing: -0.02em;
  padding: 0 0 16px;
  ${({ $id }) => $id === "form-filling-rooms" && "text-transform: uppercase;"}

  &::after {
    content: "${(props) => props.$soon}";
    color: #ff6f3d;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5em;
    vertical-align: super;
    margin-left: 4px;
    text-transform: lowercase;
    display: ${({ $id }) => ($id === "private-rooms" ? "inline" : "none")};
  }
`;

const StyledCollaborateCardDescription = styled.p`
  color: #666666;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  padding: 0 0 16px;
`;

const StyledCollaborateCardImage = styled.div<{
  $imgUrl: string;
  $imgUrl2x: string;
}>`
  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  aspect-ratio: 1.3143;
  width: 736px;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 352px;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    padding: 0 10px;
  }
`;

export {
  StyledCollaborateCard,
  StyledCollaborateCardTitle,
  StyledCollaborateCardDescription,
  StyledCollaborateCardImage,
  StyledContentWrapper,
};
