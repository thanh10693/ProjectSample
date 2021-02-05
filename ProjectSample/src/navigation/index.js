import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {useDispatch, useSelector} from 'react-redux';
import MainBottomNav from './MainBottomNav';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={styles.viewMenu}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={styles.iconMenu}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Home':
      return 'Trang chủ';
    case 'Setting':
      return 'Thông báo';
  }
};

// const AuthenUser = ({navigation}) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Authentication"
//         component={Authentication}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const BottomTab = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trang chủ"
        component={MainBottomNav}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => {
            return (
              <Text>cc</Text>
              //   <Image
              //     resizeMode="contain"
              //     source={ic_user_header}
              //     style={{marginRight: 12, height: 25, width: 25}}
              //   />
            );
          },
          headerStyle: {
            backgroundColor: '#ffffff', //Set Header color
            shadowColor: '#FFF',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
          },
          headerTintColor: 'gray', //Set Header text color
          headerTitleStyle: {
            // fontFamily: fonts.Roboto.medium, //Set Header text style
            fontSize: 18,
            alignSelf: 'center',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const StackNavigator = React.memo((props) => {
  //   const tokenUser = useSelector((state) => state.tokenUserReducer?.token);
  //   const tokenApp = useSelector((state) => state.tokenAppReducer?.token);

  //   if (tokenApp == null) {
  //     return <SplashScreen />;
  //   }
  //   if (tokenUser == null) {
  //     return <AuthenUser />;
  //   }
  return <BottomTab navigation={props.navigation} />;
});

export default StackNavigator;

const styles = StyleSheet.create({
  iconMenu: {
    width: 25,
    height: 25,
    marginLeft: 12,
    tintColor: '#000',
  },
  viewMenu: {flexDirection: 'row'},
});
