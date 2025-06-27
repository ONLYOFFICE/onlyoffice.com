import { useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { userTypes } from "./data/userTypes";
import {
  StyledUserType,
  StyledUserTypeContent,
  StyledUserTypeHeading,
  StyledUserTypeImage,
  StyledUserTypesItems,
  StyledUserTypesWrapper,
  StyledUserTypeText,
} from "./UserTypes.styled";

const UserTypes = () => {
  const { t } = useTranslation("healthcare");

  return (
    <StyledUserTypesWrapper>
      <StyledUserTypesItems>
        {userTypes.map((item, index) => (
          <StyledUserType key={index}>
            <StyledUserTypeImage src={item.image} alt={t(item.title)} />
            <StyledUserTypeContent>
              <StyledUserTypeHeading level={3} label={t(item.title)} />
              <StyledUserTypeText label={t(item.text)} />
              <Button
                id={item.button.id}
                as="a"
                href={t(item.button.href ?? "")}
                label={t("GetStarted")}
                variant={item.button.variant}
              />
            </StyledUserTypeContent>
          </StyledUserType>
        ))}
      </StyledUserTypesItems>
    </StyledUserTypesWrapper>
  );
};

export { UserTypes };
