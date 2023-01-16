import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './src/View/screens/Home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AgeBasedOnName from './src/View/screens/AgeBasedOnName';
import DailyAstronomyPicture from './src/View/screens/DailyAstronomyPicture';
import ActivitySuggestions from './src/View/screens/ActivitySuggestions';
import Randomdogimages from './src/View/screens/Randomdogimages';
import PopularMemes from './src/View/screens/PopularMemes';
import Jokes from './src/View/screens/Jokes';
import RickAndMorty from './src/View/screens/RickAndMorty';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="ageBasedOnName"
            component={AgeBasedOnName}
            options={{
              title: "Age Based On Name",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="dailyAstronomyPicture"
            component={DailyAstronomyPicture}
            options={{
              title: "Daily Astronomy Picture",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="activitySuggestions"
            component={ActivitySuggestions}
            options={{
              title: "Activity Suggestions",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="randomdogimages"
            component={Randomdogimages}
            options={{
              title: "Random dog images",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="popularMemes"
            component={PopularMemes}
            options={{
              title: "Popular memes",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="Jokes"
            component={Jokes}
            options={{
              title: "Jokes",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="rickAndMorty"
            component={RickAndMorty}
            options={{
              title: "Rick and Morty",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
