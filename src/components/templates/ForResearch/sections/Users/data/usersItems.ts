import { getAssetUrl } from "@utils/getAssetUrl";
interface IUsersItem {
  image: {
    url: string;
    width: number;
    height: number;
    positionX: string;
  };
}

export const usersItems: IUsersItem[] = [
  {
    image: {
      url: getAssetUrl("/images/templates/for-research/users/logos.svg"),
      width: 130,
      height: 71,
      positionX: "0",
    },
  },
  {
    image: {
      url: getAssetUrl("/images/templates/for-research/users/logos.svg"),
      width: 220,
      height: 80,
      positionX: "-150px",
    },
  },
  {
    image: {
      url: getAssetUrl("/images/templates/for-research/users/logos.svg"),
      width: 150,
      height: 80,
      positionX: "-385px",
    },
  },
  {
    image: {
      url: getAssetUrl("/images/templates/for-research/users/logos.svg"),
      width: 260,
      height: 80,
      positionX: "-580px",
    },
  },
  {
    image: {
      url: getAssetUrl("/images/templates/for-research/users/logos.svg"),
      width: 172,
      height: 80,
      positionX: "-870px",
    },
  },
];
