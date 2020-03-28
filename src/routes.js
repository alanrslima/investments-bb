import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './config/RootNavigation';

import Investments from './pages/Investments';
import Rescue from './pages/Rescue';
import colors from './styles/colors';

const RootStack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            title: 'Resgate',
            headerTitleStyle: {
              color: colors.WHITE,
              fontSize: 20,
            },
            headerStyle: {
              backgroundColor: colors.BLUE,
              borderBottomColor: colors.YELLOW,
              borderBottomWidth: 4,
              height: 95,
            }
          }}
          name="Investments"
          component={Investments}
        />
        <RootStack.Screen
          options={{
            title: 'Resgate',
            headerBackTitleVisible: false,
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
              color: colors.WHITE,
              fontSize: 20,
            },
            headerStyle: {
              backgroundColor: colors.BLUE,
              borderBottomColor: colors.YELLOW,
              borderBottomWidth: 4,
              height: 95,
            }
          }}
          name="Rescue"
          component={Rescue}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
