/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import Ionicons from 'react-native-vector-icons/Ionicons';
const dummyData = [
    { id: 1, title: 'Notification 1', url: 'https://images3.alphacoders.com/165/thumb-1920-165265.jpg' },
    { id: 2, title: 'Notification 2', url: 'https://images3.alphacoders.com/165/thumb-1920-165265.jpg' },
    // Add more dummy data as needed
];

const HomeScreen = () => {

    const data = [
        {
            sectionHeading: 'Old Question Papers',
            items: ['Subject 1 - Year 2020', 'Subject 2 - Year 2019', 'Subject 3 - Year 2018'],
        },
        {
            sectionHeading: 'Syllabus',
            items: ['Engineering - Semester 1', 'Medicine - Year 2', 'Arts - Semester 3'],
        },
        {
            sectionHeading: 'Other News',
            items: ['News Item 1', 'News Item 2', 'News Item 3'],
        },
    ];

    const [downloaded, setDownloaded] = useState(false);

    const handleDocumentDownload = async (url, title) => {
        try {
            if (downloaded) {
                Alert.alert(
                    'Already Downloaded',
                    'The file has already been downloaded.',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                );
                return;
            }

            if (url) {
                // Only attempt download if there's a URL
                const response = await RNFetchBlob.config({
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        notification: true,
                        mediaScannable: true,
                        title: 'Downloaded File',
                        path: RNFetchBlob.fs.dirs.DownloadDir + '/downloadedFile.pdf',
                    },
                }).fetch('GET', url);

                console.log('File downloaded to:', response.path());
                setDownloaded(true);

                Alert.alert(
                    'Download Successful',
                    `${title} downloaded successfully!`,
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                );
            } else {
                // Handle cases where there's no URL (not downloadable)
                Alert.alert(
                    'Not Downloadable',
                    `${title} is not downloadable.`,
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                );
            }
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="black" />
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>LATEST UNIVERSITY NOTICE</Text>
                <Text style={styles.sectionHeading2}>नवीनतम विश्वविद्यालय सूचना</Text>
                {dummyData.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => handleDocumentDownload(item.url, item.title)}>
                        <Text style={{ color: 'black', fontSize: 20 }}>
                            {item.title} {item.url ? <Ionicons name={'cloud-download'} size={20} color={'black'} /> : ''}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {data.map((section, index) => (
                <View style={styles.section} key={index}>
                    <Text style={styles.sectionHeading}>{section.sectionHeading}</Text>
                    {section.items.map((item, itemIndex) => (
                        <Text style={styles.item} key={itemIndex}>{item}</Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    section: {
        marginBottom: 24,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 12,
    },
    sectionHeading2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 12,
    },
    item: {
        color: 'black',
        fontSize: 20,
    },
});

export default HomeScreen;
