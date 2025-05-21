import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Trans } from "react-i18next";
import {
  StyledRegistrationForm,
  StyledRegistrationFormWrapper,
  StyledRegistrationFormContent,
  StyledRegistrationFormHeading,
  StyledRegistrationFormText,
  StyledRegistrationFormContainer,
  StyledForm,
  StyledFormGroup,
  StyledFormLabel,
  StyledSignInLink,
  StyledSubmitButton,
  StyledAlreadyRegistered,
  StyledShowPassword
} from "./RegistrationForm.styled";
import { Input } from "@src/components/ui/Input";
import { Checkbox } from "@src/components/ui/Checkbox";
import Link from "next/link";
import { validateEmail } from "@src/utils/validators";

const RegistrationForm = () => {
  const { t } = useTranslation("docspace-registration");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    portalName: "",
    password: "",
    sendTips: false
  });

  const [isEmpty, setIsEmpty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    portalName: false,
    password: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const isEmailValid = formData.email.length > 0 && validateEmail(formData.email);
  const isFirstNameValid = formData.firstName.length > 0;
  const isLastNameValid = formData.lastName.length > 0;
  const isPortalNameValid = formData.portalName.length > 0;
  const isPasswordValid = formData.password.length >= 8;

  const checkFormValid = () => {
    setIsFormValid(
      isEmailValid && isFirstNameValid && isLastNameValid && isPortalNameValid && isPasswordValid
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (showSignIn) {
    return (
      <StyledRegistrationForm>
        <StyledRegistrationFormWrapper>
          <StyledRegistrationFormContent>
            {/* Здесь будет компонент SignIn */}
            <p>Sign In Component</p>
            <StyledSignInLink onClick={toggleSignIn}>
              {t("CreateAccount")}
            </StyledSignInLink>
          </StyledRegistrationFormContent>
        </StyledRegistrationFormWrapper>
      </StyledRegistrationForm>
    );
  }

  return (
    <StyledRegistrationForm>
      <StyledRegistrationFormWrapper>
        <StyledRegistrationFormContent>
          <StyledAlreadyRegistered>
            <p>{t("AlreadyHave")}</p>
            <StyledSignInLink onClick={toggleSignIn}>
              {t("LogIn")}
            </StyledSignInLink>
          </StyledAlreadyRegistered>
          
          <StyledRegistrationFormContainer>
            <StyledRegistrationFormHeading size={1}>
              Create your <span style={{color: "#FF6F3D"}}>DocSpace</span> account
            </StyledRegistrationFormHeading>
            
            <StyledRegistrationFormText>
              {t("RegistrationSubheader")}
            </StyledRegistrationFormText>
            
            <StyledForm onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <StyledFormGroup style={{ flex: 1 }}>
                  <StyledFormLabel>{t("FirstName")}</StyledFormLabel>
                  <Input
                    type="text"
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    onBlur={() => {
                      setIsEmpty((prev) => ({
                        ...prev,
                        firstName: formData.firstName.length === 0,
                      }));
                      checkFormValid();
                    }}
                    value={formData.firstName}
                    placeholder={t("FirstNamePlaceholder")}
                    caption={
                      formData.firstName.length === 0 && isEmpty.firstName
                        ? t("FirstNameIsEmpty")
                        : ""
                    }
                    required
                    status={
                      isEmpty.firstName
                        ? "error"
                        : formData.firstName.length > 0
                          ? "success"
                          : "default"
                    }
                  />
                </StyledFormGroup>
                
                <StyledFormGroup style={{ flex: 1 }}>
                  <StyledFormLabel>{t("LastName")}</StyledFormLabel>
                  <Input
                    type="text"
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    onBlur={() => {
                      setIsEmpty((prev) => ({
                        ...prev,
                        lastName: formData.lastName.length === 0,
                      }));
                      checkFormValid();
                    }}
                    value={formData.lastName}
                    placeholder={t("LastNamePlaceholder")}
                    caption={
                      formData.lastName.length === 0 && isEmpty.lastName
                        ? t("LastNameIsEmpty")
                        : ""
                    }
                    required
                    status={
                      isEmpty.lastName
                        ? "error"
                        : formData.lastName.length > 0
                          ? "success"
                          : "default"
                    }
                  />
                </StyledFormGroup>
              </div>
              
              <StyledFormGroup>
                <StyledFormLabel>{t("Email")}</StyledFormLabel>
                <Input
                  type="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => {
                    setIsEmpty((prev) => ({
                      ...prev,
                      email: formData.email.length === 0,
                    }));
                    checkFormValid();
                  }}
                  value={formData.email}
                  placeholder={t("EmailPlaceholder")}
                  caption={
                    formData.email.length === 0 && isEmpty.email
                      ? t("EmailIsEmpty")
                      : !validateEmail(formData.email) && formData.email.length > 0
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
              </StyledFormGroup>
              
              <StyledFormGroup>
                <StyledFormLabel>{t("PortalName")}</StyledFormLabel>
                <Input
                  type="text"
                  onChange={(e) => handleInputChange("portalName", e.target.value)}
                  onBlur={() => {
                    setIsEmpty((prev) => ({
                      ...prev,
                      portalName: formData.portalName.length === 0,
                    }));
                    checkFormValid();
                  }}
                  value={formData.portalName}
                  placeholder={t("PortalNamePlaceholder")}
                  caption={
                    formData.portalName.length === 0 && isEmpty.portalName
                      ? t("PortalNameIsEmpty")
                      : ""
                  }
                  required
                  status={
                    isEmpty.portalName
                      ? "error"
                      : formData.portalName.length > 0
                        ? "success"
                        : "default"
                  }
                />
              </StyledFormGroup>
              
              <StyledFormGroup>
                <StyledFormLabel>{t("Password")}</StyledFormLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onBlur={() => {
                    setIsEmpty((prev) => ({
                      ...prev,
                      password: formData.password.length === 0,
                    }));
                    checkFormValid();
                  }}
                  value={formData.password}
                  placeholder={t("PasswordPlaceholder")}
                  caption={
                    formData.password.length === 0 && isEmpty.password
                      ? t("PasswordIsEmpty")
                      : formData.password.length > 0 && formData.password.length < 8
                        ? t("PasswordTooShort")
                        : ""
                  }
                  required
                  status={
                    isEmpty.password
                      ? "error"
                      : formData.password.length > 0
                        ? formData.password.length >= 8
                          ? "success"
                          : "error"
                        : "default"
                  }
                />
                <StyledShowPassword onClick={toggleShowPassword}>
                  {showPassword ? t("HidePassword") : t("ShowPassword")}
                </StyledShowPassword>
              </StyledFormGroup>
              
              <StyledFormGroup>
                <Checkbox
                  id="sendTips"
                  name="sendTips"
                  checked={formData.sendTips}
                  onChange={handleCheckboxChange}
                  label={t("SendTips")}
                />
              </StyledFormGroup>
              
              <StyledSubmitButton type="submit" disabled={!isFormValid}>
                {t("CreateMyDocSpace")}
              </StyledSubmitButton>
            </StyledForm>
            
            <div className="deploy-info">
              <p>{t("WouldYouLikeToDeploy")}</p>
              <Link href="/download-docspace">
                {t("DownloadHere")}
              </Link>
            </div>
          </StyledRegistrationFormContainer>
        </StyledRegistrationFormContent>
      </StyledRegistrationFormWrapper>
    </StyledRegistrationForm>
  );
};

export { RegistrationForm };
