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
} from 'react-native';
import Header from '../customComponent/Header';
import Size from '../styleCustom/Size';
import {colors, fonts} from '../styleCustom/Color';
import {useNavigation} from '@react-navigation/core';
import AddNewNote from '../customComponent/AddNewNote';

const {width, height} = Dimensions.get('window');

const Note: FC = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState<boolean>(false);
  const [task, setTask] = useState<string>(false);
  const [taskItem, setTaskItem] = useState<any>([]);

  const onPressAdd = () => {
    setOpen(true);
    // console.log('1');
  };

  const addNewTask = (text: string) => {
    setTask(text);
  };

  const clearTask = () => {
    setTask('');
  };

  const handleWithTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setOpen(false);
    setTask(null);
  };

  const checkedTask = (index: number) => {
    var itemNow = [...taskItem];
    itemNow.splice(index, 1);
    setTaskItem(itemNow);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Danh sách ghi chú của tôi"
        add
        addPressed={onPressAdd}
        handleCloseModal={closeModal}
        allTask={taskItem.length}
      />
      <View style={{alignItems: 'center', paddingVertical: Size.h16}}>
        {taskItem.map((item: any, index: number) => {
          return (
            <>
              <TouchableOpacity
                style={styles.itemNote}
                key={index}
                onPress={() => checkedTask(index)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.unCheckedSquare} />
                  <View style={{width: 10}} />
                  <Text style={styles.itemContent}>{item}</Text>
                </View>
                <View style={styles.unchecked} />
              </TouchableOpacity>
              <View style={{height: 10}} />
            </>
          );
        })}
      </View>
      {open ? (
        <AddNewNote
          visible={open}
          modalPressed={handleWithTask}
          noteModal={task}
          handleNoteModal={addNewTask}
          handleClearNoteModal={clearTask}
          handleCloseModal={closeModal}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray2,
  },
  itemNote: {
    paddingHorizontal: Size.h16,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Size.s140,
    flexDirection: 'row',
    borderBottomColor: colors.gray5,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    width: width * 0.95,
    borderRadius: 10,
  },
  itemContent: {
    fontSize: Size.h34,
    fontFamily: fonts.semibold,
    color: colors.black2,
  },
  itemButton: {
    flexDirection: 'row',
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
  unchecked: {
    borderRadius: 10,
    borderColor: colors.blue2,
    borderWidth: 1.5,
    width: 10,
    height: 10,
    backgroundColor: colors.white,
  },
  unCheckedSquare: {
    width: 20,
    height: 20,
    backgroundColor: colors.blue2,
    borderRadius: 5,
  },
  checked: {
    borderRadius: 10,
    borderWidth: 1.5,
    width: 10,
    height: 10,
    backgroundColor: colors.gray,
  },
  checkedSquare: {
    width: 20,
    height: 20,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
});
