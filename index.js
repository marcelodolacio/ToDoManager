/**
 * @format
 */

import {AppRegistry} from 'react-native'; 
import Login from './src/screens/Login'; 
import {name as appName} from './app.json'; 
import React from 'react';

const Index = () => {
    return <Login email="myemail@email.com" />;
};
AppRegistry.registerComponent(appName, () => Index);
