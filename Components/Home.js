import * as React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK, DELETE } from '../store/addStudent/actions';
import { Icon } from '@rneui/themed';
import { CheckBox } from '@rneui/base';

const Home = () => {
	const list = useSelector((state) => state.addStudent.students);
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={styles.home}>
			<View>
				<Text style={styles.heading}> List of students</Text>
			</View>
			<ScrollView>
				{list.map((student, index) => {
					return (
						<View style={styles.tab} key={index}>
							<CheckBox
								containerStyle={styles.checkbox}
								checkedIcon={
									<Icon
										name="radio-button-checked"
										type="material"
										color="white"
									/>
								}
								uncheckedIcon={
									<Icon
										name="radio-button-unchecked"
										type="material"
										color="#5F6F94"
									/>
								}
								checked={student.isPass}
								onPress={() => dispatch(CHECK(index))}
							/>
							<Text style={styles.tabText}>
								{student.name} is {student.age} years old.
							</Text>
							<View style={styles.delete}>
								<Icon
									type="MaterialCommunityIcons"
									size={30}
									name="delete"
									color="white"
									onPress={() => dispatch(DELETE(index))}
								/>
							</View>
						</View>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#4C0033',
	},
	heading: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 10,
	},
	tab: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	checkbox: {
		backgroundColor: '#4C0033',
		marginTop: 25,
	},
	tabText: {
		color: 'white',
		fontSize: 20,
		padding: 16,
		marginTop: 16,
		borderColor: 'white',
		borderRadius: 10,
		borderWidth: 1,
		width: '70%',
		textAlign: 'center',
	},
	delete: {
		justifyContent: 'center',
		marginTop: 10,
		padding: 15,
	},
});

export default Home;
