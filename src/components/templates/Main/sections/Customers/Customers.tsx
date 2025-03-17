import { useTranslation } from "next-i18next";
import {
  StyledCustomers,
  StyledCustomersHeading,
  StyledCustomersItems,
  StyledSuccessStoriesItems,
  StyledSuccessStoriesLinkWrapper,
} from "./Customers.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { customersItems } from "./data/customersItems";
import { successStoriesItems } from "./data/successStoriesItems";

const Customers = () => {
  const { t } = useTranslation("main");

  return (
    <Section
      bgColor="#f5f5f5"
      tabletSpacing={["80px", "112px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <StyledCustomers>
          <StyledCustomersHeading
            level={3}
            label={t("TrustedByMore")}
            textAlign="center"
          />
          <StyledCustomersItems>
            {customersItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.imgUrl}
                  alt={item.heading}
                  width={item.width}
                  height={item.height}
                />
              </li>
            ))}
          </StyledCustomersItems>
          <Link
            id="more-customers"
            href="/customers?from=default"
            label={t("MoreCustomers")}
            fontSize="14px"
            lineHeight="22px"
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledCustomers>

        <div>
          <StyledSuccessStoriesItems>
            {successStoriesItems.map((item, index) => (
              <StoryCard
                imgUrl={t(item.imgUrl)}
                linkUrl={t(item.linkUrl)}
                heading={t(item.heading)}
                key={index}
              />
            ))}
          </StyledSuccessStoriesItems>
          <StyledSuccessStoriesLinkWrapper>
            <Link
              id="more-success-stories"
              href="/customers?from=default"
              label={t("MoreSuccessStories")}
              fontSize="14px"
              lineHeight="22px"
              color="main"
              textUnderline
              hover="underline-none"
            />
          </StyledSuccessStoriesLinkWrapper>
        </div>
      </Container>
    </Section>
  );
};

export { Customers };
