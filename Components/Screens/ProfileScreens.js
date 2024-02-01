/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MotorDetailsScreen = () => {
    const navigation = useNavigation();

    const handleAboutUs = () => {
        // Navigate to About Us screen
        navigation.navigate('AboutUs');
    };

    const handleContactUs = () => {
        // Navigate to Contact Us screen
        navigation.navigate('ContactUs');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <View style={styles.profileImage}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
                        }}
                    />
                </View>
                <Text style={styles.userName}>Profile Details</Text>
                <Text style={styles.userEmail}>Name: User Name</Text>
            </View>
            <View style={styles.userDetails}>
                <Text style={styles.detailHeading}>Profile Information</Text>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Name:</Text>
                    <Text style={styles.detailValue}>Rohit</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Occupation:</Text>
                    <Text style={styles.detailValue}>Fisher Man</Text>
                </View>
                {/* Add more motor details here */}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAboutUs}>
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleContactUs}>
                    <Text style={styles.buttonText}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    profileImage: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc', // You can add an actual image source here
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: 'black',
    },
    userDetails: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'flex-start',
        elevation: 5,
    },
    detailHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    detailItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    detailValue: {
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#501ae1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MotorDetailsScreen;
