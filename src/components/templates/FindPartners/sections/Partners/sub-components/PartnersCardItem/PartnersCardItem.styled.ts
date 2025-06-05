import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { IPartner } from "../../../../FindPartners.types";

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

  @media ${device.tabletS} {
    flex-direction: column;
    max-height: unset;
  }

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

  @media ${device.tabletS} {
    height: 104px;
    padding-left: 25px;
  }
`;

const StyledPartnersCardItemImg = styled.div.attrs<{
  $imgUrl: string;
}>(props => ({
  style: {
    backgroundImage: `url(${props.$imgUrl})`,
  }
}))`
  width: 168px;
  height: 104px;
  justify-self: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    width: 126px;
    height: 78px;
    justify-self: flex-start;
  }
`;

const StyledPartnersCardItemRight = styled.div`
  border-left: 1px solid #E5E5E5;
  padding-left: 32px;
  flex-grow: 1;
  display: grid;
  grid-template-rows: 106px auto;

  @media ${device.tabletS} {
    padding-left: 25px;
    display: block;
  }
`;

const StyledPartnersCardItemHead = styled.div`
  display: grid;
  grid-template-columns: auto 183px 107px;
  align-items: center;

  @media ${device.tabletS} {
    display: block;
  }
`;

const StyledPartnersCardItemName = styled(Heading)`
  transition-duration: 300ms;
`;

const StyledPartnersCardItemCountry = styled(Text)`
  text-align: right;

  @media ${device.tabletS} {
    display: none;
  }
`;

const StyledPartnersCardItemLink = styled(Link)<{
  $urlType: IPartner["url_type"];
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

  @media ${device.tabletS} {
    display: none;
  }

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

const StyledPartnersCardItemInfoWrapperMob = styled.div`
  display: none;

  @media ${device.tabletS} {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: 30px;
  }
`;

const StyledPartnersCardItemCountryMob = styled(StyledPartnersCardItemCountry)`
  display: block;
  text-align: left;
`;

const StyledPartnersCardItemLinkMob = styled(StyledPartnersCardItemLink)`
  display: block;
`;

const StyledPartnersCardItemDesc = styled(Text)<{
  $isItemOpen: boolean;
}>`
  color: #666;
  padding-right: 30px;
  margin-top: 32px;

  @media ${device.tabletS} {
    overflow: hidden;
    transition-duration: 300ms;
    margin-top: 0;
    padding-top: ${({$isItemOpen}) => $isItemOpen ? "32px" : "0"};
    max-height: ${({$isItemOpen}) => $isItemOpen ? "970px" : "0"};
  }
`;

const StyledPartnersLevel = styled.div<{
  $level: IPartner["level"];
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

  @media ${device.tabletS} {
    left: auto;
    right: 10px;
  }

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
  StyledPartnersCardItem,
  StyledPartnersCardItemLeft,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemLink,
  StyledPartnersCardItemInfoWrapperMob,
  StyledPartnersCardItemCountryMob,
  StyledPartnersCardItemLinkMob,
  StyledPartnersCardItemDesc,
  StyledPartnersLevel,
  StyledPartnersCardItemImg,
  StyledPartnersCardItemRight,
  StyledPartnersCardItemHead,
  StyledPartnersCardItemName,
}