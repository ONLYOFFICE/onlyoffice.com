import { useEffect, useMemo, useState } from "react";
import { ICustomers } from "../../../Customers.types";

const useFixUrl = ({ customers }: ICustomers) => {
  const { data } = customers;
  const [fixUrlData, setFixUrlData] = useState(data);

  const memoizedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      url: item.url.replace(".aspx", ""),
    }));
  }, [data]);

  useEffect(() => {
    setFixUrlData(memoizedData);
  }, [memoizedData]);

  return { fixUrlData }
}

export { useFixUrl };