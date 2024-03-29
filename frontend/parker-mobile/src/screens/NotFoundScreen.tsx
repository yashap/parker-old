import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { RootStackScreenProps } from '../../types'
import { Text, View } from '../components/Themed'

export const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen does not exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
