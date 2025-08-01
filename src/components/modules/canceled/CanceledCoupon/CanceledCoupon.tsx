import { useTranslation } from "next-i18next";
import {
  StyledCouponWrapper,
  StyledCouponTitle,
  StyledCouponText,
  StyledCanceledChooseReasonsWrapper,
  StyledCanceledChooseReasons,
  StyledCanceledChooseReasonItem,
  StyledCouponValidation,
} from "./CanceledCoupon.styled";
import { Heading } from "@src/components/ui/Heading";
import { ICanceledCoupon } from "./CanceledCoupon.types";

const CanceledCoupon = ({
  text,
  heading,
  reasons,
  validation,
}: ICanceledCoupon) => {
  const { t } = useTranslation("canceled");

  return (
    <>
      <StyledCouponWrapper>
        <StyledCouponTitle level={4} label={t("ThanksForYourMessage")} />
        <StyledCouponText>{text}</StyledCouponText>
        <img
          width={192}
          height={52}
          src="/images/modules/canceled/coupon.svg"
          alt="coupon"
        />
      </StyledCouponWrapper>
      {reasons && (
        <>
          <StyledCanceledChooseReasonsWrapper>
            <Heading level={5} label={heading} textAlign="center" />
            <StyledCanceledChooseReasons>
              {reasons.map((reason, index) => (
                <StyledCanceledChooseReasonItem key={index}>
                  {reason}
                </StyledCanceledChooseReasonItem>
              ))}
            </StyledCanceledChooseReasons>
          </StyledCanceledChooseReasonsWrapper>
        </>
      )}
      <StyledCouponValidation label={validation} />
    </>
  );
};

export { CanceledCoupon };
