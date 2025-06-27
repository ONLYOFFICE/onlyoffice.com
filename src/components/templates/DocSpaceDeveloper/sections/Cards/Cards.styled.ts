import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ICardsItems } from "../../DocSpaceDeveloper.types";

const StyledCardsHeading = styled(Heading)`
  margin-bottom: 64px;
`;

const StyledCardsList = styled.div`
  display: flex;
  gap: 32px;
`;

const StyledCardsIconDefault = styled.div<{
  $urlDefault: ICardsItems["iconUrl"]["default"]
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ $urlDefault }) => $urlDefault});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  visibility: visible;
  opacity: 1;
  transition-duration: 300ms;
`;

const StyledCardsIconActive = styled.div<{
  $urlActive: ICardsItems["iconUrl"]["active"]
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ $urlActive }) => $urlActive});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  visibility: hidden;
  opacity: 0;
  transition-duration: 300ms;
`;

const StyledCardsItem = styled.div`
  width: 352px;
  padding: 32px 24px;
  background: #2D2D2D;
  transition-duration: 300ms;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(117.35% 209.57% at 116.62% -14.39%,rgba(143,67,0,0.53) 0%,rgba(45,45,45,0.49) 63.5%);
    z-index: 0;
    opacity: 0;
    transition-duration: 300ms;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(265.66deg, var(--smooth-gradient-color-1) -17.42%, var(--smooth-gradient-color-2) 92.74%);
    z-index: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition-property: --smooth-gradient-color-1;
    transition-duration: 300ms
  }

  &:hover {
    box-shadow: 0px 12px 40px 0px #00000066;
  }

  &:hover::after {
    --smooth-gradient-color-1: #ff6f3d;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${StyledCardsIconDefault} {
    visibility: hidden;
    opacity: 0;
  }

  &:hover ${StyledCardsIconActive} {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`;

const StyledCardsTitle = styled(Heading)`

`;

const StyledCardsIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  flex-shrink: 0;
`;

const StyledCardsText = styled(Text)`
  position: relative;
  z-index: 2;
`;

export {
  StyledCardsHeading,
  StyledCardsList,
  StyledCardsItem,
  StyledCardsWrapper,
  StyledCardsTitle,
  StyledCardsIconWrapper,
  StyledCardsIconDefault,
  StyledCardsIconActive,
  StyledCardsText
};