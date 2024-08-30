import React from 'react';
import {View} from 'react-native';

import ImageGallery from './ImageGallery';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <ImageGallery />
    </View>
  );
}

export default App;
