import React from 'react';
import { Image, View } from 'react-native';
import { invert } from 'react-native-image-filter-kit';

const InvertedImage = ({ source, style }) => {
  // Check if source is provided
  if (!source) {
    return null;
  }

  // Invert the image
  const invertedSource = invert(source.uri);

  // Render the inverted image
  return (
    <View style={style}>
      <Image source={{ uri: invertedSource }} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default InvertedImage;
