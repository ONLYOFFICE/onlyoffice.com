import { ISwitcherItems } from "../../../DocSpaceDeveloper.types";

const items: ISwitcherItems[] = [
  {
    title: "SwitcherItemTitle1",
    text: "SwitcherItemText1",
    link: {
      label: "SwitcherItemLink1",
      href: "https://api.onlyoffice.com/docspace/javascript-sdk/get-started/basic-concepts/"
    },
    img: {
      url: "SwitcherItemImgUrl1",
      url2x: "SwitcherItemImgUrl2x1"
    }
  },
  {
    title: "SwitcherItemTitle2",
    text: "SwitcherItemText2",
    link: {
      label: "SwitcherItemLink2",
      href: "mailto:sales@onlyoffice.com"
    },
    img: {
      url: "SwitcherItemImgUrl2",
      url2x: "SwitcherItemImgUrl2x2"
    }
  },
  {
    title: "SwitcherItemTitle3",
    text: "SwitcherItemText3",
    link: {
      label: "SwitcherItemLink3",
      href: "/download-developer#docspace-developer"
    },
    img: {
      url: "SwitcherItemImgUrl3",
      url2x: "SwitcherItemImgUrl2x3"
    }
  },
  {
    title: "SwitcherItemTitle4",
    text: "SwitcherItemText4",
    img: {
      url: "SwitcherItemImgUrl4",
      url2x: "SwitcherItemImgUrl2x4"
    }
  },
]

export { items };