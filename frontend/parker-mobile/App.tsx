import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useCachedResources } from './src/hooks/useCachedResources'
import { useColorScheme } from './src/hooks/useColorScheme'
import { Navigation } from './src/navigation'

// eslint-disable-next-line import/no-default-export
export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  )
}
