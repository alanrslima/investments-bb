import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './config/RootNavigation';

import Investments from './pages/Investments';

const RootStack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Investments" component={Investments} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
