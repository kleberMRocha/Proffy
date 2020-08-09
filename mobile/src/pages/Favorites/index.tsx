import React, { useState, useEffect } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View } from 'react-native';
import style from './style';
import PageHeader from '../../components/pageHeader';
import TeacherList, { Teacher as TeacherPr} from '../../components/TeacherList';
import asyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';





function Favorites(){
    const [favorites,setFavorites] = useState([]);

    function LoadFavorites(){
    
        asyncStorage.getItem('favorites').then(res =>{
            if(res){
                const favTeachers = JSON.parse(res);
              
                setFavorites(favTeachers);
            }
    
        });
    
    }

    useFocusEffect(
        React.useCallback(() => {
            LoadFavorites();
        }, [])
      )
    
    return (<View style={style.container}>
                    <PageHeader title="Meus Proffys Favoritos" />
                    <ScrollView 
                    style={style.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal:16,
                        paddingBottom:16,
    
                    }}
               
                    >
                       {favorites.map((favTeacher:TeacherPr) =>{
                           const id =Math.random();
                           return (<TeacherList 
                            key={id} 
                            favorited={true} 
                            teacher={favTeacher} /> )

                       })}
                    </ScrollView>
             </View>
             )
}

export default Favorites;