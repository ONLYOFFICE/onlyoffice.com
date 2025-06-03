import styled, { css } from "styled-components";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { IPartners } from "../../FindPartners.types";

const StyledPartnersKeyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 32px;
`;

const StyledPartnersKeyItem = styled.li``;

const StyledPartnersCountryWrapper = styled.div`
  width: 454px;
  margin: 0 auto;
  position: relative;
`;

const StyledPartnersCountrySelect = styled.div<{
  $isSelectOpen: boolean;
}>`
  height: 60px;
  background-color: #F9F9F9;
  border: ${({$isSelectOpen}) => $isSelectOpen ? "1px solid #666666" : "1px solid #AAAAAA"};
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 300ms;
  margin-bottom: 48px;

  &:hover {
    border-color: #666666;
  }
`;

const StyledPartnersCountryInner = styled.div<{
  $isSelectOpen: boolean;
}>`
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 0;
    background-image: url("/images/icons/chevron-down.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transition-duration: 300ms;
    transform: translateY(-50%) ${({$isSelectOpen}) => $isSelectOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const StyledPartnersCountryText = styled(Text)<{
  $isSelectOpen: boolean;
  $isSelectCountry: string;
}>`
  &:first-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    transform: translate(0, -50%);

    ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) &&
      css`
        transform: translate(-25%, -125%) scale(0.8);
        opacity: 0.5;
      `
    }
  }

  &:last-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    opacity: ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) ? 1 : 0};
    visibility: ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) ? "visible" : "hidden"};
    transform: translateY(-50%);
  }
`;

const StyledPartnersCountryOptions = styled.ul<{
  $isSelectOpen: boolean;
}>`
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  background-color: #FFFFFF;
  border: 1px solid #666666;
  border-radius: 4px;
  visibility: ${({$isSelectOpen}) => $isSelectOpen ? "visible" : "hidden"};
  opacity: ${({$isSelectOpen}) => $isSelectOpen ? 1 : 0};
  transition-duration: 300ms;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 3;
`;

const StyledPartnersCountryOption = styled.li`
  padding: 8px 16px;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #F9F9F9;
  }
`;

const StyledPartnersCardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const StyledPartnersCardItem = styled.li<{
  $isItemOpen: boolean;
}>`
  width: 100%;
  display: flex;
  position: relative;
  background-color: #fff;
  padding: 32px 0;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  transition: box-shadow 0.3s, max-height 0.6s ease;
  max-height: ${({$isItemOpen}) => $isItemOpen ? "970px" : "170px"};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);

    h4 {
      color: #ff6f3d;
    }
  }
`;

const StyledPartnersCardItemLeft = styled.div`
  width: 287px;
  height: 106px;
  flex-shrink: 0;
`;

const StyledPartnersCardItemImg = styled.div<{
  $imgUrl: string;
}>`
  width: 168px;
  height: 104px;
  justify-self: center;
  background-image: ${({$imgUrl}) => `url(${$imgUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledPartnersCardItemRight = styled.div`
  border-left: 1px solid #E5E5E5;
  padding-left: 32px;
  flex-grow: 1;
  display: grid;
  grid-template-rows: 106px auto;
`;

const StyledPartnersCardItemHead = styled.div`
  display: grid;
  grid-template-columns: auto 183px 107px;
  align-items: center;
`;

const StyledPartnersCardItemName = styled(Heading)`
  transition-duration: 300ms;
`;

const StyledPartnersCardItemCountry = styled(Text)`
  text-align: right;
`;

const StyledPartnersCardItemLink = styled(Link)<{
  $urlType: IPartners["url_type"];
  $siteText: string;
  $emailText: string;
}>`
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  justify-self: center;
  position: relative;

  ${({$urlType}) => $urlType === "site" && css`
    background-image: url("/images/templates/find-partners/partners/external-link-symbol.svg");
  `}

  ${({$urlType}) => $urlType === "email" && css`
    background-image: url("/images/templates/find-partners/partners/email-link-symbol.svg");
  `}

  &::after {
    ${({$urlType, $siteText}) => $urlType === "site" && css`
      content: "${$siteText}";
    `}

    ${({$urlType, $emailText}) => $urlType === "email" && css`
      content: "${$emailText}";
    `}

    position: absolute;
    top: -125%;
    right: 5px;
    width: max-content;
    padding: 5px 8px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition-duration: 300ms;
  }

  &:hover {
    &::after {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledPartnersCardItemDesc = styled(Text)`
  color: #666;
  padding-right: 30px;
  margin-top: 32px;
`;

const StyledPartnersLevel = styled.div<{
  $level: IPartners["level"];
}>`
  width: 36px;
  height: 39px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: 0;
  left: 15px;

  ${({$level}) => {
    if ($level === "Gold partner") {
      return css`
        background-image: url("/images/templates/find-partners/partners/gold-partner.svg");
      `;
    }
    if ($level === "Silver partner") {
      return css`
        background-image: url("/images/templates/find-partners/partners/silver-partner.svg");
      `;
    }
    if ($level === "Autorized") {
      return css`
        background-image: url("/images/templates/find-partners/partners/autorized.svg");
      `;
    }
  }}

  &::after {
    content: "${({$level}) => $level}";
    position: absolute;
    top: 50%;
    left: 125%;
    width: max-content;
    padding: 5px 8px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition-duration: 300ms;
    transform: translateY(-50%);
  }

  &:hover {
    &::after {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export {
  StyledPartnersKeyList,
  StyledPartnersKeyItem,
  StyledPartnersCountryWrapper,
  StyledPartnersCountrySelect,
  StyledPartnersCountryInner,
  StyledPartnersCountryText,
  StyledPartnersCountryOptions,
  StyledPartnersCountryOption,
  StyledPartnersCardList,
  StyledPartnersCardItem,
  StyledPartnersCardItemLeft,
  StyledPartnersCardItemImg,
  StyledPartnersCardItemRight,
  StyledPartnersCardItemHead,
  StyledPartnersCardItemName,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemLink,
  StyledPartnersCardItemDesc,
  StyledPartnersLevel,
};