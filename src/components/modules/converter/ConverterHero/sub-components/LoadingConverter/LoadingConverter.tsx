import { Trans, useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledLoadingConverterText,
  StyledLoadingConverterTextWrapper,
  StyledLoadingConverterWrapper,
} from "./LoadingConverter.styled";
import { LoadingSvg } from "./LoadingSvg";
import { loadingText } from "./data/text";
import { Link } from "@src/components/ui/Link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@src/components/ui/Button";
import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { TSteps } from "../../ConverterHero.types";

const LoadingConverter = ({
  color,
  setFile,
  setStep,
}: {
  color: string;
  setFile: (file: File | null) => void;
  setStep: (step: TSteps) => void;
}) => {
  const { t } = useTranslation("converter-common");
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleConfirmDelete = useCallback(() => {
    setFile(null);
    setStep("select");
  }, [setFile, setStep]);

  const handleCancelClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadingText.length);
    }, 3000);

    // const timeout = setTimeout(() => {
    //   setStep("result");
    // }, 5000);

    return () => {
      clearInterval(interval);
      // clearTimeout(timeout);
    };
  }, [setStep]);

  return (
    <StyledLoadingConverterWrapper $color={color}>
      <Heading
        level={3}
        size={4}
        textAlign="center"
        label="File is converting. Please wait..."
      />
      <LoadingSvg />
      <StyledLoadingConverterTextWrapper>
        {loadingText.map((item, i) => (
          <StyledLoadingConverterText size={2} $opacity={i === index} key={i}>
            <Trans
              t={t}
              i18nKey={item.text}
              components={[
                <Link
                  href={item.link}
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledLoadingConverterText>
        ))}
      </StyledLoadingConverterTextWrapper>
      <Button
        id="cancel-convert"
        label={t("Cancel")}
        onClick={handleCancelClick}
        variant="tertiary"
      />

      <DeleteConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleConfirmDelete}
        color={color}
        text="Leave the page and convert new file?"
        isDeleting={false}
      />
    </StyledLoadingConverterWrapper>
  );
};

export { LoadingConverter };
