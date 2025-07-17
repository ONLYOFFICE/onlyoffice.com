import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 32px;
  }
`;

const StyledRatingStars = styled.ul<{
  $value: number;
  $hover: number;
  $hasVoted: boolean;
}>`
  position: relative;
  display: flex;
  margin: 0 10px;
  background-image: url("/images/modules/converter/hero/stars-empty.svg");
  background-repeat: no-repeat;
  pointer-events: ${(props) => props.$hasVoted && "none"};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.$hover > 0 ? props.$hover : props.$value)}%;
    height: 100%;
    background-image: url("/images/modules/converter/hero/stars-full.svg");
    background-repeat: no-repeat;
    pointer-events: none;
  }

  li {
    display: inline-flex;
  }

  @media ${device.mobile} {
    margin: 16px 0;
  }
`;

const StyledRatingStar = styled.button`
  border: none;
  padding: 0;
  width: 30px;
  height: 28px;
  background-color: transparent;
  cursor: pointer;
`;

const StyledRatingVotes = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export { StyledRating, StyledRatingStars, StyledRatingStar, StyledRatingVotes };
