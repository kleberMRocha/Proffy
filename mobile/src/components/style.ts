import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        padding:38,
        backgroundColor:'#8257e5',

    },
    toBar:{
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between"
    },
    title:{
        fontFamily:'Archivo_600SemiBold',
        color:'white',
        fontSize:24,
        lineHeight:40,
        maxWidth:160,
        marginVertical:25

    },
    header:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    }

});

export default style;