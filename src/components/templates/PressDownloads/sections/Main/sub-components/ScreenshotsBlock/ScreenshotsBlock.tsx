import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledScreenshotsBlock,
  StyledScreenshotsBlockItem,
  StyledScreenshotsBlockItemBottom,
  StyledScreenshotsBlockItemDescription,
  StyledScreenshotsBlockItemFormat,
  StyledScreenshotsBlockItemTitle,
  StyledScreenshotsBlockItemImg,
} from "./ScreenshotsBlock.styled";
import { items } from "./data/items";

const ScreenshotsBlock = ({ id }: { id: string }) => {
  const { t } = useTranslation("press-downloads");

  return (
    <div id={id}>
      <Heading level={3} size={4} label={t("ScreenshotsTitle")} />
      <StyledScreenshotsBlock>
        {items.map((item) => (
          <StyledScreenshotsBlockItem
            href={t(item.src)}
            download
            key={item.title}
          >
            <StyledScreenshotsBlockItemImg $imgUrl={t(item.imgUrl)} />
            <StyledScreenshotsBlockItemBottom>
              <StyledScreenshotsBlockItemTitle>
                {t(item.title)}
              </StyledScreenshotsBlockItemTitle>
              <StyledScreenshotsBlockItemDescription>
                {t(item.description)}
              </StyledScreenshotsBlockItemDescription>
              <StyledScreenshotsBlockItemFormat>
                PNG 2880px
              </StyledScreenshotsBlockItemFormat>
            </StyledScreenshotsBlockItemBottom>
          </StyledScreenshotsBlockItem>
        ))}
      </StyledScreenshotsBlock>
    </div>
  );
};

export { ScreenshotsBlock };
