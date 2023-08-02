import React from 'react';
import { MainStackNavigator } from './app/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}
export default App;
