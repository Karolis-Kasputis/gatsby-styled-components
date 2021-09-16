import styled from "styled-components";
import { text, background } from "styles/colors";

export const Button = styled.button`
  display: ${(props) => props.display || "inline-block"};
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "1rem"};
  max-width: ${(props) => props.maxWdith || "16rem"};
  min-width: ${(props) => props.minWdith || "6rem"};
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  color: ${(props) => props.color || text};
  background-color: ${(props) => props.background || background};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  cursor: pointer;

  :hover {
    filter: ${(props) => `contrast(${props.contrast || "95"}%)`};
  }
`;
