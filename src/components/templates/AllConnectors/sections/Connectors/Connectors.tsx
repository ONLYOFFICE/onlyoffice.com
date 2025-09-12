import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledConnectorsHeading,
  StyledConnectorsNav,
  StyledConnectorItems,
} from "./Connectors.styled";
import { ILocale } from "@src/types/locale";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ConnectorCard } from "./sub-components/ConnectorCard";
import { connectors } from "./data/connectors";
import { SortByNameFilter } from "./sub-components/SortByNameFilter";
import { CategoryFilter } from "./sub-components/CategoryFilter";

const Connectors = ({ locale }: ILocale) => {
  const { t } = useTranslation("all-connectors");
  const [filteredItems, setFilteredItems] = useState(connectors);
  const [sortOrder, setSortOrder] = useState<"A-Z" | "Z-A">("A-Z");

  const sortItems = (items: typeof connectors, order: string) => {
    return [...items].sort((a, b) => {
      const nameA = ["zh", "ja"].includes(locale)
        ? `${a.name} ${a.isWopi ? t("WOPIConnectorFor") : t("ConnectorFor")}`
        : `${a.isWopi ? t("WOPIConnectorFor") : t("ConnectorFor")} ${a.name}`;

      const nameB = ["zh", "ja"].includes(locale)
        ? `${b.name} ${b.isWopi ? t("WOPIConnectorFor") : t("ConnectorFor")}`
        : `${b.isWopi ? t("WOPIConnectorFor") : t("ConnectorFor")} ${b.name}`;

      return order === "A-Z"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const handleSort = (order: "A-Z" | "Z-A") => {
    setSortOrder(order);
    setFilteredItems((prevItems) => sortItems(prevItems, order));
  };

  const handleCategoryFilter = (categoryId: string) => {
    const filtered =
      categoryId === "all"
        ? connectors
        : connectors.filter(
            (item) =>
              item.productType?.some((type) => type === categoryId) ||
              item.developerType?.some((type) => type === categoryId),
          );

    setFilteredItems(sortItems(filtered, sortOrder));
  };

  return (
    <Section background="#f2f2f2" desktopSpacing={["64px", "112px"]}>
      <Container>
        <StyledConnectorsHeading level={3} label={t("Connectors")} />

        <StyledConnectorsNav>
          <CategoryFilter handleCategoryFilter={handleCategoryFilter} />
          <SortByNameFilter onSort={handleSort} sortOrder={sortOrder} />
        </StyledConnectorsNav>

        <StyledConnectorItems>
          {filteredItems.map((connector, index) => (
            <ConnectorCard
              key={index}
              idName={connector.id}
              image={{
                url: connector.image.url,
                bgColor: connector.image.bgColor,
              }}
              name={
                ["zh", "ja"].includes(locale)
                  ? `${connector.name} ${
                      connector.isWopi ? t("For") : t("For")
                    }`
                  : locale === "es"
                    ? connector.name
                    : `${
                        connector.isWopi ? t("For") : t("For")
                      } ${connector.name}`
              }
              text={t(connector.text)}
              moreInfoUrl={connector.moreInfoUrl}
              vendor={connector.vendor}
              developerWebsiteName={connector.developerWebsiteName}
              developerWebsiteUrl={connector.developerWebsiteUrl}
              isPaid={connector.isPaid}
              getItNowUrl={connector.getItNowUrl}
              isNew={connector.isNew}
              isWopi={connector.isWopi}
              isBot={connector.isBot}
            />
          ))}
        </StyledConnectorItems>
      </Container>
    </Section>
  );
};

export { Connectors };
