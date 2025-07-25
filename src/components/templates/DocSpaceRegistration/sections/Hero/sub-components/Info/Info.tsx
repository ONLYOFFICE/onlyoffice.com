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
  const { t } = useTranslation("docspace-registration");
  const router = useRouter();

  return (
    <>
      <StyledInfoBackLink onClick={() => router.back()}>
        <ArrowBackIcon />
        {t("BackToPreviousPage")}
      </StyledInfoBackLink>

      <StyledInfoWrapper>
        <StyledInfoBox>
          <StyledInfoLogo
            src="/images/templates/docspace-registration/hero/logo.svg"
            alt="ONLYOFFICE DocSpace"
          />
          <StyledInfoHeading level={2}>
            <Trans
              t={t}
              i18nKey="SecureSpaceForAllYourDocuments"
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
