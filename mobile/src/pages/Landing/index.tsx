import React from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import LandingImg from '../../assets/images/landing.png';
import StudyImg from '../../assets/images/icons/study.png';
import ClassImg from '../../assets/images/icons/give-classes.png';
import HeartImg from '../../assets/images/icons/heart.png';

import styles from './style';



function Lading(){
    const {navigate} = useNavigation();

    function HandleNavToClasses(){
        navigate('GiveClasses');
    }

    function HandleNavToStudy(){
        navigate('Study');
    }


    return(
   
         <View  style={styles.container}>
            <Image style={styles.banner} source={LandingImg} />
            <Text style={styles.title}>
                Seja Bem vindo !{'\n'}
                <Text style={styles.titleBold}>O que deseja Fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={HandleNavToStudy} style={styles.buttonPrimary}>
                    <Image source={StudyImg}/>
                  <Text style={styles.buttonText}>Estudar</Text>  
                </RectButton>

                <RectButton style={styles.button} onPress={HandleNavToClasses}>
                 <Image source={ClassImg} />
                <Text style={styles.buttonText}>Dar Aulas</Text>  
                </RectButton>

            </View>
            <Text style={styles.totalConections}>
                Total de 280 Conexões já realizadas{' '}<Image source={HeartImg}/>
            </Text> 
         </View>
  
        )
}
 


export default Lading;
