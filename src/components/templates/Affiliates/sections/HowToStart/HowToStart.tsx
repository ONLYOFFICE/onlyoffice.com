import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartHeading } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const HowToStart = () => {
  const { t } = useTranslation("affiliates");

  return (
    <StyledHowToStart tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledHowToStartHeading
          level={2}
          textAlign="center"
          label={t("HowToStart")}
        />
        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={[
                  <Text as="span" color="#333" fontWeight={700} key="0" />,
                ]}
              />
            ),
          }))}
        />
        <Button
          id="how-to-start-register"
          className="register-button"
          as="a"
          href="https://ascensio-systems-pte-ltd.getrewardful.com/signup"
          target="_blank"
          label={t("Regitster")}
        />
        <Text
          label={t("BecomeAnOOPartner")}
          fontSize="14px"
          lineHeight="21px"
          color="#808080"
          textAlign="center"
        />
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
