/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const ContactUsScreen = () => {

    const handleSendMessage = () => {
        // Add code here to handle sending the message
        Alert.alert('Message Sent', 'Thank you for reaching out. We will get back to you soon!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.paragraph}>
                If you have any questions, feedback, or inquiries, please feel free to reach out to us.
                We're here to help!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                placeholderTextColor="#ccc"
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                keyboardType="email-address"
                placeholderTextColor="#ccc"
            />
            <TextInput
                style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                placeholder="Your Message"
                multiline
                placeholderTextColor="#ccc"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSendMessage}
            >
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
            <View style={styles.contactDetails}>
                <Text style={styles.detailLabel}>Contact Details:</Text>
                <Text style={styles.detailText}>Phone: 1234567896</Text>
                <Text style={styles.detailText}>Email: example@gmail.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        color: 'black',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'black',
    },
    button: {
        backgroundColor: '#501ae1',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    contactDetails: {
        marginTop: 20,
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    detailText: {
        fontSize: 16,
        color: 'black',
    },
});

export default ContactUsScreen;
