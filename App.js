import React, {Component} from 'react';
import{View, Text,  StyleSheet, TextInput, Image}  from 'react-native';

export default class CriadorMemes extends Component{
  constructor(props){
    super(props);
    this.state = {texto1:'Alguma coisa', texto2:'Texto 2'};

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto){
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|õ|ô)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');
    

    return novoTexto;
  }

  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);

  }

  render(){
    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Memes</Text>
        </View>
        
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu meme" onChangeText={this.escrever}/>
        </View>
        
        <View style={styles.area}>
          <Text style={[styles.texto , styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.guri} source={require('./images/mimimi.jpg')}/>
          <Text style={[styles.texto , styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  body:{
    backgroundColor:'#999999',
    paddingTop:30,
    flex:1,
    flexDirection:'column', 
    alignItems:'center'
  },
  titulo:{
    fontSize:30,
    color:'#FFFFFF'
  },
  inputArea:{
    alignSelf:'stretch',
  },
  input:{
    borderWidth:1,
    borderColor:'#999999',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:40,
    margin:20,
    padding:10,
  },
  area:{
    width:300,
    height:300,
    marginTop:10
  },
  guri:{
    width:300,
    height:300,
    marginTop:-70,
    zIndex:0
  },
  texto:{
    fontSize: 25,
    color:'#FFFFFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight: 'bold',
    textAlign:'center',
    height:70,

  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
});