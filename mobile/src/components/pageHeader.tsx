import React, { ReactNode } from 'react';
import style from './style';
import {BorderlessButton} from 'react-native-gesture-handler'
import { View, Image, Text } from 'react-native';

import BackIcon from '../assets/images/icons/back.png';
import LogoImg from '../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title:string;
    headerRight?:ReactNode;
}


const PageHeader: React.FC<PageHeaderProps> = ({title,headerRight,children}) =>{
    const {navigate} = useNavigation();
    function handlerGoBack(){
        navigate('Ladding');
    }
    return(
             <View style={style.container}>
                 <View style={style.toBar}>
                    <BorderlessButton onPress={ handlerGoBack }>
                        <Image source={BackIcon} resizeMode="contain"  />
                    </BorderlessButton>
                         <Image source={LogoImg} resizeMode="contain"  />   
                 </View>
                <View style={style.header}>
                    <Text style={style.title} >
                        {title}
                    </Text>
                    {headerRight}
                </View>
                 {children}
             </View>

    )

}

export default PageHeader;