import { Trans, useTranslation } from "next-i18next";
import { CanceledForm } from "@src/components/modules/canceled/CanceledForm";
import { StyledFormMessage } from "./Form.styled";
import { useState } from "react";
import { checkboxeItems } from "../data/checkboxes";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ILocale } from "@src/types/locale";
import { CanceledCoupon } from "@src/components/modules/canceled/CanceledCoupon";
import { Text } from "@src/components/ui/Text";

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
          apiUrl="/api/registration-canceled"
          textareaHeading={t("WhatShouldWeImproveInOnlyoffice")}
          checkboxeItems={checkboxeItems}
          onShowCoupons={() => setShowMessage(true)}
          locale={locale}
        />
        {showMessage && (
          <StyledFormMessage>
            <CanceledCoupon
              text={
                <Trans
                  t={t}
                  i18nKey="IfYouDecideToGetBack"
                  components={[<Text as="span" color="main" key={0} />]}
                />
              }
              validation={t("TheCoupon")}
            />
          </StyledFormMessage>
        )}
      </Container>
    </Section>
  );
};

export { Form };
