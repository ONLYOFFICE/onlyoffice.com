import { memo } from "react";
import { Trans } from "next-i18next";
import { IPartnerCardProps } from "@src/components/templates/FindPartners/FindPartners.types";

import {
  StyledPartnersCardItem,
  StyledPartnersCardItemImg,
  StyledPartnersCardItemLeft,
  StyledPartnersCardItemRight,
  StyledPartnersCardItemHead,
  StyledPartnersCardItemName,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemLink,
  StyledPartnersCardItemInfoWrapperMob,
  StyledPartnersLevel,
  StyledPartnersCardItemDesc,
  StyledPartnersCardItemCountryMob,
  StyledPartnersCardItemLinkMob
} from "./PartnersCardItem.styled";

const PartnersCardItemComponent = ({ item, isItemOpen, onToggleCard, t }: IPartnerCardProps) => {
  return (
    <StyledPartnersCardItem
      $isItemOpen={isItemOpen}
      onClick={() => onToggleCard(item.id)}
    >
      <StyledPartnersCardItemLeft>
        <StyledPartnersCardItemImg $imgUrl={
          item.logo && item.logo.length > 1
            ? item.logo && item?.logo[1]?.url
            : item.logo && item?.logo[0]?.url} />
      </StyledPartnersCardItemLeft>
      <StyledPartnersCardItemRight>
        <StyledPartnersCardItemHead>
          <StyledPartnersCardItemName
            level={4}
            size={5}
            label={item.name ?? ""}
          />
          <StyledPartnersCardItemCountry
            size={3}
            label={item.country ?? ""}
          />
          {item.link &&
            <StyledPartnersCardItemLink
              target="_blank"
              $siteText={t("PartnersVisitSite")}
              $emailText={t("PartnersSendEmail")}
              $urlType={item.url_type}
              href={item.link.endsWith("/") ? item.link.slice(0, -1) : item.link}
            />
          }
        </StyledPartnersCardItemHead>
        {item.description &&
          <StyledPartnersCardItemDesc $isItemOpen={isItemOpen}>
            <Trans components={{br: <br />}}>
              {item.description}
            </Trans>
          </StyledPartnersCardItemDesc>
        }
      </StyledPartnersCardItemRight>
      <StyledPartnersCardItemInfoWrapperMob>
        <StyledPartnersCardItemCountryMob
          size={3}
          label={item.country ?? ""}
        />
        {item.link &&
          <StyledPartnersCardItemLinkMob
            target="_blank"
            $siteText={t("PartnersVisitSite")}
            $emailText={t("PartnersSendEmail")}
            $urlType={item.url_type}
            href={item.link.endsWith("/") ? item.link.slice(0, -1) : item.link}
          />
        }
      </StyledPartnersCardItemInfoWrapperMob>
      {item.level && item.level !== "No level" && (
        <StyledPartnersLevel
          $level={
            item.level === "Gold partner" ? t("PartnersLevelGold") :
            item.level === "Silver partner" ? t("PartnersLevelSilver") : t("PartnersLevelAutorized")
          }
          $icon={
            item.level === "Gold partner" ? "/images/templates/find-partners/partners/gold-partner.svg" :
            item.level === "Silver partner" ? "/images/templates/find-partners/partners/silver-partner.svg" : "/images/templates/find-partners/partners/autorized.svg"
          }
        />
      )}
    </StyledPartnersCardItem>
  );
};

const PartnersCardItem = memo(PartnersCardItemComponent);

export { PartnersCardItem };