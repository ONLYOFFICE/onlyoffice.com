import { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ISelectOption, Select } from "@src/components/ui/Select";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { selectItems } from "./data/selectItems";
import { ISelectSubjectItems } from "../../SupportContactForm.types";

import {
  StyledHeroForm,
  StyledHeroHeading,
  StyledHeroOptions,
  StyledHeroSelect,
  StyledHeroSelectWrapper,
  StyledHeroText,
  StyledSelectOption
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
  const [isSubjectOpen, setIsSubjectOpen] = useState<boolean>(false);

  useMemo(() => {
    const subject = selectItems.find((item) => item.value === selectedProduct[0]?.value);
    setSelectedSubject(subject);
  }, [selectedProduct]);
  console.log(selectedSubject);

  const [formData, setFormData] = useState({
    product: "",
    subject: "",
    specifyOfOther: "",
    paidLicense: true,
    description: "",
    files: [],
    name: "",
    email: "",
    hcaptcha: null
  })

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
            >
              {selectedSubject?.option || t("SelectSubject")}
            </StyledHeroSelect>

            {isSubjectOpen && (
              <StyledHeroOptions>
                {selectedSubject?.data && selectedSubject.data.map((item) => (
                  <StyledSelectOption
                    key={item.value}
                    type="button"
                  >
                      {item.option}
                  </StyledSelectOption>
                ))}
              </StyledHeroOptions>
            )}
          </StyledHeroSelectWrapper>
          <TextArea
            label="Description"
            value={formData.description}
            onChange={(event) => {setFormData((prev) => ({ ...prev, description: event.target.value}))}}
            fullWidth={true}
          />
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
        </StyledHeroForm>
      </Container>
    </Section>
  );
};

export { Hero };