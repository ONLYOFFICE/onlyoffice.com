import { useTranslation } from "next-i18next";
import { CanceledForm } from "@src/components/modules/canceled/CanceledForm";
import { StyledFormMessage } from "./Form.styled";
import { useState } from "react";
import { checkboxeItems } from "../data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ILocale } from "@src/types/locale";

const Form = ({ locale }: ILocale) => {
  const { t } = useTranslation("canceled");
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Section
      desktopSpacing={["112px", "180px"]}
      tabletSpacing={["112px", "180px"]}
      tabletSmallSpacing={["88px", "95px"]}
      mobileSpacing={["48px", "55px"]}
    >
      <Container>
        <CanceledForm
          tableName="account_cancelled_request"
          textareaHeading={t("WhatShouldWeImproveInOnlyofficePersonal")}
          checkboxeItems={checkboxeItems}
          onShowCoupons={() => setShowMessage(true)}
          locale={locale}
        />
        {showMessage && (
          <StyledFormMessage size={1} label={t("HopeToSeeYouAgain")} />
        )}
      </Container>
    </Section>
  );
};

export { Form };
