import { useTranslation, Trans } from "next-i18next";
import {
  StyledSection,
  StyledQuestion,
  StyledAnswer,
  StyledFaq,
} from "./FaqSection.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const FaqSection = () => {
  const { t } = useTranslation("license-faq");

  return (
    <StyledSection
      desktopSpacing={["80px", "80px"]}
      tabletSpacing={["80px", "80px"]}
      mobileSpacing={["48px", "48px"]}
    >
      {items.map((item, idx) => {
        const linkComponents = item.links.map((link, index) => (
          <Link
            color="main"
            textUnderline
            href={link.href}
            key={index}
            target={link.isExternal ? "_blank" : undefined}
          />
        ));

        return (
          <StyledFaq key={idx}>
            <StyledQuestion level={3} size={4} label={t(item.question)} />
            <StyledAnswer size={2}>
              <Trans t={t} i18nKey={item.answer} components={linkComponents} />
            </StyledAnswer>
          </StyledFaq>
        );
      })}
    </StyledSection>
  );
};

export { FaqSection };
