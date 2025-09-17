interface IRewardfulQueue {
  (...args: unknown[]): void;
  q?: unknown[];
}

interface IRewardfulData {
  referral?: string;
  affiliate?: {
    token?: string;
  };
}

declare global {
  interface Window {
    rewardful?: IRewardfulQueue;
    Rewardful?: IRewardfulData;
    _rwq?: string;
  }
}

export const loadRewardful = () => {
  if (!window.rewardful) {
    window._rwq = "rewardful";
    const rewardfulFn: IRewardfulQueue = (...args) => {
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
  window.Rewardful?.referral;

export const getAffiliateToken = (): string | undefined =>
  window.Rewardful?.affiliate?.token;

export const getClientReferenceParam = (): string => {
  const id = getClientReferenceId();
  const token = getAffiliateToken();

  return id
    ? `&affiliateId=${encodeURIComponent(id)}&affiliateToken=${encodeURIComponent(token ?? "")}`
    : "";
};

export const addClientReferenceOnReady = (callback: () => void) => {
  if (window.rewardful) {
    window.rewardful("ready", callback);
  } else {
    setTimeout(() => addClientReferenceOnReady(callback), 50);
  }
};
