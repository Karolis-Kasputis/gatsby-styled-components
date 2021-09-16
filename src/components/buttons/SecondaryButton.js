import styled from "styled-components";

import { secondary, background } from "styles/colors";
import { Button } from "./Button";

export const SecondaryButton = styled(Button).attrs({
  background: secondary,
  color: background,
  contrast: 90,
})``;
