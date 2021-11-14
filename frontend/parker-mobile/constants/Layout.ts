import { Dimensions } from 'react-native';

// TODO: I don't think cacheing these values is safe if the device rotates?
// Should call again on each render?
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
