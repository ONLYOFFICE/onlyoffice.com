import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledIntegrateAiBtnsWrapper,
  StyledIntegrateAiContent,
  StyledIntegrateAiImage,
  StyledIntegrateAiSection,
  StyledIntegrateAiWrapper,
} from "./IntegrateAi.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { integrate } from "./data/integrate";

const IntegrateAi = () => {
  const { t } = useTranslation("ai-assistants");

  return (
    <>
      {integrate.map((item, index) => (
        <StyledIntegrateAiSection key={index}>
          <Container>
            <StyledIntegrateAiWrapper>
              <StyledIntegrateAiContent>
                <Heading
                  level={3}
                  size={3}
                  color="#ffffff"
                  label={t(String(item.heading))}
                />
                <Text size={1} color="#f5f5f5" label={t(String(item.text))} />
                <StyledIntegrateAiBtnsWrapper>
                  {item.buttons.map((button, index) => (
                    <Button
                      key={index}
                      as="a"
                      href={button.href}
                      variant={index === 0 ? "primary" : "quaternary"}
                      label={t(String(button.label))}
                    />
                  ))}
                </StyledIntegrateAiBtnsWrapper>
              </StyledIntegrateAiContent>
              <StyledIntegrateAiImage $image={item.image} />
            </StyledIntegrateAiWrapper>
          </Container>
        </StyledIntegrateAiSection>
      ))}
    </>
  );
};

export { IntegrateAi };
