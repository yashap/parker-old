import { Dinero } from 'dinero.js'
import { Location } from './Location'

export interface ParkingSpot {
  id: string
  name: string
  location: Location
  price: {
    hourly: Dinero
  }
}
