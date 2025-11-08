import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "./Icons";

type UserProps = {
  id: string;
  name: string;
  email: string;
  image: string;
}

const User = ({ id, name, email, image }: UserProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/users/${id}`)} style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
        </View>
      </View>
      <View>
        <ChevronRightIcon color="black" />
      </View>
      {/* You can use the image prop to display the user's image if needed */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});

export default User;
