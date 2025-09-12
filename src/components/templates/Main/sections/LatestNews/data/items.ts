import { INewsCard } from "../sub-components/NewsCard";
import { INewsItem } from "../sub-components/NewsItem";

import { getAssetUrl } from "@utils/getAssetUrl";
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
      imgUrl: getAssetUrl("/images/templates/main/latest-news/docs-9-0.png"),
      linkUrl: "OODocSpaceReleasedLink",
      isExternalLink: false,
      date: "OODocSpaceReleasedDate",
    },
    {
      heading: "OODocsReleased",
      imgUrl: getAssetUrl("/images/templates/main/latest-news/docspace-3-1.png"),
      linkUrl: "OODocsReleasedLink",
      isExternalLink: false,
      date: "OODocsReleasedDate",
    },
  ],
  webinar: [
    {
      className: "latest-news-item-webinar",
      heading: "MeetOODocSpace",
      imgUrl: getAssetUrl("/images/templates/main/latest-news/docs-9-0.png"),
      linkUrl: "https://www.youtube.com/watch?v=rH1sMMwtyPE&ab_channel=ONLYOFFICE",
      isExternalLink: true,
      date: "2025-06-18",
      webinarTime: "11:11",
    },
    {
      heading: "MeetOODocs",
      imgUrl: getAssetUrl("/images/templates/main/latest-news/docspace-3-1.png"),
      linkUrl: "https://www.youtube.com/watch?v=sl9BmWjGtnk&ab_channel=ONLYOFFICE",
      isExternalLink: true,
      date: "2025-04-21",
      isWebinar: true,
      webinarTime: "08:25",
    },
  ],
  events: [
    {
      heading: "FOSSASIASummit2025",
      imgUrl: getAssetUrl("/images/templates/main/latest-news/big-data-and-ai-paris@1x.png"),
      linkUrl: "https://www.bigdataparis.com/",
      isExternalLink: true,
      startDate: "2025-10-01",
      endDate: "2025-10-02",
      location: "LocationEventsParisFrance",
    },
    {
      heading: "TechUniteAfrica",
      imgUrl: getAssetUrl("/images/templates/main/latest-news/gitex-global-2025@1x.png"),
      linkUrl: "https://www.gitex.com/",
      isExternalLink: true,
      startDate: "2025-10-13",
      endDate: "2025-10-17",
      location: "LocationEventsDubaiUAE",
    },
  ],
  wechat: [
    {
      heading: "ONLYOFFICE 桌面编辑器 9.0 版本已发布",
      linkUrl: "https://mp.weixin.qq.com/s/qB-xqKrBED-M6Eqedx-U4A",
      date: "2025-06-20",
    },
    {
      heading: "按需订阅，成本控制就选 ONLYOFFICE",
      linkUrl: "https://mp.weixin.qq.com/s/tlM9d58e_TS8p6kAJ1l8Tg",
      date: "2025-06-17",
    },
    {
      heading: "如何使用Webhook触发器，构建智能工作流",
      linkUrl: "https://mp.weixin.qq.com/s/tnJnHL7nl0_AG0evg2LFpA",
      date: "2025-06-03",
    },
    {
      heading: "如何在Office中用AI生成图片？",
      linkUrl: "https://mp.weixin.qq.com/s/487UksTpGXyqtiOG9Y3Vhg",
      date: "2025-05-30",
    },
    {
      heading: "ONLYOFFICE 文档助力教育行业：实现高效协作与智慧课堂",
      linkUrl: "https://mp.weixin.qq.com/s/AjIt70WekxTsWXtWF5D2tg",
      date: "2025-05-27",
    },
    {
      heading: "信息收集与统计神器！表单填写、数据收集汇总、进度监控全搞定！",
      linkUrl: "https://mp.weixin.qq.com/s/QvU3ZeOUXfv_LUFhKK7IRw",
      date: "2025-05-26",
    },
  ],
};
