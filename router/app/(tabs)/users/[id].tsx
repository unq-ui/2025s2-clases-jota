import Api from "@/services/Api";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

const User =  () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();


  const [user, setUser] = useState({ name: '', email: '', image: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.getUser(Number(id))
      .then((response) => {
        setUser(response);
        navigation.setOptions({ title: response.name });
      })
      .catch(() => setError('User not found'))
      .finally(() => setLoading(false));
  }, [id, navigation]);

  return (
    <View>
      <Text>User Page {id}</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {user && (
        <View>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Image source={{ uri: user.image }} style={{ width: 100, height: 100 }} />
        </View>
      )}
    </View>
  )
}

export default User;
