export interface ICarouselItems {
  id: string;
  title: string;
  icon: {
    url: string;
    urlActive: string;
  };
  description: string;
  image: {
    url: string;
    url2x: string;
  };
  linkLabel: string;
  href: string;
  isComingSoon?: boolean;
}

export const carouselItems: ICarouselItems[] = [
  {
    id: "collaboration-rooms",
    title: "SliderTitle1",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/collaboration-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/collaboration-icon-active.svg",
    },
    description: "SliderDescription1",
    image: {
      url: "SliderScreen1Url",
      url2x: "SliderScreen1Url2x",
    },
    linkLabel: "LearnMore",
    href: "/collaboration-rooms",
  },
  {
    id: "meeting-rooms",
    title: "SliderTitle2",
    description: "SliderDescription2",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/meeting-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/meeting-icon-active.svg",
    },
    image: {
      url: "SliderScreen2Url",
      url2x: "SliderScreen2Url2x",
    },
    linkLabel: "LearnMore",
    href: "/office-for-zoom",
  },
  {
    id: "public-rooms",
    title: "SliderTitle3",
    description: "SliderDescription3",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/public-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/public-icon-active.svg",
    },
    image: {
      url: "SliderScreen3Url",
      url2x: "SliderScreen3Url2x",
    },
    linkLabel: "LearnMore",
    href: "/public-rooms",
  },
  {
    id: "custom-rooms",
    title: "SliderTitle4",
    description: "SliderDescription4",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/custom-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/custom-icon-active.svg",
    },
    image: {
      url: "SliderScreen4Url",
      url2x: "SliderScreen4Url2x",
    },
    linkLabel: "LearnMore",
    href: "/custom-rooms",
  },
  {
    id: "form-filling-rooms",
    title: "SliderTitle5",
    description: "SliderDescription5",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/form-fill-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/form-fill-icon-active.svg",
    },
    image: {
      url: "SliderScreen5Url",
      url2x: "SliderScreen5Url2x",
    },
    linkLabel: "LearnMore",
    href: "/form-filling-rooms",
  },
  {
    id: "virtual-data-rooms",
    title: "SliderTitle6",
    description: "SliderDescription6",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/virtual-data-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/virtual-data-icon-active.svg",
    },
    image: {
      url: "SliderScreen6Url",
      url2x: "SliderScreen6Url2x",
    },
    linkLabel: "LearnMore",
    href: "/virtual-data-rooms",
  },
  {
    id: "private-rooms",
    title: "SliderTitle7",
    description: "SliderDescription7",
    icon: {
      url: "/images/templates/docspace/collaborate/icons/private-icon.svg",
      urlActive:
        "/images/templates/docspace/collaborate/icons/private-icon-active.svg",
    },
    image: {
      url: "SliderScreen7Url",
      url2x: "SliderScreen7Url2x",
    },
    linkLabel: "LearnMore",
    href: "/private-rooms",
    isComingSoon: true,
  },
];