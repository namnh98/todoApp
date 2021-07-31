import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import Size from '../../styleCustom/Size';
import {colors} from '../../styleCustom/Color';

const Header: FC = props => {
  const backIcon = () => {
    return (
      <TouchableOpacity onPress={props.backPressed}>
        <Image source={Images.ic_arrow} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  const editIcon = () => {
    return (
      <TouchableOpacity onPress={props.editPressed}>
        <Image source={Images.ic_edit} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  const logoutIcon = () => {
    return (
      <TouchableOpacity onPress={props.logoutPressed}>
        <Image source={Images.ic_logout} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {props.back ? backIcon() : null}
      {props.logout ? logoutIcon() : null}
      <Text style={styles.titleHeader}>{props.title}</Text>
      {props.edit ? editIcon() : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: Size.s160,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Size.h16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
  },
  icon: {
    width: Size.s60,
    height: Size.s60,
  },
  titleHeader: {
    fontSize: Size.h34,
  },
});
