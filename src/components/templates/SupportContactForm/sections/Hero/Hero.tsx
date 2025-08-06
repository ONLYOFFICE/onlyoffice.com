import React, { useEffect, useMemo, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ISelectOption, Select } from "@src/components/ui/Select";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { LoaderButton } from "@src/components/ui/LoaderButton";
import { selectItems } from "./data/selectItems";
import { IFormData, ISelectSubjectItems } from "../../SupportContactForm.types";
import { hasOption } from "../../utils/typeGuards";

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

const Hero = () => {
  const { t } = useTranslation("support-contact-form");

  const [selectedProduct, setSelectedProduct] = useState<ISelectOption[]>([]);
  const options = [
    { value: "Cloud Service", label: "Cloud Service" },
    { value: "Self-Hosted Server", label: "Self-Hosted Server" },
    { value: "Applications", label: "Applications" },
  ];

  const [selectedSubject, setSelectedSubject] = useState<ISelectSubjectItems | undefined>();
  const [selectedSubjectOption, setSelectedSubjectOption] = useState<string>("");
  const [isSubjectOpen, setIsSubjectOpen] = useState<boolean>(false);

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
  }, [selectedProduct])

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
          <StyledHeroSelectWrapper>
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
          />
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(event) => {setFormData((prev) => ({ ...prev, email: event.target.value }))}}
            required
          />
          <StyledHeroHCaptchaWrapper>
            <HCaptcha />
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
            onClick={() => {}}
            disabled={
              formData.name.length === 0 ||
              formData.email.length === 0 ||
              formData.hcaptcha === null
            }
         />
        </StyledHeroForm>
      </Container>
    </Section>
  );
};

export { Hero };