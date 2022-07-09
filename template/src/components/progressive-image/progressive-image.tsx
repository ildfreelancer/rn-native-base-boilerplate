import {useState} from 'react'
import {StyleSheet, Animated, ImageStyle} from 'react-native'
import FastImage, {FastImageProps, Source} from 'react-native-fast-image'
import {Box, IBoxProps} from 'native-base'

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)
export type ProgressiveImageProps = FastImageProps &
  IBoxProps & {
    thumbnailSource?: Source
  }
export const ProgressiveImage = (props: ProgressiveImageProps) => {
  const {style, thumbnailSource, source, children, resizeMode = 'cover', ...rest} = props
  const [thumbnailAnimated] = useState(new Animated.Value(0))
  const [imageAnimated] = useState(new Animated.Value(0))

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
    Animated.timing(thumbnailAnimated, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  const AnimatedComponent = thumbnailSource ? Animated.Image : Animated.View
  return (
    <Box justifyContent="flex-end" position="relative" {...rest}>
      <AnimatedComponent
        source={thumbnailSource as any}
        style={StyleSheet.flatten([
          styles.thumbnail,
          {opacity: thumbnailAnimated},
          style as ImageStyle,
        ])}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
        resizeMode={resizeMode}
      />
      <AnimatedFastImage
        source={source}
        style={
          StyleSheet.flatten([
            styles.imageOverlay,
            {opacity: imageAnimated},
            style as ImageStyle,
          ]) as any
        }
        onLoad={onImageLoad}
        resizeMode={resizeMode}
      />
      {children}
    </Box>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  imageOverlay: {
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
})
