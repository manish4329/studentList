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


const AddStudent = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{name: '', age: ''}}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={values => {
       dispatch(ADD([`${values.name} is ${values.age} years old.`]));
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
              <View>
                <Text>{errors.name}</Text>
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
              <View>
                <Text>{errors.age}</Text>
              </View>
            )}
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
