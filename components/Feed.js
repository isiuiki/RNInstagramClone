import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Post from './Post';
import {data} from '../data/data';
import SearchBar from './SearchBar';
import GridView from './GridView';

const Feed = () => {
  const [feed, setFeed] = useState(null);
  const [isGridView, setisGridView] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredFeed, setFilteredFeed] = useState(null);

  const search = keyword => {
    setQuery(keyword);
    setisGridView(keyword.length > 0);
    let filtered = feed.filter(feedItem => {
      return feedItem.text && feedItem.text.includes(keyword.toLowerCase());
    });
    setFilteredFeed(filtered);
  };

  useEffect(() => {
    setFeed(data);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar search={search} value={query} />

      {!isGridView ? (
        <FlatList
          data={feed}
          renderItem={({item}) => {
            return <Post post={item} />;
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={3}
          initialNumToRender={3}
          removeClippedSubviews={true}
          windowSize={10}
        />
      ) : (
        <GridView data={filteredFeed} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feed;
