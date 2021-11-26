import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        void SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error)
      } finally {
        setLoadingComplete(true)
        void SplashScreen.hideAsync()
      }
    }

    void loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
