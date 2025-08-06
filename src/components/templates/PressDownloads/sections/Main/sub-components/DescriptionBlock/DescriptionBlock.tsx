import { Heading } from "@src/components/ui/Heading";
import { StyledTextContent } from "./DescriptionBlock.styled";
import { Trans, useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { useRef } from "react";
import toast from "react-hot-toast";

const DescriptionBlock = ({ id }: { id: string }) => {
  const { t } = useTranslation("press-downloads");
  const textContentRef = useRef<HTMLDivElement>(null);

  const handleCopyToClipboard = async () => {
    if (textContentRef.current) {
      try {
        const textContent = textContentRef.current.textContent || "";
        await navigator.clipboard.writeText(textContent);

        toast.success(t("SuccessCopy"), {
          duration: 3000,
          position: "top-right",
        });
      } catch (err) {
        console.error("Failed to copy text: ", err);
        const textArea = document.createElement("textarea");
        textArea.value = textContentRef.current.textContent || "";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        toast.success(t("SuccessCopy"), {
          duration: 3000,
          position: "top-right",
        });
      }
    }
  };

  return (
    <div id={id}>
      <Heading level={3} size={4} label={t("DescriptionTitle")} />
      <StyledTextContent ref={textContentRef}>
        <Trans t={t} i18nKey="DescriptionText" components={{ br: <br /> }} />
      </StyledTextContent>
      <Button
        id="copy-to-clipboard"
        variant="secondary"
        label={t("CopyToClipboard")}
        onClick={handleCopyToClipboard}
      />
    </div>
  );
};

export { DescriptionBlock };
