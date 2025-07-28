import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";
import { Cards } from "./sections/Cards";
import { WhitePapersInput } from "./sub-component/WhitePapersInput";
import { ILocale } from "@src/types/locale";

const WhitePapersTemplate = ({ locale }: ILocale) => {
  const [value, setValue] = useState("");

  return (
    <>
      <WhitePapersInput value={value} setValue={setValue} />
      <Hero />
      <Cards sortValue={value} locale={locale} />
      <Join />
    </>
  );
};

export { WhitePapersTemplate };