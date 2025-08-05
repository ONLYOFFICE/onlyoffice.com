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

const LeftTextImg = () => {
  const { t } = useTranslation("automation-api");

  return (
    <StyledLeftTextImgSection tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledLeftTextImgWrapper>
          <StyledLeftTextImgImage />
          <div>
            <StyledLeftTextImgHeading
              level={2}
              label={t("HowToGetONLYOFFICEAutomationAPI")}
            />
            <StyledLeftTextImgText>
              <Trans
                t={t}
                i18nKey="AutomationAPISsAPartOf"
                components={[
                  <Link
                    href="/developer-edition.aspx"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                  <Link
                    href="/developer-edition-prices.aspx"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="1"
                  />,
                ]}
              />
            </StyledLeftTextImgText>
            <StyledLeftTextImgTextAfter>
              <Trans
                t={t}
                i18nKey="GetA30DayTrial"
                components={[
                  <b key="0"></b>,
                ]}
              />
            </StyledLeftTextImgTextAfter>
            <Button
              as="a"
              id="app-directory-for-developers"
              href="/download-developer.aspx#docs-developer"
              label={t("DownloadNow")}
            />
          </div>
        </StyledLeftTextImgWrapper>
      </Container>
    </StyledLeftTextImgSection>
  );
};

export { LeftTextImg };
