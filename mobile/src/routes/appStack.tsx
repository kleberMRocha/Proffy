import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ladding from '../pages/Landing';
import GiveClasses from '../pages/Classes';
import StudyTab from './studysTabs';

const {Navigator,Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Ladding" component={Ladding}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTab}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;