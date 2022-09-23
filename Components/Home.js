import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {
//   const [name, setName] = useState('manish');
//   const [age, setAge] = useState('26');
//   const [student, setStudent] = useState([
//     {name: 'manish', age: '26', key: 1},
//     {name: 'karan', age: '27', key: 2},
//     {name: 'sonu', age: '28', key: 3},
//   ]);
    const list = useSelector(state => state.addStudent.value);

  return (
    <View style={styles.home}>
      {list.map(item => {
        return (
          <View key={item.id}>
            <Text>
              {item.name} is {item.age} years old.
            </Text>
          </View>
        );
      })}
      <Button
        title="Go to AddStudent"
        onPress={() => navigation.navigate('AddStudent')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
