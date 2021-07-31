import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Size from '../styleCustom/Size';
import {colors} from '../styleCustom/Color';
import {useNavigation} from '@react-navigation/core';

const Home: FC = () => {
  const navigation = useNavigation();

  const handlePressed = () => {
    navigation.navigate('Note');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Note App</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressed}>
        <Text style={styles.titleButton}>Let's note.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Size.h38 * 2,
    color: colors.blue,
  },
  titleButton: {
    fontSize: Size.h34,
    color: colors.white,
  },
  button: {
    width: Size.s300,
    height: Size.s200 / 2,
    borderRadius: Size.s100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue2,
  },
});
