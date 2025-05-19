import {
  StyledCounterSelectorWrapper,
  StyledCounterSelectorHeading,
  StyledCounterSelectorHeadingText,
} from "./CounterSelectorWrapper.styled";
import { ICounterSelectorWrapper } from "./CounterSelectorWrapper.types";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

const CounterSelectorWrapper = ({
  heading,
  subHeading,
  tooltip,
  children,
}: ICounterSelectorWrapper) => {
  return (
    <StyledCounterSelectorWrapper>
      <div>
        <StyledCounterSelectorHeading>
          <StyledCounterSelectorHeadingText
            forwardedAs="div"
            size={3}
            label={heading}
          />
          {tooltip && (
            <Tooltip
              id={tooltip.id}
              content={tooltip.content}
              infoIcon
              place="bottom-start"
            />
          )}
        </StyledCounterSelectorHeading>
        {subHeading && (
          <Text as="div" size={3} color="#808080" label={subHeading} />
        )}
      </div>
      {children}
    </StyledCounterSelectorWrapper>
  );
};

export { CounterSelectorWrapper };
