import { IDocsHomeServerTemplate } from "@src/components/templates/DocsHomeServer";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const DocsHomeServerTemplate = ({
  locale,
  productsData,
}: IDocsHomeServerTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { DocsHomeServerTemplate };
