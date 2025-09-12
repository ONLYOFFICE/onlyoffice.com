import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledStoryItem,
  StyledStoryList
} from "./Story.styled";

const Story = () => {
  const { t } = useTranslation("nonprofit-organizations");

  return (
    <Section>
      <Container>
        <StyledStoryList>
          {items.map((item) => (
            <StyledStoryItem key={item.id}>
              <BlogCard
                heading={{
                  label: t(item.heading)
                }}
                links={[{
                  href: t(item.links.href),
                  label: t(item.links.label)
                }]}
                imgUrl={getAssetUrl(t(item.imgUrl))}
              />
            </StyledStoryItem>
          ))}
        </StyledStoryList>
      </Container>
    </Section>
  );
};

export { Story };