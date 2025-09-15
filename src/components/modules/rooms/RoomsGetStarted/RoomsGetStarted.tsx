import { Trans, useTranslation } from "next-i18next";
import { StyledRoomsGetStartedHeading } from "./RoomsGetStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
import { items } from "./data/items";
import { getAssetUrl } from "@utils/getAssetUrl";

interface IGetStartedProps {
  /** The background color of the section. */
  background?: string;
}

const RoomsGetStarted = ({ background }: IGetStartedProps) => {
  const { t } = useTranslation("RoomsGetStarted");

  return (
    <Section
      tabletSmallSpacing={["72px", "72px"]}
      background={background ? background : "linear-gradient(#F8F9F9,#F8F9F900)"}
    >
      <Container>
        <StyledRoomsGetStartedHeading
          level={2}
          size={2}
          textAlign="center"
          label={t("GetStartedAndChooseWhereToWork")}
        />

        <ChooseSolution
          items={items.items.map(({ imgUrl, heading, text, links }) => ({
            imgUrl: getAssetUrl(imgUrl),
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
              imgUrl,
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

export { RoomsGetStarted };
