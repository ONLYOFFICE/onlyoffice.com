import { useTranslation } from "next-i18next";
import { Trans } from "react-i18next";
import {
  StyledDocspaceCreateContent,
  StyledBackButton,
  StyledDocspaceLogo,
  StyledDocspaceCC,
  StyledFeatures,
  StyledFeaturesList,
  StyledFeatureIcon,
  StyledTrusted,
  StyledTrustedIcon,
  StyledTrustedText,
  StyledOrangeText,
  StyledAwards,
  StyledAwardsList,
  StyledAwardIcon
} from "./DocspaceCreateContent.styled";
import Link from "next/link";

const DocspaceCreateContent = () => {
  const { t } = useTranslation("docspace-registration");

  const features = [
    { id: "cl", title: "Collaboration" },
    { id: "cst", title: "Custom" },
    { id: "ff", title: "Form Filling" },
    { id: "mt", title: "Meeting" },
    { id: "pub", title: "Public" },
    { id: "de", title: "Documents Edition" }
  ];

  const awards = [
    { id: "cc", title: "Capterra" },
    { id: "sd", title: "Software Advice" },
    { id: "ct", title: "GetApp" }
  ];

  return (
    <StyledDocspaceCreateContent>
      <StyledDocspaceCC>
        <div>
          <StyledBackButton onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = '/';
            }
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H1" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 15L1 8L8 1" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t("BackToPrevious")}
          </StyledBackButton>
          
          <StyledDocspaceLogo />
          
          <h1>{t("CreateDocspace")}</h1>
          
          <StyledFeatures>
            <h4>{t("Features")}</h4>
            <StyledFeaturesList>
              {features.map((feature) => (
                <li key={feature.id}>
                  <StyledFeatureIcon type={feature.id} title={feature.title} />
                </li>
              ))}
            </StyledFeaturesList>
          </StyledFeatures>
        </div>
        
        <div>
          <StyledTrusted>
            <StyledTrustedIcon />
            <StyledTrustedText>
              Trusted by <StyledOrangeText>more than 10 million</StyledOrangeText> users worldwide
            </StyledTrustedText>
          </StyledTrusted>
          
          <StyledAwards>
            <h4>{t("Awards")}</h4>
            <StyledAwardsList>
              {awards.map((award) => (
                <li key={award.id}>
                  <StyledAwardIcon type={award.id} title={award.title} />
                </li>
              ))}
            </StyledAwardsList>
          </StyledAwards>
        </div>
      </StyledDocspaceCC>
    </StyledDocspaceCreateContent>
  );
};

export { DocspaceCreateContent };
