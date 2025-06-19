import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledDemoPreview,
  StyledDemoPreviewButton,
  StyledEditorsHeading,
  StyledEditorsItem,
  StyledEditorsSection,
  StyledEditorsTab,
  StyledEditorsTabsWrapper,
  StyledEditorsWrapper,
} from "./Editors.styled";
import { useState } from "react";
import { OnlyOfficeEditor } from "./sub-components/DocumentEditor";
import { DemoPreviewModal } from "./sub-components/DemoPreviewModal";
import { DocumentContent } from "./sub-components/DemoPreviewContent/DocumentContent";
import { FormContent } from "./sub-components/DemoPreviewContent/FormContent";

const Editors = () => {
  const { t } = useTranslation("best-adobe-alternative");
  const [activeTab, setActiveTab] = useState(0);
  const [isDemoPreviewOpen, setIsDemoPreviewOpen] = useState(false);

  return (
    <StyledEditorsSection
      background="#F9F9F9"
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["112px", "0"]}
    >
      <StyledEditorsHeading level={2} label={t("TryItYourself")} />
      <StyledEditorsTabsWrapper>
        <StyledEditorsTab
          $active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        >
          {t("CreateForm")}
        </StyledEditorsTab>
        <StyledEditorsTab
          $active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          {t("FillOutForm")}
        </StyledEditorsTab>
      </StyledEditorsTabsWrapper>
      <StyledEditorsWrapper>
        <Container>
          <StyledDemoPreview level={4} label={t("DemoPreview")} />
          <StyledDemoPreviewButton
            title={t("DemoPreviewTitle")}
            onClick={() => setIsDemoPreviewOpen(true)}
          >
            {"</>"}
          </StyledDemoPreviewButton>
          <StyledEditorsItem>
            <OnlyOfficeEditor
              title={
                activeTab === 0
                  ? "Example Document Title.pdf"
                  : "Example Form Title.pdf"
              }
              edit={activeTab === 0 ? "true" : "false"}
              fillForms={activeTab === 0 ? "false" : "true"}
            />
          </StyledEditorsItem>
        </Container>
        <DemoPreviewModal
          isOpen={isDemoPreviewOpen}
          onClose={() => setIsDemoPreviewOpen(false)}
          heading={
            activeTab === 0 ? `${t("DocxForEditing")}` : `${t("FillOutForm")}`
          }
          content={activeTab === 0 ? <DocumentContent /> : <FormContent />}
        />
      </StyledEditorsWrapper>
    </StyledEditorsSection>
  );
};

export { Editors };
