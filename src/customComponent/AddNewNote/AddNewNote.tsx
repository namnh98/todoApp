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
  Image,
} from 'react-native';
import Size from '../../styleCustom/Size';
import {colors} from '../../styleCustom/Color';
import Header from '../Header';
import Images from '../../assets';

const {width, height} = Dimensions.get('window');

const AddNewNote: FC = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.Modal}>
            <Header title="Thêm ghi chú mới" />
            <View style={{height: 10}} />
            <View style={styles.inputModal}>
              <TextInput
                value={props.noteModal}
                onChangeText={props.handleNoteModal}
              />
              {props.noteModal ? (
                <TouchableOpacity
                  onPress={props.handleClearNoteModal}
                  style={styles.buttonClearNoteModal}>
                  <Image source={Images.ic_close} style={styles.buttonIcon} />
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={{height: 10}} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {props.noteModal ? (
                <TouchableOpacity
                  onPress={props.modalPressed}
                  style={styles.buttonModalWithValue}>
                  <Text style={styles.titleButtonModal}>Thêm</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.buttonModalWithoutValue}>
                  <Text style={styles.titleButtonModal}>Thêm</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  buttonModalWithoutValue: {
    backgroundColor: colors.gray,
    width: Size.s200,
    height: Size.s100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonModalWithValue: {
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
  buttonIcon: {
    width: Size.s40,
    height: Size.s40,
  },
  buttonClearNoteModal: {
    position: 'absolute',
    left: 265,
    top: 5,
    backgroundColor: colors.gray2,
    width: Size.s80 - Size.s10,
    height: Size.s80 - Size.s10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
