import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Cards } from "./sections/Cards";
import { Registration } from "./sections/Registration";

const CertificatesTemplate = ({ locale }: ILocale) => {
  return (
    <section>
      <Hero />
      <Cards locale={locale} />
      <Registration />
    </section>
  );
};

export { CertificatesTemplate };
