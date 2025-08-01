import { Trans, useTranslation } from "next-i18next";
import * as S from "./Contact.styled";
import { Link } from "@src/components/ui/Link";

const Contact = () => {
  const { t } = useTranslation("education");

  return (
    <S.StyledContactSection
      background="#333333"
      tabletSmallSpacing={["88px", "88px"]}
    >
      <S.StyledContactContainer>
        <S.StyledContactContect>
          <S.StyledContactHeading
            level={4}
            size={4}
            label={t("NeedToDiscuss")}
          />
          <S.StyledContactText size={2}>
            <Trans
              t={t}
              i18nKey="PleaseContact"
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </S.StyledContactText>
        </S.StyledContactContect>
      </S.StyledContactContainer>
    </S.StyledContactSection>
  );
};

export { Contact };
