import React, { useState } from "react";
import styled from "styled-components";

import { black } from "styles/colors";

export const TextBase = styled.p`
  margin: ${(props) => props.margin || ""};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || "1.5"};
  color: ${(props) => props.color || black};
  text-align: ${(props) => props.textAlign || ""};
  text-decoration: ${(props) => props.textDecoration || ""};
  text-transform: ${(props) => props.textTransform || ""};
`;
