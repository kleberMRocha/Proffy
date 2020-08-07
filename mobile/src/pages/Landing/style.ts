import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8257e5',
        justifyContent:'center',
        padding: 40,
    },
    banner:{
        width:'100%',
        resizeMode:'contain'
    },
    title:{
        fontFamily:'Poppins_400Regular',
        color:'white',
        fontSize:20,
        lineHeight:30,
        marginTop:80

    },
    titleBold:{
        fontFamily:'Poppins_600SemiBold',
    },
    buttonsContainer:{
        flexDirection:'row',
        margin:25,
        justifyContent:'center',

    },
    buttonPrimary:{
        marginRight:8,
        backgroundColor:'#9871f5',
        height:150,
        width:'60%',
        borderRadius:8,
        justifyContent:"space-between",
        padding:24

    },
    button:{
        backgroundColor:'#04d361',
        height:150,
        width:'60%',
        borderRadius:8,
        justifyContent:'space-between',
        padding:24

    },
    buttonText:{
        textAlign:'left',
        fontFamily:'Archivo_600SemiBold',
        fontSize:13,
        color:'white'

    },
    totalConections:{
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
    }

});

export default style;