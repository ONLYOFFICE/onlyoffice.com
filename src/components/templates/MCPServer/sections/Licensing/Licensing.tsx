import { StyledSection, Left, StyledImage, StyledContainer } from "./Licensing.styled";
import { useTranslation, Trans } from "next-i18next";
import { useState, useEffect } from "react";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

//import { getAssetUrl } from "@utils/getAssetUrl";
const Licensing = () => {
  const { t } = useTranslation("mcp-server");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledSection>
      <StyledContainer>
        <Left>
          <Heading level={2}>{t("LicensingTitle")}</Heading>
          {mobile && (
            <StyledImage
              $src={"/images/templates/mcp-server/licensing/apache.svg"}
            />
          )}
          <Text>
            <Trans
              t={t}
              i18nKey="LicensingDescription"
              components={[<Text as="span" fontWeight={700} key={0} />]}
            />
          </Text>
        </Left>
        {!mobile && (
          <StyledImage
            $src={"/images/templates/mcp-server/licensing/apache.svg"}
          />
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export { Licensing };
