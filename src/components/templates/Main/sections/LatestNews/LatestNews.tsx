import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import { getAssetUrl } from "@utils/getAssetUrl";
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
import { items } from "./data/items";
import { getLink } from "@src/utils/getLink";
import { formatDateRange } from "@src/utils/formatDateRange";
import { formatDateLatestNews } from "./utils/formatDateLatestNews";


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
          webinarElement.style.marginBottom =
            window.innerWidth > 592 ? `${difference + 24}px` : `24px`;
        }
      }
    };

    const webinarElement = ref.current?.querySelector(
      ".latest-news-item-webinar",
    ) as HTMLElement | null;
    if (webinarElement) webinarElement.style.marginBottom = "0px";

    const rafId = requestAnimationFrame(updateWebinarSpacing);

    window.addEventListener("resize", updateWebinarSpacing);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateWebinarSpacing);
    };
  }, [locale]);

  return (
    <Section background="#f5f5f5">
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
              {items.blog.map((newsItem, newsIndex) => {
                const newsItemDate = newsItem.date ? t(newsItem.date) : "";
                return (
                  <NewsCard
                    className={newsItem.className}
                    heading={t(newsItem.heading)}
                    imgUrl={newsItem.imgUrl ? t(newsItem.imgUrl) : ""}
                    linkUrl={
                      newsItem.linkUrl
                        ? newsItem.linkUrl.startsWith("http")
                          ? newsItem.linkUrl
                          : t(newsItem.linkUrl)
                        : "#"
                    }
                    isExternalLink={newsItem.isExternalLink}
                    date={formatDateLatestNews(newsItemDate, locale)}
                    key={newsIndex}
                  />
                );
              })}
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
                  {items.wechat.map((newsItem, newsIndex) => (
                    <NewsItem
                      heading={newsItem.heading}
                      linkUrl={newsItem.linkUrl}
                      date={dayjs(newsItem.date).format("YYYY年M月DD日")}
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
                  {items.webinar.map((newsItem, newsIndex) => {
                    const newsItemDate = newsItem.date ? t(newsItem.date) : "";
                    return (
                      <NewsCard
                        className={newsItem.className}
                        heading={t(newsItem.heading)}
                        imgUrl={getAssetUrl(t(newsItem.imgUrl))}
                        linkUrl={newsItem.linkUrl}
                        isExternalLink={newsItem.isExternalLink}
                        date={formatDateLatestNews(newsItemDate, locale)}
                        isWebinar={true}
                        webinarTime={newsItem.webinarTime}
                        key={newsIndex}
                      />
                    );
                  })}
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
              {items.events.map((newsItem, newsIndex) => (
                <NewsCard
                  heading={t(newsItem.heading)}
                  imgUrl={getAssetUrl(t(newsItem.imgUrl))}
                  linkUrl={
                    newsItem.linkUrl
                      ? newsItem.linkUrl.startsWith("http")
                        ? newsItem.linkUrl
                        : t(newsItem.linkUrl)
                      : "#"
                  }
                  isExternalLink={newsItem.isExternalLink}
                  date={
                    newsItem.startDate && newsItem.endDate
                      ? formatDateRange(
                          newsItem.startDate,
                          newsItem.endDate,
                          locale,
                        )
                      : newsItem.startDate
                        ? formatDateLatestNews(newsItem.startDate, locale)
                        : newsItem.date
                          ? formatDateLatestNews(newsItem.date, locale)
                          : ""
                  }
                  location={t(newsItem.location ?? "")}
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
