import { useEffect, useState } from "react";
import { StyledCardItemImg } from "../CardItem/CardItem.styled";

const ImageChecker = ({ url }: { url: string }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = url;

    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  }, [url]);

  if (isValid === false) return null;
  if (isValid === null) return null;

  return <StyledCardItemImg $image={url} />;
};

export { ImageChecker };