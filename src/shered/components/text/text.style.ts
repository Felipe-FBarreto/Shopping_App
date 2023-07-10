import styled from "styled-components/native";

interface TextProps {
  color?: string;
  fontSize: string;
  customMargin?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light'| 'Poppins-Regular' | 'Poppins-SemiBold'
}

export const Text = styled.Text<TextProps>`
  ${(props)=> props.color ? `color: ${props.color};` : ""}
  ${(props)=> props.customMargin ? `margin: ${props.customMargin};` : ""}
  font-size : ${(props)=> props.fontSize};
  font-family : ${(props)=> props.fontFamily}
`