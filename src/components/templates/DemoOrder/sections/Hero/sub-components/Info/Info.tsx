import { useTranslation, Trans } from "next-i18next";
import {
  StyledInfoWrapper,
  StyledInfoBox,
  StyledInfoHeading,
  StyledInfoIcons,
  StyledInfoTrusted,
  StyledInfoAwards,
  StyledInfoAward,
  IconItem,
} from "./Info.styled";
import { Text } from "@src/components/ui/Text";
import { iconsItems, customers } from "../../data/icons";

const Info = () => {
  const { t } = useTranslation("demo-order");

  return (
    <>
      <StyledInfoWrapper>
        <StyledInfoBox>
          <StyledInfoHeading level={2}>{t("HeroTitle")}</StyledInfoHeading>

          <StyledInfoIcons>
            {iconsItems.map((item, index) => (
              <IconItem key={index} $icon={item.icon.url} $position={item.icon.positionX}>
                {t(item.label)}
              </IconItem>
            ))}
          </StyledInfoIcons>
        </StyledInfoBox>

        <StyledInfoTrusted>
          <Trans
            t={t}
            i18nKey="TrustedByMore"
            components={[<Text key={0} as="span" color="main" />]}
          />
        </StyledInfoTrusted>

        <StyledInfoAwards>
          {customers.map((item, index) => (
            <StyledInfoAward key={index} $position={item.positionX} />
          ))}
        </StyledInfoAwards>
      </StyledInfoWrapper>
    </>
  );
};

export { Info };
