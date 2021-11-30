import DineroFactory from 'dinero.js'
import { Location, ParkingSpot } from '../domain/core'

const parkingSpots: ParkingSpot[] = [
  {
    id: '640025a8-ea6a-4aa6-b7ce-5c3d7c9b43f6',
    name: 'Home',
    location: {
      address: '1182 East King Edward Ave.',
      coordinates: {
        latitude: 49.2483282,
        longitude: -123.0826752,
      },
    },
    price: {
      hourly: DineroFactory({ amount: 200, currency: 'CAD' }),
    },
  },
  {
    id: '10abc54e-e5ff-483c-a61c-701fa72048a1',
    name: 'Work',
    location: {
      address: '815 West Hastings St.',
      coordinates: {
        latitude: 49.2863849,
        longitude: -123.1170121,
      },
    },
    price: {
      hourly: DineroFactory({ amount: 400, currency: 'CAD' }),
    },
  },
]

export class ApiClient {
  // eslint-disable-next-line @typescript-eslint/require-await
  public async getCurrentLocation(): Promise<Location> {
    return {
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async getParkingSpots(): Promise<ParkingSpot[]> {
    return parkingSpots
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async getParkingSpotById(id: string): Promise<ParkingSpot | undefined> {
    return parkingSpots.find((parkingSpot) => parkingSpot.id === id)
  }
}
