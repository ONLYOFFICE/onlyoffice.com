import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ICustomers } from "../../Customers.types";
import { useFixUrl } from "./utils/useFixUrl";

import { StyledCardButton, StyledCardHeading, StyledCardImg, StyledCardItem, StyledCardList } from "./Card.styled";

const Card = ({ customers }: ICustomers) => {
  const { t } = useTranslation("customers");
  const { fixUrlData } = useFixUrl({customers});
  const [showMore, setShowMore] = useState<boolean>(true);

  return (
    <Section background="#F9F9F9">
      <Container maxWidth="1007px">
        <StyledCardList>
          {fixUrlData.map((item) => (
            <StyledCardItem key={item.id} href={item.url} target="_blank" $showMore={showMore}>
              <StyledCardImg $imgUrl={item.img?.[0]?.url} />
              <StyledCardHeading label={item.title} level={4} size={5} />
            </StyledCardItem>
          ))}
        </StyledCardList>
        {fixUrlData.length > 6 && (
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