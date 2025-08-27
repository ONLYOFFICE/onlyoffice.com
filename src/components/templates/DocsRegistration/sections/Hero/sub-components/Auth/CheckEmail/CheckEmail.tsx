import { useTranslation, Trans } from "next-i18next";
import {
  StyledCheckEmail,
  StyledCheckEmailImage,
  StyledCheckEmailBanner,
} from "./CheckEmail.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

export interface ICheckEmail {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckEmail = ({ setIsModalOpen }: ICheckEmail) => {
  const { t } = useTranslation("docs-registration");

  return (
    <StyledCheckEmail>
      <div>
        <StyledCheckEmailImage />
        <Heading level={1} size={4} label={t("CheckYourEmail")} />
      </div>

      <StyledCheckEmailBanner>
        <Trans
          t={t}
          i18nKey="ALinkWillBeSentToTheSpecifiedAddress"
        />
      </StyledCheckEmailBanner>

      <Text size={3} color="#666666">
        <Trans t={t} i18nKey="TheLinkIsValidFor60Minutes" />
      </Text>
    </StyledCheckEmail>
  );
};

export { CheckEmail };
