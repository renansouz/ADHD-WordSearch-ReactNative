import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import StartScreen from '../Start';
import RewardScreen from '../Reward';
import MainTab from './MainTab';
import PauseScreen from '../Pause';

//Área de login
import LoginEmailScreen from '../Login/email';
import LoginYearScreen from '../Login/year';
import LoginNameScreen from '../Login/name';
import CheckTerms from '../Login/checkTerms';
import Terms from '../Login/terms';

// importação dos níveis
import LevelScreenOne from '../Levels/Level01';
import LevelScreenTwo from '../Levels/Level02';
import LevelScreenThree from '../Levels/Level03';
import LevelScreenFour from '../Levels/Level04';
import LevelScreenFive from '../Levels/Level05';
import LevelScreenSix from '../Levels/Level06';
import LevelScreenSeven from '../Levels/Level07';
import LevelScreenEight from '../Levels/Level08';
import LevelScreenNine from '../Levels/Level09';
import LevelScreenTen from '../Levels/Level10';
import LevelScreenEleven from '../Levels/Level11';
import LevelScreenTwelve from '../Levels/Level12';
import LevelScreenThirteen from '../Levels/Level13';
import LevelScreenFourteen from '../Levels/Level14';
import LevelScreenFifteen from '../Levels/Level15';
import CongratScreen from '../Congrats';

// importação dos games de cada fase
import WordScreenOne from '../Levels/Level01/game01';
import WordScreenTwo from '../Levels/Level02/game02';
import WordScreenThree from '../Levels/Level03/game03';
import WordScreenFour from '../Levels/Level04/game04';
import WordScreenFive from '../Levels/Level05/game05';
import WordScreenSix from '../Levels/Level06/game06';
import WordScreenSeven from '../Levels/Level07/game07';
import WordScreenEight from '../Levels/Level08/game08';
import WordScreenNine from '../Levels/Level09/game09';
import WordScreenTen from '../Levels/Level10/game10';
import WordScreenEleven from '../Levels/Level11/game11';
import WordScreenTwelve from '../Levels/Level12/game12';
import WordScreenThirteen from '../Levels/Level13/game13';
import WordScreenFourteen from '../Levels/Level14/game14';
import WordScreenFifteen from '../Levels/Level15/game15';
import MaxScreen from '../Max';



const Stack = createStackNavigator();

export default () => (

    <Stack.Navigator
        initialRouteName='Start'
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="EmailScreen" component={LoginEmailScreen} />
        <Stack.Screen name="NameScreen" component={LoginNameScreen} />
        <Stack.Screen name="YearScreen" component={LoginYearScreen} />
        <Stack.Screen name = "CheckTerms" component={CheckTerms}/>
        <Stack.Screen name = "Terms" component={Terms}/>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Reward" component={RewardScreen} />
        <Stack.Screen name = "Max" component={MaxScreen}/>
        <Stack.Screen name="Pause" component={PauseScreen} />
        <Stack.Screen name = "Congrats" component={CongratScreen}/>
        <Stack.Screen name="LevelOne" component={LevelScreenOne} />
        <Stack.Screen name="GameOne" component={WordScreenOne} />
        <Stack.Screen name="LevelTwo" component={LevelScreenTwo} />
        <Stack.Screen name="GameTwo" component={WordScreenTwo} />
        <Stack.Screen name="LevelThree" component={LevelScreenThree} />
        <Stack.Screen name="GameThree" component={WordScreenThree} />
        <Stack.Screen name="LevelFour" component={LevelScreenFour} />
        <Stack.Screen name="GameFour" component={WordScreenFour} />
        <Stack.Screen name="LevelFive" component={LevelScreenFive} />
        <Stack.Screen name="GameFive" component={WordScreenFive} />
        {/* <Stack.Screen name = "SpecialLevelOne" component={LevelScreen}/> */}
        <Stack.Screen name="LevelSix" component={LevelScreenSix} />
        <Stack.Screen name="GameSix" component={WordScreenSix} />
        <Stack.Screen name="LevelSeven" component={LevelScreenSeven} />
        <Stack.Screen name="GameSeven" component={WordScreenSeven} />
        <Stack.Screen name="LevelEight" component={LevelScreenEight} />
        <Stack.Screen name="GameEight" component={WordScreenEight} />
        <Stack.Screen name="LevelNine" component={LevelScreenNine} />
        <Stack.Screen name="GameNine" component={WordScreenNine} />
        <Stack.Screen name="LevelTen" component={LevelScreenTen} />
        <Stack.Screen name="GameTen" component={WordScreenTen} />
        {/* <Stack.Screen name = "SpecialLevelTwo" component={LevelScreen}/> */}
        <Stack.Screen name="LevelEleven" component={LevelScreenEleven} />
        <Stack.Screen name="GameEleven" component={WordScreenEleven} />
        <Stack.Screen name="LevelTwelve" component={LevelScreenTwelve} />
        <Stack.Screen name="GameTwelve" component={WordScreenTwelve} />
        <Stack.Screen name="LevelThirteen" component={LevelScreenThirteen} />
        <Stack.Screen name="GameThirteen" component={WordScreenThirteen} />
        <Stack.Screen name="LevelFourteen" component={LevelScreenFourteen} />
        <Stack.Screen name="GameFourteen" component={WordScreenFourteen} />
        <Stack.Screen name="LevelFifteen" component={LevelScreenFifteen} />
        <Stack.Screen name="GameFifteen" component={WordScreenFifteen} />
        {/* <Stack.Screen name = "SpecialLevelThree" component={LevelScreen}/> */}
    </Stack.Navigator>
)

