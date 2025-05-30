import { useTranslation } from "next-i18next";
import {
  StyledConnectors,
  StyledConnectorsItems,
} from "./Connectors.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { connectorsItems } from "./data/connectorsItems";

const Connectors = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section
      background="#f9f9f9"
      tabletSpacing={["80px", "112px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <StyledConnectors>
          <StyledConnectorsItems>
            {connectorsItems.map((item, index) => (
              <li key={index}>
                <div
                  style={{
                    width: item.image.width, 
                    height: item.image.height, 
                    backgroundImage: `url(${item.image.url})`, 
                    backgroundPosition: item.image.positionX, 
                    backgroundSize: '840px auto', 
                    backgroundRepeat: 'no-repeat', 
                  }}
                />
              </li>
            ))}
          </StyledConnectorsItems>
        </StyledConnectors>
      </Container>
    </Section>
  );
};

export { Connectors };
