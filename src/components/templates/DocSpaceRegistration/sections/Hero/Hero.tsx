import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledHero, StyledHeroWrapper, StyledHeroItem } from "./Hero.styled";
import { Info } from "./sub-components/Info";
import { SignUp } from "./sub-components/Auth/SignUp";
import { LogIn } from "./sub-components/Auth/LogIn";
import { CheckEmail } from "./sub-components/Auth/CheckEmail";
import { ChooseAccount } from "./sub-components/Auth/ChooseAccount";

const Hero = () => {
  const router = useRouter();
  const [status, setStatus] = useState<
    "login" | "signup" | "checkEmail" | "chooseEmail"
  >("signup");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash === "login") {
      setStatus("login");
    } else {
      setStatus("signup");
    }
  }, [router.asPath]);

  return (
    <StyledHero>
      <StyledHeroWrapper>
        <StyledHeroItem $info>
          <Info />
        </StyledHeroItem>
        <StyledHeroItem $auth>
          {status === "signup" ? (
            <SignUp setEmail={setEmail} setStatus={setStatus} />
          ) : status === "login" ? (
            <LogIn />
          ) : status === "checkEmail" ? (
            <CheckEmail email={email} setStatus={setStatus} />
          ) : status === "chooseEmail" ? (
            <ChooseAccount />
          ) : null}
        </StyledHeroItem>
      </StyledHeroWrapper>
    </StyledHero>
  );
};

export { Hero };
