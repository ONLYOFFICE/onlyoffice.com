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
import { useRouter } from "next/router";

const Video = () => {
  const { t } = useTranslation("workspace");
  const { locale } = useRouter();
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
          <StyledVideo $image={t("VideoImageUrl")} onClick={() => setIsOpen(true)} />
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
              src={locale !== "zh" ? "https://www.youtube.com/embed/tTuH1HrxupA?si=TYxrArY6kaleXdJW" : "https://player.bilibili.com/player.html?aid=BV14B4y137LB&bvid=BV14B4y137LB&cid=BV14B4y137LB"}
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
