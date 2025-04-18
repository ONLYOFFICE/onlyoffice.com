import React from "react";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledSupportLevelsTable,
  StyledSupportLevelsIcon,
} from "./SupportLevels.styled";
import { supportLevels } from "../../data/support-levels";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const SupportLevels = () => {
  const { t } = useTranslation("docs-enterprise-prices");

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
        {""} {t("TheAppropriateLicenseForClusterVersion")}
      </Text>
      <Text size={3}>
        <Text as="span" color="main" label="**" />
        {""}{" "}
        <Trans
          t={t}
          i18nKey="ForMoreInformationReadServiceLevelAgreement"
          components={[
            <Link
              href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0&_ga=2.215830229.376052673.1690379159-1819572127.1690203478"
              key="0"
            />,
          ]}
        />
      </Text>
    </>
  );
};

export { SupportLevels };
