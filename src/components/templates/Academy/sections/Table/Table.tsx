import React from "react";
import {
  TableNote,
  StyledTable,
  TableCell,
  TableWrapper,
} from "./Table.styled";
import { useTranslation, Trans } from "next-i18next";
import { tableItems, headers } from "./data/items";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
export const CheckIcon = () => <span style={{ color: "#ff6b1a" }}>✓</span>;
export const DashIcon = () => <span style={{ color: "#999" }}>—</span>;

export const Table = () => {
  const { t } = useTranslation("academy");

  return (
    <Section>
      <Container>
        <Heading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="WhatIncluded"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>

        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
              {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
                
            </thead>
            <tbody>
              {tableItems.map((row, idx) => (
                <tr key={idx}>
                  <TableCell>{t(row.feature)}</TableCell>
                  <TableCell data-plan={t("Basic")} $icon={row.basic ? "check" : "dash"} />
                  <TableCell data-plan={t("BasicPlus")} $icon={row.basicPlus ? "check" : "dash"} />
                  <TableCell data-plan={t("Pro")} $icon={row.pro ? "check" : "dash"} />
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>

        <TableNote>
          {t("PricesAvailableUponRequestOrCourseSelection")}
        </TableNote>
      </Container>
    </Section>
  );
};
