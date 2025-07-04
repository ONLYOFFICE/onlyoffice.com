export interface IContactInfo {
  id: string;
  title: string;
  address: string;
  addressDescription: string;
  phone?: string;
  map: string;
}

export interface IContactMail {
  title: string;
  email: string;
}

export const items: IContactInfo[] = [
  {
    id: "sg",
    title: "SingaporeTitle",
    address: "SingaporeAddress",
    addressDescription: "SingaporeAddressDescription",
    phone: "+65 31656735",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.8126780103676!2d103.8469536!3d1.2864472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190bb5febd0b%3A0x3999e3ace9eb9af!2s68%20Circular%20Rd%2C%20Unit%2002-01%2C%20Singapore%20049422!5e0!3m2!1sen!2sus!4v1649346356408!5m2!1sen!2sus"
  },
  {
    id: "usa",
    title: "UsaTitle",
    address: "UsaAddress",
    addressDescription: "UsaAddressDescription",
    phone: "+1 (972) 301-8440",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6697.633007444701!2d-96.818856!3d32.929446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c20dc81aaaf37%3A0x53a961f5e87dda8!2s13355%20Noel%20Rd%20Suite%3A%201100%2C%20Dallas%2C%20TX%2075240!5e0!3m2!1sen!2sus!4v1649396343935!5m2!1sen!2sus"
  },
  {
    id: "lv",
    title: "LatviaTitle",
    address: "LatviaAddress",
    addressDescription: "LatviaAddressDescription",
    phone: "+371 63399867",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2176.0128857323316!2d24.1223318!3d56.9485805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece2cdaca8445%3A0xd9527599f613e84d!2sErnesta%20Birznieka-Up%C4%AB%C5%A1a%20iela%206-20a%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050%2C%20Latvia!5e0!3m2!1sen!2suk!4v1649396808841!5m2!1sen!2suk"
  },
  {
    id: "uk",
    title: "UkTitle",
    address: "UkAddress",
    addressDescription: "UkAddressDescription",
    phone: "+44 20 3287 1086",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.514641452816!2d-0.1377216840715391!3d51.522119917447505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2931faaaa9%3A0x4b4bf02c5ebcaa42!2sSuite%2012%2C%202nd%20Floor%2C%20Queens%20House%2C%20180%20Tottenham%20Court%20Rd%2C%20London%20W1T%207PD%2C%20UK!5e0!3m2!1sen!2sus!4v1619089226225!5m2!1sen!2sus"
  },
  {
    id: "arm",
    title: "ArmeniaTitle",
    address: "ArmeniaAddress",
    addressDescription: "ArmeniaAddressDescription",
    phone: "+44 20 3287 1086",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.6239312523207!2d44.48216671571772!3d40.15065997970156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc18ad82fe6d%3A0x3ac19e9f6cdc59dd!2s48%2C%202%20Garegin%20Nzhdeh%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1648552733977!5m2!1sen!2sus"
  },
  {
    id: "uz",
    title: "UzbekistanTitle",
    address: "UzbekistanAddress",
    addressDescription: "UzbekistanAddressDescription",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.490751745331!2d69.28894612411385!3d41.3155552559801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d31752ba1d%3A0x77954ec2f5ff9af8!2s6%20Mustaqillik%20Ave%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sru!4v1662463628686!5m2!1sen!2sru"
  },
  {
    id: "ser",
    title: "SerbiaTitle",
    address: "SerbiaAddress",
    addressDescription: "SerbiaAddressDescription",
    phone: "+381 643506512",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.3250509084255!2d20.366677554217976!3d44.712977204901314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6d846747c74f%3A0x959cf8f5a2612522!2z0KHRgtC10LLQsNC90LAg0KTQuNC70LjQv9C-0LLQuNGb0LAgMTEzLCDQkdC10L7Qs9GA0LDQtCwg0KHQtdGA0LHQuNGP!5e0!3m2!1sru!2s!4v1680773663728!5m2!1sen!2s"
  },
  {
    id: "zh",
    title: "ChinaTitle",
    address: "ChinaAddress",
    addressDescription: "ChinaAddressDescription",
    map: "ChinaLocation"
  }
];

export const officeOrderByLang: Record<string, string[]> = {
  default: ["sg", "usa", "lv", "uk", "arm", "sg", "uz", "ser", "zh"],
  eu: ["sg", "lv", "uk", "usa", "arm", "sg", "uz", "ser", "zh"],
  zh: ["zh", "sg", "lv", "uk", "arm", "sg", "uz", "ser"],
  en: ["sg", "uk", "lv", "usa", "arm", "sg", "uz", "ser", "zh"],
};


export const mails: IContactMail[] = [
  {
    title: "SalesQuestions",
    email: "sales@onlyoffice.com"
  },
  {
    title: "PartnerInquiries",
    email: "partners@onlyoffice.com"
  },
  {
    title: "PressInquiries",
    email: "press@onlyoffice.com"
  },
  {
    title: "MarketingInquiries",
    email: "marketing@onlyoffice.com"
  }
];