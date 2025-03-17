import { INewsCard } from "../sub-components/NewsCard";
import { INewsItem } from "../sub-components/NewsItem";

interface INewsItems {
  blog: INewsCard[];
  webinar: INewsCard[];
  events: INewsCard[];
  wechat: INewsItem[];
}

export const items: INewsItems = {
  blog: [
    {
      className: "latest-news-item-blog",
      heading: "OODocSpaceReleased",
      imgUrl: "/images/templates/main/latest-news/docspace-3-0.jpg",
      linkUrl: "OODocSpaceReleasedLink",
      isExternalLink: false,
      date: "2024-11-25",
    },
    {
      heading: "OODocsReleased",
      imgUrl: "/images/templates/main/latest-news/docs-8-3.png",
      linkUrl: "OODocsReleasedLink",
      isExternalLink: false,
      date: "2025-02-05",
    },
  ],
  webinar: [
    {
      className: "latest-news-item-webinar",
      heading: "MeetOODocSpace",
      imgUrl: "/images/templates/main/latest-news/docspace-3-0.jpg",
      linkUrl: "https://www.youtube.com/watch?v=zCyzbJkiN0k",
      isExternalLink: true,
      date: "2024-11-25",
      webinarTime: "18:23",
    },
    {
      heading: "MeetOODocs",
      imgUrl: "/images/templates/main/latest-news/docs-8-3.png",
      linkUrl: "https://www.youtube.com/watch?v=nxTIJmsg9iM",
      isExternalLink: true,
      date: "2025-02-05",
      isWebinar: true,
      webinarTime: "13:30",
    },
  ],
  events: [
    {
      heading: "FOSSASIASummit2025",
      imgUrl: "/images/templates/main/latest-news/fossasia-summit-2025.png",
      linkUrl: "https://eventyay.com/e/4c0e0c27",
      isExternalLink: true,
      startDate: "2025-03-13",
      endDate: "2025-03-15",
      location: "Bangkok, Thailand",
    },
    {
      heading: "TechUniteAfrica",
      imgUrl: "/images/templates/main/latest-news/tech-unite-africa-2025.png",
      linkUrl: "https://techuniteafrica.com/",
      isExternalLink: true,
      date: "2025-03-27",
      location: "Lagos, Nigeria",
    },
  ],
  wechat: [
    {
      heading: "如何使用 ONLYOFFICE 文档 8.3 新功能",
      linkUrl: "https://mp.weixin.qq.com/s/GBpGk5pNMgUtptSo30aUYg",
      date: "2025-02-12",
    },
    {
      heading: "ONLYOFFICE 插件开发大赛结果揭晓：四款新插件！",
      linkUrl: "https://mp.weixin.qq.com/s/iBH-GWT2JHLX9k_L4Qq-xA",
      date: "2025-02-10",
    },
    {
      heading: "如何在 ONLYOFFICE 中使用 DeepSeek？工作效率直接起飞！",
      linkUrl: "https://mp.weixin.qq.com/s/9l8gnsNzvTWd4RCg0Wen_g",
      date: "2025-02-05",
    },
    {
      heading: "ONLYOFFICE 获得中科方德兼容性官方认证",
      linkUrl: "https://mp.weixin.qq.com/s/bF96gNa6ub4ZfVWb3ayMrA",
      date: "2025-01-23",
    },
    {
      heading: "不容错过！ ONLYOFFICE 开发者社区期待你的加入！",
      linkUrl: "https://mp.weixin.qq.com/s/pPsJKY-ZgPeTDSG0PKchCQ",
      date: "2025-01-17",
    },
    {
      heading: "AI+ONLYOFFICE：定制您的智能办公助手！",
      linkUrl: "https://mp.weixin.qq.com/s/Gf-Pkhy5M5KmoaavAg3bXg",
      date: "2025-01-06",
    },
  ],
};
