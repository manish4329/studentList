import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {ADD} from '../store/addStudent/actions';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  age: Yup.number().moreThan(18, 'Need to be 18+').required('Required'),
});


const AddStudent = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{name: '', age: '', isPass: false}}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values, {resetForm}) => {
        dispatch(ADD(values));
        resetForm();
        navigation.navigate('Home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.form}>
          <Text style={styles.heading}>Enter your name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && (
            <View style={styles.error}>
              <Text style={styles.errorText}>{errors.name}</Text>
            </View>
          )}
          <Text style={styles.heading}>Enter your age</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
            keyboardType="numeric"
          />
          {touched.age && errors.age && (
            <View style={styles.error}>
              <Text style={styles.errorText}>{errors.age}</Text>
            </View>
          )}

          <View style={styles.button}>
            <Button onPress={handleSubmit} color="#5F6F94" title="Submit" />
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
    backgroundColor: '#4C0033',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    margin: 6,
    borderRadius: 6,
    color: 'white'
  },
  error: {
    padding: 3,  
  },
  errorText:{
  color: 'white',
  },
  button: {
    padding: 15,
  },
});

export default AddStudent;
