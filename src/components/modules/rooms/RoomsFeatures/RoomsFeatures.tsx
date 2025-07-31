import { useTranslation } from "next-i18next";
import {
  StyledRoomsFeaturesWrapper,
  StyledRoomsFeatureButtons,
} from "./RoomsFeatures.styled";
import { IRoomsFeatures } from "./RoomsFeatures.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const RoomsFeatures = ({ items }: IRoomsFeatures) => {
  const { t } = useTranslation("RoomsFeatures");

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
              text={item.text}
              position={{ desktop: index % 2 === 1 ? "right" : "left" }}
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
          <StyledRoomsFeatureButtons>
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
          </StyledRoomsFeatureButtons>
        </StyledRoomsFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { RoomsFeatures };
