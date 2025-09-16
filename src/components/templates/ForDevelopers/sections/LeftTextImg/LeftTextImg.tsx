import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledLeftTextImgHeading,
  StyledLeftTextImgImage,
  StyledLeftTextImgSection,
  StyledLeftTextImgText,
  StyledLeftTextImgWrapper,
  StyledLeftTextImgTextAfter,
} from "./LeftTextImg.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const LeftTextImg = ({ locale }: ILocale) => {
  const { t } = useTranslation("for-developers");

  return (
    <StyledLeftTextImgSection tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledLeftTextImgWrapper>
          <div>
            <StyledLeftTextImgHeading
              level={2}
              label={t("AddYourServiceAsAPlugin")}
            />
            <StyledLeftTextImgText>
              <Trans
                t={t}
                i18nKey="ThinkYourWebServiceCanBeUseful"
                components={[
                  <Link
                    href="https://api.onlyoffice.com/docspace/plugins-sdk/get-started/"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                    target="_blank"
                  />,
                  <Link
                    href="https://api.onlyoffice.com/docs/plugin-and-macros/get-started/"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="1"
                    target="_blank"
                  />,
                ]}
              />
            </StyledLeftTextImgText>
            <Button
              as="a"
              variant="quaternary"
              id="app-directory-for-developers"
              href={getLink("marketplace", locale)}
              label={t("AvailablePlugins")}
              textTransform="uppercase"
              fontSize="13px"
            />
            <StyledLeftTextImgTextAfter>
              <Trans
                t={t}
                i18nKey="WantToDiscussOrSubmitAPlugin"
                components={[
                  <Link
                    href="mailto:marketing@onlyoffice.com"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                    target="_blank"
                  />,
                ]}
              />
            </StyledLeftTextImgTextAfter>
          </div>
          <StyledLeftTextImgImage />
        </StyledLeftTextImgWrapper>
      </Container>
    </StyledLeftTextImgSection>
  );
};

export { LeftTextImg };
