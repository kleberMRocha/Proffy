import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Teacher from '../pages/Teaches/idex';
import Favorites from '../pages/Favorites/idex';

const {Navigator,Screen} = createBottomTabNavigator();

function StudyTab(){
    return(
            <Navigator> 
                <Screen name="Teacher" component={Teacher}/>
                <Screen name="Favorites" component={Favorites}/>
            </Navigator>
        )

}

export default StudyTab;