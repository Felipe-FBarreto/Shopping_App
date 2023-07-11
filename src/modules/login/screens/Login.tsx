import {  Platform, Alert } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'
import Button from '../../../shered/components/button/Button'
import Text from '../../../shered/components/text/Text'
import { textTypes } from '../../../shered/components/text/textTypes'
import { theme } from '../../../shered/components/themes/theme/theme'
import { Icon } from '../../../shered/components/icon/Icon'


const Login = () => {
  const handleOnPress = () => {
    Alert.alert("Clicou")
  }

  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <C.Imagelog  source={require('../../../assets/images/logo.jpg')}/>
      <Input placeholder='Digite seu Email' title='Email'/>
      <Input secureTextEntry placeholder='Digite sua senha' title='Senha'/>
      <Button disabled={false} loading={false} type={theme.buttons.BUTTONS_THEMES.primary} margin='8px' title='ENTRAR' onPress={handleOnPress}/>
    </C.ContainerLogin>
  )
}

export default Login

