import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const onIos = (ios: any, android: any) => Platform.OS === 'ios' ? ios : android;

const { height } = Dimensions.get('screen');

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

// ROBADO DE https://github.com/juanmottesi/poke-app/tree/master

const MovesModal = () => {
  const router = useRouter();
  const translationY = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);
  const [canClose, setCanClose] = useState(true);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translationY.value }],
  }));

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateY = height / 2 - 50;
      if (prevTranslationY.value > prevTranslationY.value + event.translationY) {
        setCanClose(false)
      } else {
        setCanClose(true)
        translationY.value = clamp(
          prevTranslationY.value + event.translationY,
          -maxTranslateY,
          maxTranslateY
        );
      }

    })
    .onEnd(() => {
      if (canClose) {
        router.back()
      }
    })
    .runOnJS(true);

  return (
    <GestureHandlerRootView>
      <Animated.View style={[styles.container, animatedStyles]}>
        <View style={styles.container} />
        <View style={styles.modal}>
          <GestureDetector gesture={pan}>
            <View style={styles.headerContainer}>
              <View></View>
              <Text>Moves</Text>
            </View>
          </GestureDetector>
          <View>
            <Text>Moves</Text>
          </View>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  modal: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 0.5,
  },
  abilitiesContainer: {
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: onIos(24, 0),
  }
})

export default MovesModal;
