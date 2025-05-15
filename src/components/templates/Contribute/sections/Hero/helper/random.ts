import { IHeroImage } from "../Hero.types";

export const getPreparedImages = (images: IHeroImage[]): IHeroImage[] => {
  const randomUrls = images
    .filter((item) => item.isRandom && item.image.url)
    .map((item) => item.image.url!);

  for (let i = randomUrls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomUrls[i], randomUrls[j]] = [randomUrls[j], randomUrls[i]];
  }

  return images.map((item) =>
    item.isRandom
      ? {
          ...item,
          image: {
            ...item.image,
            url: randomUrls.shift() || item.image.url,
          },
        }
      : item,
  );
};
