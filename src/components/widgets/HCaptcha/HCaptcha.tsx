import { forwardRef } from "react";
import { useRouter } from "next/router";
import ReactHCaptcha from "@hcaptcha/react-hcaptcha";
import { StyledHCaptcha } from "./HCaptcha.styled";
import { IHCaptcha } from "./HCaptcha.types";

const HCaptcha = forwardRef<ReactHCaptcha, IHCaptcha>(
  ({ onVerify, onExpire }: IHCaptcha, ref) => {
    const router = useRouter();

    return (
      <StyledHCaptcha>
        <ReactHCaptcha
          ref={ref}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
          languageOverride={router.locale}
          onVerify={onVerify}
          onExpire={onExpire}
        />
      </StyledHCaptcha>
    );
  },
);

HCaptcha.displayName = "HCaptcha";

export { HCaptcha };
