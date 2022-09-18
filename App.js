import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Backgroud } from './src/components/Backgroud';

import { 
  HomeScreen, 
  SignUpScreen, 
  ThankScreen, 
  ValidationPhoneScreen 
} from './src/screens';


const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  return (
    <>
      <Backgroud>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Thanks" component={ThankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Validation" component={ValidationPhoneScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Backgroud>
    </>
  );
}

