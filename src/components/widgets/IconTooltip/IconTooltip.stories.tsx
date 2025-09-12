import { Meta, StoryFn } from "@storybook/react";
import { IconTooltip } from "./IconTooltip";
import { IIconTooltip } from "./IconTooltip.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Widgets/IconTooltip",
  component: IconTooltip,
  parameters: {
    docs: {
      description: {
        component:
          "The `IconTooltip` component renders an icon with a hoverable tooltip.",
      },
    },
  },
} as Meta<typeof IconTooltip>;

const Template: StoryFn<IIconTooltip> = (args: IIconTooltip) => {
  return <IconTooltip {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "tooltip-1",
  icon: { url: getAssetUrl("/images/storybook/widgets/icon-tooltip/icons.svg") },
  tooltipLabel: "Tooltip label",
};
