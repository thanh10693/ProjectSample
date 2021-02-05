import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import StackNavigator from './index';
const {width} = Dimensions.get('screen');
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  // const dispatch = useDispatch();
  // const [isSocial, setIsSocial] = useState(null);
  // let tempState = props.state;
  // tempState = props.state.routes.filter((item) => item.name !== 'Main');
  const data = null;

  const RenderTitle = React.memo(() => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View style={styles.borderAvatar}>
            <Image
              source={{
                uri:
                  data?.picture ||
                  'http://tmdt.thietkewebsite.info.vn/uploads/nophoto/nophoto.jpg',
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.viewUser}>
            <View style={{width: width / 2.2}}>
              <Text numberOfLines={1} style={styles.username}>
                {data?.username || 'Chưa cập nhật'}
              </Text>
            </View>
            <View style={{width: width / 2.2}}>
              <Text numberOfLines={1} style={styles.email}>
                {data?.email || 'Chưa cập nhật'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.viewMenu}>
          <View style={styles.viewText} />
          <Text>dddddd</Text>
        </View>
      </>
    );
  });

  return (
    <>
      <DrawerItem
        label={() => <RenderTitle />}
        onPress={() => console.log('cl')}
        style={styles.headerStyle}
      />
      <ScrollView {...props} showsVerticalScrollIndicator={false}>
        <DrawerItem
          label="Chính sách bảo hành"
          icon={() => {
            return <Text>dkm</Text>;
          }}
          onPress={() => console.log('aaaaa')}
          labelStyle={styles.labelStyle}
          style={styles.styleItem}
        />
        <DrawerItem
          label="Tìm đại lý"
          icon={() => {
            return <Text>cc</Text>;
          }}
          onPress={() =>
            //props.navigation.navigate('SearchAgency')
            console.log('Tìm đại lý')
          }
          labelStyle={styles.labelStyle}
          style={styles.styleItem}
        />
      </ScrollView>
    </>
  );
}
const DrawerMenu = (props) => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerStyle={styles.draweStyle}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      // eslint-disable-next-line no-shadow
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 15,
  },
  styleItem: {
    borderBottomWidth: 0.5,
    width: width,
    marginLeft: -5,
    paddingLeft: 15,
    height: 50,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  avatar: {
    width: 77,
    height: 77,
    borderRadius: 50,
  },
  borderAvatar: {
    width: 83,
    height: 83,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
  },
  email: {
    fontSize: 14,
  },
  headerStyle: {
    width: width / 1.25,
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 0,
    marginTop: -10,
    justifyContent: 'center',
    borderRadius: 0,
  },
  viewMenu: {
    width: width / 1.25,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  viewText: {
    width: 25,
    height: 25,
    opacity: 0.4,
    marginRight: 30,
    borderRadius: 20,
  },
  viewUser: {flex: 1, marginLeft: 12},
  draweStyle: {
    backgroundColor: '#ffffff',
    width: width / 1.25,
  },
});
