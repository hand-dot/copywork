import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./";

storiesOf("twitter/components/Button", module)
  .add("Index", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ));
