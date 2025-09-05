import { StyledIconTooltip } from "./IconTooltip.styled";
import { IIconTooltip } from "./IconTooltip.types";
import { Tooltip } from "@src/components/ui/Tooltip";

const IconTooltip = ({ id, icon, href, tooltipLabel, width }: IIconTooltip) => {
  return (
    <Tooltip
      id={id}
      content={tooltipLabel}
      offset={24}
      float
      place="bottom-start"
      width={width}
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
