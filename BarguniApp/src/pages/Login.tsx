import React from 'react';
import {Text, View, Image, StyleSheet, TextInput, Button} from 'react-native';
// @ts-ignore
import logo from '../assets/loginlogo.png';

function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode={'contain'}
        style={{width: 200, height: 200, marginBottom: 20}}
      />
      <TextInput style={styles.textInput} placeholder="baguni@baguni.com" />
      <TextInput style={styles.textInput} placeholder="********" />
      <Text>비밀번호를 잊어버리셨나요?</Text>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text>회원가입</Text>
      </View>
      <View style={styles.button}>
        <Button title="로그인"></Button>
        <Button title="카카오 로그인" color="#FEE500"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textInput: {
    padding: 5,
    marginTop: 10,
    height: 30,
    margin: 12,
    borderWidth: 1,
    width: '60%',
    textAlign: 'center',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    width: '60%',
  },
});

export default Login;
