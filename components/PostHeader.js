import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const PostHeader = ({user}) => {
  const {image, name} = user;

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{uri: image}} style={styles.userImage} />
        <Text style={styles.username}>{name}</Text>
      </View>
      <Image
        style={styles.iconStyle}
        source={require('../assets/actions.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  username: {
    fontWeight: '600',
    paddingLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 30,
  },
});

export default PostHeader;
