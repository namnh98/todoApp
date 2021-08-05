import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
////////////////////////////////////////////////////////////
import Note from '../src/screens/Note';
////////////////////////////////////////////////////////////
//stack navigation
const Stack = createStackNavigator();
const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
