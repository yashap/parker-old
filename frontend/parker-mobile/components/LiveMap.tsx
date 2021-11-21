import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import { ApiClient } from '../api/ApiClient'
import { Coordinate, Location, ParkingSpot } from '../domain/core'

const defaultDeltas: Pick<Region, 'latitudeDelta' | 'longitudeDelta'> = {
  latitudeDelta: 0.12,
  longitudeDelta: 0.06,  
}

interface Region extends Coordinate {
  latitudeDelta: number
  longitudeDelta: number
}

export const LiveMap = () => {
  const apiClient = new ApiClient() // TODO: is there a better place for this? Some sort of hook?

  const [region, setRegion] = useState<Region | undefined>(undefined)
  const [carLocation, setCarLocation] = useState<Location | undefined>(undefined)
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([])
  useEffect(() => {
    (async () => {
      const initialLocation = await apiClient.getCurrentLocation()
      setRegion({ ...(initialLocation.coordinates), ...defaultDeltas })
      setCarLocation(initialLocation)
      setParkingSpots(await apiClient.getParkingSpots())
    })()
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region}
        onRegionChange={setRegion}
        style={styles.map}
      >
        {parkingSpots.map((parkingSpot, index) => (
          <Marker
            key={index}
            coordinate={parkingSpot.location.coordinates}
            title={parkingSpot.name}
            description={parkingSpot.location.address}
            image={require('../assets/images/parking-icon.png')}
          />
        ))}
        {carLocation && <Marker
          key={parkingSpots.length}
          coordinate={carLocation.coordinates}
          title={'Your car'}
          description={carLocation.address}
        />}
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
