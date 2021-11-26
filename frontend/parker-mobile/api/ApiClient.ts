import { Location, ParkingSpot } from '../domain/core'

export class ApiClient {
  async getCurrentLocation(): Promise<Location> {
    return {
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    }
  }

  async getParkingSpots(): Promise<ParkingSpot[]> {
    return [
      {
        name: 'Home',
        location: {
          address: '1182 East King Edward Ave.',
          coordinates: {
            latitude: 49.2483282,
            longitude: -123.0826752,
          },
        },
      },
      {
        name: 'Work',
        location: {
          address: '815 West Hastings St.',
          coordinates: {
            latitude: 49.2863849,
            longitude: -123.1170121,
          },
        },
      },
    ]
  }
}
