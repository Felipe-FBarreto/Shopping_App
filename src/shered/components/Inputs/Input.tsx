import { TextInput, TextInputProps} from 'react-native'
import React from 'react'
import * as C from './input.style'

type InputProps =  TextInputProps


const Input = ({...props}:InputProps) => {
  return (
    <C.Input {...props}/>
  )
}

export default Input