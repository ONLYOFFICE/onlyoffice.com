import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledPreRadiosTextWrapper = styled.div`
  scroll-margin-top: 72px;

  @media ${device.mobile} {
    scroll-margin-top: 48px;
  }
`;

const StyledPreRadiosText = styled(Text)`
  font-size: 16px;
  line-height: 1.5em;
  margin-bottom: -14px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledLine2RadiosWrapper = styled.div`
  background-color: #F9F9F9;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;

  @media ${device.mobile} {
    column-gap: 22px;
    margin-left: -16px;
    margin-right: -16px;
    width: 100vw;
  }
`;

const StyledLineRadioInput = styled.input`
  display: none;
`;

const StyledLineRadioLabel = styled.label`
  color: #666666;
  display: inline-block;
  font-size: 16px;
  line-height: 1.5em;
  padding-left: 36px;
  position: relative;
  flex-basis: 30%;
  flex-shrink: 1;
  flex-grow: 0;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 24px;
  }

  &::before {
    content: "";
    position: absolute;;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #AAAAAA;
    background: #f9f9f9;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%) scale(0);
    width: 8px;
    height: 8px;
    background: #FFFFFF;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  ${StyledLineRadioInput}:checked + & {
    &::before {
      border: 1px solid #8BB825;
      background: #8BB825;
    }

    &::after {
      transform: translateY(-50%) scale(1);
    }
  }
`;

export {
  StyledPreRadiosTextWrapper,
  StyledPreRadiosText,
  StyledLine2RadiosWrapper,
  StyledLineRadioInput,
  StyledLineRadioLabel,
};