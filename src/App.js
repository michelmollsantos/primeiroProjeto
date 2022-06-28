import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';


const colorDarkFontGithub = '#4F565E';
const colorFontGithub = '#C9D1D9';
const colorGithub='#010409'; //variavel de cor
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86441172?v=4'; //variavel da foto
const urlToMyGithub ='https://github.com/michelmollsantos';

const App =()=> {
    const handlePressgoToGithub = async ()=>{
        console.log('Verificando Link');
       const res = await Linking.openURL(urlToMyGithub)
       
       if(res){
        console.log('Link Aprovado');
        console.log('Abrindo Link');
        await Linking.openURL(urlToMyGithub);
        
       }

    };

    return(
    <SafeAreaView style = {style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content} >
            <Image accessibilityLabel='Foto de Michel' style={style.avatar} source={{uri: imageProfileGithub}}/>
            <Text accessibilityLabel= 'Nome: Michel Moll' style={[style.defaultText, style.name]}>Michel Moll</Text>
            <Text accessibilityLabel='Nickname: Michelmoll' style={[style.defaultText, style.nickname]}>Michelmoll</Text>
            <Text accessibilityLabel='Descrição: Estudante de Análise e Desenvolvimento de Sistema'style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
            <Pressable onPress = {handlePressgoToGithub}>
            <View style = {style.button}>
                <Text style = {[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
        </Pressable> 
        </View>
        </SafeAreaView> //cria uma area de segurança, muito utilizado no IOS
    );

};

export default App;

const style = StyleSheet.create({//Cria uma folha de estilos
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para tele inteira
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    content: {
        alignItems: 'center', //alinha ao centro na horizontal
        padding: 20,
    },
    avatar: { //propriedades da foto avatar
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },

    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 20,
  },
  description:{
    fontWeight: 'bold',
    fontSize: 14,
  },
  button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',

  },

})