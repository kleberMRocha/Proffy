import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import Style from './style';
import PageHeader from '../../components/pageHeader';
import TeacherList, { Teacher as TeacherPr} from '../../components/TeacherList';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import style from './style';
import api from '../../services/api';
import asyncStorage from '@react-native-community/async-storage';

function Teacher( ){
    const [isFilterVisible,setFilters] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites,setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time,    setTime] = useState('');
    

    function LoadFavorites(){

        asyncStorage.getItem('favorites').then(res =>{
            if(res){
                const favTeachers = JSON.parse(res);
                const favTeachersIds = favTeachers.map((teacher:TeacherPr) =>{
                    return (teacher.id);
                })
                setFavorites(favTeachers);
            }

        });

    }

  

    function HandleFilterVisible(){
        setFilters(!isFilterVisible);
    }

   async function HandleOnSubmit(){
       LoadFavorites()
       await api.get('classes',{
            params:{
                    week_day:weekday,
                    subject,
                    time
                   }
        }).then( async Value =>{
            setFilters(false);
            setTeachers(Value.data);
        }).catch(err => console.log(err));
    }

    return (<View style={Style.container}>
                <PageHeader title="Proffys disponíveis!" 
                headerRight={(<BorderlessButton onPress={HandleFilterVisible}><Feather name="filter" size={20} color="white" /></BorderlessButton>)}>
                    {isFilterVisible && (
                         <View style={Style.searchForm}>
                         <Text style={Style.label}>Matéria</Text>

                         <TextInput 
                         value={subject} placeholder="Materia?" 
                         onChangeText={ text => setSubject(text)}
                         placeholderTextColor="#c1cccc" style={Style.input} />
                     
                         <View style={Style.inputGroup}>
                             <View style={Style.inputBlock}>
                                 <Text style={Style.label}>Dia</Text>
                                 <TextInput  value={weekday} style={Style.input} 
                                   onChangeText={ text => setWeekday(text)}
                                 placeholderTextColor="#c1cccc" placeholder="Dia?" />
                             </View>
                             <View style={Style.inputBlock}>
                                 <Text style={Style.label}>Horário</Text>
                                 <TextInput value={time} style={Style.input}
                                   onChangeText={ text => setTime(text)}
                                  placeholderTextColor="#c1cccc" placeholder="Horário?" />
                             </View>
                         </View>
                         <RectButton style={style.buttonSubmit} onPress={HandleOnSubmit}>
                               <Text style={style.buttonSubmitText}>Filtrar</Text> 
                         </RectButton>
                     </View>

                    )}
                </PageHeader>
                <ScrollView 
                    style={Style.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal:16,
                        paddingBottom:16,
    
                    }}
               
                >
                    {teachers.map((teacherItem:TeacherPr) =>{
                        const id = Math.random();
                        return (<TeacherList 
                                    key={id} 
                                    teacher={teacherItem}
                                    favorited={favorites.includes(teacherItem.id)}
                                />)
                    })}

                      
                      
                </ScrollView>
            </View>)
}

export default Teacher;