import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CHECK, DELETE, UNCHECK} from '../store/addStudent/actions';
import {Icon} from '@rneui/themed';
import {CheckBox} from '@rneui/base';

const Home = () => {
  const list = useSelector(state => state.addStudent.value);
  const dispatch = useDispatch();
  const [check, setCheck] = React.useState(false);

  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.heading}> List of students</Text>
      </View>
      {list.map(item => {
        return (
          <View style={styles.tab} key={item.id}>
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
              checked={check}
              onPress={() => setCheck(!check)}
            />
            <Text style={styles.tabText}>{item.data}</Text>
            <View style={styles.delete}>
              <Icon
                type="MaterialCommunityIcons"
                size={30}
                name="delete"
                color="white"
                onPress={() => dispatch(DELETE(item.id))}
              />
            </View>
          </View>
        );
      })}
    </View>
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
