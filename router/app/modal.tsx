import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const ModalScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => router.back()}
      >
        <View style={styles.containerClose} />
      </TouchableWithoutFeedback>
      <View style={styles.containerBody}>
        <Text>This is a modal screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  containerClose: {
    flex: 0.3,
    width: '100%',
  },
  containerBody: {
    flex: 0.7,
    width: '100%',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: 'white',
    padding: 20,
  }
});

export default ModalScreen;