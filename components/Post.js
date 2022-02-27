import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import PostHeader from '../components/PostHeader';
import PostBody from '../components/PostBody';
import PostFooter from './PostFooter';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default Post;
