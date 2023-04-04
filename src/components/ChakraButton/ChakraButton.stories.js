import { Button, ButtonGroup } from "@chakra-ui/react";
import { func } from "prop-types";
import React from "react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "ChakraButton",
  component: Button,
  argTypes: {
    colorScheme: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export const Success = () => (
  <Button onClick={action("clicked")} colorScheme="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Success
  </Button>
);

export const Log = () => (
  <Button onClick={() => console.log("Button Clicked",process.env.STORYBOOK_THEME)} colorScheme="blue">
    Log
  </Button>
);

export const Knob = () => (
  <Button disabled={boolean("Disabled", false)} colorScheme="purple">
    {text("Label", "Button Label")}
  </Button>
);

// const Template = (args) => <Button {...args} />;

// export const Success = Template.bind({});

// Success.args = {
//   colorScheme: "green",
//   children: "Success",
// };

// export const Danger = Template.bind({});

// Danger.args = {
//   colorScheme: "red",
//   children: "Danger",
// };
