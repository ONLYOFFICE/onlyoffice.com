import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  StyledInfoBackLink,
  StyledInfoWrapper,
  StyledInfoBox,
  StyledInfoLogo,
  StyledInfoHeading,
  StyledInfoIcons,
  StyledInfoTrusted,
  StyledInfoAwards,
  StyledInfoAward,
} from "./Info.styled";
import { Text } from "@src/components/ui/Text";
import { IconTooltip } from "@src/components/widgets/IconTooltip";
import { ArrowBackIcon } from "@src/components/icons";
import { icons } from "../../data/icons";

const Info = () => {
  const { t } = useTranslation("docs-registration");
  const router = useRouter();

  useEffect(() => {
    if (document.referrer) {
      localStorage.setItem("previousPage", document.referrer);
    }
  }, []);

  const handleBackToPreviousPage = () => {
    const currentPath = window.location.origin + window.location.pathname;
    const previousPage = localStorage.getItem("previousPage");
    const ref = document.referrer;

    if (previousPage) {
      window.location.href = previousPage;
    } else if (ref && !ref.startsWith(currentPath)) {
      const isInternal = ref.startsWith(window.location.origin);

      if (isInternal) {
        router.push(ref.replace(window.location.origin, ""));
      } else {
        window.location.href = ref;
      }
    } else {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    }
  };

  return (
    <>
      <StyledInfoBackLink onClick={handleBackToPreviousPage}>
        <ArrowBackIcon />
        {t("BackToPreviousPage")}
      </StyledInfoBackLink>

      <StyledInfoWrapper>
        <StyledInfoBox>
          <StyledInfoLogo
            src={router.locale !== "zh" ? "/images/templates/docs-registration/oo_docs.svg" : "/images/templates/docs-registration/oo_docs_zh.svg"}
            alt="ONLYOFFICE DocSpace"
          />
          <StyledInfoHeading level={2}>
            <Trans
              t={t}
              i18nKey="PowerfulOnlineDocumentEditorsForYourBusinessPlatform"
              components={[<Text key={0} as="span" color="#FF6F3D" />]}
            />
          </StyledInfoHeading>

          <StyledInfoIcons>
            {icons.map((item, index) => (
              <IconTooltip
                key={index}
                id={item.id}
                tooltipLabel={t(item.tooltipLabel)}
                href={item.href}
                icon={item.icon}
                width="220px"
              />
            ))}
          </StyledInfoIcons>
        </StyledInfoBox>

        <StyledInfoTrusted>
          <Trans
            t={t}
            i18nKey="TrustedByMore"
            components={[<Text key={0} as="span" color="main" />]}
          />
        </StyledInfoTrusted>

        <StyledInfoAwards>
          <StyledInfoAward $cloudComputing />
          <StyledInfoAward $slashdot />
          <StyledInfoAward $capterra />
        </StyledInfoAwards>
      </StyledInfoWrapper>
    </>
  );
};

export { Info };
