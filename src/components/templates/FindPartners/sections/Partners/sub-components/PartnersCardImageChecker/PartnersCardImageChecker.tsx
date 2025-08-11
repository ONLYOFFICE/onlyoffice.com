import { useEffect, useState } from "react";
import { StyledPartnersCardItemImg } from "../PartnersCardItem/PartnersCardItem.styled";

const PartnersCardImageChecker = ({ url }: { url: string }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = url;

    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  }, [url]);

  if (isValid === false) return null;
  if (isValid === null) return null;

  return <StyledPartnersCardItemImg $imgUrl={url} />;
};

export { PartnersCardImageChecker };