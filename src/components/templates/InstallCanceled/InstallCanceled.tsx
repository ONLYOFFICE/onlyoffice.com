import { CanceledHero } from "@src/components/modules/canceled/CanceledHero";
import { Form } from "./sections/Form";
import { ILocale } from "@src/types/locale";

const InstallCanceledTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <CanceledHero locale={locale} />
      <Form locale={locale} />
    </>
  );
};

export { InstallCanceledTemplate };
