import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { CardLink } from "@src/components/widgets/CardLink";
import { items } from "./data/items";

import { StyledLearnList } from "./Learn.styled";

const Learn = () => {
  return (
    <Section background="#F9F9F9">
      <Heading
        label="Learn more about ONLYOFFICE Documents for iOS"
        level={2}
        size={3}
        textAlign="center"
      />
      <StyledLearnList>
        {items.map((item) => (
          <CardLink
            key={item.title}
            href={item.href}
            icon={{
              iconUrl: item.image,
              iconWidthDesktop: "100%",
              iconHeightDesktop: "100%",
              iconWidthTabletSmall: "100%",
              iconHeightTabletSmall: "100%",
              iconBlockHeightDesktop: "180px",
              iconBlockHeightTabletSmall: "120px",
            }}
            title={item.title}
            text={item.text}
            subtitle={item.subtitle}
            textAlign="left"
          />
        ))}
      </StyledLearnList>
    </Section>
  );
};

export { Learn };
