import React from "react";
import { useTranslation } from "next-i18next";
import {
  StyledSupportLevelsTable,
  StyledSupportLevelsIcon,
} from "./SupportLevels.styled";
import { supportLevels } from "../../data/support-levels";
import { Text } from "@src/components/ui/Text";

const SupportLevels = () => {
  const { t } = useTranslation("docspace-prices");

  return (
    <>
      <StyledSupportLevelsTable>
        <table>
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
        </table>
      </StyledSupportLevelsTable>

      <Text size={3}>
        <Text as="span" color="main" label="*" />
        {""} {t("TheAppropriateLicenseWithBrandingOption")}
      </Text>
      <Text size={3}>
        <Text as="span" color="main" label="**" />
        {""} {t("TheAppropriateLicenseForClusterVersion")}
      </Text>
    </>
  );
};

export { SupportLevels };
