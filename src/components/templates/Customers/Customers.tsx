import { Hero } from "./sections/Hero";
import { Trusted } from "./sections/Trusted";
import { Integration } from "./sections/Integration";
import { Card } from "./sections/Card";

import { StyledCustomersBgWrapper } from "./Customers.styled";

const CustomersTemplate = () => {
  return (
    <>
      <StyledCustomersBgWrapper>
        <Hero />
        <Trusted />
      </StyledCustomersBgWrapper>
      <Integration />
      <Card />
    </>
  );
};

export { CustomersTemplate };