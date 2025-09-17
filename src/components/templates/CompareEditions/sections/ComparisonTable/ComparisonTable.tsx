import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import {
  StyledTable,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
  StyledTableNote,
  StyledTableParagraph,
  StyledBullet,
  StyledInfo,
  StyledContainer,
} from "./ComparisonTable.styled";
import { tableRows, editions } from "./data/items";

const ComparisonTable = () => {
  const { t } = useTranslation("compare-editions");

  return (
    <Section>
      <StyledContainer>
        <StyledTableParagraph>{t("TableParagraph")}</StyledTableParagraph>

        <StyledTable>
          <tbody>
            {tableRows.map((row, i) => {
              if (row.type === "section") {
                return (
                  <StyledTableRow key={i}>
                    <StyledTableHeadCell>
                      {row.link ? (
                        <Link
                          href={row.link || ""}
                          color="main"
                          textUnderline
                          hover="underline-none"
                          label={t(row.label || "")}
                          target={row.isExternal ? "_blank" : undefined}
                          rel={row.isExternal ? "noopener noreferrer" : undefined}
                        />
                      ) : (
                        <Text>{t(row.label || "")}</Text>
                      )}
                    </StyledTableHeadCell>
                    {editions.map((item, index) => (
                      <StyledTableHeadCell key={index}>
                        {t(`${item}`)}
                      </StyledTableHeadCell>
                    ))}
                  </StyledTableRow>
                );
              }

              return (
                <StyledTableRow key={i}>
                  <StyledTableCell $empty={row.type === "cta"}>
                    {row.link ? (
                      <Link
                        href={t(row.link || "")}
                        color="main"
                        textUnderline
                        hover="underline-none"
                        className={row.label === "WhiteLabel" ? "wl" : ""}
                        target={row.isExternal ? "_blank" : undefined}
                        rel={row.isExternal ? "noopener noreferrer" : undefined}
                      >
                        <Trans
                          t={t}
                          i18nKey={row.label || ""}
                          components={[
                            <Text as="span" color="#ff6f3d" key="0" />,
                          ]}
                        />
                        {row.info && <StyledInfo $text={t(row.info)} />}
                      </Link>
                    ) : (
                      <Text>
                        {t(row.label || "")}{" "}
                        {row.info && <StyledInfo $text={t(row.info)} />}
                      </Text>
                    )}
                  </StyledTableCell>
                  {editions.map((item) => {
                    const val = row.values?.[item.toLowerCase()];
                    if (!val) return <StyledTableCell key={item} />;

                    switch (val.type) {
                      case "button":
                        return (
                          <StyledTableCell key={item} $thin={true}>
                            <Button
                              as="a"
                              href={val.href || ""}
                              label={t(val.value)}
                              variant="secondary"
                              className="download"
                            />
                          </StyledTableCell>
                        );
                      case "link":
                        return (
                          <StyledTableCell key={item}>
                            <Link
                              href={t(val.href || "", { defaultValue: val.href || "" })}
                              color="#333333"
                              textUnderline
                              hover="underline-none"
                              label={t(val.value)}
                              target={val.isExternal ? "_blank" : undefined}
                              rel={val.isExternal ? "noopener noreferrer" : undefined}
                            />
                          </StyledTableCell>
                        );
                      case "bullet":
                        return (
                          <StyledTableCell key={item}>
                            <StyledBullet className={val.value} />
                          </StyledTableCell>
                        );
                      default:
                        return (
                          <StyledTableCell key={item}>
                            {t(val.value)}
                            {val.info && <StyledInfo $text={t(val.info)} $right={item === "Developer"} />}
                          </StyledTableCell>
                        );
                    }
                  })}
                </StyledTableRow>
              );
            })}
          </tbody>
        </StyledTable>
        <StyledTableNote id="white-label-note">
          <Trans
            t={t}
            i18nKey="WhiteLabelNote"
            components={[
              <Text as="span" color="#ff6f3d" key="0" />,
              <Link
                key="1"
                href={"mailto:sales@onlyoffice.com"}
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        </StyledTableNote>
      </StyledContainer>
    </Section>
  );
};

export { ComparisonTable };
