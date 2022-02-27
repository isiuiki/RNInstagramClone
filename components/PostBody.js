import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import video from '../assets/sample-video.mp4';

import Swiper from 'react-native-swiper';
import Placeholder from './Placeholder'

const PostBody = ({post}) => {
  const postType = post.images ? 'image' : 'video';
  const [ref, setRef] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  return (
    <View style={styles.container}>
      {
         isLoading &&
          (
              <Placeholder style={styles.placeholderStyle}/>
          )
      }

      {postType === 'image' &&
        (typeof post.images === 'string' ? (
          <Image
            source={{uri: post.images}}
            style={{minHeight:350, maxHeight: 350, position: 'relative'}}
            resizeMode="cover"
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <Swiper
            style={styles.wrapper}
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  top: 50,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#007aff',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                  top: 52
                }}
              />
            }>
            <Image
              source={{uri: post.images[0]}}
              style={{height: 350, width: '100%'}}
              resizeMode="cover"
              onLoad={() => setIsLoading(false)}
            />
            <Image
              source={{uri: post.images[1]}}
              style={{height: 350, width: '100%'}}
              resizeMode="cover"
              onLoad={() => setIsLoading(false)}
            />
          </Swiper>
        ))}

      {postType === 'video' && (
        <View style={styles.videoContainer}>
          <Video
            source={video} // Can be a URL or a local file.
            ref={ref => {
              setRef(ref);
            }} // Store reference
            style={styles.backgroundVideo}
            onLoad={() => setIsLoading(false)}
          />
        </View>
      )}

      <View style={styles.iconContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/like.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/comment.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.icon, {top: 2}]}
              source={require('../assets/inbox.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/save.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 50,
  },
  videoContainer: {
    flex: 1,
    height: 350,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 350,
  },
  wrapper: {
    height: 350
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeholderStyle:{
      height:350,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      position: 'absolute',
      top: 0,
      left:0,
      bottom:0,
      right:0
  }
});

export default PostBody;
