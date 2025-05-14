import { IDocSpaceFamilyPackTemplate } from "@src/components/templates/DocSpaceFamilyPack";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const DocSpaceFamilyPackTemplate = ({
  locale,
  productsData,
}: IDocSpaceFamilyPackTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { DocSpaceFamilyPackTemplate };
