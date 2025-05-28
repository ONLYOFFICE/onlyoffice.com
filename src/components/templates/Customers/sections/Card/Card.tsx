import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { ICustomers } from "../../Customers.types";
import { useFixUrl } from "./utils/useFixUrl";

import { StyledCardButton, StyledCardList } from "./Card.styled";

const Card = ({ customers }: ICustomers) => {
  const { t } = useTranslation("customers");
  const { fixUrlData } = useFixUrl({customers});
  const [showMore, setShowMore] = useState<boolean>(true);

  return (
    <Section background="#F9F9F9">
      <Container maxWidth="1007px">
        <StyledCardList>
          {showMore ? fixUrlData.slice(0, 8).map((item) => (
            <StoryCard
              key={item.id}
              linkUrl={item.url}
              heading={item.title}
              imgUrl={item.img?.[0]?.url}
            />
          )) :
            fixUrlData.map((item) => (
              <StoryCard
                key={item.id}
                linkUrl={item.url}
                heading={item.title}
                imgUrl={item.img?.[0]?.url}
              />
          ))}
        </StyledCardList>
        {fixUrlData.length > 8 && (
          <StyledCardButton
            variant="tertiary"
            borderRadius="3px"
            label={showMore ? t("TrustedButtonShowMore") : t("TrustedButtonShowLess")}
            onClick={() => setShowMore(!showMore)}
          />
        )}
      </Container>
    </Section>
  );
};

export { Card };