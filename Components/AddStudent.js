import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import { TextInput } from 'react-native';
import {ADD} from '../store/addStudent/actions';
import {useDispatch} from 'react-redux';

const AddStudent = () => {
    const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{name: '', age: ''}}
          onSubmit={(values) => {
            dispatch(ADD(values))
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.form}>
          <Text style={styles.heading}>Enter your name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <Text style={styles.heading}>Enter your age</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
            keyboardType='numeric'
          />
          <View style={styles.button}>
            <Button onPress={handleSubmit} color="maroon" title="Submit" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    margin: 6,
    borderRadius: 6,
  },
  button: {
    padding: 10,
  },
});

export default AddStudent;
