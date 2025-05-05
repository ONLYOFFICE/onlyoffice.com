import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

import {
  StyledFeatureButtonItem,
  StyledFeatureButtonItemHeading,
  StyledFeatureButtonItemIcon,
  StyledFeatureButtonItemText,
} from "./FeatureButtonItem.styled";

const FeatureButtonItem = () => {
  const { t } = useTranslation("blablabla");
  return (
    <StyledFeatureButtonItem>
      <StyledFeatureButtonItemIcon $iconUrl={"icon url"} />
      <StyledFeatureButtonItemHeading
        level={5}
        label={t("heading text")}
        size={4}
        color="#fff"
      />
      <StyledFeatureButtonItemText label={"text"} size={1} color="#fff">
        <Trans
          t={t}
          i18nKey={"translateBlablabla"}
          components={[
            <Link
              key={0}
              href="href link"
              textUnderline={true}
              hover="underline-none"
              label={t("link text")}
            />,
            <Link
              key={1}
              href="href link"
              textUnderline={true}
              hover="underline-none"
              label={t("link text")}
            />,
          ]}
        />
      </StyledFeatureButtonItemText>
      <Button
        href={"button href"}
        variant="quaternary"
        label={t("btn text")}
        as="a"
        className="item__btn"
      />
    </StyledFeatureButtonItem>
  );
};

export { FeatureButtonItem };
