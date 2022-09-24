import React from 'react';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DELETE} from '../store/addStudent/actions';

const Home = ({navigation}) => {
  const list = useSelector(state => state.addStudent.value);
  const dispatch = useDispatch();


  return (
    <View style={styles.home}>
      {list.map(item => {
        return (
          <View key={item.id}>
            <Text>
              {item.data}
            </Text>
            <Button title="delete" onPress={() => dispatch(DELETE(item.id))} />
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
