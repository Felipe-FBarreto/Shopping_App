import {  Platform } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'
import Button from '../../../shered/components/button/Button'
import Text from '../../../shered/components/text/Text'
import { textTypes } from '../../../shered/components/text/textTypes'
import { theme } from '../../../shered/components/themes/theme/theme'
import { Icon } from '../../../shered/components/icon/Icon'
import axios from 'axios'


const Login = () => {
  const handleOnPress = async () => {
  const returnBD = await axios.get('http://192.168.1.102:8080/correios/01029-010')
  console.log("🚀 ~ file: Login.tsx:17 ~ handleOnPress ~ returnBD:", returnBD.data)

  }
  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <C.Imagelog  source={require('../../../assets/images/logo.jpg')}/>
      <Input placeholder='Digite seu Email' title='Email'/>
      <Input secureTextEntry placeholder='Digite sua senha' title='Senha'/>
      <Button disabled={false} loading={false} type={theme.buttons.BUTTONS_THEMES.primary} margin=' 32px 8px' title='ENTRAR' onPress={handleOnPress}/>
    </C.ContainerLogin>
  )
}

export default Login

