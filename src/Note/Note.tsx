import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Note: FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
