import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

const Placeholder = props => {
  return (
    <View style={props.style}>
      <ActivityIndicator size="small" color="gray"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default Placeholder;
