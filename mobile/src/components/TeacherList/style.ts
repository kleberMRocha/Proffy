import {StyleSheet} from 'react-native'

 const style = StyleSheet.create({
     container:{
         backgroundColor:'white',
         borderRightWidth:1,
         borderColor:'#e6e6f0',
         borderRadius:8,
         marginBottom:19,
         overflow:"hidden"

     },
     profile:{
         flexDirection:'row',
         alignItems:"center",
         padding:24
     },
     avatar:{
         width:64,
         height:64,
         borderRadius:32,
         backgroundColor:'#eeeeee'
     },
     profileInfo:{
         marginLeft:16
     },
     name:{
         fontFamily:'Archivo_600SemiBold',
         fontSize:18,
         color:'#32454d'
     },
     seubject:{
         fontFamily:'Poppins_400Regular',
         color:'#6a6180',
         fontSize:12,
         margin:4

     },
     bio:{
         marginHorizontal:24,
         fontFamily:'Poppins_400Regular',
         fontSize:14,
         lineHeight:24,
         color:'#6a6180',
     },
     footer:{
         backgroundColor:'#fafafc',
         padding:24,
         alignItems:"center",
         marginBottom:16

     },
     price:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:24,
        color:'#6a6180',
     },
     priceValue:{
        marginHorizontal:24,
        fontFamily:'Archivo_600SemiBold',
        fontSize:14,
        lineHeight:24,
        color:'#8257e5',

     },
     buttonContainer:{
         flexDirection:'row',
         margin:16
     },
     favorite:{
         backgroundColor:'#8257e5',
         width:56,
         height:56,
         borderRadius:8,
         justifyContent:"center",
         alignItems:"center",
         marginRight:8
     },contact:{
        backgroundColor:'#04d361',
        flex:1,
        flexDirection:'row',
        height:56,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginRight:8

     },contactText:{
         fontFamily:'Archivo_600SemiBold',
         color:'white',
         marginLeft:8,
         fontSize:16
         

     },
     favorited:
     {
         backgroundColor:'#e33e3d'
         
     }

 });

 export default style;