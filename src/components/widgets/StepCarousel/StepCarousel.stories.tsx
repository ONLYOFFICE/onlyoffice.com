import { Meta, StoryFn } from "@storybook/react";
import { StepCarousel } from "./StepCarousel";
import { IStepCarousel } from "./StepCarousel.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Widgets/StepCarousel",
  component: StepCarousel,
  parameters: {
    docs: {
      description: {
        component:
          "The StepCarousel component displays a carousel list of steps.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
      tabs: {
        control: {
          type: "object",
        },
      },
      items: {
        control: {
          type: "object",
        },
      },
      defaultActiveTab: {
        control: { type: "number" },
      },
    },
  },
} as Meta<typeof StepCarousel>;

const Template: StoryFn<IStepCarousel> = (args: IStepCarousel) => (
  <Container>
    <StepCarousel {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-1.svg",
      heading: "Log into your Box account",
    },
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-2.svg",
      heading: "Go to the Box App Center",
    },
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-3.svg",
      heading: "Add the ONLYOFFICE app*",
    },
  ],
};

export const Tabs = Template.bind({});
Tabs.args = {
  tabs: [
    {
      label: "DocSpace",
      items: [
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docspace-step-1.svg",
          heading: "Create your free DocSpace account.",
        },
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docspace-step-2.svg",
          heading: "Get the integration app from Drupal Marketplace.",
        },
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docspace-step-3.svg",
          heading: "Upload and configure the integration app.",
        },
      ],
    },
    {
      label: "Docs",
      items: [
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docs-step-1.svg",
          heading:
            "Deploy ONLYOFFICE Docs on your own server or sign up for ONLYOFFICE Docs Cloud.",
        },
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docs-step-2.svg",
          heading: "Get the integration app from Drupal Marketplace.",
        },
        {
          imgUrl: "/images/storybook/widgets/step-carousel/docs-step-3.svg",
          heading: "Upload and configure the integration app.",
        },
      ],
    },
  ],
};
