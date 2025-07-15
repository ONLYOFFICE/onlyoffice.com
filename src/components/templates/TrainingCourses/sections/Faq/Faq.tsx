import { useCallback, useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledFaqHeading,
  StyledFaqItem,
  StyledFaqItemHeading,
  StyledFaqItemText,
  StyledFaqItemTextWrapper,
  StyledFaqList
} from "./Faq.styled";

const Faq = () => {
  const { t } = useTranslation("training-courses");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const textContentRefs = useRef<Record<number, HTMLParagraphElement | null>>({});

  const toggleItem = useCallback((id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }, [])

  useEffect(() => {
    Object.entries(openItems).forEach(([id, isOpen]) => {
      const ref = textContentRefs.current[+id];
      if (ref) {
        if (isOpen) {
          const scrollHeight = ref.scrollHeight;
          ref.style.maxHeight = scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openItems]);

  return (
    <Section>
      <Container>
        <StyledFaqHeading
          level={2}
          size={3}
          label={t("FAQ")}
        />
        <StyledFaqList>
          {items.map((item) => {
            const isOpen = openItems[item.id] ?? false

            return (
              <StyledFaqItem
                key={item.id}
                onClick={() => toggleItem(item.id)}
              >
                <StyledFaqItemHeading
                  $isOpen={isOpen}
                  level={3}
                  size={5}
                  label={t(item.title)}
                />
                <StyledFaqItemTextWrapper
                  ref={(el) => {
                    textContentRefs.current[item.id] = el
                  }}
                >
                  <StyledFaqItemText>
                    <Trans t={t} i18nKey={item.description} components={[
                      <Link
                        key={0}
                        href="mailto:sales@onlyoffice.com"
                        textUnderline={true}
                        hover="underline-none"
                        color="main"
                      />
                    ]}
                  />
                  </StyledFaqItemText>
                </StyledFaqItemTextWrapper>
              </StyledFaqItem>
            )
          })}
        </StyledFaqList>
      </Container>
    </Section>
  );
};

export { Faq };