import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons';
import Teacher from '../pages/Teaches';
import Favorites from '../pages/Favorites';

const {Navigator,Screen} = createBottomTabNavigator();

function StudyTab(){
    return(
            <Navigator tabBarOptions={{
                style:{ 
                    elevation:0,
                    height:64,
                },
                tabStyle:{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'

                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20,

                },
                labelStyle:{
                    fontFamily:'Archivo_600SemiBold',
                    fontSize:13,
                    marginLeft:16,

                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor:'#ebebf5',
                inactiveTintColor:'#c1bccc',
                activeTintColor:'#32264d',
            }}> 
                <Screen 
                 options={{
                    tabBarLabel:'Proffys',
                    tabBarIcon: ({color,size,focused}) => {
                        return(
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }

                 }}
                 name="Teacher"
                 component={Teacher}
                 />
                <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon: ({color,size,focused}) => {
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }

                 }}
                />
            </Navigator>
        )

}

export default StudyTab;