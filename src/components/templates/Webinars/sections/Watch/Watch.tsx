import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { CardItem } from "../../sub-components";
import { formatWebinarsDate, formatWebinarsDateWithHours } from "../../utils/formaWebinarsDate"
import { IWebinars } from "../../Webinars.types";
import { ILocale } from "@src/types/locale";

import { StyledWatchHeading, StyledWatchList } from "./Watch.styled";

const Watch = ({ webinars, locale }: ILocale & IWebinars) => {
  const { t } = useTranslation("webinars");
  const { data } = webinars.past;

  return (
    <Section>
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
              language={item.language}
              title={item.title}
              description={item.description}
              link={item.watch_link}
              speaker={item.speaker}
              image={item.speaker_image[0].url}
              product={item.product}
              isUpcomingWebinar={false}
            />
          ))}
        </StyledWatchList>
      </Container>
    </Section>
  );
};

export { Watch };