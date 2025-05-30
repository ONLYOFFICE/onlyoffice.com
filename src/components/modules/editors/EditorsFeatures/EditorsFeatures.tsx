import { Trans, useTranslation } from "next-i18next";
import {
  StyledRoomsFeaturesWrapper,
  StyledRoomsFeatureButtons,
} from "@src/components/modules/rooms/RoomsFeatures/RoomsFeatures.styled";
import { IEditorsFeatures } from "./EditorsFeatures.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { EditorsImageItem } from "./sub-components/EditorsImageItem/EditorsImageItem";
import { VideoModal } from "@src/components/modules/editors/EditorsFeatures/sub-components/VideoModal";
import { useState } from "react";

const EditorsFeatures = ({ items, buttons }: IEditorsFeatures) => {
  const { t } = useTranslation("Editors");
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledRoomsFeaturesWrapper>
          {items.map((item, index) => (
            <EditorsImageItem
              key={index}
              item={{
                ...item,
                position: { desktop: index % 2 === 1 ? "left" : "right" },
                text: (
                  <Trans
                    t={t}
                    components={[
                      <span key={0} style={{ fontWeight: "bold" }} />,
                      <span key={1} style={{ fontWeight: "bold", fontStyle: "italic" }} />,
                      <span key={2} style={{ display: "block" }} />,
                    ]}
                  >
                    {item.text}
                  </Trans>
                ),
              }}
              openVideo={(url) => {
                setVideoUrl(url);
                setIsOpen(true);
              }}
            />
          ))}
          {buttons && (
            <StyledRoomsFeatureButtons>
              <Button
                id="features-run-on-your-own-server"
                as="a"
                href="/download#docs-enterprise"
                label={t("RunOnYourOwnServer")}
              />
              <Button
                id="features-see-it-in-action"
                as="a"
                href="/see-it-in-action"
                variant="secondary"
                label={t("SeeItInAction")}
              />
            </StyledRoomsFeatureButtons>
          )}
          <VideoModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            videoUrl={videoUrl}
          />
        </StyledRoomsFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { EditorsFeatures };
