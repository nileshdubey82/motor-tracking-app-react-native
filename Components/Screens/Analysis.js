/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MotorGraphs from './MotorGraphs';

const MotorDetailsScreen = () => {
    const [runTimeData, setRunTimeData] = useState([15, 18, 20, 22, 25, 30]);
    const [rpmData, setRpmData] = useState([750, 780, 800, 820, 850, 880]);
    const [voltageData, setVoltageData] = useState([210, 215, 220, 225, 230, 235]);
    const [ampereData, setAmpereData] = useState([35, 38, 40, 42, 45, 48]);
    const [temperatureData, setTemperatureData] = useState([80, 82, 85, 88, 90, 92]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate new data for each dataset
            setRunTimeData(generateRandomData());
            setRpmData(generateRandomData());
            setVoltageData(generateRandomData());
            setAmpereData(generateRandomData());
            setTemperatureData(generateRandomData());
        }, 2000); // Update every 60 seconds (1 minute)

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // Function to generate random data for demonstration
    const generateRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 10);
    };

    return (
        <View style={styles.container}>
            <Text style={{
                backgroundColor: '#501ae1',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                marginBottom: 10,
                color: "white",
                padding: 20
            }}>ANALYSIS BY GRAPH</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.graphContainer}>
                    <MotorGraphs title="Income In (%)" data={runTimeData} />
                </View>
                <View style={styles.graphContainer}>
                    <MotorGraphs title="Groth In (%)" data={rpmData} />
                </View>
                {/* <View style={styles.graphContainer}>
                    <MotorGraphs title="Voltage" data={voltageData} />
                </View>
                <View style={styles.graphContainer}>
                    <MotorGraphs title="Amperes" data={ampereData} />
                </View>
                <View style={styles.graphContainer}>
                    <MotorGraphs title="Motor Temperature" data={temperatureData} />
                </View> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileCard: {
        // Your profile card styles...
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingTop: 20,
    },
    graphContainer: {
        marginBottom: 20,
        width: '90%',
        backgroundColor: 'white',
    },
    // Add other styles as needed...
});

export default MotorDetailsScreen;
