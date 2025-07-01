import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";
import { WhitepapersInput } from "./sub-component/WhitepapersInput";

const WhitepapersTemplate = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <WhitepapersInput value={value} setValue={setValue} />
      <Hero />
      <Join />
    </>
  );
};

export { WhitepapersTemplate };