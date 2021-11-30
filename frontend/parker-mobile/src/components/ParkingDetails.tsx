import React from 'react'
import { StyleSheet } from 'react-native'
import { ParkingSpot } from 'src/domain/core'
import { Text, View } from './Themed'

export interface ParkingDetailsProps {
  parkingSpot: ParkingSpot
}

export const ParkingDetails = ({ parkingSpot }: ParkingDetailsProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{parkingSpot.name}</Text>
    <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
    <Text style={styles.title}>{parkingSpot.location.address}</Text>
    <Text style={styles.title}>{parkingSpot.price.hourly.toFormat('$0,0.00')}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
})
