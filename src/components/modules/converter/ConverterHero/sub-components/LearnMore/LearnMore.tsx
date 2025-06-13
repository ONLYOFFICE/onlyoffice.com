import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreButton,
  StyledLearnMoreCloseButton,
  StyledLearnMoreTop,
  StyledLearnMoreType,
  StyledLearnMoreWrapper,
} from "./LearnMore.styled";
import { CrossIcon } from "@src/components/icons";
import { Text } from "@src/components/ui/Text";
import { useState } from "react";

const LearnMore = ({
  fileType,
  description,
}: {
  fileType: string;
  description: string;
}) => {
  const { t } = useTranslation("converter-common");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {!isOpen ? (
        <StyledLearnMoreButton onClick={() => setIsOpen(true)}>
          {t("LearnMore")}
        </StyledLearnMoreButton>
      ) : (
        <StyledLearnMoreWrapper>
          <StyledLearnMoreTop>
            <StyledLearnMoreType>{fileType}</StyledLearnMoreType>
            <StyledLearnMoreCloseButton onClick={() => setIsOpen(false)}>
              <CrossIcon />
            </StyledLearnMoreCloseButton>
          </StyledLearnMoreTop>
          <Text size={2} label={description} />
        </StyledLearnMoreWrapper>
      )}
    </div>
  );
};

export { LearnMore };
