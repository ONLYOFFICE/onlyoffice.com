import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { ActionsDemoModalProps } from "./ActionsDemoModal.types";

import {
  StyledActionsDemoCloseBtn,
  StyledActionsDemoContent,
  StyledActionsDemoModal,
  StyledActionsDemoPre
} from "./ActionsDemoModal.styled";

const ActionsDemoModal = ({ heading, demoCodeFirst, demoCodeSecond, onClose }: ActionsDemoModalProps) => {
  const { t } = useTranslation("see-it-in-action");

  return (
    <StyledActionsDemoModal>
        <StyledActionsDemoContent>
          <Heading level={4} size={5} textAlign="center" label={t(heading)} />
          <StyledActionsDemoCloseBtn onClick={onClose}>x</StyledActionsDemoCloseBtn>
          <StyledActionsDemoPre>
            <code>
              {demoCodeFirst}
            </code>
          </StyledActionsDemoPre>
          {demoCodeSecond && (
            <StyledActionsDemoPre>
              <code>
                {demoCodeSecond}
              </code>
            </StyledActionsDemoPre>
          )}
          <Button variant="secondary" label={t("ActionsDemoModalButtonClose")} onClick={onClose} />
        </StyledActionsDemoContent>
    </StyledActionsDemoModal>
  );
};

export { ActionsDemoModal };