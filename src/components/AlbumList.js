// import libraries
import React from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// make a component
class AlbumList extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  
  componentWillMount() {
    axios('http://rallycoding.herokuapp.com/api/music_albums').then(res => {
      this.setState({ albums: res.data });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    const { textStyle, viewStyle } = styles;
    // console.log(this.state.albums);
    return (
      <ScrollView style={viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {

  },
  textStyle: {}
};

// make the component available
export default AlbumList;
