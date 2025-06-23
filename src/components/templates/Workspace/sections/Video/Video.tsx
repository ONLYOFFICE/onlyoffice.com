import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledVideo,
  StyledVideoContent,
  StyledVideoDescription,
  StyledVideoTitle,
  StyledVideoWrapper,
  StyledWatchVideoModal,
} from "./Video.styled";
import { Modal } from "@src/components/ui/Modal";
import { useState } from "react";

const Video = () => {
  const { t } = useTranslation("workspace");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section
      as="div"
      desktopSpacing={["56px", "112px"]}
      tabletSpacing={["56px", "112px"]}
      tabletSmallSpacing={["16px", "88px"]}
    >
      <Container>
        <StyledVideoWrapper>
          <StyledVideo onClick={() => setIsOpen(true)} />
          <StyledVideoContent>
            <StyledVideoTitle level={5}>
              <span>{t("OOWorkspace")}</span>
              <span>{t("OOWorkspaceMobile")}</span>
            </StyledVideoTitle>
            <StyledVideoDescription size={3} label={t("OOWorkspaceText")} />
          </StyledVideoContent>
        </StyledVideoWrapper>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          maxWidth="1100px"
          withCloseBtn
        >
          <StyledWatchVideoModal>
            <iframe
              src="https://www.youtube.com/embed/tTuH1HrxupA?si=TYxrArY6kaleXdJW"
              allow="encrypted-media"
              allowFullScreen={true}
            ></iframe>
          </StyledWatchVideoModal>
        </Modal>
      </Container>
    </Section>
  );
};

export { Video };
