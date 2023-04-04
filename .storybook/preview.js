import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/react";
import "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m={2}>{story()}</Box>
  </ThemeProvider>
));

addDecorator((story, context) => withConsole()(story)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

// export const decorators = [
//   (Story) => {
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m={2}>
//         <Story />
//       </Box>
//     </ThemeProvider>;
//   },
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
};
