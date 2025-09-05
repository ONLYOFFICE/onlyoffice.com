import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeading,
  StyledText,
  StyledContainer,
  WrapperLink,
} from "./LinkImage.styled";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HostingLinkImage = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      desktopSpacing={["168px", "96px"]}
      tabletSpacing={["144px", "80px"]}
      tabletSmallSpacing={["144px", "80px"]}
      mobileSpacing={["112px", "48px"]}
      background="#f5f5f5"
      id="part-hosting"
    >
      <StyledContainer>
        <StyledHeading label={t(items.title)} />
        <WrapperLink>
          <StyledText>
            <Trans
              t={t}
              i18nKey={t(items.text)}
              components={items.textLinks?.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
              ))}
            />
          </StyledText>
        </WrapperLink>
        <Button as="a" href={items.linkBtn} label={t(items.btnText)} />
      </StyledContainer>
    </Section>
  );
};

export { HostingLinkImage };
