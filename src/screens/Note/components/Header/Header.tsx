import React, {FC} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../../../../assets';
import {colors} from '../../../../styles/Color';
import moment from 'moment';
import Size from '../../../../styles/Size';

const Header: FC = props => {
  return (
    <>
      <Image source={Images.ic_logo} style={styles.logoHeader} />
      <View style={{alignItems: 'flex-end'}}>
        {props.tasksLength > 0 ? (
          <TouchableOpacity
            style={styles.buttonClearTask}
            onPress={props.clearTaskAll}>
            <Image source={Images.ic_delete} style={styles.iconButtonDelete} />
          </TouchableOpacity>
        ) : (
          <View
            style={[styles.buttonClearTask, {backgroundColor: colors.gray}]}
            onPress={props.clearTaskAll}>
            <Image source={Images.ic_delete} style={styles.iconButtonDelete} />
          </View>
        )}
        <Text style={styles.timeDoTask}>{moment().format('DD/MM/YYYY')}</Text>
        <Text style={styles.amountDoTask}>Có {props.tasksLength} task</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoHeader: {
    resizeMode: 'contain',
    width: Size.s200 + Size.s140,
    height: Size.s200,
  },
  iconButtonDelete: {
    resizeMode: 'contain',
    width: Size.h44,
    height: Size.h44,
  },
  buttonClearTask: {
    backgroundColor: colors.white,
    width: Size.h44 * 2,
    height: Size.h44 * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  timeDoTask: {
    color: colors.white,
    fontSize: Size.h28,
    fontWeight: '500',
    paddingVertical: Size.h16 / 2,
  },
  amountDoTask: {
    color: colors.white,
    fontSize: Size.h34,
    fontWeight: '500',
  },
});