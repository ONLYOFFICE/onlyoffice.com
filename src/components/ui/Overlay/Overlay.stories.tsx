import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Overlay } from "./Overlay";
import { IOverlay } from "./Overlay.types";

export default {
  title: "UI/Overlay",
  component: Overlay,
  parameters: {
    docs: {
      description: {
        component:
          "The Overlay component provides a semi-transparent backdrop that can be used to block interactions with underlying content. It can be controlled through the `active` prop to show or hide the overlay. Clicking on the overlay can trigger an action, such as closing it, via the `onClick` prop.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    active: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
} as Meta<typeof Overlay>;

const Template: StoryFn<IOverlay> = (args: IOverlay) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Button onClick={() => setIsActive(true)}>Click</Button>
      <Overlay active={isActive} onClick={() => setIsActive(false)} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
