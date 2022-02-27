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
import GridItem from '../components/GridItem'

const GridView = props => {

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => (
            <GridItem item={item} />
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={3}
        initialNumToRender={3}
        removeClippedSubviews={true}
        windowSize={10}
      />
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
  },
});

export default GridView;
