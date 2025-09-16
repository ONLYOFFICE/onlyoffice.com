interface IRewardfulFunction {
  (...args: unknown[]): void;
  q?: unknown[];
  referral?: string;
  affiliate?: {
    token?: string;
  };
}

declare global {
  interface Window {
    rewardful?: IRewardfulFunction;
    _rwq?: string;
  }
}

export const loadRewardful = () => {
  if (!window.rewardful) {
    window._rwq = "rewardful";
    const rewardfulFn: IRewardfulFunction = (...args) => {
      (rewardfulFn.q = rewardfulFn.q || []).push(args);
    };
    window.rewardful = rewardfulFn;
  }

  if (!document.querySelector('script[src="https://r.wdfl.co/rw.js"]')) {
    const script = document.createElement("script");
    script.src = "https://r.wdfl.co/rw.js";
    script.async = true;
    script.setAttribute("data-rewardful", "45ea9c");
    document.head.appendChild(script);
  }
};

export const getClientReferenceId = (): string | undefined =>
  typeof window !== "undefined" ? window.rewardful?.referral : undefined;

export const getAffiliateToken = (): string | undefined =>
  typeof window !== "undefined" ? window.rewardful?.affiliate?.token : undefined;

export const getClientReferenceParam = (): string => {
  const id = getClientReferenceId();
  const token = getAffiliateToken();
  console.log(document.querySelector('script[src="https://r.wdfl.co/rw.js"]'), id, token);

  return id
    ? `&affiliateId=${encodeURIComponent(id)}&affiliateToken=${encodeURIComponent(token ?? "")}`
    : "";
};

export const addClientReferenceOnReady = (callback: () => void) => {
  if (window.rewardful) {
    window.rewardful("ready", callback);
  } else {
    callback();
  }
};
