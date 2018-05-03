// import libraries
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// make a component
const AlbumDetail = props => {
  const { album } = props;
  const {
    textStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const { title, artist, thumbnail_image: thumbnailImage, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnailImage }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={textStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          <Text>Buy Now!</Text>
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  viewStyle: {},
  textStyle: {}
};

// make the component available
export default AlbumDetail;
