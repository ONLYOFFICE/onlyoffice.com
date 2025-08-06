import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ISelectOption, Select } from "@src/components/ui/Select";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { selectItems } from "./data/selectItems";
import { ICheckStatus, IFormData, ISelectSubjectItems } from "../../SupportContactForm.types";
import { hasOption } from "../../utils/typeGuards";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { getFromParam } from "@src/utils/getParams";

import { StyledSelectInputIcon } from "@src/components/ui/Select/Select.styled";
import {
  StyledHeroAgreeText,
  StyledHeroForm,
  StyledHeroHCaptchaWrapper,
  StyledHeroHeading,
  StyledHeroOptions,
  StyledHeroPaidLicense,
  StyledHeroPaidLicenseText,
  StyledHeroRadioInput,
  StyledHeroRadioLabel,
  StyledHeroSelect,
  StyledHeroSelectLabel,
  StyledHeroSelectText,
  StyledHeroSelectWrapper,
  StyledHeroText,
  StyledHeroUpload,
  StyledHeroUploadInput,
  StyledHeroUploadItem,
  StyledHeroUploadItemRemove,
  StyledHeroUploadItemText,
  StyledHeroUploadLabel,
  StyledHeroUploadList,
  StyledHeroUploadText,
  StyledHeroUploadWrapper,
  StyledSelectOption,
  StyledSelectOptionNoInclude,
  StyledSelectOptionSub,
  StyledSelectOptionTitle,
} from "./Hero.styled";
import { useClientOS } from "../../utils/useClientOs";

