import { useState } from "react";
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
import { ILocale } from "@src/types/locale";
import { Container } from "@src/components/ui/Container";
import { SearchInput } from "./sub-components/SearchInput";
import { PhoneMenu } from "./sub-components/PhoneMenu";
import { LanguageSelector } from "./sub-components/LanguageSelector";
import { Overlay } from "@src/components/ui/Overlay";

const Header = ({ locale }: ILocale) => {
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
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                width={130}
                height={24}
              />
            </StyledHeaderLogo>
            <HeaderMenu locale={locale} isOpen={isOpenMenuMobile} />
            <StyledHeaderBox>
              <SearchInput />
              <PhoneMenu />
              <LanguageSelector />
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
