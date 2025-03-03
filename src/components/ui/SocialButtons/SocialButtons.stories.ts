import { Meta, StoryObj } from "@storybook/react";
import SocialButtons from "./SocialButtons";

const googleIcon = "https://cdn-icons-png.flaticon.com/512/300/300221.png";
const facebookIcon = "https://cdn-icons-png.flaticon.com/512/124/124010.png";
const twitterIcon = "https://cdn-icons-png.flaticon.com/512/124/124021.png";
const linkedinIcon = "https://cdn-icons-png.flaticon.com/512/174/174857.png";

export default {
  title: "UI/SocialButtons",
  component: SocialButtons,
} as Meta<typeof SocialButtons>;

const Template: StoryObj<typeof SocialButtons> = {
  args: {
    buttons: [
      { icon: googleIcon, label: "Google" },
      { icon: facebookIcon },
      { icon: twitterIcon },
      { icon: linkedinIcon },
    ],
  },
};

export const Default = Template;
