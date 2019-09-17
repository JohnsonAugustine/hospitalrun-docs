import React from "react";

import { storiesOf } from "@storybook/react";
import ReadmePage from "../pages/ReadmePage";

storiesOf("@hospitalrun/docs", module).add("ReadmePage", () => (
  <ReadmePage markdown={require("../README.md")} />
));
