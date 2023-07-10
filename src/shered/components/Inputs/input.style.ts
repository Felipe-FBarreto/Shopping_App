import styled from "styled-components/native";
import { theme } from "../themes/theme/theme";

interface ContainerInputProps {
  isError?: boolean;
}

export const Input = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 55px;
  padding: 16px;
  background-color: ${theme.colors.NEUTRAL_THEME.white};
  color: ${theme.colors.NEUTRAL_THEME.black};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props)=> props.isError ? theme.colors.ORANGE_THEME.orange80 : theme.colors.GRAY_THEME.gray80};
`
