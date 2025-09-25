import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledPRForm,
  StyledDownloadModalWrapper,
  StyledNameWrapper,
  StyledPRFHeading,
  StyledDownloadModalText,
  StyledSegmentsWrapper,
  StyledTextWrapper,
  StyledChecboxesWrapper,
  StyledPreTextAreaText,
  StyledHeroHCaptchaWrapper,
} from "./PartnershipRequestForm.styled";
import {
  targetMarketSegments,
  partnerInfoSource,
  partnerPromote,
} from "./data/items";
import { SuccessModal } from "./sub-components/SuccessModal/SuccessModal";
import { CheckboxesBlock } from "./sub-components/CheckboxesBlock";
import { YesNoRadioBlock } from "./sub-components/YesNoRadioBlock/YesNoRadioBlock";
import { IPartnRequestForm } from "./PartnershipRequestForm.types";
import { getFromParam } from "@src/utils/getParams";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Checkbox } from "@src/components/ui/Checkbox";
import { TextArea } from "@src/components/ui/TextArea";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { IPhoneInputRef } from "@src/components/widgets/PhoneInput";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import {
  validateFullName,
  validateEmail,
  validateWebsite,
} from "@src/utils/validators";
import { validateTestEmail } from "@src/utils/IsTestEmail";
import { usePageTrack } from "@src/lib/hooks/useGA";

