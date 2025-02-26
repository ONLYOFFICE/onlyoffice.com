import { Meta, StoryFn } from "@storybook/react";
import { FeatureTabs } from "./FeatureTabs";
import { IFeatureTabs } from "./FeatureTabs.types";

export default {
  title: "Modules/FeatureTabs",
  component: FeatureTabs,
  parameters: {
    docs: {
      description: {
        component:
          "The FeatureTabs component displays a list of tabs with images.",
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
    heading: {
      control: { type: "text" },
    },
    headingSize: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6, 7],
    },
    linkName: {
      control: { type: "text" },
    },
    linkUrl: {
      control: { type: "text" },
    },
    items: {
      control: {
        type: "object",
      },
    },
    position: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    bgColor: {
      control: { type: "color" },
    },
    desktopSpacing: {
      control: { type: "object" },
    },
    tabletSpacing: {
      control: { type: "object" },
    },
    tabletSmallSpacing: {
      control: { type: "object" },
    },
    mobileSpacing: {
      control: { type: "object" },
    },
  },
} as Meta<typeof FeatureTabs>;

const Template: StoryFn<IFeatureTabs> = (args: IFeatureTabs) => (
  <FeatureTabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "View, edit and collaborate on docs, sheets, slides",
      images: {
        url: "/images/storybook/modules/feature-tabs/actions.png",
        url2x: "/images/storybook/modules/feature-tabs/actions@2x.png",
      },
    },
    {
      label: "Build fillable PDF forms and fill in them online",
      images: {
        url: "/images/storybook/modules/feature-tabs/pdf-forms.png",
        url2x: "/images/storybook/modules/feature-tabs/pdf-forms@2x.png",
      },
    },
  ],
};

export const WithParams = Template.bind({});
WithParams.args = {
  heading: "ONLYOFFICE Docs, the most complete office suite",
  linkName: "Learn more about ONLYOFFICE Docs features",
  linkUrl: "https://www.onlyoffice.com/office-suite.aspx",
  items: [
    {
      label: "View, edit and collaborate on docs, sheets, slides",
      images: {
        url: "/images/storybook/modules/feature-tabs/actions.png",
        url2x: "/images/storybook/modules/feature-tabs/actions@2x.png",
      },
    },
    {
      label: "Build fillable PDF forms and fill in them online",
      images: {
        url: "/images/storybook/modules/feature-tabs/actions.png",
        url2x: "/images/storybook/modules/feature-tabs/actions@2x.png",
      },
    },
  ],
};
