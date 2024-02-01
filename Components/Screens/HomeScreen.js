/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

function App() {
    const dummyData = [
        {
            GASLEAKAGE: [{ NAME: "Revenue generated", value: 'View Revenue' }],
            THINGSTODO: [{ NAME: "Benefits used", value: 'VIEW' }],
            SHOWESCAPE: [{ NAME: "Activities", value: 'View Activities' }],
            EXPLORE: [{ NAME: "Fisheries", value: 'TAP TO VIEW' }],
            SHOWSAFE: [{ NAME: "Growth", value: 'TAP TO VIEW' }],
            CONTACT: [{ NAME: "Explore other projects.", value: 'Explore' }],
        },
        // Add more data as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>AquaPulse DASHBOARD</Text>
            <FlatList
                data={dummyData}
                keyExtractor={(item) => item.ID} // Assuming you have an ID field in your data, otherwise you might need to change this
                renderItem={({ item }) => (
                    <Animatable.View animation="fadeInUp" duration={1000} style={styles.dataContainer}>
                        {Object.entries(item).map(([key, value]) => (
                            <Animatable.View key={key} animation="fadeIn" delay={500} style={styles.dataBox}>
                                <Text style={styles.dataTitle}>{value[0].NAME}</Text>
                                <Text style={styles.dataValue}>{value[0].value}</Text>
                            </Animatable.View>
                        ))}
                    </Animatable.View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 15,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'black',
    },
    dataContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    dataBox: {
        width: '48%',
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
    dataTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textTransform: 'uppercase',
        textAlign:'center',
    },
    dataValue: {
        fontSize: 14,
        color: 'white',
        backgroundColor:'#501ae1',
        padding:10,
        fontWeight:'bold',
        width:'auto',
        borderRadius:10,
        textAlign:'center',

    },
});

export default App;
