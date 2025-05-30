import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledConversionHeading,
  StyledConversionImage,
  StyledConversionSection,
  StyledConversionText,
  StyledConversionWrapper,
} from "./LeftTextImg.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const LeftTextImg = () => {
  const { t } = useTranslation("for-developers");

  return (
    <StyledConversionSection tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledConversionWrapper>
          <div>
            <StyledConversionHeading
              level={2}
              label={t("PartOfOODocsDeveloper")}
            />
            <StyledConversionText>
              <Trans
                t={t}
                i18nKey="BringAdvancedDocument"
                components={[
                  <Link
                    href="/developer-edition"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                ]}
              />
            </StyledConversionText>
            <Button
              as="a"
              href="mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20Conversion%20API%20request"
              label={t("GetInTouch")}
            />
          </div>
          <StyledConversionImage />
        </StyledConversionWrapper>
      </Container>
    </StyledConversionSection>
  );
};

export { LeftTextImg };
