import { Trans, useTranslation } from "next-i18next";
import {
  StyledRoomsFeaturesWrapper,
  StyledRoomsFeatureButtons,
} from "@src/components/modules/rooms/RoomsFeatures/RoomsFeatures.styled";
import { IEditorsFeatures } from "./EdtorsFeatures.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const EditorsFeatures = ({ items, buttons }: IEditorsFeatures) => {
  const { t } = useTranslation("Editors");

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledRoomsFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureImageItem
              key={index}
              heading={item.heading}
              text={
                <Trans
                  t={t}
                  components={[<span key={0} style={{ fontWeight: "bold" }} />, <span key={1} style={{ fontWeight: "bold" }} />]}
                >
                  {item.text}
                </Trans>
              }
              position={{ desktop: index % 2 === 1 ? "left" : "right" }}
              links={item.links?.map((link) => ({
                ...link,
                label: link.label,
              }))}
              image={{
                url: item.image.url,
                url2x: item.image.url2x,
                height: item.image.height,
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
        </StyledRoomsFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { EditorsFeatures };
