import {  Platform, Alert } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'
import Button from '../../../shered/components/button/Button'
import Text from '../../../shered/components/text/Text'
import { textTypes } from '../../../shered/components/text/textTypes'
import { theme } from '../../../shered/components/themes/theme/theme'


const Login = () => {
  const handleOnPress = () => {
    Alert.alert("Clicou")
  }

  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text type={textTypes.SUB_TITLE_BOLD}  color='#000'>Login</Text>
      <Input placeholder='Digite seu Email' title='Email'/>
      <Button disabled={false} loading={false} type={theme.buttons.BUTTONS_THEMES.primary} margin='8px' title='ENTRAR' onPress={handleOnPress}/>
    </C.ContainerLogin>
  )
}

export default Login