const Hero = () => {
  const { t } = useTranslation("support-contact-form");
  const { locale } = useRouter();
  const [loadStatus, setLoadStatus] = useState<ILoaderButton["status"]>("default");
  const [checkStatus, setCheckStatus] = useState<ICheckStatus>({
    name: "default",
    email: "default",
  });

  const [selectedProduct, setSelectedProduct] = useState<ISelectOption[]>([]);
  const options = [
    { value: "Cloud Service", label: "Cloud Service" },
    { value: "Self-Hosted Server", label: "Self-Hosted Server" },
    { value: "Applications", label: "Applications" },
  ];

  const [selectedSubject, setSelectedSubject] = useState<ISelectSubjectItems | undefined>();
  const [selectedSubjectOption, setSelectedSubjectOption] = useState<string>("");
  const [isSubjectOpen, setIsSubjectOpen] = useState<boolean>(false);
  const selectSubjectRef = useRef<HTMLDivElement>(null);

  useMemo(() => {
    const subject = selectItems.find((item) => item.value === selectedProduct[0]?.value);
    setSelectedSubject(subject);
  }, [selectedProduct]);

  const [formData, setFormData] = useState<IFormData>({
    product: "",
    subject: "",
    specifyOfOther: "",
    paidLicense: true,
    description: "",
    files: [],
    name: "",
    email: "",
    hcaptcha: null
  });

  const os = useClientOS();

  const handleSubjectChoose = (option: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value
    }));
    setSelectedSubjectOption(option);
    setIsSubjectOpen(false);
  };

  useEffect(() => {
    setIsSubjectOpen(false);
    setSelectedSubjectOption("");
    setFormData((prev) => ({
      ...prev,
      subject: "",
      product: selectedProduct[0]?.value || ""
    }));
  }, [selectedProduct])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectSubjectRef.current &&
        !selectSubjectRef.current.contains(event.target as Node)
      ) {
        setIsSubjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  const removeFile = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files?.filter((stateFile) => stateFile !== file)
    }));
  };

  const handleCheckStatusFullName = () => {
    if (validateFullName(formData.name)) {
      setCheckStatus((prev) => ({
        ...prev,
        name: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        name: "error",
      }));
    }
  }

  const handleCheckStatusEmail = () => {
    if (validateEmail(formData.email)) {
      setCheckStatus((prev) => ({
        ...prev,
        email: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        email: "error",
      }));
    }
  }

  const handleOnSubmit = async () => {
    console.log("formData", formData);
    setLoadStatus("loading");
    const from = getFromParam();

    try {
      const hCaptchaResponse = await fetch("/api/hcaptcha-verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({ token: formData.hcaptcha})
        }
      );

      const hCaptchaData = await hCaptchaResponse.json();

      if (hCaptchaData.status === "errorHCaptchaInvalid") {
        setLoadStatus("error");
        return;
      }

      if (hCaptchaData.status === "success") {
        const responseSupport = await fetch("/api/support-contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: formData.product ?? "",
            subject: formData.subject ?? "",
            specifyOfOther: formData.specifyOfOther ?? "",
            paidLicense: formData.paidLicense ?? null,
            description: formData.description ?? "",
            files: formData.files ?? [],
            name: formData.name ?? "",
            email: formData.email ?? "",
            languageCode: locale,
            from,
            os,
          }),
        });

        const dataSupport = await responseSupport.json();

        console.log("dataSupport", dataSupport);

        if (dataSupport.status === "success") {
          setLoadStatus("success");
          return;
        }
      }

    } catch (error) {
      console.error(error);
      setLoadStatus("error");
    }

  };

  return (
    <Section>
      <Container>
        <StyledHeroHeading
          size={2}
          textAlign="center"
          label={t("SupportContactForm")}
        />
        <StyledHeroText
          size={1}
          textAlign="center"
          label={t("DescribeYourProblem")}
        />
        <StyledHeroForm>
          <Select
            selected={selectedProduct}
            setSelected={setSelectedProduct}
            options={options}
            label="Product"
            maxWidth="100%"
            status={selectedProduct.length > 0 ? "success" : "default"}
          />
          <StyledHeroSelectWrapper
            ref={selectSubjectRef}
          >
            <StyledHeroSelect
              type="button"
              onClick={() => setIsSubjectOpen((prev) => !prev)}
              $isSubjectOpen={isSubjectOpen}
              $isSelected={selectedSubjectOption.length > 0}
            >
              <StyledHeroSelectLabel
                label={t("Subject")}
                color="#aaaaaa"
                $isSubjectOpen={isSubjectOpen}
                $isSelected={selectedSubjectOption.length > 0}
              />
              <StyledHeroSelectText label={selectedSubjectOption} />
              <StyledSelectInputIcon
                $isOpen={isSubjectOpen}
                $selected={selectedSubject?.data ? selectedSubject.data.length > 0 : false}
                $status={selectedSubject?.data && selectedSubject.data.length > 0 ? "success" : "default"}
              />
            </StyledHeroSelect>

            {isSubjectOpen && (
              <StyledHeroOptions>
                {selectedSubject?.data ? (
                  selectedSubject.data.map((item) => (
                    <React.Fragment key={item.value}>
                      {hasOption(item) && (
                        <StyledSelectOption
                          type="button"
                          onClick={() => handleSubjectChoose(item.option, item.value)}
                          $isOptionSelected={item.value === formData.subject}
                        >
                          {item.option}
                        </StyledSelectOption>
                      )}
                      {item.title && (
                        <StyledSelectOptionTitle
                          type="button"
                        >
                          {item.title}
                        </StyledSelectOptionTitle>
                      )}
                      {item?.subData && (
                        item.subData.map((subItem) => (
                          <StyledSelectOptionSub
                            key={subItem.value}
                            type="button"
                            onClick={() => handleSubjectChoose(subItem.option, subItem.value)}
                            $isOptionSelected={subItem.value === formData.subject}
                          >
                            {subItem.option}
                          </StyledSelectOptionSub>
                        ))
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <StyledSelectOptionNoInclude type="button">
                    {t("ProductIsNotSelected")}
                  </StyledSelectOptionNoInclude>
                )}
              </StyledHeroOptions>
            )}
          </StyledHeroSelectWrapper>
          {(formData.subject === "Other"
            || formData.subject === "Functionality: Other"
            || formData.subject === "Online Editors: Other"
            || formData.subject === "Collaboration platform: Other")
            && (
            <Input
              label={t("PleaseSpecify")}
              value={formData.specifyOfOther}
              onChange={(event) => {setFormData((prev) => ({ ...prev, specifyOfOther: event.target.value }))}}
              status={formData.specifyOfOther.length > 0 ? "success" : "default"}
            />
          )}
          <StyledHeroPaidLicense>
            <StyledHeroPaidLicenseText label={t("PaidLicense")} color="#666666" />
            <StyledHeroRadioInput
              id="paid-license-yes"
              type="radio"
              name="paidLicense"
              value="yes"
              checked={formData.paidLicense}
              onChange={() => {setFormData((prev) => ({ ...prev, paidLicense: true }))}}
            />
            <StyledHeroRadioLabel htmlFor="paid-license-yes">{t("Yes")}</StyledHeroRadioLabel>
            <StyledHeroRadioInput
              id="paid-license-no"
              type="radio"
              name="paidLicense"
              value="no"
              checked={!formData.paidLicense}
              onChange={() => {setFormData((prev) => ({ ...prev, paidLicense: false }))}}
            />
            <StyledHeroRadioLabel htmlFor="paid-license-no">{t("No")}</StyledHeroRadioLabel>
          </StyledHeroPaidLicense>
          <TextArea
            label="Description"
            value={formData.description}
            onChange={(event) => {setFormData((prev) => ({ ...prev, description: event.target.value}))}}
            fullWidth={true}
          />
          <StyledHeroUploadWrapper>
            <StyledHeroUpload>
              <StyledHeroUploadInput
                id="file-input"
                type="file"
                multiple
                onChange={(event) => addFile(event)}
              />
              <StyledHeroUploadLabel
                htmlFor="file-input"
              >
                <Trans
                  t={t}
                  i18nKey="AttachFileOrScreenshоts"
                  components={[
                    <StyledHeroUploadText
                      key="0"
                      as={"span"}
                    />
                  ]}
                />
              </StyledHeroUploadLabel>
            </StyledHeroUpload>

            {formData.files?.length > 0 && (
              <StyledHeroUploadList>
                {formData.files.map((file) => (
                  <StyledHeroUploadItem
                    key={`${file.name}-${file.lastModified}`}
                  >
                    <StyledHeroUploadItemText
                      size={4}
                      label={file.name}
                      color="#808080"
                    />
                    <StyledHeroUploadItemRemove
                      type="button"
                      onClick={() => removeFile(file)}
                    />
                  </StyledHeroUploadItem>
                ))}
              </StyledHeroUploadList>
            )}
          </StyledHeroUploadWrapper>
          <Input
            label="Name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={(event) => {setFormData((prev) => ({ ...prev, name: event.target.value }))}}
            required
            onBlur={handleCheckStatusFullName}
            onFocus={() => setCheckStatus((prev) => ({ ...prev, fullName: "default" }))}
            status={checkStatus.name}
            caption={
              checkStatus.name === "error" && formData.name.length === 0
              ? t("NameIsEmpty")
              : checkStatus.name === "error" && formData.name.length > 0
              ? t("NameIsIncorrect")
              : ""
            }
          />
          <Input
            label="Email"
            placeholder="name@domain.com"
            type="email"
            value={formData.email}
            onChange={(event) => {setFormData((prev) => ({ ...prev, email: event.target.value }))}}
            required
            onBlur={handleCheckStatusEmail}
            onFocus={() => setCheckStatus((prev) => ({ ...prev, email: "default" }))}
            status={checkStatus.email}
            caption={
              checkStatus.email === "error" && formData.email.length === 0
              ? t("EmailIsEmpty")
              : checkStatus.email === "error" && formData.email.length > 0
              ? t("EmailIsIncorrect")
              : ""
            }
          />
          <StyledHeroHCaptchaWrapper>
            <HCaptcha
              onVerify={(token) => {setFormData((prev) => ({ ...prev, hcaptcha: token }))}}
              onExpire={() => {setFormData((prev) => ({ ...prev, hcaptcha: null }))}}
            />
            <StyledHeroAgreeText
              color="#808080"
            >
              <Trans
                t={t}
                i18nKey="ByClickingSubmit"
                components={[
                  <Link
                    key="0"
                    href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                    target="_blank"
                    color="main"
                    textUnderline={true}
                  />,
                  <Link
                    key="1"
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                    target="_blank"
                    color="main"
                    textUnderline={true}
                  />
                ]}
              />
            </StyledHeroAgreeText>
          </StyledHeroHCaptchaWrapper>
          <LoaderButton
            label={t("Submit")}
            onClick={() => handleOnSubmit()}
            disabled={
              checkStatus.name !== "success" ||
              checkStatus.email !== "success" ||
              formData.hcaptcha === null
            }
            status={loadStatus}
         />
        </StyledHeroForm>
      </Container>
    </Section>
  );
};

export { Hero };