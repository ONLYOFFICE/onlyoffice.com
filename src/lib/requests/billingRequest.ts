import { generateAuthToken } from "@src/utils/generateAuthToken";
import { ILocale } from "@src/types/locale";
import { TCurrencyCode } from "@src/types/prices";

type TPaymentSystemId = "1" | "9";

const memoryCache = new Map<string, { data: object; expiresAt: number }>();
const CACHE_TTL_MS = 15 * 60 * 1000;

const billingRequest = async ({
  endpoint,
  body,
}: {
  endpoint: "GetProductsPrices" | "GetSinglePaymentUrl" | "ChangeNonProfit";
  body: {
    [key: string]: string | number | string[] | null;
  };
}) => {
  const cacheKey = `${endpoint}:${JSON.stringify(body)}`;
  const cached = memoryCache.get(cacheKey);

  if (cached && Date.now() < cached.expiresAt) {
    return cached.data;
  } else {
    memoryCache.delete(cacheKey);
  }

  try {
    const token = generateAuthToken(
      process.env.BILLING_KEY!,
      process.env.BILLING_SECRET!,
    );

    const res = await fetch(
      `${process.env.BILLING_DOMAIN}/billing/${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const data = await res.json();

    if (data && Object.keys(data).length) {
      memoryCache.set(cacheKey, {
        data,
        expiresAt: Date.now() + CACHE_TTL_MS,
      });
      return data;
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const getProductsPrices = async ({
  ProductId,
  PaymentSystemId,
}: {
  ProductId: string[];
  PaymentSystemId: TPaymentSystemId[];
}) => {
  return billingRequest({
    endpoint: "GetProductsPrices",
    body: { ProductId, PaymentSystemId },
  });
};

export const getSinglePaymentUrl = async ({
  ProductId,
  PaymentSystemId,
  Language,
  Currency,
}: {
  ProductId: string[];
  PaymentSystemId: TPaymentSystemId[];
  Language: ILocale["locale"][];
  Currency: TCurrencyCode[];
}) => {
  return billingRequest({
    endpoint: "GetSinglePaymentUrl",
    body: {
      ProductId,
      PaymentSystemId,
      Language,
      Currency,
    },
  });
};
