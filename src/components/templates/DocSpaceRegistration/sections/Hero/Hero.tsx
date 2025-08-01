import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  GlobalStyle,
  StyledHero,
  StyledHeroWrapper,
  StyledHeroItem,
} from "./Hero.styled";
import { IHero, TStatus } from "./Hero.types";
import { Info } from "./sub-components/Info";
import { SignUp } from "./sub-components/Auth/SignUp";
import { LogIn } from "./sub-components/Auth/LogIn";
import { CheckEmail } from "./sub-components/Auth/CheckEmail";
import { ChooseAccount } from "./sub-components/Auth/ChooseAccount";
import { RestorePassword } from "./sub-components/Auth/RestorePassword";

const Hero = ({ tenants, queryParams }: IHero) => {
  const router = useRouter();
  const [status, setStatus] = useState<TStatus>("signup");
  const [email, setEmail] = useState("");
  const [existTenants, setExistTenants] = useState(tenants?.data);
  const [createNewAccountQuery, setCreateNewAccountQuery] =
    useState(queryParams);

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
            {existTenants && existTenants.length > 0 ? (
              <ChooseAccount
                existTenants={existTenants}
                setExistTenants={setExistTenants}
                status={status}
                createNewAccountQuery={createNewAccountQuery}
              />
            ) : status === "signup" ? (
              <SignUp
                setEmail={setEmail}
                setStatus={setStatus}
                setExistTenants={setExistTenants}
                setCreateNewAccountQuery={setCreateNewAccountQuery}
              />
            ) : status === "login" ? (
              <LogIn setExistTenants={setExistTenants} setStatus={setStatus} />
            ) : status === "checkEmail" ? (
              <CheckEmail email={email} setStatus={setStatus} />
            ) : status === "restorePassword" ? (
              <RestorePassword setStatus={setStatus} />
            ) : null}
          </StyledHeroItem>
        </StyledHeroWrapper>
      </StyledHero>
    </>
  );
};

export { Hero };
