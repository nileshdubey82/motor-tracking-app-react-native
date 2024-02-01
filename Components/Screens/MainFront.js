/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

export default function FrontPage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#501ae1' />
            <View
                style={{
                    flex: 1.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 10,
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                <View style={{
                    justifyContent: 'center',
                    margin: 10,
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../Image/logo.png')}
                        style={{ width: 100, height: 110 }}
                    />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>

                    </Text>
                </View>
                <View>
                </View>
            </View>
            <View
                style={{
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '',
                }}>
                <LottieView
                    source={require('../Image/login.json')} // Replace with your animation file
                    autoPlay
                    loop
                    style={{ width: 300, height: 350 }}
                />
            </View>
            <View style={{ flex: 1.5 }}>
                <Text
                    style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                    {/* Welcome to Your University App */}
                    Welcome to Motor Driver App
                </Text>
                <Text
                    style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 15,
                        padding: 25, 
                    }}>
                    {/* Explore and stay connected with your university. Get access to important
                    information and stay updated with the latest events and news. */}
                    Monitor your motor's RPM and other details with our app. Stay connected with real-time information and receive updates on any changes.
                </Text>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    props.navigation.navigate("Login");
                }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    props.navigation.navigate("Registration");
                }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>REGISTRATION</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#501ae1',
        padding: 8,
    },
    nextButton: {
        backgroundColor: '#e11a50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});
