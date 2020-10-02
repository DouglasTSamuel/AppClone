import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    paddingTop: 30,
    backgroundColor: '#202225',
  },

  containerCentral: {
    flex: 1,
    display:'flex',
    alignItems:'center',
    paddingRight:30,
    marginLeft: 70,
    marginTop:-110,
    paddingTop: -50,
    borderTopEndRadius:10,
    borderTopLeftRadius:10,
    backgroundColor: '#36393f',
  },

  topHome:{
    justifyContent:'center',
    alignItems:'baseline',
    marginLeft:10,
  },

  textInput:{
    marginLeft:10,
    marginTop:15,
    width:230,
    height:50,
    color:'#fcfcfc',
    borderRadius:5,
    backgroundColor:'#202225',
  },

  textPage:{
    fontSize:20,
    color:'#fcfcfc',
    marginLeft:10,
    fontWeight:'bold',
    textAlign:'center',
  },
});

export default styles;