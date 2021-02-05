import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/home/homeScreen';
import Setting from '/screens/setting/settingScreen';
const BottomTabNavigator = createBottomTabNavigator();

const MainBottomNav = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      {_renderBottom('Home', Home, 'Home')}
      {_renderBottom('Setting', Setting, 'Setting')}
    </BottomTabNavigator.Navigator>
  );
};
const _renderBottom = (name, component, label, image) => {
  return (
    <>
      <BottomTabNavigator.Screen
        name={name}
        component={component}
        options={{
          tabBarLabel: label,
          //   tabBarIcon: ({color}) => {
          //     return (
          //       <Image
          //         source={image}
          //         style={{width: 20, height: 20, tintColor: color}}
          //         resizeMode={'contain'}
          //       />
          //     );
          //   },
        }}
      />
    </>
  );
};

export default MainBottomNav;
