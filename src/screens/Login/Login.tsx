import React, {useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircleLoader from '../../assets/icons/Vector_Icons/CircleLoader.svg';
import { useDispatch } from 'react-redux';
import { loginStart } from '../../store/Login/loginActions';
import { loginStyles } from './loginStyles';

import {
    View, 
    Text, 
    TouchableOpacity, 
    Animated,
    TextInput
} from 'react-native';


export const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogingIn, setIsLogingIn] = useState(true);
    const [isValidateEmail, setIsValidateEmail] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(loginStart(credentials));
    };

    const emailValidate = (mail: string) => {
        const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailCheck = emailRe.test(String(mail).toLowerCase());
        if (emailCheck) {
            setIsLogingIn(false)
            setIsValidateEmail(true)
            setCredentials({...credentials, email: email})
            console.log(credentials)
        } else {
            setIsLogingIn(true)
            setIsValidateEmail(false)
            console.log('Email is wrong')
        }
    }

    const passwordValidate = (userPassword: string) => {
        const passwordRe = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        const passwordCheck = passwordRe.test(userPassword)
        if (passwordCheck) {
            setIsLogingIn(false)
            setIsPasswordValid(true)
            setCredentials({...credentials, password: password})
            console.log(credentials)
        } else {
            setIsLogingIn(true)
            setIsPasswordValid(false)
            console.log('Password is wrong')
        }
    }

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const loadAnim = useRef(new Animated.Value(0)).current;
    const spin = loadAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const fadeIn = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000 ,
                useNativeDriver: true
            }),
            Animated.timing(loadAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            })
        ]).start()
    };

  return(
    <View style={loginStyles.container}>
        <View style={loginStyles.form}>
            <View style={isValidateEmail ? loginStyles.formInput : loginStyles.errorFormInput}>
                <Ionicons style={loginStyles.icon} name='person-circle'/>
                <TextInput 
                    placeholder='Login'
                    style={loginStyles.input}
                    placeholderTextColor='#ffffff'
                    onChangeText = {email => {
                        setEmail(email);
                        emailValidate(email)
                    }}
                />
            </View>

            <View style={isPasswordValid ? loginStyles.formInput : loginStyles.errorFormInput}>
                <Ionicons style={loginStyles.icon} name='md-lock-closed'/>
                <TextInput 
                    placeholder='Password'
                    style={loginStyles.input}
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true}
                    onChangeText = {password => {
                        setPassword(password)
                        passwordValidate(password)
                    }}
                />
            </View>
        </View>

        <Animated.View
            style={[
            {
                transform: [{rotate: spin}],
                opacity: fadeAnim
            }, loginStyles.loader
            ]}
        >
        <CircleLoader width = {64} height = {64} fill = 'white' />
      </Animated.View>

        <View style={loginStyles.buttonBlock}>
            <TouchableOpacity 
                style={loginStyles.button}
                disabled = {isLogingIn}
                onPress = {() => {
                    fadeIn()
                    handleSubmit()
                    setTimeout(() => navigation.navigate('Forecast'), 2800)
                    // navigation.navigate('Forecast')
                }}
            >
                <Text style={loginStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}