import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import BackgroundImg from '../../assets/images/give-classes-background.png'
import style from './style';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
 const { goBack } =  useNavigation();

 function HandleNavGoBack(){
    goBack();
 }
    return(
       <View style={style.container}>
           <ImageBackground style={style.content} source={BackgroundImg}>
            <Text style={style.title}>Quer ser um Proffy?</Text>
            <Text style={style.descupition}>Para começar você precisa se cadastrar em nossa plataforma Web!</Text>
           </ImageBackground>
           <RectButton style={style.okButton} onPress={HandleNavGoBack}>
           <Text style={style.okButtonText}>Tudo Bem</Text>
           </RectButton>
        </View>
    )
}

export default GiveClasses;