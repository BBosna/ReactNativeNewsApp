import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>NEWS</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_images}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_images: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
});

export default App;
