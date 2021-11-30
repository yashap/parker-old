import React, { useEffect, useState } from 'react'
import { ApiClient } from '../api/ApiClient'
import { ParkingDetails } from '../components/ParkingDetails'
import { ParkingSpot } from '../domain/core'

const apiClient = new ApiClient()

// TODO: get rid of this
const PARKING_SPOT_ID = '640025a8-ea6a-4aa6-b7ce-5c3d7c9b43f6'

export const ParkingDetailsScreen = () => {
  const [parkingSpot, setParkingSpot] = useState<ParkingSpot | undefined>(undefined)
  useEffect(() => {
    ;(async () => {
      setParkingSpot(await apiClient.getParkingSpotById(PARKING_SPOT_ID))
    })().catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error) // TODO: toast or something
    })
  }, [])

  return parkingSpot ? <ParkingDetails parkingSpot={parkingSpot} /> : null
}
