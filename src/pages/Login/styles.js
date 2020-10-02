import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textPage: {
        fontSize:20,
        color:'#fcfcfc',
        fontWeight:'bold',
        marginTop:15,
        textAlign:'center',
      },

      containerGeral:{
          backgroundColor:'#36393f',
          justifyContent:'center',
          alignItems:'center',
          height:'100%',
      },
      
      seta:{
        marginTop:10,
      },

      textTop:{
        marginVertical:10,
        marginBottom:20,
        color:'gray',
        textAlign:'center',
      },

      textBotton:{
        color:'#44bcd8',
        marginBottom:7,
        fontSize:12,
      },

      textInput:{
        borderRadius:5,
        height:60,
        marginBottom:12,
        backgroundColor:'#202225',
      },

      containerButton:{
        margin:5,
        height:45,
        marginTop:10,
        backgroundColor:'#7289da',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
      },

      textBtn:{
        color:'#fcfcfc',
        fontSize:15,
        fontWeight:'bold',
      },
});

export default styles;