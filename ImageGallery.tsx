import {View, StyleSheet, Image} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import imageData from './ListData.json';

interface ImageItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const listData = [...imageData, ...imageData];

const ListItem = ({item}: {item: ImageItem}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const ImageGallery = () => {
  return (
    <View style={styles.page}>
      <MasonryList
        style={styles.list}
        data={listData as ImageItem[]}
        renderItem={({item}) => <ListItem item={item as ImageItem} />}
        numColumns={2}
        refreshControl={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  card: {
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardContent: {},
  image: {
    width: '100%',
    aspectRatio: 0.63,
  },
});

export default ImageGallery;
