import { Hero } from "./sections/Hero";
import { Trusted } from "./sections/Trusted";

import { StyledCustomersBgWrapper } from "./Customers.styled";

const CustomersTemplate = () => {
  return (
    <StyledCustomersBgWrapper>
      <Hero />
      <Trusted />
    </StyledCustomersBgWrapper>
  );
};

export { CustomersTemplate };