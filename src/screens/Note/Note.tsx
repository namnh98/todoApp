import React, {FC, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Size from '../../styles/Size';
import {colors} from '../../styles/Color';
import Images from '../../assets';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const Note: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [task, setTask] = useState<string>(false);
  const [taskItem, setTaskItem] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addNewTask = (text: string) => {
    setTask(text);
  };

  const clearTask = () => {
    setTask('');
  };

  const handleWithTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  // const clearTaskAll = (index: number) => {
  //   // var itemNow = [...taskItem];
  //   // itemNow.splice(index, 1);
  //   // setTaskItem(itemNow);
  //   setTaskItem([]);
  //   alert(`Bạn đã xoá ${taskItem.length} đã tạo`);
  // };
  const clearTaskAll = () => {
    // var itemNow = [...taskItem];
    // itemNow.splice(index, 1);
    // setTaskItem(itemNow);
    setTaskItem([]);
    Alert.alert('Thông báo', `Bạn đã xoá ${taskItem.length} đã tạo!`);
  };

  const onCheckedDone = (selected: any) => {
    // if (item.id === selected) {
    //   setChecked(true);
    // }
    setChecked(true);
  };

  const modalClearTask = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Image source={Images.ic_logo} style={styles.logoHeader} />
        <View style={{alignItems: 'flex-end'}}>
          {taskItem.length > 0 ? (
            <TouchableOpacity
              style={styles.buttonClearTask}
              onPress={clearTaskAll}>
              <Image
                source={Images.ic_delete}
                style={styles.iconButtonDelete}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={[styles.buttonClearTask, {backgroundColor: colors.gray}]}
              onPress={clearTaskAll}>
              <Image
                source={Images.ic_delete}
                style={styles.iconButtonDelete}
              />
            </View>
          )}
          <Text style={styles.timeDoTask}>{moment().format('DD/MM/YYYY')}</Text>
          <Text style={styles.amountDoTask}>
            Có {taskItem ? taskItem.length : 0} task
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          {taskItem.map((item: any) => {
            return (
              <TouchableOpacity
                style={{paddingVertical: Size.h16}}
                onPress={() => onCheckedDone(item)}>
                <View
                  style={checked ? styles.itemNoteChecked : styles.itemNote}>
                  <View
                    style={checked ? styles.dotTaskChecked : styles.dotTask}
                  />
                  <Text
                    style={
                      checked ? styles.itemContentChecked : styles.itemContent
                    }>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.endContainer}>
        <View style={{paddingHorizontal: Size.h16}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.inputTask}>
              <TextInput
                placeholder="Nhập task của bạn..."
                style={styles.taskContent}
                value={task}
                onChangeText={addNewTask}
              />
            </View>
            <View style={{width: 10}} />
            {task ? (
              <TouchableOpacity
                style={styles.buttonCleanTask}
                onPress={clearTask}>
                <Text style={{fontSize: Size.h20 * 2}}>x</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleWithTask}>
          <Text style={styles.iconButtonAdd}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue6,
  },
  headerContainer: {
    height: 150,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Size.h16,
  },
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
  bodyContainer: {
    width: width,
    height: height * 0.6,
    alignItems: 'center',
  },
  itemNote: {
    paddingHorizontal: Size.h16,
    alignItems: 'center',
    height: Size.s140,
    flexDirection: 'row',
    borderBottomColor: colors.gray5,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    width: width * 0.95,
    borderRadius: 10,
  },
  itemNoteChecked: {
    paddingHorizontal: Size.h16,
    alignItems: 'center',
    height: Size.s140,
    flexDirection: 'row',
    borderBottomColor: colors.gray5,
    borderBottomWidth: 1,
    backgroundColor: colors.gray,
    width: width * 0.95,
    borderRadius: 10,
  },
  itemContent: {
    fontSize: Size.h38,
    paddingHorizontal: Size.h16,
  },
  itemContentChecked: {
    fontSize: Size.h38,
    paddingHorizontal: Size.h16,
    color: colors.black,
  },
  dotTask: {
    backgroundColor: colors.blue6,
    width: Size.s40,
    height: Size.s40,
    borderRadius: 20,
  },
  dotTaskChecked: {
    backgroundColor: colors.black,
    width: Size.s40,
    height: Size.s40,
    borderRadius: 20,
  },
  endContainer: {
    width: width,
    height: Size.s200 + Size.s60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  inputTask: {
    width: Size.s200 + Size.s340,
    height: Size.s160,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: Size.h16,
  },
  taskContent: {
    fontSize: Size.h32,
    color: colors.black,
  },
  buttonAdd: {
    backgroundColor: colors.white,
    width: Size.s100,
    height: Size.s100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  iconButtonAdd: {
    fontSize: Size.s100,
    color: colors.blue6,
    textAlign: 'center',
    bottom: 8,
  },
  buttonCleanTask: {
    backgroundColor: colors.gray,
    width: Size.s140 / 2,
    height: Size.s140 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    left: width * 0.6,
  },
  itemButton: {
    flexDirection: 'row',
  },
  icon: {
    width: Size.s80,
    height: Size.s80,
  },
});
