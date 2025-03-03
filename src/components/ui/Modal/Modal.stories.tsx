import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { IModal } from "./Modal.types";
import { Button } from "../Button";

export default {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "Pop-up window. Shows content on top of the main page.",
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
    children: {
      control: { type: "text" },
    },
    maxWidth: {
      control: { type: "text" },
    },
    showCloseIcon: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<Omit<IModal, "isOpen" | "onClose">> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
        <div style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
          <p>{args.children}</p>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Modal content",
};
