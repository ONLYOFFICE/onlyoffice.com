import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next";
import {
  StyledHeading,
  StyledText,
  StyledLink,
  WrapperLink,
  StyledContainer,
} from "./LinkImage.styled";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const MarketplacesLinkImage = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      desktopSpacing={["168px", "112px"]}
      tabletSpacing={["144px", "80px"]}
      tabletSmallSpacing={["144px", "80px"]}
      mobileSpacing={["112px", "48px"]}
      background="#f9f9f9"
      id="part-marketplaces"
    >
      <StyledContainer>
        <StyledHeading label={t(items.title)} />
        <StyledText label={t(items.text)} />
        <WrapperLink>
          {items.links?.map((item, idx) => (
            <StyledLink
              key={idx}
              href={t(item.href, { defaultValue: item.href })}
              target={item.isExternal ? "_blank" : undefined}
            />
          ))}
        </WrapperLink>
        <Button as="a" href={items.linkBtn} label={t(items.btnText)} />
      </StyledContainer>
    </Section>
  );
};

export { MarketplacesLinkImage };
