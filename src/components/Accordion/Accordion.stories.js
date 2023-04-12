import AccordionUI from "./Accordion";
import "./Accordion.css";

export default {
  title: "Accordion",
  component: AccordionUI,
};

const Template = (args) => <AccordionUI {...args} />;

export const Default = Template.bind({});

Default.args = {
  multiple: true,
  style: "default",
  item: "item",
};

export const SingleOpen = Template.bind({});

SingleOpen.args = {
  multiple: false,
  style: "single",
  item: "item",
};

export const Borders = Template.bind({});

Borders.args = {
  multiple: false,
  style: "single",
  item: "item",
  border: "border",
};
