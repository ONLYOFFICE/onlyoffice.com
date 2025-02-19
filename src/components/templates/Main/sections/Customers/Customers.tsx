import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ILocale } from "@src/types/locale";
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
import { BlogCard } from "@src/components/widgets/BlogCard";
import { customersItems } from "./data/customersItems";
import { successStoriesItems } from "./data/successStoriesItems";

const Customers = ({ locale }: ILocale) => {
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
                <Image
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
            color="main-color"
            textUnderline
            hover="text-underline-none"
          />
        </StyledCustomers>

        <div>
          <StyledSuccessStoriesItems>
            {successStoriesItems.map((item, index) => (
              <BlogCard
                imgUrl={
                  item[locale as keyof typeof item]?.imgUrl || item.en.imgUrl
                }
                linkUrl={t(
                  `${
                    item[locale as keyof typeof item]?.linkUrl ||
                    item.en.linkUrl
                  }`,
                )}
                heading={t(
                  `${
                    item[locale as keyof typeof item]?.heading ||
                    item.en.heading
                  }`,
                )}
                key={index}
              />
            ))}
          </StyledSuccessStoriesItems>
          <StyledSuccessStoriesLinkWrapper>
            <Link
              id="more-success stories"
              href="/customers?from=default"
              label={t("MoreSuccessStories")}
              fontSize="14px"
              lineHeight="22px"
              color="main-color"
              textUnderline
              hover="text-underline-none"
            />
          </StyledSuccessStoriesLinkWrapper>
        </div>
      </Container>
    </Section>
  );
};

export { Customers };
