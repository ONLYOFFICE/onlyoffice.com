import { StyledIconTooltip } from "./IconTooltip.styled";
import { IIconTooltip } from "./IconTooltip.types";
import { Tooltip } from "@src/components/ui/Tooltip";

const IconTooltip = ({ id, icon, href, tooltipLabel }: IIconTooltip) => {
  return (
    <Tooltip
      id={id}
      content={tooltipLabel}
      offset={24}
      float
      place="bottom-start"
    >
      <StyledIconTooltip
        href={href}
        $iconUrl={icon.url}
        $iconPositionX={icon.positionX}
        $iconPositionY={icon.positionY}
      />
    </Tooltip>
  );
};

export { IconTooltip };
