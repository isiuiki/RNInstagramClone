import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const PostFooter = ({post}) => {
  const isComments = post.comments && post.comments.length > 0;
  let lastComments = [];
  if (isComments)
    lastComments = post.comments.slice(Math.max(post.comments.length - 2, 0)); // getting last 2 comments if exits

  return (
    <View>
      <View>
        {post.likes > 0 && (
          <Text style={styles.likeCount}>{post.likes} likes</Text>
        )}
        <View style={{flexDirection: 'row', marginLeft: 5, marginTop: 2}}>
          <Text>
            <Text style={styles.userText}>{post.user.name}</Text>
            <Text> </Text>
            <Text style={styles.postText}>{post.text}</Text>
          </Text>
        </View>
        <View style={{marginLeft: 5}}>
          {isComments && (
            <TouchableOpacity>
              <Text style={{fontSize: 13, color: '#8e8e8e'}}>
                View all {post.comments.length} comments
              </Text>
            </TouchableOpacity>
          )}
          {isComments &&
            lastComments.map((comment, index) => {
              return (
                <View key={index}>
                  <Text>
                    <Text style={styles.userText}>{comment.user}</Text> <Text>{comment.text}</Text>
                  </Text>
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    marginTop: 5,
  },
  likeCount: {
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 5,
  },
  userText: {
    fontWeight: '600',
  },
  postText: {},
});

export default PostFooter;
