import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledEnterpriseModal,
  StyledEnterpriseModalHeading,
  StyledEnterpriseModalItems,
  StyledEnterpriseModalBtns,
  StyledEnterpriseModalBtn,
  StyledEnterpriseModalList,
  StyledEnterpriseModalTotal,
  StyledEnterpriseModalTotalCurrency,
  StyledEnterpriseModalTooltip,
} from "./EnterpriseModal.styled";
import {
  IEnterpriseModal,
  IEnterpriseModalFormData,
} from "./EnterpriseModal.types";
import { IDocSpacePricesTemplate } from "@src/components/templates/DocSpacePrices";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Link } from "@src/components/ui/Link";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import {
  numberOfUsers,
  licenseDuration,
  supportUpdates,
  supportLevel,
} from "../../data/plans";
import { InfoIcon } from "@src/components/icons";
import {
  QuoteModal,
  IQuoteModalOnSubmitRequest,
  IQuoteModalFormData,
} from "@src/components/widgets/pricing/QuoteModal";

const EnterpriseModal = ({
  isOpen,
  onClose,
  locale,
  productsData,
  affiliate,
}: IEnterpriseModal & IDocSpacePricesTemplate) => {
  const { t } = useTranslation("docspace-prices");
  const currency = getCurrencyByLocale(locale);

  const initialFormData: IEnterpriseModalFormData = {
    usersNumber: "100",
    licenseDuration: "1 Year",
    supportAndUpdates: "1 Year",
    supportLevel: "Basic",
    multiServerDeployment: false,
    trainingCourses: false,
  };
  const initialQuoteFormData: IQuoteModalFormData = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    hCaptcha: null,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] =
    useState<IEnterpriseModalFormData>(initialFormData);
  const [quoteFormData, setQuoteFormData] = useState(initialQuoteFormData);

  const isUponRequest = [
    formData.usersNumber === "more",
    formData.licenseDuration !== "1 Year",
    formData.supportAndUpdates !== "1 Year",
    formData.supportLevel !== "Basic",
    formData.multiServerDeployment,
    formData.trainingCourses,
  ].some(Boolean);

  const product =
    {
      100: productsData.enterpriseUsers100,
      250: productsData.enterpriseUsers250,
      500: productsData.enterpriseUsers500,
      1000: productsData.enterpriseUsers1000,
      more: { price: null, url: "" },
    }[formData.usersNumber] || "";

    const isUsers500Users1000 = formData.usersNumber === "500" || formData.usersNumber === "1000";

  const onSubmitRequest = async ({
    from,
    country,
    region,
    hCaptchaResponse,
  }: IQuoteModalOnSubmitRequest) => {
    return fetch("/api/docspace-prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        fullName: quoteFormData.fullName,
        email: quoteFormData.email,
        phone:
          locale === "zh" && !quoteFormData.phone ? "+86" : quoteFormData.phone,
        companyName: quoteFormData.companyName,
        usersNumber: formData.usersNumber,
        licenseDuration: formData.licenseDuration,
        supportAndUpdates: formData.supportAndUpdates,
        supportLevel: formData.supportLevel,
        multiServerDeployment: formData.multiServerDeployment,
        trainingCourses: formData.trainingCourses,
        from,
        country,
        region,
        hCaptchaResponse,
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        type: "docspaceenterpriserequest",
      }),
    }).then((res) => res.json());
  };

  return (
    <>
      <Modal
        data-testid="enterprise-modal"
        maxWidth="544px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <StyledEnterpriseModal data-testid="enterprise-modal-form">
          <StyledEnterpriseModalHeading
            level={3}
            label={t("EnterpriseOnPremises")}
          />

          <StyledEnterpriseModalItems>
            <LabeledWrapper
              label={t("NumberOfUsers")}
              rightSide={
                <StyledEnterpriseModalTooltip
                  id="number-of-users"
                  place="bottom-start"
                  width="220px"
                  content={t("NumberOfUsersTooltip")}
                >
                  <InfoIcon />
                </StyledEnterpriseModalTooltip>
              }
            >
              <CounterSelector
                items={numberOfUsers?.map((item) => ({
                  id: item.id,
                  label: t(item.label),
                }))}
                selected={formData.usersNumber}
                bgColor="#f5f5f5"
                onChange={(value: IEnterpriseModalFormData["usersNumber"]) =>
                  setFormData((prev) => ({ ...prev, usersNumber: value }))
                }
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("LicenseDuration")}>
              <ToggleButtons
                items={licenseDuration.map((item) => ({
                  id: item.id,
                  label: {
                    name: t(String(item.label.name)),
                  },
                }))}
                selected={formData.licenseDuration}
                onChange={(
                  value: IEnterpriseModalFormData["licenseDuration"],
                ) =>
                  setFormData((prev) => ({
                    ...prev,
                    licenseDuration: value,
                    supportAndUpdates:
                      value === "1 Year" ? "1 Year" : "3 Years",
                  }))
                }
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("Support&Updates")}>
              <ToggleButtons
                items={supportUpdates.map((item) => ({
                  id: item.id,
                  label: {
                    name: t(String(item.label.name)),
                  },
                }))}
                selected={formData.supportAndUpdates}
                onChange={(
                  value: IEnterpriseModalFormData["supportAndUpdates"],
                ) =>
                  setFormData((prev) => ({
                    ...prev,
                    supportAndUpdates: value,
                    licenseDuration: value === "1 Year" ? "1 Year" : "Lifetime",
                  }))
                }
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("SupportLevel")}>
              <Tabs
                items={supportLevel.map((item) => ({
                  id: item.id,
                  label: t(item.label),
                  content: (
                    <StyledEnterpriseModalList>
                      {Array.isArray(item.content)
                        ? item.content.map((text, index) => (
                            <li key={index}>{t(text)}</li>
                          ))
                        : item.content && <li>{t(String(item.content))}</li>}
                    </StyledEnterpriseModalList>
                  ),
                }))}
                selected={formData.supportLevel}
                bgColor="#f5f5f5"
                collapsible
                onChange={(value: IEnterpriseModalFormData["supportLevel"]) =>
                  setFormData((prev) => ({
                    ...prev,
                    supportLevel: value,
                  }))
                }
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("Scalability")}>
              <Checkbox
                label={t("SupportForMultiServerDeployment")}
                checked={formData.multiServerDeployment}
                size="small"
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    multiServerDeployment: !prev.multiServerDeployment,
                  }))
                }
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("AdditionalToolsAndServices")}>
              <Checkbox
                label={t("TrainingCourses")}
                checked={formData.trainingCourses}
                size="small"
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    trainingCourses: !prev.trainingCourses,
                  }))
                }
              />
            </LabeledWrapper>

            <StyledEnterpriseModalTotal>
              <Heading level={4} label={t("Total")} />

              <Heading level={5} size={isUponRequest || isUsers500Users1000 ? 4 : 2} color="main">
                {isUponRequest || isUsers500Users1000 ? (
                  t("UponRequest")
                ) : (
                  <>
                    <StyledEnterpriseModalTotalCurrency
                      forwardedAs="span"
                      color="main"
                      label={currency.symbol}
                    />
                    {product.price}
                  </>
                )}
              </Heading>
            </StyledEnterpriseModalTotal>
          </StyledEnterpriseModalItems>

          <StyledEnterpriseModalBtns>
            {isUponRequest || isUsers500Users1000 ? (
              <StyledEnterpriseModalBtn
                onClick={() => setIsModalOpen(true)}
                data-testid="enterprise-modal-get-a-quote-button"
                label={t("GetAQuote")}
              />
            ) : (
              <StyledEnterpriseModalBtn
                data-testid="enterprise-modal-buy-now-button"
                forwardedAs="a"
                href={`${product.url}${affiliate.params}`}
                target="_blank"
                label={t("BuyNow")}
              />
            )}

            <StyledEnterpriseModalBtn
              onClick={onClose}
              data-testid="enterprise-modal-cancel-button"
              forwardedAs="button"
              variant="tertiary"
              label={t("Cancel")}
            />
          </StyledEnterpriseModalBtns>
        </StyledEnterpriseModal>
      </Modal>

      <QuoteModal
        locale={locale}
        isOpen={isModalOpen}
        heading={t("FillInTheFormToGetAQuoteForOODocSpace")}
        byClickedText={
          <Trans
            t={t}
            i18nKey="GetItNowText"
            components={[
              <Link
                key="0"
                href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8516433&doc=U0U1QUs2VEtIVmtYclFTNzVXSWkxUEN6aVlWTzdOWFFsWGdibG80Mnhacz0_IntcImVudHJ5XCI6XCI4NTE2NDMzXCIsXCJsaW5rXCI6XCI5Y2ZiMWNkMS0wMmMxLTRlNmEtYThhOC1iNjFlYTk2ZTYzNDZcIn0i0"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
              <Link
                key="1"
                href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        }
        initialFormData={initialFormData}
        initialQuoteFormData={initialQuoteFormData}
        setFormData={setFormData}
        quoteFormData={quoteFormData}
        setQuoteFormData={setQuoteFormData}
        buttonLabel={t("GetAQuote")}
        onSubmitRequest={onSubmitRequest}
        onClose={() => setIsModalOpen(false)}
        pageTrackName="docspace-prices-request"
      />
    </>
  );
};

export { EnterpriseModal };
