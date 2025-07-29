import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Installation } from "./sections/Installation";
import { Settings } from "./sections/Settings";
import { Usage } from "./sections/Usage";
import { ShouldKnow } from "./sections/ShouldKnow";
import { Support } from "./sections/Support";
import { Footer } from "./sections/Footer";

const OfficeForMondayTemplate = () => {
  return (
    <>
      <Header />
      <Hero />
      <Installation />
      <Settings />
      <Usage />
      <ShouldKnow />
      <Support />
      <Footer />
    </>
  );
};

export { OfficeForMondayTemplate };
