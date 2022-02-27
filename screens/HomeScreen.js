import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Feed from '../components/Feed'
import BottomTabs from '../components/BottomTabs'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Feed />
      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default HomeScreen;
