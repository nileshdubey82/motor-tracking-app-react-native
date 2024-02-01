/* eslint-disable prettier/prettier */
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useRef, useEffect } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { View } from 'react-native-animatable';
// import { Ionicons } from '@expo/vector-icons';

const DummyComponent = () => {
    const dummyData = [
        { id: 1, title: 'Item 1', url: 'some_url_1' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        { id: 2, title: 'Item 2', url: 'some_url_2' },
        // Add more items as needed
    ];

    const scrollViewRef = useRef(null);

    const handleDocumentDownload = (url, title) => {
        console.log('Downloading:', title, 'from', url);
    };

    useEffect(() => {
        let isMounted = true;

        const animateScroll = () => {
            if (isMounted && scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ y: 50, animated: true });
                requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <ScrollView
            ref={scrollViewRef}
            style={{ height: 100 }} // Set an appropriate height for your ScrollView
            contentContainerStyle={{ paddingVertical: 10 }}
            showsVerticalScrollIndicator={false} // Optionally hide scroll indicator
        >
            <View style={{ flex: 2, backgroundColor: 'green' }}>
                {dummyData.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => handleDocumentDownload(item.url, item.title)}>
                        <Text style={{ color: 'black', fontSize: 20 }}>
                            {item.title} {item.url ? <Ionicons name={'cloud-download'} size={20} color={'black'} /> : ''}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ flex: 10, backgroundColor: 'white' }}>

            </View>
        </ScrollView>
    );
};

export default DummyComponent;
