import styled from "styled-components";

import { primary } from "styles/colors";
import { Button } from "./Button";

export const PrimaryButton = styled(Button).attrs({
  background: primary,
  contrast: 110,
})``;
