import { useTranslation } from "next-i18next";
import * as S from "./UserTypes.styled";
import { Button } from "@src/components/ui/Button";
import { userTypes } from "./data/userTypes";

const UserTypes = () => {
  const { t } = useTranslation("education");

  return (
    <S.StyledUserTypesWrapper>
      <S.StyledUserTypesItems>
        {userTypes.map((item, index) => (
          <S.StyledUserType key={index}>
            <S.StyledUserTypeImage src={item.image} alt={t(item.title)} />
            <S.StyledUserTypeContent>
              <S.StyledUserTypeHeading level={3} label={t(item.title)} />
              <S.StyledUserTypeText label={t(item.text)} />
              <Button
                id={item.button.id}
                as="a"
                href={t(item.button.href ?? "")}
                label={t("GetStarted")}
                variant={item.button.variant}
              />
            </S.StyledUserTypeContent>
          </S.StyledUserType>
        ))}
      </S.StyledUserTypesItems>
    </S.StyledUserTypesWrapper>
  );
};

export { UserTypes };
