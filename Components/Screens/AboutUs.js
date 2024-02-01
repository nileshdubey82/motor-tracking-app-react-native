/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AboutUsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInUp" duration={1000} style={styles.contentContainer}>
                <Text style={styles.heading}>About AquaPulse</Text>
                <Text style={styles.paragraph}>
                In the pursuit of sustainable rural development, the rejuvenation and creation of Water Harvesting Structures (WHSs) stand as vital initiatives within the ambit of the Watershed Development Component of the Pradhan Mantri Krishi Sinchayee Yojana (WDC-PMKSY). These endeavors not only serve as sources of protective irrigation in rainfed regions but also significantly contribute to enhancing soil moisture, elevating water tables, and fostering agricultural prosperity.


                </Text>
                <Text style={styles.paragraph}>
                Beyond their fundamental role in agricultural advancement, WHSs have proven to be transformative in another dimension. They have become catalysts for diverse livelihood activities, including fisheries and aquatic vegetable cultivation, among others. These activities, intricately linked with WHS utilization, generate substantial incomes for families and communities involved, thereby bolstering local economies and livelihoods.
                </Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" duration={1000} style={styles.contentContainer}>
                <Text style={styles.heading}>Terms and Policies</Text>
                <Text style={styles.paragraph}>
                    Welcome to the "AquaPulse App" (referred to as "the App"). By using this App, you agree to be bound by the following terms and policies. Please read them carefully.
                </Text>
                <Text style={styles.paragraph}>
                    We are committed to protecting your privacy. The data collected by the App is stored securely and will not be shared with third parties without your consent.
                </Text>
                <Text style={styles.paragraph}>
                    The App utilizes IoT-based sensors to collect data related to machine operations and runtime. This data is used for the purpose of providing real-time insights and analytics to optimize machine performance.
                </Text>
            </Animatable.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#501ae1',
        padding: 20,
    },
    contentContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#501ae1',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
});

export default AboutUsScreen;
