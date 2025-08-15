import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { FAQ } from "./sections/FAQ";
import { Testimonials } from "./sections/Testimonials";
import { Download } from "./sections/Download";

const SolutionsTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Download />
      <Testimonials />
      <FAQ />
    </>
  );
};

export { SolutionsTemplate };
