import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import React from 'react'
import * as C from './button.styles'
import Text from '../text/Text'
import { theme } from '../themes/theme/theme'
import { textTypes } from '../text/textTypes'

interface ButtonProps extends TouchableOpacityProps{
  title:string
  margin?:string
  type?:string
  disabled?:boolean
  loading?:boolean
  onPress?:() => void
}

const Button = ({title,type, margin,disabled,loading,onPress,...props}:ButtonProps) => {

  const renderText = (color:string) => (
    <>
     <Text type={textTypes.BUTTON_SEMIBOLD} color={color}>{title}</Text>
      {loading && <C.ActivityIndicatorButton size='small' color={theme.colors.NEUTRAL_THEME.white}/>}
    </>
  )

  const handleOnpress = () =>{
    if(!loading && !disabled && onPress){
      onPress()
    }
  }

  if(disabled){
    return(
      <C.ButtonDisabled  margin={margin} {...props} >
        {renderText(theme.colors.NEUTRAL_THEME.white)}
      </C.ButtonDisabled>
    )
  }

  switch (type) {
    case theme.buttons.BUTTONS_THEMES.secondary:
      return (
        <C.ButtonSecondary margin={margin} {...props} onPress={handleOnpress}>
          {renderText(theme.colors.MAIN_THEME.primary)}
        </C.ButtonSecondary >
      )
    case theme.buttons.BUTTONS_THEMES.primary:
    default:    
      return (
        <C.ButtonPrimary margin={margin} {...props} onPress={handleOnpress}>
           <C.GradientButton 
           start={{x:0.0,y:0.0}} 
           end={{x:1.0, y:1.0}} 
           colors={[theme.colors.PURPLE_THEME.purple80,theme.colors.PINK_THEME.pink80]}>
           {renderText(theme.colors.NEUTRAL_THEME.white)}
          </C.GradientButton>     
        </C.ButtonPrimary >
      )
  }

  
}

export default Button