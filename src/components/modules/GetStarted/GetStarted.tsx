import { useTranslation, Trans } from "next-i18next";
import { StyledGetStartedHeading } from "./GetStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
import { Link } from "@src/components/ui/Link";
import { IGetStartedProps } from "./GetStarted.types";
import { items } from "./data/items";
import { getAssetUrl } from "@utils/getAssetUrl";

const GetStarted = ({ background, header }: IGetStartedProps) => {
  const { t } = useTranslation("GetStarted");

  return (
    <Section background={background} tabletSpacing={["88px", "80px"]}>
      <Container>
        <StyledGetStartedHeading
          level={2}
          size={2}
          textAlign="center"
          label={header ? header : t("GetStartedAndChooseWhereToWork")}
        />

        <ChooseSolution
          items={items.items.map(({ imgUrl, heading, text, links }) => ({
            imgUrl,
            heading: t(heading ?? ""),
            text:
              typeof text === "string" ? (
                t(text)
              ) : (
                <Trans
                  t={t}
                  i18nKey={text?.label}
                  components={text?.links?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              ),
            links: links?.map(({ id, name, url }) => ({
              id,
              name: t(name),
              url,
            })),
          }))}
          largeItems={items.largeItems.map(
            ({ imgUrl, heading, text, links }) => ({
              imgUrl: getAssetUrl(imgUrl),
              heading: t(heading ?? ""),
              text: t(String(text)),
              links: links?.map(({ id, name, url }) => ({
                id,
                name: t(name),
                url,
              })),
            }),
          )}
        />
      </Container>
    </Section>
  );
};

export { GetStarted };
