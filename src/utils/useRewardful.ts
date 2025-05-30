import { useEffect } from "react";

interface IRewardfulFunction {
  (method: "ready", callback: () => void): void;
  q?: unknown[];
  referral?: string;
  affiliate?: {
    token?: string;
  };
}

declare global {
  interface Window {
    _rwq?: string;
    rewardful?: IRewardfulFunction;
  }
}

export const useRewardful = ({ onReady }: { onReady?: () => void }) => {
  useEffect(() => {
    window._rwq = "rewardful";

    if (!window.rewardful) {
      const rewardfulFn = ((...args: Parameters<IRewardfulFunction>) => {
        (rewardfulFn.q = rewardfulFn.q || []).push(args);
      }) as IRewardfulFunction;

      window.rewardful = rewardfulFn;
    }

    const script = document.createElement("script");
    script.src = "https://r.wdfl.co/rw.js";
    script.async = true;
    script.setAttribute("data-rewardful", "45ea9c");
    script.onload = () => {
      window.rewardful?.("ready", () => {
        onReady?.();
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);

      const recaptchaContainers = document.querySelectorAll(
        'iframe[src*="google.com/recaptcha"], div.g-recaptcha-bubble-arrow, div[style*="z-index: 2000000000"]',
      );
      recaptchaContainers.forEach((el) => el.remove());

      const bigZIndexElements = Array.from(document.body.children).filter(
        (el) => {
          const element = window.getComputedStyle(el).zIndex;
          return element && Number(element) > 1000000000;
        },
      );
      bigZIndexElements.forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClientReferenceId = () => {
    return typeof window !== "undefined"
      ? window.rewardful?.referral
      : undefined;
  };

  const getAffiliateToken = () => {
    return typeof window !== "undefined"
      ? window.rewardful?.affiliate?.token
      : undefined;
  };

  const getClientReferenceParam = () => {
    const id = getClientReferenceId();
    const token = getAffiliateToken();
    return id
      ? `&affiliateId=${encodeURIComponent(id)}&affiliateToken=${encodeURIComponent(token ?? "")}`
      : "";
  };

  return { getClientReferenceId, getAffiliateToken, getClientReferenceParam };
};
