import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { CardItem } from "../../sub-components/CardItem/";
import { formatWebinarsDate, formatWebinarsDateWithHours } from "../../utils/formaWebinarsDate"
import { IWebinars } from "../../Webinars.types";
import { ILocale } from "@src/types/locale";

import { StyledWatchHeading, StyledWatchList } from "./Watch.styled";

const Watch = ({ webinars, locale }: ILocale & IWebinars) => {
  const { t } = useTranslation("webinars");
  const { data } = webinars.past;

  return (
    <Section
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledWatchHeading
          label={t("WatchHeading")}
          textAlign="center"
          level={2}
          size={2}
        />
        <Text label={t("WatchText")} size={2} textAlign="center" />
        <StyledWatchList>
          {data && data.map((item) => (
            <CardItem
              key={item.id}
              date={formatWebinarsDate(item.date, locale)}
              dateWithHours={formatWebinarsDateWithHours(item.date, locale)}
              webinarLang={item.language}
              title={item.title}
              description={item.description}
              link={item.watch_link}
              speaker={item.speaker}
              image={item.speaker_image}
              product={item.product}
              isUpcomingWebinar={false}
              locale={locale}
            />
          ))}
        </StyledWatchList>
      </Container>
    </Section>
  );
};

export { Watch };