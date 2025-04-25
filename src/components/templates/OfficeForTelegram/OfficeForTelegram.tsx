import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { Features } from "./sections/Features";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForTelegramTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <Features />
      <OtherConnectors />
    </>
  );
};

export { OfficeForTelegramTemplate };
