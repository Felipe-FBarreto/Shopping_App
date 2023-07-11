import React, {useState} from 'react';
import {Alert,ModalProps as ModalPropsReact ,Modal as ModalReact,Pressable, View} from 'react-native';
import * as C from './modal.style'
import Text from '../text/Text';
import { theme } from '../themes/theme/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';
interface ModalProps extends ModalPropsReact{
  title:string
  text:string
  onCloseModal:() => void
}
const Modal = ({title,text,onCloseModal,...props}:ModalProps) => {
  
  return (
      <ModalReact
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        {...props}
        >
        <C.ContainerModal>
          <Text color={theme.colors.MAIN_THEME.primary} type={textTypes.PARAGRAPH_SEMIBOLD}>{title}</Text>
          <Text>{text}</Text>
          <Button title='OK' onPress={onCloseModal}/>
          <C.IconCloseModal onPress={onCloseModal} name='cross'/>
        </C.ContainerModal>
     </ModalReact>

  );
};

export default Modal