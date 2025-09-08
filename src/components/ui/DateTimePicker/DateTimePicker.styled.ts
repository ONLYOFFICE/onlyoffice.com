import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Modal } from "@src/components/ui/Modal";
import { StyledModalWrapper } from "../Modal/Modal.styled";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledDateTimePicker = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  color: #333333;
  display: block;
  font-size: 14px;
  line-height: 1.6em;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledDateInput = styled.div<{
  $placeholder: string;
  $isOpen: boolean;
  $isEmpty: boolean;
  $isValid: boolean;
  $isDateEmpty: boolean;
}>`
  padding: 0 16px;
  background: ${(props) => (props.$isOpen ? "#ffffff" : "#f9f9f9")};
  border: solid 1px #aaaaaa;
  border-color: ${(props) => (props.$isOpen ? "#666666" : "#aaaaaa")};
  border-radius: 4px;
  cursor: pointer;
  display: grid;
  grid-template-columns: ${({ $isDateEmpty }) =>
    $isDateEmpty ? "0 104px auto 25px" : "104px 104px auto 25px"};
  align-items: center;
  height: 56px;
  font-size: 16px;
  line-height: 1.6em;
  position: relative;
  transition: border-color 0.2s;
  width: 100%;

  ${(props) =>
    props.$isValid &&
    css`
      border-color: #8bb825;
      background-color: #f9feef;
    `}

  &::before {
    color: #aaaaaa;
    content: "${(props) => props.$placeholder}";
    position: absolute;
    font-size: 16px;
    top: 16px;
    left: 16px;
    pointer-events: none;
    display: ${(props) => (props.$isEmpty ? "block" : "none")};
    transition: transform 100ms ease;

    @media ${device.mobile} {
      top: 11px;
      left: 12px;
      font-size: 14px;
    }

    ${(props) =>
      props.$isOpen
        ? css`
            transform: translateX(0) translateY(-13px);
            font-size: 12px;

            @media ${device.tabletS} {
              padding: 45px 24px;
            }

            @media ${device.mobile} {
              padding: 14px;
            }
          `
        : css`
            transform: translateY(0);
          `}
  }

  @media ${device.mobile} {
    height: 48px;
  }
`;

const StyledDatePopup = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  background-color: #ffffff;
  border: 1px solid #666666;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 3px;
  position: absolute;
  z-index: 1;
  width: 100%;
`;

const StyledCalendarIcon = styled.div<{ $isOpen: boolean }>`
  content: "";
  background-image: url("/images/icons/datetime-calendar.svg");
  background-repeat: no-repeat;
  background-size: 55px 24px;
  background-position-x: ${(props) => (props.$isOpen ? "-31px" : "0")};
  height: 20px;
  width: 25px;
`;

const StyledButtonWrapper = styled.div`
  background: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  padding: 13px 16px;
