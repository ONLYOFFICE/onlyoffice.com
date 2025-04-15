import { StyledCounterSelectorWrapper } from "./CounterSelectorWrapper.styled";
import { ICounterSelectorWrapper } from "./CounterSelectorWrapper.types";
import { Text } from "@src/components/ui/Text";

const CounterSelectorWrapper = ({
  heading,
  subHeading,
  children,
}: ICounterSelectorWrapper) => {
  return (
    <StyledCounterSelectorWrapper>
      <div>
        <Text size={3} label={heading} />
        {subHeading && <Text size={3} color="#808080" label={subHeading} />}
      </div>
      {children}
    </StyledCounterSelectorWrapper>
  );
};

export { CounterSelectorWrapper };
