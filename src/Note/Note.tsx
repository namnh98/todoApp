import React, {FC, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from '../customComponent/Header';
import Size from '../styleCustom/Size';
import {colors, fonts} from '../styleCustom/Color';
import {useNavigation} from '@react-navigation/core';
import AddNewNote from '../customComponent/AddNewNote';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../assets';

const {width, height} = Dimensions.get('window');

const Note: FC = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState<boolean>(false);

  const onPressLogout = () => {
    Alert.alert('Thông báo', 'Bạn có muốn thoát ứng dụng', [
      {
        text: 'Đăng xuất',
        onPress: () => navigation.goBack(),
        style: 'cancel',
      },
      {
        text: 'Huỷ bỏ',
      },
    ]);
  };

  const onPressEdit = () => {
    setOpen(true);
  };

  const renderItem = () => {
    return (
      <TouchableOpacity style={styles.itemButton}>
        <View style={styles.itemNote}>
          <Text style={styles.itemContent}>123456789</Text>
          <Image source={Images.ic_arrow_right} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Danh sách ghi chú của tôi"
        logout
        logoutPressed={onPressLogout}
        edit
        editPressed={onPressEdit}
      />
      {renderItem()}
      {open ? (
        <AddNewNote visible={open} modalPressed={() => setOpen(false)} />
      ) : null}
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemNote: {
    paddingHorizontal: Size.h16,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Size.s140,
    flexDirection: 'row',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  itemContent: {
    fontSize: Size.h34,
    fontFamily: fonts.medium,
  },
  icon: {
    width: Size.s80,
    height: Size.s80,
  },
  line: {
    backgroundColor: colors.gray1,
    height: 2,
    width: width * 0.8,
  },
});
