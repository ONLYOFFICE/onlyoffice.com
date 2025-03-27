import React from "react";
import { useTranslation } from "next-i18next";
import {
  StyledFeaturesTable,
  StyledFeaturesTableIcon,
  StyledFeaturesTableButton,
  StyledFeaturesTableTooltip,
} from "./FeaturesTable.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { features } from "../../data/features";
import { Tooltip } from "@src/components/ui/Tooltip";

interface IFeaturesTable {
  setIsBusinessModalOpen: (value: boolean) => void;
  setIsEnterpriseModalOpen: (value: boolean) => void;
}

const FeaturesTable = ({
  setIsBusinessModalOpen,
  setIsEnterpriseModalOpen,
}: IFeaturesTable) => {
  const { t } = useTranslation("docspace-prices");

  return (
    <StyledFeaturesTable>
      <table>
        <thead>
          <tr>
            {features.head.map((item, index) => (
              <th key={index}>
                {item.name && (
                  <>
                    <div>{item.name && t(item.name)}</div>
                    <div>{item.type && t(item.type)}</div>
                  </>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.body.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                {item.head.map((item, index) => (
                  <td className="tbody-head-td" key={index}>
                    {t(item.text)}
                  </td>
                ))}
              </tr>

              {item.items.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td>
                    {item.name[0]?.text && t(item.name[0]?.text)}{" "}
                    {item.name[0].commingSoon && (
                      <Text
                        as="span"
                        display="inline"
                        fontSize="11px"
                        lineHeight="12px"
                        color="main"
                        verticalAlign="text-top"
                        label={t("CommingSoon")}
                      />
                    )}
                  </td>

                  {item.values.map((value, valueIndex) => (
                    <td key={valueIndex}>
                      {value.icon === "check" ? (
                        <StyledFeaturesTableIcon $icon="check" />
                      ) : value.icon === "dash" ? (
                        <StyledFeaturesTableIcon $icon="dash" />
                      ) : (
                        <>
                          {t(value.name ?? "")}&nbsp;
                          {value.tooltip && (
                            <Tooltip
                              id={value.tooltip.id}
                              content={t(value.tooltip.text)}
                              place="bottom-start"
                              width="280px"
                            >
                              <StyledFeaturesTableTooltip>
                                {t(value.tooltip.name)}
                              </StyledFeaturesTableTooltip>
                            </Tooltip>
                          )}
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>

        <tfoot>
          <tr>
            {features.footer.btns?.map((item, index) => (
              <td key={index}>
                {item.name ? (
                  <StyledFeaturesTableButton
                    key={index}
                    forwardedAs={item.url ? "a" : "button"}
                    variant={item.variant}
                    href={item.url ? item.url : undefined}
                    fullWidth
                    onClick={() =>
                      index === 2
                        ? setIsBusinessModalOpen(true)
                        : index === 3
                        ? setIsEnterpriseModalOpen(true)
                        : null
                    }
                    label={t(item.name)}
                  />
                ) : null}
              </td>
            ))}
          </tr>
          <tr>
            {features.footer.links?.map((item, index) => (
              <td key={index}>
                {item.name ? (
                  <Link
                    key={index}
                    display="block"
                    color="main"
                    hover="underline"
                    href={item.url ? item.url : ""}
                    label={t(item.name)}
                  />
                ) : null}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </StyledFeaturesTable>
  );
};

export { FeaturesTable };
