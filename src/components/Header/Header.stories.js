import Header from "./Header";

export default {
  title: "header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Small = Template.bind({});

Small.args = {
  size: "small",
  backgroundColor: "white",
  children: "Small",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
  backgroundColor: "teal",
  children: "Medium",
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
  backgroundColor: "black",
  children: "Large",
};
