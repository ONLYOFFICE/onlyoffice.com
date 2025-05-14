import { getProductsPrices, getSinglePaymentUrl } from "./billingRequest";
import { ILocale } from "@src/types/locale";
import { TCurrencyCode } from "@src/types/prices";

interface getPricesWithUrls {
  locale: ILocale["locale"];
  currency: TCurrencyCode;
  entries: {
    key: string;
    id: string | string[];
    defaultPrice?: string | [string, string];
  }[];
  PaymentSystemId: "1" | "9";
}

export const getPricesWithUrls = async ({
  locale,
  currency,
  entries,
  PaymentSystemId,
}: getPricesWithUrls) => {
  const requests = entries.map(async ({ key, id, defaultPrice }) => {
    const productIds = Array.isArray(id) ? id : [id];

    const [priceData, urlData] = await Promise.all([
      getProductsPrices({
        ProductId: productIds,
        PaymentSystemId: [PaymentSystemId],
      }),
      getSinglePaymentUrl({
        ProductId: productIds,
        PaymentSystemId: [PaymentSystemId],
        Language: [locale],
        Currency: [currency],
      }),
    ]);

    const totalPrice = productIds.reduce((sum, id) => {
      const price = priceData[PaymentSystemId]?.[id]?.[currency];
      return price ? sum + price : sum;
    }, 0);

    return [
      key,
      {
        price: totalPrice > 0 ? totalPrice : defaultPrice ?? null,
        url: urlData ?? null,
      },
    ];
  });

  const data = await Promise.all(requests);

  return Object.fromEntries(data);
};
