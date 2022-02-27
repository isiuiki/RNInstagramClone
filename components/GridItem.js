import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import video from '../assets/sample-video.mp4';
import Placeholder from './Placeholder';

const GridItem = ({item}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, setRef] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 1,
      }}>
      {isLoading && <Placeholder style={styles.placeholderStyle} />}
      {item.images ? (
        typeof item.images === 'string' ? (
          <Image
            style={styles.imageThumbnail}
            source={{uri: item.images}}
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <Image
            style={styles.imageThumbnail}
            source={{uri: item.images[0]}}
            onLoad={() => setIsLoading(false)}
          />
        )
      ) : (
        <Video
          source={video} // Can be a URL or a local file.
          repeat={true}
          ref={ref => {
            setRef(ref);
          }} // Store reference
          style={styles.backgroundVideo}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  searchContainer: {},
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    paddingLeft: 10,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'lightgray',
  },
  placeholderStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'lightgray'
  }
});

export default GridItem;
