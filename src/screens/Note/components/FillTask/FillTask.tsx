import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../../../../styles/Color';
import Size from '../../../../styles/Size';

const {width, height} = Dimensions.get('window');

const FillTask: FC = props => {
  return (
    <View style={styles.endContainer}>
      <View style={{paddingHorizontal: Size.h16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={[styles.inputTask, {borderColor: colors.red}]}>
            <TextInput
              placeholder="Nhập task của bạn..."
              style={styles.taskContent}
              value={props.task}
              onChangeText={props.addNewTask}
            />
            {props.task ? (
              <TouchableOpacity
                style={styles.buttonCleanTask}
                onPress={props.clearTask}>
                <Text style={{fontSize: Size.h20 * 2, textAlign: 'center'}}>
                  x
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={props.handleWithTask}>
        <Text style={styles.iconButtonAdd}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FillTask;

const styles = StyleSheet.create({
  inputTask: {
    width: Size.s200 + Size.s340,
    height: Size.s100,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: Size.h16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskContent: {
    fontSize: Size.h32,
    color: colors.black,
    width: '85%',
    paddingHorizontal: Size.h16,
  },
  buttonCleanTask: {
    backgroundColor: colors.gray1,
    width: Size.s60,
    height: Size.s60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonAdd: {
    backgroundColor: colors.white,
    width: Size.s100,
    height: Size.s100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  iconButtonAdd: {
    fontSize: Size.s100,
    color: colors.blue6,
    textAlign: 'center',
    bottom: 8,
  },
  endContainer: {
    width: width,
    height: height * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
