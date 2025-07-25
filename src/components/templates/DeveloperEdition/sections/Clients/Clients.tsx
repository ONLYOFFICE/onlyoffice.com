import { useTranslation } from "next-i18next";
import {
  StyledContainer,
  ClientsGroup,
  ClientItem,
} from "./Clients.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { clients } from "./data/items";

const Clients = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["94px", "110px"]}
      tabletSpacing={["94px", "110px"]}
    >
      <StyledContainer>
        <Heading level={3}>{t("ClientsTitle")}</Heading>
        <ClientsGroup>
          {clients.map((item, index) => {
            return <ClientItem key={index} $width={item.width} $positionX={item.positionX} />;
          })}
        </ClientsGroup>
      </StyledContainer>
    </Section>
  );
};

export { Clients };
