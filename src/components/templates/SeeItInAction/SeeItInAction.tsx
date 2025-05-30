import { Hero } from "./sections/Hero";
import { Actions } from "./sections/Actions";
import { GetStarted } from "@src/components/modules/GetStarted";

const SeeItInActionTemplate = () => {
  return (
    <>
      <Hero />
      <Actions />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF;" />
    </>
  );
};

export { SeeItInActionTemplate };
