import { TextInputProps} from 'react-native'
import React from 'react'
import * as C from './input.style'
import * as D from '../globalStyles/globalView.style'
import { theme } from '../themes/theme/theme'
import Text from '../text/Text'
import { textTypes } from '../text/textTypes'
interface InputProps extends TextInputProps {
  title?:string
  errorMessage?:string
}


const Input = ({title,errorMessage,...props}:InputProps) => {
  return (
   <D.DisplayFlexColumn>
    {title && (
      <Text margin='0px 0px 4px 8px' color={theme.colors.GRAY_THEME.gray100} type={textTypes.PARAGRAPH_SMALL_BOLD} >{title}</Text>
    )}
      <C.Input {...props} isError={!!errorMessage}/>
      {errorMessage && (
        <Text  margin='4px 0px 0px 8px' color={theme.colors.ORANGE_THEME.orange80} type={textTypes.PARAGRAPH_SMALL_BOLD}>{errorMessage}</Text>
      )}
   </D.DisplayFlexColumn>
  )
}

export default Input