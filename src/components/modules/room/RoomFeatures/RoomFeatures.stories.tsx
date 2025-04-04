import { Meta, StoryFn } from "@storybook/react";
import { RoomFeatures } from "./RoomFeatures";
import { IRoomFeatures } from "./RoomFeatures.types";

export default {
  title: "Modules/Room/RoomFeatures",
  component: RoomFeatures,
  parameters: {
    docs: {
      description: {
        component:
          "The RoomFeatures component displays a list of room features with images and action buttons.",
      },
    },
  },
  argTypes: {
    items: { control: "object" },
  },
} as Meta;

const Template: StoryFn<IRoomFeatures> = (args) => <RoomFeatures {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Secure for sensitive documents",
      text: "Protect your files by setting access level to define which actions will be available to the invited people: Room managers with access management rights, Content creators with access to manage room files/folders, Editors with full access to the room files, or Viewers with read-only access.",
      image: {
        url: "/images/storybook/modules/room/room-features/secure-for-sensitive-documents.png",
        url2x:
          "/images/storybook/modules/room/room-features/secure-for-sensitive-documents@2x.png",
        height: 518,
      },
    },
    {
      title: "Convenient for multiple co-authors",
      text: "Collaborate effectively to get work done faster.",
      links: [{ href: "#", label: "Learn more" }],
      image: {
        url: "/images/storybook/modules/room/room-features/cost-effective-for-any-budget.png",
        url2x:
          "/images/storybook/modules/room/room-features/cost-effective-for-any-budget@2x.png",
        height: 518,
      },
    },
  ],
};
