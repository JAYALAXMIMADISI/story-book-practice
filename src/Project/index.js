import { Primary } from "@storybook/addon-docs";
import React from "react";
import { Secondary, Success } from "../components/Button/Button.stories";
import Input from "../components/Input/Input";
import { Small } from "../components/Input/Input.stories";

export default function Home() {
  return <>
  <Secondary />
  <Success/>
  <Small/>
  </>;
}
