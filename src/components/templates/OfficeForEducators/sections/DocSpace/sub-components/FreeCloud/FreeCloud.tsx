import { Trans, useTranslation } from "next-i18next";
import {
  StyledFreeCloud,
  StyledFreeCloudWrapper,
  StyledFreeCloudTitle,
  StyledFreeCloudText,
  StyledFreeCloudLink,
  StyledFreeCloudImage,
} from "./FreeCloud.styled";
import { Text } from "@src/components/ui/Text";

const FreeCloud = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <StyledFreeCloud>
      <StyledFreeCloudWrapper>
        <StyledFreeCloudTitle level={3} size={3}>
          <Trans
            t={t}
            i18nKey={"FreeCloud"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFreeCloudTitle>
        <StyledFreeCloudText label={t("FreeCloudText")} />
        <StyledFreeCloudLink
          href="/free-cloud"
          label={t("SubmitRequest")}
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledFreeCloudWrapper>
      <StyledFreeCloudImage
        $image={t("FreeCloudImgUrl")}
        $image2x={t("FreeCloudImgUrl2x")}
      />
    </StyledFreeCloud>
  );
};

export { FreeCloud };
