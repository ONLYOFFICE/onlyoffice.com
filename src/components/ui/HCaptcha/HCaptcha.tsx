import { forwardRef } from "react";
import { useRouter } from "next/router";
import ReactHCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledHCaptcha,
  StyledHCaptchaWrapper,
  StyledHCaptchaError,
} from "./HCaptcha.styled";
import { IHCaptcha } from "./HCaptcha.types";

const HCaptcha = forwardRef<ReactHCaptcha, IHCaptcha>(
  (
    { size = "normal", onVerify, onExpire, position, error }: IHCaptcha,
    ref,
  ) => {
    const router = useRouter();

    return (
      <StyledHCaptcha>
        <StyledHCaptchaWrapper $position={position}>
          <ReactHCaptcha
            ref={ref}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            languageOverride={router.locale}
            size={size}
            onVerify={onVerify}
            onExpire={onExpire}
          />
        </StyledHCaptchaWrapper>

        {error && <StyledHCaptchaError>{error}</StyledHCaptchaError>}
      </StyledHCaptcha>
    );
  },
);

HCaptcha.displayName = "HCaptcha";

export { HCaptcha };
