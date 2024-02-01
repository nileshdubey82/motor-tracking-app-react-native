/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Loader from './Loader';

const NoticeScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const { data } = props.route.params;
  const downloadedFilePathRef = useRef(null);

  const handleDocumentDownload = async (url, title, idf) => {
    setLoading(true);
    const timestamp = new Date().getTime();
    try {
      if (downloadedItems.has(idf)) {
        setLoading(false);
        Alert.alert(
          'Already Downloaded',
          'The file has already been downloaded.',
          [{
            text: 'OK', onPress: () => {
              console.log('OK Pressed');
              props.navigation.navigate('ReadFile', { filePath: downloadedFilePathRef.current });
            },
          }],
          { cancelable: false }
        );
        return;
      }

      if (url) {
        const response = await RNFetchBlob.config({
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            mediaScannable: true,
            title: `Downloaded File ${timestamp}.pdf`, // Append timestamp to file name
            path: RNFetchBlob.fs.dirs.DownloadDir + `/downloadedFile_${timestamp}.pdf`, // Append timestamp to file path
          },
        }).fetch('GET', url);

        console.log('File downloaded to:', response.path());

        const id = idf || title;

        setDownloadedItems(prevState => new Set([...prevState, id]));

        downloadedFilePathRef.current = response.path(); // Store the downloaded file path

        Alert.alert(
          'Download Successful',
          `${title} downloaded successfully!`,
          [{
            text: 'OK', onPress: () => {
              console.log('OK Pressed');
              props.navigation.navigate('ReadFile', { filePath: downloadedFilePathRef.current });
            }
          }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Not Downloadable',
          `${title} is not downloadable.`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setLoading(false); // Set loading to false in all cases
    }
  };

  const [downloadedItems, setDownloadedItems] = useState(new Set());

  useEffect(() => {
    setLoading(false);
    if (downloadedFilePathRef.current) {
      props.navigation.navigate('ReadFile', { filePath: downloadedFilePathRef.current });
    }
  }, [props.navigation]);
  const handleDocumentView = (url) => {
    if (url) {
      // Redirect to the URL
      // Example: You can use Linking from react-native
      // Linking.openURL(url);
      console.log('Redirecting to:', url);
      props.navigation.navigate('ReadFile', { filePath: url });
    }
  };
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noticeItem}>
             <Text style={[
              styles.noticeTitle,
              { color: downloadedItems.has(item.id) ? 'black' : 'blue' }
            ]}>
              {item.title}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDocumentView(item.url)}
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleDocumentDownload(item.url, item.title, item.id);
                }}
              >
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  noticeItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#501ae1',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NoticeScreen;
