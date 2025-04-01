import { Trans, useTranslation } from "next-i18next";
import {
  StyledFreeCloudText,
  StyledFreeCloudTitle,
  StyledFreeCloudWrapper,
  StyledFreeCloudImage,
} from "./FreeCloud.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const FreeCloud = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <StyledFreeCloudWrapper>
      <StyledFreeCloudTitle
        level={3}
        label={
          <Trans
            t={t}
            i18nKey={"FreeCloud"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        }
      />
      <StyledFreeCloudText label={t("FreeCloudText")} />
      <Link
        href="/free-cloud"
        label={t("SubmitRequest")}
        color="main"
        textUnderline
        hover="underline-none"
      />
      <StyledFreeCloudImage
        $image={t("FreeCloudImgUrl")}
        $image2x={t("FreeCloudImgUrl2x")}
      />
    </StyledFreeCloudWrapper>
  );
};

export { FreeCloud };
