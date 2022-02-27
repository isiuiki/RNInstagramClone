import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/search.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search Posts"
          autoCapitalize="none"
          value={props.value}
          onChangeText={text => props.search(text)}
          placeholderTextColor="#8e8e8e"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: 'gray',
    alignItems: 'center'
  },
  searchContainer: {

  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    paddingLeft: 10,
  },
});

export default SearchBar;
