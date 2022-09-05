/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox from './src/Flexbox';

import WebView from './src/Webview';

import Login from './src/Login';

import {name as appName} from './app.json';
import Registration from './src/Registration';

AppRegistry.registerComponent(appName, () => Registration);
