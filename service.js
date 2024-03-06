// service.js
import TrackPlayer from 'react-native-track-player';
module.exports = async function() {
  await TrackPlayer.setupPlayer()
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section
}
