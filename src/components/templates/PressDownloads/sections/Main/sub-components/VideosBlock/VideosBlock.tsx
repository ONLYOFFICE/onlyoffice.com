import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { items } from "./data/items";
import {
  StyledVideosBlock,
  StyledVideosBlockIframe,
} from "./VideosBlock.styled";
import { Link } from "@src/components/ui/Link";

const VideosBlock = ({ id }: { id: string }) => {
  const { t } = useTranslation("press-downloads");

  return (
    <div id={id}>
      <Heading level={3} size={4} label={t("VideosTitle")} />
      <StyledVideosBlock>
        {items.map((item) => (
          <StyledVideosBlockIframe
            key={item}
            src={t(item)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
          />
        ))}
      </StyledVideosBlock>
      <Link
        href="https://www.youtube.com/user/onlyofficeTV"
        label={t("MoreVideos")}
        target="_blank"
        color="main"
        textUnderline
        hover="underline-none"
      />
    </div>
  );
};

export { VideosBlock };
