import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const ButtonLoader = () => {
  const AnimatedWidth = useSharedValue(200);
  const AnimatedHeight = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(AnimatedWidth.value),
      height : withSpring(AnimatedHeight.value)
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedButton style={[styles.btn, animatedStyle]}>
        <Text style={styles.btnText}>Click Me</Text>
      </AnimatedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonLoader;
