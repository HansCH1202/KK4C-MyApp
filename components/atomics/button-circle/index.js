import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

function ButtonCircle({ onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Icon style={styles.icon} name="arrowright" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  )
}

export { ButtonCircle }

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginTop: 10,
    padding: 15,
    maxHeight: 60,
    maxWidth: 60,
    borderRadius: 200,
  },
  icon: {
    alignSelf: 'center',
  }
})