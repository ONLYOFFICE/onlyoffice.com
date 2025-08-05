import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledConversionHeading,
  StyledConversionImage,
  StyledConversionText,
  StyledConversionWrapper,
} from "./Conversion.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";

const Conversion = () => {
  const { t } = useTranslation("conversion-api");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]} background="#333333">
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
              href={`mailto:sales@onlyoffice.com?subject=${t("ConversionApiLinkSubject")}`}
              label={t("GetInTouch")}
            />
          </div>
          <StyledConversionImage />
        </StyledConversionWrapper>
      </Container>
    </Section>
  );
};

export { Conversion };
