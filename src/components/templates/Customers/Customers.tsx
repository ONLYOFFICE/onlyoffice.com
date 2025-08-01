import { Hero } from "./sections/Hero";
import { Trusted } from "./sections/Trusted";
import { Integration } from "./sections/Integration";
import { Card } from "./sections/Card";
import { Story } from "./sections/Story";
import { ICustomers } from "./Customers.types";

import { StyledCustomersBgWrapper } from "./Customers.styled";

const CustomersTemplate = ({ customers }: ICustomers) => {
  return (
    <>
      <StyledCustomersBgWrapper>
        <Hero />
        <Trusted />
      </StyledCustomersBgWrapper>
      <Integration />
      <Card customers={customers} />
      <Story />
    </>
  );
};

export { CustomersTemplate };