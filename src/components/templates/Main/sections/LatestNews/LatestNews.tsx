import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import {
  StyledLatestNewsHeading,
  StyledLatestNewsItems,
  StyledLatestNewsItem,
  StyledLatestNewsItemHeading,
  StyledLatestNewsCards,
} from "./LatestNews.styled";
import { ILocale } from "@src/types/locale";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { NewsCard } from "./sub-components/NewsCard";
import { NewsItem } from "./sub-components/NewsItem";
import { latestNewsItems } from "./data/latestNewsItems";
import { getLink } from "@src/utils/getLink";

const LatestNews = ({ locale }: ILocale) => {
  const { t } = useTranslation("main");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWebinarSpacing = () => {
      if (ref.current) {
        const blogElement = ref.current.querySelector(
          ".latest-news-item-blog",
        ) as HTMLElement | null;
        const webinarElement = ref.current.querySelector(
          ".latest-news-item-webinar",
        ) as HTMLElement | null;

        if (blogElement && webinarElement) {
          const difference =
            blogElement.offsetHeight - webinarElement.offsetHeight;

          if (window.innerWidth > 592) {
            webinarElement.style.marginBottom = `${difference + 24}px`;
          } else {
            webinarElement.style.marginBottom = `24px`;
          }
        }
      }
    };

    updateWebinarSpacing();

    window.addEventListener("resize", updateWebinarSpacing);

    return () => {
      window.removeEventListener("resize", updateWebinarSpacing);
    };
  }, []);

  return (
    <Section bgColor="#f5f5f5">
      <Container>
        <StyledLatestNewsHeading
          level={2}
          label={t("StayUpToDateWithTheLatestFromOO")}
          textAlign="center"
        />

        <StyledLatestNewsItems ref={ref}>
          <StyledLatestNewsItem>
            <StyledLatestNewsItemHeading level={6}>
              <Link
                href={getLink("blog", locale)}
                label={t("Blog")}
                hover="color"
              />
            </StyledLatestNewsItemHeading>
            <StyledLatestNewsCards>
              {latestNewsItems.blog.map((newsItem, newsIndex) => (
                <NewsCard
                  className={newsItem.className}
                  heading={t(newsItem.heading)}
                  imgUrl={newsItem.imgUrl}
                  linkUrl={t(newsItem.linkUrl)}
                  isExternalLink={newsItem.isExternalLink}
                  date={dayjs(newsItem.date).format("D MMMM YYYY")}
                  key={newsIndex}
                />
              ))}
              <Link
                href={getLink("blog", locale)}
                label={t("MoreNewsHere")}
                fontSize="14px"
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledLatestNewsCards>
          </StyledLatestNewsItem>

          <StyledLatestNewsItem>
            {locale === "zh" ? (
              <>
                <StyledLatestNewsItemHeading
                  level={6}
                  label="微信"
                ></StyledLatestNewsItemHeading>
                <StyledLatestNewsCards>
                  {latestNewsItems.wechat.map((newsItem, newsIndex) => (
                    <NewsItem
                      heading={newsItem.heading}
                      linkUrl={newsItem.linkUrl}
                      date={dayjs(newsItem.date).format("YYYY年MM月DD日")}
                      key={newsIndex}
                    />
                  ))}
                </StyledLatestNewsCards>
              </>
            ) : (
              <>
                <StyledLatestNewsItemHeading level={6}>
                  <Link
                    href="https://www.youtube.com/user/onlyofficeTV"
                    label={t("Youtube")}
                    target="_blank"
                    hover="color"
                  />
                </StyledLatestNewsItemHeading>
                <StyledLatestNewsCards>
                  {latestNewsItems.webinar.map((newsItem, newsIndex) => (
                    <NewsCard
                      className={newsItem.className}
                      heading={t(newsItem.heading)}
                      imgUrl={newsItem.imgUrl}
                      linkUrl={newsItem.linkUrl}
                      isExternalLink={newsItem.isExternalLink}
                      date={dayjs(newsItem.date).format("D MMMM YYYY")}
                      isWebinar={true}
                      webinarTime={newsItem.webinarTime}
                      key={newsIndex}
                    />
                  ))}
                  <Link
                    href="https://www.youtube.com/user/onlyofficeTV"
                    label={t("MoreVideosHere")}
                    target="_blank"
                    fontSize="14px"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                </StyledLatestNewsCards>
              </>
            )}
          </StyledLatestNewsItem>

          <StyledLatestNewsItem>
            <StyledLatestNewsItemHeading level={6}>
              <Link
                href="/events?from=default"
                label={t("Events")}
                hover="color"
              />
            </StyledLatestNewsItemHeading>
            <StyledLatestNewsCards>
              {latestNewsItems.events.map((newsItem, newsIndex) => (
                <NewsCard
                  heading={t(newsItem.heading)}
                  imgUrl={newsItem.imgUrl}
                  linkUrl={newsItem.linkUrl}
                  isExternalLink={newsItem.isExternalLink}
                  date={
                    newsItem.startDate
                      ? `${dayjs(newsItem.startDate).format("MMMM D")}–${dayjs(
                          newsItem.endDate,
                        ).format("D, YYYY")}`
                      : dayjs(newsItem.date).format("MMMM D, YYYY")
                  }
                  location={newsItem.location}
                  key={newsIndex}
                />
              ))}
              <Link
                href="/events?from=default"
                label={t("MoreEventsHere")}
                fontSize="14px"
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledLatestNewsCards>
          </StyledLatestNewsItem>
        </StyledLatestNewsItems>
      </Container>
    </Section>
  );
};

export { LatestNews };
