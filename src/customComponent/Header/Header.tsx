import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
