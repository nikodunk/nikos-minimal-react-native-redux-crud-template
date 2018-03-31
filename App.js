import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Home from './src/components/Home'
import ItemList from './src/components/ItemList'

import configureStore from './src/store/configureStore';
const store = configureStore();



const MyTabs = TabNavigator(
  {
    MainTab: {
      screen: Home, /* --MyHomeScreen-- */
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ResultsTab: {
      screen: ItemList, /* --MyItemListScreen-- */
      path: '/results',
      navigationOptions: {
        title: 'My Results',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2191fb',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  }
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyTabs />
      </Provider>
    );
  }
}
