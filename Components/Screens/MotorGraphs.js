/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MotorGraphs = ({ title, data }) => {
    const chartData = {
        labels: ['1', '2', '3', '4', '5', '6'], // Representing months numerically
        datasets: [
            {
                data: data, // Time in minutes
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.detailHeading}>{title}</Text>
            <LineChart
                data={chartData}
                width={350}
                height={300}
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    detailHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
});

export default MotorGraphs;
