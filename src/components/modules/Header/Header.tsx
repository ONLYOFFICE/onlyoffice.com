import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import {
  GlobalStyle,
  StyledHeader,
  StyledHeaderWrapper,
  StyledHumburgerButton,
  StyledHeaderLogo,
  StyledHeaderBox,
} from "./Header.styled";
import { HeaderMenu } from "onlyoffice-react-ui-kit/header-menu";
import "onlyoffice-react-ui-kit/header-menu/css";
import { Container } from "@src/components/ui/Container";
import { SearchInput } from "./sub-components/SearchInput";
import { PhoneMenu } from "./sub-components/PhoneMenu";
import { LanguageSelector } from "./sub-components/LanguageSelector";
import { Overlay } from "@src/components/ui/Overlay";

interface IHeader {
  locale?: string;
}

const Header = ({ locale }: IHeader) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle $isOpenMenuMobile={isOpenMenuMobile} />
      <StyledHeader>
        <Container maxWidth="1280px" desktopSpacing="24px">
          <StyledHeaderWrapper>
            <StyledHumburgerButton
              onClick={() => setIsOpenMenuMobile(true)}
              id="hamburger-button"
            />
            <StyledHeaderLogo id="header-logo" href="/">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={130}
                height={24}
                priority
              />
            </StyledHeaderLogo>
            <HeaderMenu
              locale={locale ?? router.locale}
              isOpen={isOpenMenuMobile}
            />
            <StyledHeaderBox>
              <SearchInput />
              <PhoneMenu t={t} />
              <LanguageSelector t={t} />
            </StyledHeaderBox>
          </StyledHeaderWrapper>
        </Container>
        <Overlay
          onClick={() => setIsOpenMenuMobile(false)}
          active={isOpenMenuMobile}
        />
      </StyledHeader>
    </>
  );
};

export { Header };
