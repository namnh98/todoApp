import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Size from '../../styles/Size';
import {colors} from '../../styles/Color';
import uuid from 'react-native-uuid';

import FillTask from './components/FillTask';
import Header from './components/Header';
import {TaskProps} from './components/types';

const {width, height} = Dimensions.get('screen');

const Note: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [task, setTask] = useState<TaskProps>('');
  const [taskItem, setTaskItem] = useState<any>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [id, setId] = useState<TaskProps>(uuid.v4());

  const addNewTask = (text: string) => {
    setTask(text);
  };

  const clearTask = () => {
    setTask('');
  };

  const getID = () => {
    return uuid.v4();
  };

  const handleWithTask = () => {
    if (!task) {
      setIsEmpty(true);
    } else {
      Keyboard.dismiss();
      setIsEmpty(false);
      const arrTask = [];
      arrTask.push({id, task});
      setTaskItem(taskItem.concat(arrTask));
      setTask('');
      setId(getID());
    }
  };

  const clearTaskAll = () => {
    setTaskItem([]);
    Alert.alert('Thông báo', `Bạn đã xoá ${taskItem.length} đã tạo!`);
  };

  const onCheckedDone = (itemSelected: TaskProps) => {
    const itemTasks = [...taskItem];
    const positon = itemTasks.indexOf(itemSelected);
    itemTasks.splice(positon, 1);
    setTaskItem(itemTasks);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue6} />
        <Header clearTaskAll={clearTaskAll} tasksLength={taskItem.length} />
        <View style={styles.bodyContainer}>
          <ScrollView
            scrollEnabled={taskItem.length > 2 ? 'true' : 'false'}
            showVerticalScroll={false}
            showsVerticalScrollIndicator={false}>
            {taskItem.map((item: TaskProps) => {
              return (
                <TouchableOpacity
                  key={item.id}
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
                      {item.task}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {isEmpty && !task ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: Size.s60,
              backgroundColor: colors.red,
              width: width * 0.78,
              borderRadius: 8,
              top: 25,
              left: 20,
              // position: 'absolute',
              // top: height * 0.835,
              // left: Size.s40,
            }}>
            <Text style={{color: colors.white, fontSize: Size.h30}}>
              Ô task còn trống!
            </Text>
          </View>
        ) : null}
        <FillTask
          task={task}
          addNewTask={addNewTask}
          clearTask={clearTask}
          handleWithTask={handleWithTask}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue6,
  },
  bodyContainer: {
    width: width,
    height: height * 0.6,
    alignItems: 'center',
    flex: 1,
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
    color: colors.black,
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
  itemButton: {
    flexDirection: 'row',
  },
  icon: {
    width: Size.s80,
    height: Size.s80,
  },
});
