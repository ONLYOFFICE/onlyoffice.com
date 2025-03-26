import { useTranslation } from "next-i18next";
import {
  StyledRoomFeaturesWrapper,
  StyledRoomFeatureButtons,
} from "./RoomFeatures.styled";
import { IRoomFeatures } from "./RoomFeatures.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const RoomFeatures = ({ items }: IRoomFeatures) => {
  const { t } = useTranslation("RoomFeatures");

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledRoomFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureImageItem
              key={index}
              title={item.title}
              text={item.text}
              position={index % 2 === 1 ? "right" : "left"}
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
          <StyledRoomFeatureButtons>
            <Button
              id="features-register-a-free-account"
              as="a"
              href="/docspace-registration"
              label={t("RegisterAFreeAccount")}
            />
            <Button
              id="features-try-on-premise"
              as="a"
              href="/download#docspace-enterprise"
              variant="secondary"
              label={t("TryOnPremise")}
            />
          </StyledRoomFeatureButtons>
        </StyledRoomFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { RoomFeatures };
