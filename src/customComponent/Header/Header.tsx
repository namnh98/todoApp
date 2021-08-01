import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import Size from '../../styleCustom/Size';
import {colors} from '../../styleCustom/Color';
import {color} from 'react-native-reanimated';

const Header: FC = props => {
  const backIcon = () => {
    return (
      <TouchableOpacity onPress={props.backPressed} style={styles.button}>
        <Image source={Images.ic_arrow_left} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  const addIcon = () => {
    return (
      <TouchableOpacity onPress={props.addPressed} style={styles.button}>
        <Text style={{fontSize: Size.h40 * 1.5, color: colors.white}}>+</Text>
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
  const closeIcon = () => {
    return (
      <TouchableOpacity
        onPress={props.closePressed}
        style={[styles.button, {width: Size.s60, height: Size.s60}]}>
        <Text style={{fontSize: Size.h36, color: colors.white}}>X</Text>
      </TouchableOpacity>
    );
  };
  const noProps = () => {
    return <View style={{width: Size.s100}} />;
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleHeader}>{props.title}</Text>
        {props.allTask ? (
          <Text style={{textAlign: 'left', marginTop: 5, fontSize: Size.h28}}>
            Có {props.allTask} việc cần làm
          </Text>
        ) : null}
      </View>
      {props.add ? addIcon() : props.close ? closeIcon() : noProps()}
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
    paddingHorizontal: Size.h32,
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
