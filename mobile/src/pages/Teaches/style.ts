import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f7',
        
    },teacherList:{
      marginTop:-40
    },searchForm:{
        marginBottom:24
    },label:{
         fontFamily:'Poppins_400Regular',
         color:'#d4c1ff',
    },input:{
        backgroundColor:'white',
        borderRadius:8,
        height:54,
        justifyContent:'center',
        paddingHorizontal:14,
        marginTop:4,
        marginBottom:16,

    },inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },inputBlock:{
        width:'48%',
    },buttonSubmit:{
        backgroundColor:'#04d361',
        flexDirection:'row',
        height:56,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginRight:8

    },
    buttonSubmitText:{
        color:'white',
        fontFamily:'Archivo_600SemiBold',

    }

});

export default style;