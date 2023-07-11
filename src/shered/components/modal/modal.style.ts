import { styled } from "styled-components/native";
import { theme } from "../themes/theme/theme";
import { Icon } from "../icon/Icon";

export const ContainerModal = styled.View`
  background-color: ${theme.colors.NEUTRAL_THEME.white};
  border-top-right-radius:16px;
  border-top-left-radius: 16px;
  padding: 16px;
  height: 200px;
  shadow-color:${theme.colors.NEUTRAL_THEME.black}
  shadow-offset:{
    width: 0;
    height: 0;
  }
  shadow-opacity:1;
  shadow-radius:1px;
  elevation:10;
`
export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 1;
`