`;

const StyledDateWrapper = styled.div`
  display: flex;
  padding: 24px 13px;
  gap: 12px;

  .my-calendar {
    border: none;
    min-height: 242px;
    font-family: "Open Sans", sans-serif, Arial;
    width: 100%;

    > button {
      top: 6px;
      transform: scale(0.5);
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__navigation *::before {
      border-color: #222222;
    }

    .react-datepicker__day-name {
      padding: 0 0 10px;
      color: #aaaaaa;
      font-size: 11px;
      font-weight: 500;
      margin-bottom: 0;
      text-transform: uppercase;
    }

    .react-datepicker__day--weekend {
      pointer-events: none;
    }

    .react-datepicker__day:not([aria-disabled="true"]):hover {
      background-color: #ff6f3d;
      color: #ffffff;
    }

    .react-datepicker__week,
    .react-datepicker__day-names {
      display: flex;
      justify-content: space-evenly;
    }

    .react-datepicker__month {
      margin: 0;
    }

    .react-datepicker__header {
      background-color: #ffffff;
      border-bottom: none;
      @media ${device.tablet} {
        padding: 0;
      }
    }

    .react-datepicker__day {
      font-weight: normal;
      color: #666666;
      font-size: 14px;
      line-height: 1.6em;
      text-align: center;
      margin: 0;
      padding: 0.2em;
      max-width: 38px;
      width: 100%;
      height: 28px;

      @media ${device.tablet} {
        max-width: 100%;
      }
    }

    .react-datepicker__day--selected {
      background-color: #333333;
      color: #ffffff;
    }

    h2.react-datepicker__current-month {
      color: #333333;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.6em;
      text-align: center;

      @media ${device.tablet} {
        font-size: 16px;
      }
    }

    .react-datepicker__day--keyboard-selected {
      background-color: transparent;
      color: #666666;
    }

    .react-datepicker__day--today {
      color: #ff6f3d;
      background-color: transparent;
    }

    .react-datepicker__day--outside-month {
      color: #cccccc;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 17px 12px 0;
  }
`;

const StyledTimePicker = styled.div`
  display: flex;
  gap: 4px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 208px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaaaaa;
  }
`;

const Item = styled.li<{ selected: boolean }>`
  box-sizing: border-box;
  color: #444444;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.6em;
  padding: 4px 16px;
  width: 76px;
  border-radius: 5px;
  text-align: center;

  ${(props) =>
    props.selected
      ? css`
          background-color: #333333;
          color: #ffffff;
        `
      : css`
          &:hover {
            background-color: #ff6f3d;
            color: #ffffff;
          }
        `}
`;

const ListHeading = styled(Heading)`
  margin-bottom: 14px;
  color: #808080;
  font-size: 14px;
  line-height: 1.6em;
  font-weight: 600;
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

const StyledTimePickerWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    padding: 10px 9px 9px 18px;
  }
`;

const MobilePicker = styled.div<{ $isOpen: boolean; $isSelected: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.3em;
  width: 80px;
  height: 32px;
  cursor: pointer;
   background-color: ${(props) =>
    props.$isOpen
      ? "#ff6f3d"
      : props.$isSelected
      ? "#333333"
      : "#f9f9f9"};

  color: ${(props) =>
    props.$isOpen
      ? "#ffffff"
      : props.$isSelected
      ? "#ffffff"
      : "#333333"};
`;

const StyledModal = styled(Modal)`
  ${StyledModalWrapper} {
    background-color: #ffffff;
    max-width: 280px;
    padding: 24px 15px;
    text-align: center;
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 119px;
  overflow: hidden;
  margin: 10px 0;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: block;
  height: auto;
  border: 3.5px solid transparent;
  font-size: 18px;
  opacity: 0.6;
  transform-origin: 50% 100%;
  transform: perspective(400px) rotateX(25deg);
  text-align: center;
  max-height: 100%;
  overflow: hidden;

  &.swiper-slide-active {
    font-size: 22px;
    font-weight: 600;
    opacity: 1;
    transform-origin: 0;
    transform: none;
    background: #ff6f3d !important;
    border-radius: 5px;
    color: #ffffff !important;
  }
`;

const StyledSwiperButton = styled.button`
  left: calc(50% - 10px);
  top: 15px;
  width: 0;
  height: 0;
  border-right: 10px solid #ffffff;
  border-left: 10px solid #ffffff;
  border-top: 0px solid #ffffff;
  border-bottom: 15px solid #113463;

  &.swiper-button-next {
    left: calc(50% - 10px);
    top: 170px;
    width: 0;
    height: 0;
    border-right: 10px solid #ffffff;
    border-left: 10px solid #ffffff;
    border-top: 15px solid #113463;
    border-bottom: 0px solid #ffffff;
  }
`;

export {
  StyledLabel,
  StyledDateInput,
  StyledDatePopup,
  StyledCalendarIcon,
  StyledButtonWrapper,
  StyledDateWrapper,
  StyledTimePicker,
  List,
  Item,
  ListHeading,
  StyledTimePickerWrapper,
  StyledDateTimePicker,
  MobilePicker,
  StyledModal,
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperButton,
};
