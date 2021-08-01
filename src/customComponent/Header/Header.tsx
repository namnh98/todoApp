import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import Size from '../../styleCustom/Size';
import {colors} from '../../styleCustom/Color';

const Header: FC = props => {
  // const backIcon = () => {
  //   return (
  //     <TouchableOpacity onPress={props.backPressed} style={styles.button}>
  //       <Image source={Images.ic_arrow_left} style={styles.icon} />
  //     </TouchableOpacity>
  //   );
  // };
  const editIcon = () => {
    return (
      <TouchableOpacity onPress={props.editPressed} style={styles.button}>
        <Image source={Images.ic_edit} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  const logoutIcon = () => {
    return (
      <TouchableOpacity onPress={props.logoutPressed} style={styles.button}>
        <Image source={Images.ic_logout} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  const noProps = () => {
    return <View style={{width: Size.s60}} />;
  };
  return (
    <View style={styles.container}>
      {props.logout ? logoutIcon() : noProps()}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleHeader}>{props.title}</Text>
      </View>
      {props.edit ? editIcon() : noProps()}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: Size.s140,
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
    tintColor: colors.white,
  },
  titleHeader: {
    fontSize: Size.h34,
  },
  subTitleHeader: {
    fontSize: Size.h30,
  },
  button: {
    width: Size.s100,
    height: Size.s100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue2,
    borderRadius: 15,
  },
});
