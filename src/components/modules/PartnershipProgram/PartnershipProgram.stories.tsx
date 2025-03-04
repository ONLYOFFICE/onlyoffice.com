import { Meta, StoryFn } from "@storybook/react";
import { PartnershipProgram } from "./PartnershipProgram";
import { IPartnershipProgram } from "./PartnershipProgram.types";

export default {
  title: "Modules/PartnershipProgram",
  component: PartnershipProgram,
  parameters: {
    docs: {
      description: {
        component:
          "The PartnershipProgram component showcases the ONLYOFFICE partnership program, inviting partners to enhance user experience and increase revenue.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
      heading: {
        control: { type: "text" },
      },
      text: {
        control: { type: "text" },
      },
    },
  },
} as Meta<typeof PartnershipProgram>;

const Template: StoryFn<IPartnershipProgram> = (args: IPartnershipProgram) => (
  <PartnershipProgram {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading:
    "Are you an Odoo partner? How about improving your Odoo user experience and increasing your revenue?",
  text: "Join the ONLYOFFICE partership program right now.",
};
