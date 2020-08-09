import React, { useState } from 'react';
import { View, Image, Text,Linking } from 'react-native';
import style from './style';
import { RectButton } from 'react-native-gesture-handler';
import asyncStorange from '@react-native-community/async-storage';


import favImg from '../../assets/images/icons/heart-outline.png';
import unFavImg from '../../assets/images/icons/unfavorite.png';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherProps{
    teacher:Teacher;
    favorited:boolean;
}

const TeacherList:React.FC<TeacherProps> = ({teacher,favorited}) => {
    const [isFavorited,setIsfavorited ] = useState(favorited);

    function HandleLinkWhatsapp(){
        api.post('connections',{
           user_id:teacher.id 
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)

    }

   async function HandleToggleFavorite(){
       const favorite = await asyncStorange.getItem('favorites');
       let favoritesArray = [];

       if(favorite){
        favoritesArray = JSON.parse(favorite);
       }

       if(isFavorited){
           const favoriteIndex = favoritesArray.findIndex((teacherItem:Teacher) =>{
            return teacherItem.id === teacher.id;
           });
           
           favoritesArray.splice(favoriteIndex,1);
           setIsfavorited(false);  

       }else{

       }

       favoritesArray.push(teacher);
       setIsfavorited(true);
       await asyncStorange.setItem('favorites',JSON.stringify(favoritesArray));
    }
    
    return (<View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar} 
                source={{uri: teacher.avatar}} 
                />
                <View style={style.profileInfo}>
                    <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.seubject}>{teacher.subject}</Text>
                </View>
                
                </View>
                    <Text style={style.bio}>
                        {teacher.bio}
                    </Text>
                    <View style={style.footer}>
                        <Text style={style.price}>
                            Preço/Hora {'   '}
                            <Text style={style.priceValue}>{teacher.cost}</Text>
                        </Text>
                        <View style={style.buttonContainer}>
                            <RectButton onPress={HandleToggleFavorite} style={[style.favorite, isFavorited? style.favorited : {}]}>
                                {isFavorited ?
                                <Image source={unFavImg} /> :
                                <Image source={favImg} />}
                        
                            </RectButton>
                            <RectButton style={style.contact}>
                                <Image source={whatsappImg} />
                                <Text style={style.contactText} onPress={HandleLinkWhatsapp} >
                                    Entrar Em contato
                                </Text>
                            </RectButton>

                        </View>
                    </View>

    </View>)
}

export default TeacherList;
