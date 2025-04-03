import { Meta, StoryFn } from "@storybook/react";
import { PricingHero } from "./PricingHero";
import { IPricingHero } from "./PricingHero.types";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

export default {
  title: "Modules/Pricing/PricingHero",
  component: PricingHero,
  parameters: {
    docs: {
      description: {
        component: "Hero section for Pricing - For home use",
      },
    },
  },
} as Meta<typeof PricingHero>;

const Template: StoryFn<IPricingHero> = (args: IPricingHero) => (
  <PricingHero {...args} />
);

export const Default = Template.bind({});

Default.args = {
  heading: (
    <>
      Buy ONLYOFFICE <Text as="span" color="main" label="Docs Home Server" />
    </>
  ),
  label: "Docs Home Server",
  price: "149",
  list: [
    "Online editors for text documents, spreadsheets, presentations, fillable forms, and PDFs",
    "Mobile web editors",
    "Ready-to-use connectors",
    "Desktop and mobile apps",
    "Enhanced security features",
    "All minor updates and major upgrades",
  ],
  tryItFreelinkUrl: "/download?from=homeserver#docs-enterprise",
  buyNowLinkUrl: "",
  counterSelectors: [
    {
      label: "Number of users",
      rightSide: (
        <Tooltip
          id="number-of-users-tooltip"
          content="Specified number of users defines how many people can have access to editing documents, spreadsheets, and presentations. The number of documents that can be edited at the same time is not limited. Other users will be able to open documents for viewing only."
          place="bottom-start"
          infoIcon
        />
      ),
      items: [{ id: "10", label: "10" }],
      selected: "10",
    },
  ],
  toggleButtons: [
    {
      label: "License duration",
      items: [
        {
          id: "lifetime",
          label: {
            name: "Lifetime",
            rightSide: (
              <Tooltip
                id="lifetime-tooltip"
                content="You can use all the ONLYOFFICE Docs Home Server features available at the moment of the purchase for an unlimited period of time, but one year after the purchase date you will no longer be able to get free updates."
                place="bottom-start"
                infoIcon
              />
            ),
          },
        },
      ],
    },
    {
      label: "Updates",
      items: [
        {
          id: "1year",
          label: {
            name: "1-year",
          },
        },
      ],
    },
  ],
};
