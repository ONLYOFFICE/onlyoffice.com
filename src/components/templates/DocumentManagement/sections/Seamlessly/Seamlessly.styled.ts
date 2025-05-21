import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

const StyledSeamlesslyHeading = styled(Heading)`
  max-width: 736px;
  margin: 0 auto 56px;
  text-align: center;

  @media ${device.tablet} {
    max-width: 100%;
    text-align: start;
    margin-bottom: 24px;
  }
`;

const StyledSeamlesslyWrapper = styled.div`
  display: grid;
  grid-template-columns: 352px auto;
  column-gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    row-gap: 32px;
    justify-items: center;
  }
`;

const StyledSeamlesslySwitcherItem = styled.div`
  margin-bottom: 28px;
`;

const StyledSeamlesslySwitcherItemTitle = styled.span<{ $active: boolean }>`
  background: transparent;
  border: none;
  border-bottom: ${({ $active }) => ($active ? "none" : "1px dotted #444")};
  color: ${({ $active }) => ($active ? "#FF6F3D" : "#333")};
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  width: 100%;
  cursor: pointer;
`;

const StyledSeamlesslySwitcherItemTextWrapper = styled.div<{
  $active: boolean;
}>`
  font-size: 14px;
  line-height: 19px;
  color: #666;
  overflow: hidden;
  visibility: hidden;
  will-change: max-height;
  transition:
    max-height 0.2s,
    margin-top 0.2s,
    visibility 0.2s;

  ${({ $active }) =>
    $active &&
    css`
      margin-top: 12px;
      visibility: visible;
    `}
`;

const StyledSeamlesslyImage = styled.div<{ $image: string; $image2x: string }>`
  width: 100%;
  padding-bottom: 57.2%;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.retina} {
    background-image: url(${(props) => props.$image2x});
  }

  @media ${device.tablet} {
    order: -1;
  }
`;

export {
  StyledSeamlesslyHeading,
  StyledSeamlesslyWrapper,
  StyledSeamlesslySwitcherItem,
  StyledSeamlesslySwitcherItemTitle,
  StyledSeamlesslySwitcherItemTextWrapper,
  StyledSeamlesslyImage,
};
