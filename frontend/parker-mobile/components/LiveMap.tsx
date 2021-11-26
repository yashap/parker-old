import React, { useEffect, useRef, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { StyleSheet, View, Dimensions, Text, Button } from 'react-native'
import { ApiClient } from '../api/ApiClient'
import { Coordinate, Location, ParkingSpot } from '../domain/core'
// @ts-ignore
import parkingIcon from '../assets/images/parking-icon.png'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootTabParamList } from '../types'

const defaultDeltas: Pick<Region, 'latitudeDelta' | 'longitudeDelta'> = {
  latitudeDelta: 0.12,
  longitudeDelta: 0.06,
}

interface Region extends Coordinate {
  latitudeDelta: number
  longitudeDelta: number
}

export const LiveMap = () => {
  const apiClient = useRef(new ApiClient()).current
  const navigation = useNavigation<NavigationProp<RootTabParamList>>()

  const [region, setRegion] = useState<Region | undefined>(undefined)
  const [carLocation, setCarLocation] = useState<Location | undefined>(undefined)
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([])
  useEffect(() => {
    ;(async () => {
      const [initialLocation, initialParkingSpots] = await Promise.all([
        apiClient.getCurrentLocation(),
        apiClient.getParkingSpots(),
      ])
      setRegion({ ...initialLocation.coordinates, ...defaultDeltas })
      setCarLocation(initialLocation)
      setParkingSpots(initialParkingSpots)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <MapView initialRegion={region} onRegionChange={setRegion} style={styles.map}>
        {parkingSpots.map((parkingSpot, index) => (
          <Marker key={index} coordinate={parkingSpot.location.coordinates} image={parkingIcon}>
            <Callout>
              <Text>{parkingSpot.name}</Text>
              <Text>{parkingSpot.location.address}</Text>
              <Button title='Book' onPress={() => navigation.navigate('TabTwo')} />
            </Callout>
          </Marker>
        ))}
        {carLocation && (
          <Marker
            key={parkingSpots.length}
            coordinate={carLocation.coordinates}
            title={'Your car'}
            description={carLocation.address}
          />
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
