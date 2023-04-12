import AlertUi from "./Alert";
import { withKnobs } from '@storybook/addon-knobs';
import './Alert.css'


export default {
  title: "Alert",
  component: AlertUi,
  decorators:[withKnobs]
};

const Template = (args) => <AlertUi {...args} />;

export const Warning = Template.bind({});

Warning.args = {
  children: "Seems your account is about expire, upgrade now",
  status: "warning",
  style:'alert'
};

export const Error = Template.bind({});

Error.args = {
  children: "There was an error processing your request",
  status: "error",
  style:'alert'
};

export const Success = Template.bind({});

Success.args = {
  children: "Data uploaded to the server. Fire on!",
  status: "success",
  style:'alert'
};

export const Message = Template.bind({});

Message.args = {
  children: "Chakra is going live on August 30th. Get ready!",
  status: "info",
  style:'alert'
};
