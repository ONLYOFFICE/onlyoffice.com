import React from "react";
import {
  StyledPartnerLevelsHeader,
  StyledSupportLevelsIcon,
  StyledSupportLevelsTable,
} from "./PartnerLevels.styled";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { supportLevels } from "./data/items";

const PartnerLevels = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledPartnerLevelsHeader>
          <Heading label={t("PartnerLevelsTitle")} level={2} size={3} />
          <Text label={t("PartnerLevelsText")} size={2} />
        </StyledPartnerLevelsHeader>

        <StyledSupportLevelsTable>
          <thead>
            <tr>
              {supportLevels.head.map((item, index) => (
                <th key={index}>{t(item.name ?? "")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {supportLevels.body.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <tr>
                    {supportLevels.head.map((item, index) => (
                      <td key={index}>{t(item.name ?? "")}</td>
                    ))}
                  </tr>
                )}
                <tr>
                  {item.heading.map((item, index) => (
                    <td key={index}>{t(item.name)}</td>
                  ))}
                  {item.values.map((value, itemIndex) => (
                    <td key={itemIndex}>
                      {value.icon === "check" ? (
                        <StyledSupportLevelsIcon $icon="check" />
                      ) : value.icon === "dash" ? (
                        <StyledSupportLevelsIcon $icon="dash" />
                      ) : (
                        <Text>{t(value.name ?? "")}</Text>
                      )}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </StyledSupportLevelsTable>
      </Container>
    </Section>
  );
};

export { PartnerLevels };
