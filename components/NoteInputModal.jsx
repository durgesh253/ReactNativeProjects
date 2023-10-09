import { View, Text, Modal } from 'react-native'
import React from 'react'

const NoteInputModal = ({visible}) => {
  return (
    <Modal visible={visible} animationType='fade'>
    <Text>NOte Input MOdal</Text>
    </Modal>
  )
}

export default NoteInputModal