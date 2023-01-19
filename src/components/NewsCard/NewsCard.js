import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './NewsCard.styles';

const NewsCard = ({news}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: news.imageUrl}} />
      <View style={style.inner_container}>
        <Text style={style.title}>{news.title}</Text>
        <Text style={style.description}>{news.description}</Text>
        <Text style={style.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
