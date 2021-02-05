import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox, StatusBar} from 'react-native';
import DrawerMenu from './navigation/DrawerMenu';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <DrawerMenu />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
