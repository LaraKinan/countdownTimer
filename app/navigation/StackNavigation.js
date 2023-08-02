import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCountdownEvent from "../screens/countdownEvent";
import MyCountdownTime from "../screens/countdownTime";
import HomePage from "../screens/HomePage";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerStyle: {height: 50, backgroundColor: '#fc94af'}, headerTintColor: '#000'}}> 
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Countdown" component={MyCountdownEvent}/>
            <Stack.Screen name="Timer" component={MyCountdownTime} />
          </Stack.Navigator>
      );
}

export {MainStackNavigator};