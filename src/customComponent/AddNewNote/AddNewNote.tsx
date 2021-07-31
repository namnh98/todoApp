import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Size from '../../styleCustom/Size';
import {colors} from '../../styleCustom/Color';
import Header from '../Header';

const {width, height} = Dimensions.get('window');

const AddNewNote: FC = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.Modal}>
            <Header title="Thêm ghi chú mới" />
            <View style={{height: 10}} />
            <View style={styles.inputModal}>
              <TextInput
                autoFocus
                value={props.noteModal}
                onChangeText={props.handleNoteModal}
              />
            </View>
            <View style={{height: 10}} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={props.modalPressed}
                style={styles.buttonModal}>
                <Text style={styles.titleButtonModal}>Thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default AddNewNote;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Modal: {
    backgroundColor: colors.white,
    width: width * 0.8,
    height: height * 0.3,
    borderRadius: 20,
    paddingHorizontal: Size.h16,
  },
  inputModal: {
    width: width * 0.75,
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 20,
    paddingHorizontal: Size.h16,
  },
  buttonModal: {
    backgroundColor: colors.blue,
    width: Size.s200,
    height: Size.s100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButtonModal: {
    fontSize: Size.h30,
    color: colors.white,
  },
});
