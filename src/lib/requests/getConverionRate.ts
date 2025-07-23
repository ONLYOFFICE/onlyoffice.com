import { db } from "@src/config/db/site";

interface IConversionRate {
  pageName: string;
}

export const getConversionRate = async ({ pageName }: IConversionRate) => {
  if (!pageName) {
    return {
      status: "error",
      message: "Missing pageName parameter",
    };
  }

  try {
    const [rows] = await db.query(
      "SELECT ratingValue FROM converter_rating WHERE converterPageName = ?",
      [pageName],
    );

    const ratings = rows as { ratingValue: number }[];
    const numberOfVotes = ratings.length;

    let sumRating = 0;
    for (const rate of ratings) {
      sumRating += Number(rate.ratingValue);
    }

    const averageRating = numberOfVotes > 0 ? sumRating / numberOfVotes : 0;

    return {
      status: "success",
      numberOfVotes,
      averageRating,
      pageName,
    };
  } catch (error: unknown) {
    console.error("getConversionRate error:", error);

    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
