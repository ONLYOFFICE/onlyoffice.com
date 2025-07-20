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

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    row-gap: 32px;
    justify-items: center;
  }

  @media ${device.mobile} {
    display: none;
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

const StyledSeamlesslyCarousel = styled.div`
  margin: 0 -16px;
  display: none;

  @media ${device.mobile} {
    display: block;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .swiper-pagination-bullet {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #cccccc;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.swiper-pagination-bullet-active {
        background: linear-gradient(
          136.1deg,
          #ffc671 -1.99%,
          #ff7541 58.57%,
          #ff6f3d 100%
        );
      }
    }

    @media ${device.mobile} {
      margin-top: 32px;
    }
  }
`;

const StyledSeamlesslyCarouselItem = styled.div`
  display: grid;
  gap: 16px;
  padding: 0 16px;
`;

export {
  StyledSeamlesslyHeading,
  StyledSeamlesslyWrapper,
  StyledSeamlesslySwitcherItem,
  StyledSeamlesslySwitcherItemTitle,
  StyledSeamlesslySwitcherItemTextWrapper,
  StyledSeamlesslyImage,
  StyledSeamlesslyCarousel,
  StyledSeamlesslyCarouselItem,
};
