import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { FAQ } from "./sections/FAQ";
import { Testimonials } from "./sections/Testimonials";
import { Download } from "./sections/Download";
import { Cards } from "./sections/Cards";
import { items } from "./data/items";
import { Suitable } from "./sections/Suitable";
import { Connectors } from "./sections/Connectors";

const SolutionsTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Download />
      <Connectors />
      <Cards bg={items[0].bg} title={items[0].title} items={items[0].items} />
      <Suitable />
      <Cards bg={items[1].bg} title={items[1].title} items={items[1].items} />
      <Testimonials />
      <FAQ />
    </>
  );
};

export { SolutionsTemplate };
