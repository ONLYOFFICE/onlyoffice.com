import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const StyledContainer = styled(Container)`
  text-align: center;

  @media ${device.desktop} {
    padding: 0;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 56px 0 0;

  @media ${device.desktop} {
    max-width: 1200px;
    overflow-x: scroll;
    padding: 56px 48px 0;
  }

  @media ${device.tabletS} {
    gap: 24px;
    padding: 56px 40px 0;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 24px 16px 0;
  }
`;

const OptionCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  flex-shrink: 0;
  display: grid;
  align-items: start;
  grid-template-rows: 160px 1fr;
  grid-template-columns: 1fr;
  gap: 32px;
  margin: 0 0 32px;
  min-height: 416px;
  width: 352px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media ${device.tabletS} {
    width: 320px;
  }

  @media ${device.mobile} {
    grid-template-rows: 109px 1fr;
    gap: 24px;
    min-height: 294px;
    width: 240px;
  }
`;

const IconContainer = styled.div<{ $color?: string; $icon: string }>`
  background-color: ${(props) => (props.$color ? props.$color : "#f5f5f5")};
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 160px;
  position: relative;

  &::after {
    content: "";
    display: block;
    background-image: ${(props) => `url(${props.$icon})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 223px;
    position: absolute;
    left: calc(50% - 112px);
    top: calc(50% - 35px);
  }

  @media ${device.mobile} {
    height: 109px;

    &::after {
      height: 50px;
      width: 112px;
      left: calc(50% - 56px);
      top: calc(50% - 25px);
    }
  }
`;

const OptionDescription = styled(Text)`
  color: #666666;
  font-size: 14px;
  line-height: 1.6em;
  padding: 16px 0 0;

  @media ${device.mobile} {
    padding: 8px 0 0;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 32px;
  text-align: left;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${device.mobile} {
    padding: 0 24px 24px;
  }
`;

export {
  StyledContainer,
  OptionsContainer,
  OptionCard,
  IconContainer,
  OptionDescription,
  OptionContainer,
};
