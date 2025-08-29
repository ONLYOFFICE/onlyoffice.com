import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  GlobalStyle,
  StyledHero,
  StyledHeroWrapper,
  StyledHeroItem,
} from "./Hero.styled";
import { TStatus } from "./Hero.types";
import { Info } from "./sub-components/Info";
import { SignUp } from "./sub-components/Auth/SignUp";
import { LogIn } from "./sub-components/Auth/LogIn";

const Hero = () => {
  const router = useRouter();
  const [status, setStatus] = useState<TStatus>("signup");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash === "login") {
      setStatus("login");
    } else {
      setStatus("signup");
    }
  }, [router.asPath]);

  return (
    <>
      <GlobalStyle />

      <StyledHero>
        <StyledHeroWrapper>
          <StyledHeroItem $info>
            <Info />
          </StyledHeroItem>
          <StyledHeroItem $auth>
            {status === "signup" ? (
              <SignUp />
            ) : status === "login" ? (
              <LogIn />
            ) : null}
          </StyledHeroItem>
        </StyledHeroWrapper>
      </StyledHero>
    </>
  );
};

export { Hero };
