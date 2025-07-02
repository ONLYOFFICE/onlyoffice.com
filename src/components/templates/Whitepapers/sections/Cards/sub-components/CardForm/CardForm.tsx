import { Trans, useTranslation } from "next-i18next";
import { Input } from "@src/components/ui/Input";
import { Text } from "@src/components/ui/Text";
import { HCaptcha } from "@src/components/widgets/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { ICardFormProp } from "@src/components/templates/Whitepapers/Whitepapers.types";

import {
  StyledCardFormAgreementWrapper,
  StyledCardFormButton,
  StyledCardFormCloseBtn,
  StyledCardFormForm,
  StyledCardFormHeading,
  StyledCardFormModal,
  StyledCardFormOverlay,
} from "./CardForm.styled";

const CardForm = ({ download_url, setOpenModal }: ICardFormProp ) => {
  const { t } = useTranslation("whitepapers");

  return (
    <StyledCardFormOverlay
      onClick={(event) => event.target === event.currentTarget && setOpenModal(false)}
    >
      <StyledCardFormModal>
        <StyledCardFormCloseBtn
          onClick={() => setOpenModal(false)}
        />
        <StyledCardFormHeading
          level={3}
          size={5}
          label={t("CardFormHeading")}
        />
        <StyledCardFormForm>
          <Input value={""} onChange={() => {}} />
          <Input value={""} onChange={() => {}} />
          <Input value={""} onChange={() => {}} />
          <StyledCardFormAgreementWrapper>
            <HCaptcha />
            <Text color="#808080" fontSize="12px">
              <Trans
                t={t}
                i18nKey={"CardFormAgreement"}
                components={[
                  <Link
                    key="0"
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    target="_blank"
                    href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0" />,
                  <Link
                    key="1"
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    target="_blank"
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261" />
                ]}
              />
            </Text>
          </StyledCardFormAgreementWrapper>
          <StyledCardFormButton
            label={t("CardsButtonDownload")}
            download
            href={download_url}
            type="submit"
            disabled={true}
            borderRadius="3px"
          />
        </StyledCardFormForm>
      </StyledCardFormModal>
    </StyledCardFormOverlay>
  );
};

export { CardForm };