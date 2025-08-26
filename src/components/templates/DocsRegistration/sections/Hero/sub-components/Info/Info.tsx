import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
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

  const handleBackToPreviousPage = () => {
    const currentPath = window.location.origin + window.location.pathname;
    const ref = document.referrer;

    if (ref && !ref.startsWith(currentPath)) {
      window.location.href = ref;
    } else {
      router.back();
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
            src="/images/templates/docs-registration/oo_docs.svg"
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
