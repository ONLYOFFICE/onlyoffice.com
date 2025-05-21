import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledCollaborationsTab,
  StyledCollaborationsTabLink,
  StyledCollaborationsTabs,
} from "./CollaborationsTabs.styled";
import { collaborations } from "./data/collaborations";

const CollaborationsTabs = () => {
  const { t } = useTranslation("CollaborationsTabs");
  const router = useRouter();

  return (
    <StyledCollaborationsTabs>
      {collaborations.map(({ id, url, label }, index) => (
        <StyledCollaborationsTab key={index} $active={router.pathname === url}>
          <StyledCollaborationsTabLink
            id={id}
            href={url}
            label={t(label)}
            $active={router.pathname === url}
          />
        </StyledCollaborationsTab>
      ))}
    </StyledCollaborationsTabs>
  );
};

export { CollaborationsTabs };
