import { CanceledHero } from "@src/components/modules/canceled/CanceledHero";
import { Form } from "./sections/Form";
import { ILocale } from "@src/types/locale";

const AccountCanceledTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <CanceledHero locale={locale} />
      <Form locale={locale} />
    </>
  );
};

export { AccountCanceledTemplate };
