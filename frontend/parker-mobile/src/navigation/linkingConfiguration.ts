/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { RootStackParamList } from '../../types'

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LiveMap: {
            screens: {
              LiveMapScreen: 'liveMap',
            },
          },
          ParkingDetails: {
            screens: {
              ParkingDetailsScreen: 'parkingDetails',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
}
