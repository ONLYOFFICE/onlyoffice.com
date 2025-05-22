import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { IEditorsImageItemProps } from "./EditorsImageItem.types";
import { useRef } from "react";

export const EditorsImageItem = ({
  item,
  openVideo,
}: IEditorsImageItemProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      if (href?.startsWith("video:")) {
        e.preventDefault();
        const videoUrl = href.replace("video:", "#");
        openVideo(videoUrl);
      }
    }
  };

  const links = item.links?.map((link) => {
    if (link.isVideo) {
      return {
        href: `video:${link.href}`,
        label: link.label,
        isExternal: false,
      };
    }
    return {
      href: link.href,
      label: link.label,
      isExternal: link.isExternal,
    };
  });

  return (
    <div ref={wrapperRef} onClick={handleClick}>
      <FeatureImageItem
        heading={item.heading}
        text={item.text}
        position={item.position}
        image={item.image}
        links={links}
      />
    </div>
  );
};