const PartnershipRequestForm = ({
  locale,
  initialFormData,
  formData,
  setFormData,
  byClickingText,
  onSubmitRequest,
}: IPartnRequestForm) => {
  const { t: t2 } = useTranslation("DownloadModal");
  const { t } = useTranslation("partnership-request");
  const from = getFromParam();

  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const phoneInputRef = useRef<IPhoneInputRef | null>(null);
  const segmentsRef = useRef<HTMLDivElement | null>(null);
  const partnerHeaderRef = useRef<HTMLDivElement | null>(null);

  const validateEmployeesCount = (value: string) => {
    const num = Number(value);
    return Number.isInteger(num) && num > 0;
  };

  const [isEmpty, setIsEmpty] = useState({
    firstName: false,
    lastName: false,
    positionTitle: false,
    email: false,
    phone: false,
    companyName: false,
    website: false,
    numberEmployees: false,

    government: false,
    education: false,
    commerce: false,
    fortune500: false,
    smes: false,
    industry: false,
    otherSegments: false,

    pleaseSpecify: false,
    comment: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [token, setToken] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [hCaptchaSize, setHCaptchaSize] = useState<"normal" | "compact">(
    "normal",
  );

  const isFirstNameValid =
    formData.firstName.length > 0 && validateFullName(formData.firstName);
  const isLastNameValid =
    formData.lastName.length > 0 && validateFullName(formData.lastName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isCompanyValid = formData.companyName.length > 0;
  // const isPhoneValid = formData.phone.length > 0;
  const isWebsiteValid =
    formData.website.length > 0 && validateWebsite(formData.website);
  const isEmployeesValid =
    formData.numberEmployees.length > 0 &&
    validateEmployeesCount(formData.numberEmployees);
  const [isSegmentError, setIsSegmentError] = useState(false);
  const [isTMSegmentsTouched, setIsTMSegmentsTouched] = useState(false);
  const [isOnSubmitPushed, setIsOnSubmitPushed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pageTrack = usePageTrack();

  const segmentValues = useMemo(
    () => ({
      government: formData.government,
      education: formData.education,
      commerce: formData.commerce,
      fortune500: formData.fortune500,
      smes: formData.smes,
      industry: formData.industry,
      otherSegments: formData.otherSegments,
    }),
    [
      formData.government,
      formData.education,
      formData.commerce,
      formData.fortune500,
      formData.smes,
      formData.industry,
      formData.otherSegments,
    ],
  );

  const checkFormValid = useCallback(() => {
    setIsFormValid(
      isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isCompanyValid &&
        isWebsiteValid &&
        isEmployeesValid &&
        !isSegmentError &&
        isCaptchaValid,
    );
  }, [
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isCompanyValid,
    isWebsiteValid,
    isEmployeesValid,
    isSegmentError,
    isCaptchaValid,
  ]);

  function scrollToElementWithOffset(el: HTMLElement) {
    if (!el) return;

    const menuHeight = window.innerWidth <= 592 ? 48 : 72;
    const scrollContainer =
      document.scrollingElement || document.documentElement;

    const doScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetY = scrollTop + rect.top - menuHeight;

      scrollContainer.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(doScroll);
    });
  }

  useEffect(() => {
    checkFormValid();
  }, [checkFormValid]);

  useEffect(() => {
    if (!isOnSubmitPushed && !isTMSegmentsTouched) return;

    const hasChecked = Object.values(segmentValues).some(Boolean);
    setIsSegmentError(!hasChecked);
  }, [segmentValues, isTMSegmentsTouched, isOnSubmitPushed]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = () => {
      setHCaptchaSize(window.innerWidth < 334 ? "compact" : "normal");
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsEmpty((prevState) => ({
      ...prevState,
      [field]: value.length === 0,
    }));
  };

  const handleHCaptchaChange = (token: string | null) => {
    if (token) {
      setToken(token);
      setIsCaptchaValid(true);
    } else {
      setToken("");
      setIsCaptchaValid(false);
      setFormStatus("default");
    }
  };

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    setIsCaptchaValid(false);
    setIsFormValid(false);
    setIsSegmentError(false);
    setIsOnSubmitPushed(false);
    setIsTMSegmentsTouched(false);
    hCaptchaRef.current?.resetCaptcha();
    phoneInputRef.current?.reset();
  };

  const onSubmit = async () => {
    setIsOnSubmitPushed(true);

    const hasChecked = Object.values(segmentValues).some(Boolean);
    setIsSegmentError(!hasChecked);

    if (!hasChecked) {
      if (segmentsRef.current) {
        setTimeout(() => {
          scrollToElementWithOffset(segmentsRef.current!);
        }, 0);
      }
      return;
    }

    if (formData.currentlyPartner && formData.pleaseSpecify.length === 0) {
      setIsEmpty((prev) => ({
        ...prev,
        pleaseSpecify: formData.pleaseSpecify.length === 0,
      }));

      if (segmentsRef.current) {
        partnerHeaderRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }

    if (formStatus === "loading") return;

    if (formStatus === "error") {
      setFormStatus("default");
      return;
    }

    if (formStatus === "success") {
      clearData();
      setFormStatus("default");
      return;
    }

    setFormStatus("loading");

    try {
      const onSubmitRequestData = await onSubmitRequest({
        from,
        hCaptchaResponse: token,
      });

      if (onSubmitRequestData.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        setIsCaptchaValid(false);
        return;
      } else if (onSubmitRequestData.status === "success") {
        pageTrack("Become_an_ONLYOFFICE_official_partner");

        setFormStatus("success");

        setIsOpen(true);

        setTimeout(() => {
          setFormStatus("default");
          clearData();
        }, 5000);
      } else {
        setFormStatus("error");

        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
      }
    } catch (error) {
      //TODO: change UI
      console.error(error);
    }
  };

  return (
    <>
      <StyledPRForm>
        <StyledDownloadModalWrapper>
          <Heading
            level={4}
            size={5}
            label={t("ContactInfo")}
            textAlign="center"
          />

          <StyledNameWrapper>
            <Input
              id="partnerFirstName"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  firstName: formData.firstName.length === 0,
                }));
              }}
              value={formData.firstName}
              label={t("FirstName")}
              placeholder={t("FirstName")}
              caption={
                formData.firstName.length === 0
                  ? t("FirstNameIsEmpty")
                  : !validateFullName(formData.firstName)
                    ? t("FirstNameIsIncorrect")
                    : ""
              }
              required
              status={
                isEmpty.firstName
                  ? "error"
                  : formData.firstName.length > 0
                    ? validateFullName(formData.firstName)
                      ? "success"
                      : "error"
                    : "default"
              }
            />

            <Input
              id="partnerLastName"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  lastName: formData.lastName.length === 0,
                }));
              }}
              value={formData.lastName}
              label={t("LastName")}
              placeholder={t("Surname")}
              caption={
                formData.lastName.length === 0
                  ? t("LastNameIsEmpty")
                  : !validateFullName(formData.lastName)
                    ? t("LastNameIsIncorrect")
                    : ""
              }
              required
              status={
                isEmpty.lastName
                  ? "error"
                  : formData.lastName.length > 0
                    ? validateFullName(formData.lastName)
                      ? "success"
                      : "error"
                    : "default"
              }
            />
          </StyledNameWrapper>

          <Input
            id="partnerPosition"
            onChange={(e) => handleInputChange("positionTitle", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                positionTitle: formData.positionTitle.length === 0,
              }));
            }}
            value={formData.positionTitle}
            label={t("PositionTitle")}
            placeholder={t("PositionTitle")}
            caption={t("PositionIsEmpty")}
            required
            status={
              isEmpty.positionTitle
                ? "error"
                : formData.positionTitle
                  ? "success"
                  : "default"
            }
          />

          <Input
            id="partnerEmail"
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={async () => {
              setIsEmpty((prev) => ({
                ...prev,
                email: formData.email.length === 0,
              }));
              const isTestEmail = await validateTestEmail(formData.email);

              if (!isCaptchaValid) {
                setIsCaptchaValid(isTestEmail === true);
              }
            }}
            value={formData.email}
            label={t("CorporateEmailAddress")}
            placeholder="name@domain.com"
            caption={
              formData.email.length === 0
                ? t("EmailIsEmpty")
                : !validateEmail(formData.email)
                  ? t("EmailIsIncorrect")
                  : ""
            }
            required
            status={
              isEmpty.email
                ? "error"
                : formData.email.length > 0
                  ? validateEmail(formData.email)
                    ? "success"
                    : "error"
                  : "default"
            }
          />

          {locale === "zh" ? (
            <Input
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: false,
                }));
              }}
              value={formData.phone}
              label="微信号"
              status={formData.phone ? "success" : "default"}
            />
          ) : (
            <PhoneInput
              ref={phoneInputRef}
              required={false}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: formData.phone.length === 0,
                }));
              }}
            />
          )}

          <Input
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                companyName: formData.companyName.length === 0,
              }));
            }}
            value={formData.companyName}
            label={t("CompanyName")}
            placeholder={t("CompanyName")}
            caption={t("CompanyNameIsEmpty")}
            required
            status={
              isEmpty.companyName
                ? "error"
                : formData.companyName
                  ? "success"
                  : "default"
            }
          />

          <Input
            onFocus={() => {
              if (formData.website.trim() === "") {
                handleInputChange("website", "");
              }
            }}
            onChange={(e) => handleInputChange("website", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                website: formData.website.trim() === "",
              }));

              if (formData.website === "https://") {
                handleInputChange("website", "");
              }
            }}
            value={formData.website}
            label={t("Website")}
            placeholder="e.g. https://www.onlyoffice.com"
            caption={
              formData.website.length === 0
                ? t("WebsiteIsEmpty")
                : !validateWebsite(formData.website)
                  ? t("WebsiteIsIncorrect")
                  : ""
            }
            required
            status={
              isEmpty.website
                ? "error"
                : formData.website.length > 0
                  ? validateWebsite(formData.website)
                    ? "success"
                    : "error"
                  : "default"
            }
          />

          <Input
            id="partnerEmployeesCount"
            onChange={(e) =>
              handleInputChange("numberEmployees", e.target.value)
            }
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                numberEmployees: formData.numberEmployees.length === 0,
              }));
            }}
            value={formData.numberEmployees}
            label={t("NumberOfEmployees")}
            placeholder={t("NumberOfEmployees")}
            caption={
              formData.numberEmployees.length === 0
                ? t("NumberOfEmployeesIsEmpty")
                : !validateEmployeesCount(formData.numberEmployees)
                  ? t("NumberOfEmployeesFormatError")
                  : ""
            }
            required
            status={
              isEmpty.numberEmployees
                ? "error"
                : formData.numberEmployees.length > 0
                  ? validateEmployeesCount(formData.numberEmployees)
                    ? "success"
                    : "error"
                  : "default"
            }
          />

          <StyledPRFHeading
            level={4}
            size={5}
            label={t("PartnershipInfo")}
            textAlign="center"
          />

          <StyledSegmentsWrapper ref={segmentsRef}>
            <StyledTextWrapper
              className={
                (isTMSegmentsTouched || isOnSubmitPushed) && isSegmentError
                  ? "error"
                  : ""
              }
            >
              <Text label={t("PleaseListYourTargetMarketSegments")} />
            </StyledTextWrapper>

            <div>
              <StyledChecboxesWrapper>
                {targetMarketSegments.map(({ key, label, id, name }) => (
                  <Checkbox
                    id={id}
                    key={key}
                    name={name}
                    checked={formData[key]}
                    onChange={() => {
                      if (!isTMSegmentsTouched) setIsTMSegmentsTouched(true);
                      setFormData((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }));
                    }}
                    label={t(label)}
                  />
                ))}
              </StyledChecboxesWrapper>
            </div>
          </StyledSegmentsWrapper>

          <YesNoRadioBlock
            label="AreYouCurrentlyAPartnerOrAgent"
            fieldName="currentlyPartner"
            formData={formData}
            setFormData={setFormData}
            t={t}
            idPrefix="partner"
          />
          {formData.currentlyPartner && (
            <div className="otherField">
              <Input
                label={t("PleaseSpecify")}
                placeholder={t("PleaseSpecify")}
                value={formData.pleaseSpecify}
                onBlur={() => {
                  setIsEmpty((prev) => ({
                    ...prev,
                    pleaseSpecify: formData.pleaseSpecify.length === 0,
                  }));
                }}
                onChange={(e) =>
                  handleInputChange("pleaseSpecify", e.target.value)
                }
                caption={
                  formData.pleaseSpecify.length === 0 ? t("FieldIsEmpty") : ""
                }
                status={
                  isEmpty.pleaseSpecify
                    ? "error"
                    : formData.pleaseSpecify.length > 0
                      ? "success"
                      : "default"
                }
              />
            </div>
          )}

          <YesNoRadioBlock
            label="DoYouHaveExistingSalesOpportunities"
            fieldName="salesOpportunities"
            formData={formData}
            setFormData={setFormData}
            t={t}
            idPrefix="opportunities"
          />

          <CheckboxesBlock
            label="HowAreYouGoingToPromote"
            items={partnerPromote}
            formData={formData}
            setFormData={setFormData}
            t={t}
          />

          <YesNoRadioBlock
            label="WouldYouNeedADemoPortal"
            fieldName="demoPortal"
            formData={formData}
            setFormData={setFormData}
            t={t}
            idPrefix="demo-portal"
          />

          <YesNoRadioBlock
            label="DoYouNeedAProductTraining"
            fieldName="productTraining"
            formData={formData}
            setFormData={setFormData}
            t={t}
            idPrefix="product-training"
          />

          <YesNoRadioBlock
            label="DoYouNeedASalesTraining"
            fieldName="salesTraining"
            formData={formData}
            setFormData={setFormData}
            t={t}
            idPrefix="sales-training"
          />

          <CheckboxesBlock
            label="WhereHaveYouFirstHeardAboutUs"
            items={partnerInfoSource}
            formData={formData}
            setFormData={setFormData}
            t={t}
          />

          <StyledPreTextAreaText
            label={t("PleaseIncludeAnyAdditionalInformation")}
          />
          <TextArea
            onChange={(e) => handleInputChange("comment", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                comment: formData.comment.length === 0,
              }));
            }}
            value={formData.comment}
            label={t("AdditionalInformation")}
            rows={3}
            fullWidth
            status={formData.comment ? "success" : "default"}
          />

          <Checkbox
            id="spam"
            name="spam"
            checked={formData.spam}
            onChange={() => {
              setFormData((prev) => ({
                ...prev,
                spam: !prev.spam,
              }));
            }}
            label={t("IWantToSubscribeToTheOONewsletter")}
          />

          <StyledHeroHCaptchaWrapper>
            <HCaptcha
              ref={hCaptchaRef}
              size={hCaptchaSize}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />

            <Text fontSize="12px" lineHeight="20px">
              {byClickingText}
            </Text>
          </StyledHeroHCaptchaWrapper>

          <LoaderButton
            onClick={onSubmit}
            status={formStatus}
            label={t("SubmitRequest")}
            disabled={!isFormValid}
          />
        </StyledDownloadModalWrapper>

        {formStatus === "success" && (
          <StyledDownloadModalText
            textAlign="center"
            size={3}
            label={t2("successfullyRequestText")}
          />
        )}
        {formStatus === "error" && (
          <StyledDownloadModalText
            textAlign="center"
            size={3}
            color="#cb0000"
            label={t2("errorRequestText")}
          />
        )}
      </StyledPRForm>

      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export { PartnershipRequestForm };
