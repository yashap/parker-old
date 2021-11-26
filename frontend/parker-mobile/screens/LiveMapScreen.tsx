import * as React from 'react'
import { RootTabScreenProps } from '../types'
import { LiveMap } from '../components/LiveMap'

export const LiveMapScreen = ({ navigation }: RootTabScreenProps<'LiveMap'>) => <LiveMap />
