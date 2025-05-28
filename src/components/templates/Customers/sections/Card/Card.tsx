import { Section } from "@src/components/ui/Section";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { ICustomers } from "../../Customers.types";
import { useFixUrl } from "./utils/useFixUrl";

import { StyledCardContainer } from "./Card.styled";

const Card = ({ customers }: ICustomers) => {
  const { fixUrlData } = useFixUrl({customers});

  return (
    <Section background="#F9F9F9">
      <StyledCardContainer maxWidth="1007px">
        {fixUrlData.map((item) => (
          <StoryCard
            key={item.id}
            linkUrl={item.url}
            heading={item.title}
            imgUrl={item.img?.[0]?.url}
          />
        ))}
      </StyledCardContainer>
    </Section>
  );
};

export { Card };