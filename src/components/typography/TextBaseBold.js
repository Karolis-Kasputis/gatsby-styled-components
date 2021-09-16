import styled from "styled-components";
import { TextBase } from "./TextBase";

export const TextBaseBold = styled(TextBase).attrs((props) => ({
  fontWeight: props.fontWeight || 700,
}))``;
