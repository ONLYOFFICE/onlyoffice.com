import { items } from "./data/items";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

const Compatibility = () => {
  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "MS Office",
        logo: {
          src: "/images/templates/best-microsoft-office-alternative/compatibility/logo_ms_office.svg",
        },
      }}
      items={items}
    />
  );
};

export { Compatibility };
