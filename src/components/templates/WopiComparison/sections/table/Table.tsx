import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import {
  StyledFeaturesTable,
  StyledFeaturesTableItems,
  StyledFeaturesTableItemHeader,
  StyledFeaturesTableItemParagraph,
  StyledFeaturesTableItemList,
  StyledFeaturesTableItemListItem,
  StyledFeaturesTableOutro,
  StyledFeaturesTableMainTr,
  StyledFeaturesTableMainTh,
  StyledContainer,
} from "./Table.styled";
import { features } from "./data/table-content";

const Table = () => {
  const { t } = useTranslation("wopi-comparison");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["0px", "112px"]}
      tabletSpacing={["0px", "88px"]}
      tabletSmallSpacing={["0px", "80px"]}
      mobileSpacing={["0px", "48px"]}
    >
      <StyledContainer>
        <StyledFeaturesTable>
          <thead>
            <StyledFeaturesTableMainTr>
              {features.head.map((col, i) => (
                <StyledFeaturesTableMainTh key={i}>
                  {col.name && <div>{t(col.name)}</div>}
                </StyledFeaturesTableMainTh>
              ))}
            </StyledFeaturesTableMainTr>
          </thead>
          <tbody>
            {features.body[0].items.map((row, i) => (
              <tr key={i}>
                <td>
                  {row.name?.[0]?.text && (
                    <Text
                      as="span"
                      label={t(row.name[0].text)}
                    />
                  )}
                </td>
                {row.values.map((val, j) => (
                  <td key={j}>
                    <StyledFeaturesTableItems>
                      {val.name && (
                        <StyledFeaturesTableItemHeader>
                          {t(val.name)}
                        </StyledFeaturesTableItemHeader>
                      )}
                      {val.subtext && (
                        <StyledFeaturesTableItemParagraph>
                          {t(val.subtext)}
                        </StyledFeaturesTableItemParagraph>
                      )}
                      {val.link && (
                        <Link
                          href={val.link.link}
                          color="main"
                          textUnderline
                          hover="underline-none"
                          target={val.link.isExternal ? "_blank" : "_self"}
                        >
                          {t(val.link.name)}
                        </Link>
                      )}
                      {val.item?.length && (
                        <StyledFeaturesTableItemList>
                          {val.item.map((item, k) => (
                            <StyledFeaturesTableItemListItem key={k}>
                              {t(item)}
                            </StyledFeaturesTableItemListItem>
                          ))}
                        </StyledFeaturesTableItemList>
                      )}
                      {val.outro && (
                        <StyledFeaturesTableOutro>
                          {t(val.outro)}
                        </StyledFeaturesTableOutro>
                      )}
                    </StyledFeaturesTableItems>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledFeaturesTable>

        <Button
          as="a"
          href="/download?from=wopi-comparison#docs-enterprise"
          label={t("Button")}
          size="medium"
        />
      </StyledContainer>
    </Section>
  );
};

export { Table };
