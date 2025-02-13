import { StyledOverlay } from "./Overlay.styled";
import { IOverlay } from "./Overlay.types";

const Overlay = ({ id, className, active, onClick }: IOverlay) => {
  return (
    <StyledOverlay
      id={id}
      className={className}
      $active={active}
      onClick={onClick}
    />
  );
};

export { Overlay };
