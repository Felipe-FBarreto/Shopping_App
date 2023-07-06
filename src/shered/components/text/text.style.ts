import styled from "styled-components/native";

interface TextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light'| 'Poppins-Regular';
}

export const Text = styled.Text<TextProps>`
  ${(props)=> props.color ? `color: ${props.color};` : ""}
  font-size : ${(props)=> props.fontSize};
  font-family : ${(props)=> props.fontFamily}
`