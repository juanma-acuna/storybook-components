import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyLabel from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
    padding: { control: "text" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "MyLabel",
  size: "normal",
  allCaps: false,
  color: "primary",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "MYLABEL",
  size: "normal",
  allCaps: true,
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "MyLabel",
  size: "normal",
  allCaps: false,
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "MyLabel",
  size: "normal",
  allCaps: false,
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: "MyLabel",
  size: "normal",
  allCaps: false,
  fontColor: "#5517ac",
  backgroundColor: "white",
};

export const CustomPadding = Template.bind({});
CustomPadding.args = {
  label: "MyLabel",
  size: "normal",
  allCaps: false,
  fontColor: "#5517ac",
  backgroundColor: "white",
  padding: "20px",
};
