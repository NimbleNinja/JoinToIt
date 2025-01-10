import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TabsStackParamList,
  TabsNavigation,
} from '../../../shared/config/navigation';
import {MapScreen, SearchScreen} from '../../../pages';
import Icon from '@react-native-vector-icons/material-design-icons';

export const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <TabsStack.Navigator screenOptions={{headerShown: false}}>
        <TabsStack.Screen
          name={TabsNavigation.Map}
          component={MapScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="map-marker-outline" size={size} color={color} />
            ),
          }}
        />
        <TabsStack.Screen
          name={TabsNavigation.Search}
          component={SearchScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="magnify" size={size} color={color} />
            ),
          }}
        />
      </TabsStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
