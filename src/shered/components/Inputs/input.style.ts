import styled from "styled-components/native";
import { theme } from "../themes/theme/theme";

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  padding: 16px;
  background-color: ${theme.colors.NEUTRAL_THEME.white};
  color: ${theme.colors.NEUTRAL_THEME.black};
  border-radius: 4px;

  border-width: 1px;
  border-color: ${theme.colors.GRAY_THEME.gray80};
`
