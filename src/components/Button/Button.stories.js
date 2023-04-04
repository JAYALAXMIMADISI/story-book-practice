import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
  title: "form/control/Button",
  component: Button,
  args: {
    children: "Button",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = "Primary Button";

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA,
  //   children: "Long PrimaryA",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
