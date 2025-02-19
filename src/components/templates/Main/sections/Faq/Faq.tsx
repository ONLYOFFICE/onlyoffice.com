import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { faqItems } from "./data/faqItems";

const Faq = () => {
  const { t } = useTranslation("main");

  return (
    <Section>
      <FaqCollapse
        text={t("GetAnswersToTheMostPopularQuestions")}
        items={faqItems.map(({ label, text, links }) => ({
          label: t(label),
          content: links ? (
            <Trans
              t={t}
              i18nKey={text}
              components={links?.map(({ href, isExternal }, index) => (
                <Link
                  href={href}
                  key={index}
                  target={isExternal ? "_blank" : undefined}
                />
              ))}
            />
          ) : (
            t(text)
          ),
        }))}
      />
    </Section>
  );
};

export { Faq };
