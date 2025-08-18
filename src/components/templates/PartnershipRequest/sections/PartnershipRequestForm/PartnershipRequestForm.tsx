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
  StyledPreRadiosText,
  StyledLine2RadiosWrapper,
  StyledLineRadioInput,
  StyledLineRadioLabel,
  StyledHeroHCaptchaWrapper,
} from "./PartnershipRequestForm.styled";
import { targetMarketSegments } from "./data/items";
import { IPartnRequestForm} from "./PartnershipRequestForm.types";
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

    comment: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [token, setToken] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const isFirstNameValid =
    formData.firstName.length > 0 && validateFullName(formData.firstName);
  const isLastNameValid =
    formData.lastName.length > 0 && validateFullName(formData.lastName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isCompanyValid = formData.companyName.length > 0;
  // const isPhoneValid = formData.phone.length > 0;
  const isWebsiteValid = formData.website.length > 0 && validateWebsite(formData.website);
  const isEmployeesValid = formData.numberEmployees.length > 0 && validateEmployeesCount(formData.numberEmployees);
  const [isSegmentError, setIsSegmentError] = useState(false);
  const [isTMSegmentsTouched, setIsTMSegmentsTouched] = useState(false);
  const [isOnSubmitPushed, setIsOnSubmitPushed] = useState(false);


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
    ]
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
  }, [isFirstNameValid, isLastNameValid, isEmailValid, isCompanyValid, isWebsiteValid, isEmployeesValid,
    isSegmentError, isCaptchaValid]);

  function scrollToElementWithOffset(el: HTMLElement) {
    if (!el) return;

    const menuHeight = window.innerWidth <= 592 ? 48 : 72;
    const scrollContainer = document.scrollingElement || document.documentElement;

    const doScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetY = scrollTop + rect.top - menuHeight;

      scrollContainer.scrollTo({
        top: targetY,
        behavior: "smooth"
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
    if (
      token
    ) {
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
      const hCaptchaResponse = await fetch("/api/hcaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const hCaptchaData = await hCaptchaResponse.json();

      if (hCaptchaData.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        setIsCaptchaValid(false);
        return;
      }

      if (hCaptchaData.status === "success") {
        setIsCaptchaValid(true);
      }

      const onSubmitRequestData = await onSubmitRequest({
        from,
      });

      if (onSubmitRequestData.status === "success") {
        setFormStatus("success");

        //TODO: change UI insted of alert()
        alert(onSubmitRequestData.status);

        setTimeout(() => {
          setFormStatus("default");
          clearData();
        }, 5000);
      } else {
        setFormStatus("error");

        setTimeout(() => {
          setFormStatus("default");
          clearData();
        }, 5000);
      }
    } catch (error) {
      //TODO: change UI
      console.error(error);
    }
  };

  return (
    <StyledPRForm>
      <StyledDownloadModalWrapper>

        <Heading
          level={4}
          size={5}
          label={t("ContactInfo")}
          textAlign="center"
          >
        </Heading>

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
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              email: formData.email.length === 0,
            }));
          }}
          value={formData.email}
          label={t("CorporateEmailAddress")}
          placeholder="name@domain.com"
          caption={
            formData.email.length === 0
              ? t2("EmailIsEmpty")
              : !validateEmail(formData.email)
                ? t2("EmailIsIncorrect")
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
            status={
              formData.phone ? "success" : "default"
            }
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
            status={
              formData.phone ? "success" : "default"
            }
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
          label={t2("CompanyName")}
          placeholder={t2("CompanyName")}
          caption={t2("CompanyNameIsEmpty")}
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
                ? t2("WebsiteIsIncorrect")
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
          onChange={(e) => handleInputChange("numberEmployees", e.target.value)}
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
          label={t("PartneshipInfo")}>
        </StyledPRFHeading>

        <StyledSegmentsWrapper ref={segmentsRef}>
          <StyledTextWrapper className={((isTMSegmentsTouched || isOnSubmitPushed) && isSegmentError) ? "error" : ""}>
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

        <StyledPreRadiosText label={t("DoYouHaveExistingSalesOpportunities")} />
        <StyledLine2RadiosWrapper>
          <StyledLineRadioInput
            id="opportunities-radio-yes"
            type="radio"
            name="salesOpportunities"
            value="Yes"
            checked={formData.salesOpportunities}
            onChange={() => {setFormData((prev) => ({ ...prev, salesOpportunities: true }))}}
          />
          <StyledLineRadioLabel htmlFor="opportunities-radio-yes">{t("Yes")}</StyledLineRadioLabel>
          <StyledLineRadioInput
            id="opportunities-radio-no"
            type="radio"
            name="salesOpportunities"
            value="No"
            checked={!formData.salesOpportunities}
            onChange={() => {setFormData((prev) => ({ ...prev, salesOpportunities: false }))}}
          />
          <StyledLineRadioLabel htmlFor="opportunities-radio-no">{t("No")}</StyledLineRadioLabel>
        </StyledLine2RadiosWrapper>

        <StyledPreRadiosText label={t("WouldYouNeedADemoPortal")} />
        <StyledLine2RadiosWrapper>
          <StyledLineRadioInput
            id="demo-portal-radio-yes"
            type="radio"
            name="demoPortal"
            value="Yes"
            checked={formData.demoPortal}
            onChange={() => {setFormData((prev) => ({ ...prev, demoPortal: true }))}}
          />
          <StyledLineRadioLabel htmlFor="demo-portal-radio-yes">{t("Yes")}</StyledLineRadioLabel>
          <StyledLineRadioInput
            id="demo-portal-radio-no"
            type="radio"
            name="demoPortal"
            value="No"
            checked={!formData.demoPortal}
            onChange={() => {setFormData((prev) => ({ ...prev, demoPortal: false }))}}
          />
          <StyledLineRadioLabel htmlFor="demo-portal-radio-no">{t("No")}</StyledLineRadioLabel>
        </StyledLine2RadiosWrapper>

        <StyledPreRadiosText label={t("DoYouNeedAProductTraining")} />
        <StyledLine2RadiosWrapper>
          <StyledLineRadioInput
            id="product-training-radio-yes"
            type="radio"
            name="productTraining"
            value="Yes"
            checked={formData.productTraining}
            onChange={() => {setFormData((prev) => ({ ...prev, productTraining: true }))}}
          />
          <StyledLineRadioLabel htmlFor="product-training-radio-yes">{t("Yes")}</StyledLineRadioLabel>
          <StyledLineRadioInput
            id="product-training-radio-no"
            type="radio"
            name="productTraining"
            value="No"
            checked={!formData.productTraining}
            onChange={() => {setFormData((prev) => ({ ...prev, productTraining: false }))}}
          />
          <StyledLineRadioLabel htmlFor="product-training-radio-no">{t("No")}</StyledLineRadioLabel>
        </StyledLine2RadiosWrapper>

        <StyledPreRadiosText label={t("DoYouNeedASalesTraining")} />
        <StyledLine2RadiosWrapper>
          <StyledLineRadioInput
            id="sales-training-radio-yes"
            type="radio"
            name="salesTraining"
            value="Yes"
            checked={formData.salesTraining}
            onChange={() => {setFormData((prev) => ({ ...prev, salesTraining: true }))}}
          />
          <StyledLineRadioLabel htmlFor="sales-training-radio-yes">{t("Yes")}</StyledLineRadioLabel>
          <StyledLineRadioInput
            id="sales-training-radio-no"
            type="radio"
            name="salesTraining"
            value="No"
            checked={!formData.salesTraining}
            onChange={() => {setFormData((prev) => ({ ...prev, salesTraining: false }))}}
          />
          <StyledLineRadioLabel htmlFor="sales-training-radio-no">{t("No")}</StyledLineRadioLabel>
        </StyledLine2RadiosWrapper>

        <StyledPreRadiosText label={t("PleaseIncludeAnyAdditionalInformation")} />
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


        <StyledHeroHCaptchaWrapper>
          <HCaptcha
            ref={hCaptchaRef}
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
          label={t2("GetItNow")}
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
  );
};

export { PartnershipRequestForm };
