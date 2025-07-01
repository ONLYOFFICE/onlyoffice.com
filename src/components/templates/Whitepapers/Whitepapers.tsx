import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";
import { Cards } from "./sections/Cards";
import { WhitepapersInput } from "./sub-component/WhitepapersInput";

const WhitepapersTemplate = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <WhitepapersInput value={value} setValue={setValue} />
      <Hero />
      <Cards />
      <Join />
    </>
  );
};

export { WhitepapersTemplate };