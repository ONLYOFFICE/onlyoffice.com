import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledProvider = styled.div`
  position: relative;
  width: 100%;
  min-height: 168px;
  background: #ffffff;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);

    .provider-name {
      color: #ff6f3d;
    }
  }
`;

const StyledProviderInner = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-columns: 264px 1fr 2fr;
  padding: 32px;
  align-items: center;
  position: relative;

  @media (max-width: 1023px) {
    display: block;
  }

  @media (max-width: 767px) {
    padding: 16px 16px 60px;
  }

  .arrow {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%)
      rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});

    @media (max-width: 767px) {
      display: block;
    }
  }
`;

const StyledProviderLogo = styled.div<{ $logo: string }>`
  display: flex;
  position: relative;
  padding-right: 32px;

  &::before {
    content: "";
    display: inline-block;
    height: 104px;
    margin: 0 auto;
    position: relative;
    width: 168px;
    background-image: url(${({ $logo }) => $logo});
    background-repeat: no-repeat;
    background-position: 50% 30px;
    background-size: contain;

    @media (max-width: 1023px) {
      background-position-y: center;
    }
  }

  @media (max-width: 1023px) {
    border-bottom: 1px solid #dbdbdb;
    padding: 0;
  }
`;

const StyledProviderInnerText = styled.div`
  display: contents;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 0 0;
  }

  @media (max-width: 767px) {
    display: grid;
    justify-items: center;
    justify-content: center;
    gap: 16px;
    padding-top: 20px;
  }
`;

const StyledProviderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid #e5e5e5;
  color: #444444;
  font-size: 18px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4em;
  padding: 0 0 0 32px;
  transition: color 0.3s;

  @media (max-width: 1023px) {
    border: none;
    padding: 0;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const StyledProvidersIcons = styled.div`
  display: inline-flex;
  justify-content: end;
  gap: 16px;
  text-align: right;

  .react-tooltip {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledProviderIcon = styled.a<{
  $positionX: string;
}>`
  width: 48px;
  height: 48px;
  background-image: url("/images/templates/hosting-providers/providers/providers_icons.svg");
  background-repeat: no-repeat;
  background-position: ${({ $positionX }) => $positionX} -20px;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
    background-position-y: -96px;
  }
`;

const StyledProviderDescription = styled.div`
  height: 0;
  grid-column-start: 2;
  grid-column-end: 5;
  text-align: left;
  border-left: 1px solid #dbdbdb;
  overflow: hidden;
  transition: height 0.2s ease;

  @media (max-width: 1023px) {
    border: none;
  }
`;

const StyledProviderDescriptionText = styled(Text)`
  padding: 5px 30px 20px;

  @media (max-width: 1023px) {
    padding: 24px 0 0;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    padding-top: 20px;
  }
`;

export {
  StyledProvider,
  StyledProviderInner,
  StyledProviderLogo,
  StyledProviderName,
  StyledProvidersIcons,
  StyledProviderIcon,
  StyledProviderDescription,
  StyledProviderDescriptionText,
  StyledProviderInnerText,
};
