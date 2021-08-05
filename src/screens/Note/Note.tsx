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

import FillTask from './components/FillTask';
import Header from './components/Header';

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
    setTaskItem([]);
    Alert.alert('Thông báo', `Bạn đã xoá ${taskItem.length} đã tạo!`);
  };

  const onCheckedDone = (selected: any) => {
    // if (item.id === selected) {
    //   setChecked(true);
    // }
    setChecked(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Header clearTaskAll={clearTaskAll} tasksLength={taskItem.length} />
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
        <FillTask
          task={task}
          addNewTask={addNewTask}
          clearTask={clearTask}
          handleWithTask={handleWithTask}
        />
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
  itemButton: {
    flexDirection: 'row',
  },
  icon: {
    width: Size.s80,
    height: Size.s80,
  },
});
