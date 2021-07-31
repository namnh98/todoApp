import React, {FC} from 'react';
import {View, FlatList, StyleSheet, Alert, Text} from 'react-native';
import Header from '../customComponent/Header';
import Size from '../styleCustom/Size';
import {colors, fonts} from '../styleCustom/Color';
import {useNavigation} from '@react-navigation/core';
import AddNewNote from '../customComponent/AddNewNote';
import {ScrollView} from 'react-native-gesture-handler';

const Note: FC = () => {
  const navigation = useNavigation();

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
    alert('Đây là nút edit');
  };

  const renderItem = () => {
    return (
      <View style={styles.itemNote}>
        <Text style={styles.itemContent}>123456789</Text>
      </View>
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
      {/* <FlatList renderItem={renderItem} /> */}
      {renderItem()}
      {/* <AddNewNote /> */}
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemNote: {
    backgroundColor: colors.blue3,
    paddingHorizontal: Size.h16,
    justifyContent: 'center',
    height: Size.s140,
  },
  itemContent: {
    fontSize: Size.h34,
    fontFamily: fonts.medium,
  },
});
