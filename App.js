import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import {Provider as StateProvider} from 'react-redux';
import store from './store/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddStudent" component={AddStudent} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

export default App