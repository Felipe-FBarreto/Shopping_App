import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../themes/theme/theme';
import styled from "styled-components/native";

interface ButtonProps {
  margin?:string
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 55px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
`

export const GradientButton = styled(LinearGradient)<ButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
`

export const ButtonSecondary = styled(ButtonPrimary)<ButtonProps>`
  ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
  background-color:transparent;
  border-width:1px;
  border-color:${theme.colors.MAIN_THEME.primary};
`;

export const ButtonDisabled = styled(ButtonPrimary)<ButtonProps>`
  background-color:${theme.colors.GRAY_THEME.gray100};
`
export const ActivityIndicatorButton = styled.ActivityIndicator`
  margin-left: 8px;
`