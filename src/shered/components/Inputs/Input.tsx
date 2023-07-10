import { TextInputProps} from 'react-native'
import React, {useState} from 'react'
import * as C from './input.style'
import * as D from '../globalStyles/globalView.style'
import { theme } from '../themes/theme/theme'
import Text from '../text/Text'
import { textTypes } from '../text/textTypes'
import { Icon } from '../icon/Icon'

interface InputProps extends TextInputProps {
  title?:string
  errorMessage?:string
  secureTextEntry?:boolean
}


const Input = ({title,errorMessage,secureTextEntry,...props}:InputProps) => {

  const [currentSecure,setCurrentSecure] = useState<boolean>(!!secureTextEntry)

  const handleOnPressEye = () => {
    setCurrentSecure(!currentSecure)

  }

  return (
   <D.DisplayFlexColumn>
    {title && (
      <Text margin='16px 0px 4px 8px' color={theme.colors.GRAY_THEME.gray100} type={textTypes.PARAGRAPH_SMALL_BOLD} >{title}</Text>
    )}
    {secureTextEntry && (
      <C.IconEye size={18} name={currentSecure ? 'eye' : 'eye-blocked'} onPress={handleOnPressEye}/>
    )}
      <C.Input isSecure={currentSecure} {...props} isError={!!errorMessage} secureTextEntry={currentSecure}/>
      {errorMessage && (
        <Text  margin='4px 0px 0px 8px' color={theme.colors.ORANGE_THEME.orange80} type={textTypes.PARAGRAPH_SMALL_BOLD}>{errorMessage}</Text>
      )}
   </D.DisplayFlexColumn>
  )
}

export default Input