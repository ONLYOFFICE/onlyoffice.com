import { Section } from "@src/components/ui/Section";
import { StoryCard } from "@src/components/widgets/StoryCard";
// import { getCustomers } from "./lib/getCustomers";

import { StyledCardContainer } from "./Card.styled";

const Card = () => {
  // const what = getCustomers("en");
  // console.log(what);

  return (
    <Section background="#F9F9F9">
      <StyledCardContainer>
        <StoryCard
          linkUrl={"url"}
          heading={"How the Karlsruhe Institute of Technology makes collaboration easier with ONLYOFFICE integrated into bwSync&Share service "}
          imgUrl={"https://static-www.onlyoffice.com/v9.5.0/images/clients/customer-stories/agriplace.png"}
        />
      </StyledCardContainer>
    </Section>
  );
};

export { Card };