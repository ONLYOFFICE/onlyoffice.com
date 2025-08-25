import { useEffect, useState } from "react";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

import {
  StyledAlreadyButtonsWrapper,
  StyledAlreadyHeading,
  StyledAlreadyImage,
  StyledAlreadyText
} from "./Already.styled";

const Already = () => {
  const { t } = useTranslation("nonprofit-organizations");
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <StyledAlreadyHeading
          level={2}
          textAlign="center"
          $isVisible={visible}
        >
          {t("AlreadyUse")} <span> {t(items[index])}</span>?
        </StyledAlreadyHeading>
        <StyledAlreadyText
          size={1}
          textAlign="center"
          label={t("ConnectONLYOFFICEDocsToCollaborate")}
        />
        <StyledAlreadyButtonsWrapper>
          <Button
            label={t("GetItNow")}
            variant="primary"
            borderRadius="3px"
          />
          <Button
            label={t("RequestADiscount")}
            variant="tertiary"
            borderRadius="3px"
          />
        </StyledAlreadyButtonsWrapper>
        <StyledAlreadyImage />
      </Container>
    </Section>
  );
};

export { Already };