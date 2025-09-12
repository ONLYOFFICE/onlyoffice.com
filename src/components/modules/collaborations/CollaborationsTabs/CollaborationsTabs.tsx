import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useRef } from "react";
import {
  StyledCollaborationsTab,
  StyledCollaborationsTabLink,
  StyledCollaborationsTabs,
} from "./CollaborationsTabs.styled";
import { collaborations } from "./data/collaborations";

const CollaborationsTabs = () => {
  const { t } = useTranslation("CollaborationsTabs");
  const router = useRouter();
  const tabsContainerRef = useRef<HTMLUListElement>(null);
  const activeTabRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (tabsContainerRef.current && activeTabRef.current) {
      const container = tabsContainerRef.current;
      const activeTab = activeTabRef.current;

      const containerRect = container.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();

      const scrollPosition =
        activeTabRect.left -
        containerRect.left -
        containerRect.width / 2 +
        activeTabRect.width / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [router.pathname]);

  return (
    <StyledCollaborationsTabs ref={tabsContainerRef}>
      {collaborations.map(({ id, url, label }, index) => {
        const isActive = router.pathname === url;
        return (
          <StyledCollaborationsTab
            key={index}
            $active={isActive}
            ref={isActive ? activeTabRef : null}
          >
            <StyledCollaborationsTabLink
              id={id}
              href={url}
              label={t(label)}
              $active={isActive}
              textUnderline={false}
            />
          </StyledCollaborationsTab>
        );
      })}
    </StyledCollaborationsTabs>
  );
};

export { CollaborationsTabs };
