import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import { Provider as StateProvider } from 'react-redux';
import store from './store/index';
import { Icon } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

function renderUserMenu(navigation) {
	return (
		<TouchableOpacity
			style={{ marginRight: 20 }}
			onPress={() => navigation.navigate('AddStudent')}>
			<Icon
				type="MaterialIcons"
				name="person-add"
				size={30}
				color="white"
			/>
		</TouchableOpacity>
	);
}

const App = () => {
	return (
		<StateProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#4C0033',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}>
					<Stack.Screen
						name="Home"
						component={Home}
						options={({ navigation }) => ({
							headerRight: () => (
								<View style={{ flexDirection: 'row' }}>
									{renderUserMenu(navigation)}
								</View>
							),
						})}
					/>
					<Stack.Screen
						name="AddStudent"
						component={AddStudent}
						options={{ title: 'Add Student' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
};

export default App;
