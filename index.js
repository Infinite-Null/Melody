/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as TrackPlayer from "react-native-track-player/lib/trackPlayer";
import { PlaybackService } from "./service";
TrackPlayer.registerPlaybackService(() => PlaybackService);
AppRegistry.registerComponent(appName, () => App);

