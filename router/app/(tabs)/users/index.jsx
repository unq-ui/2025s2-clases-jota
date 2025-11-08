import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import User from "../../../components/User";
import Api from "../../../services/Api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    Api.getUsers()
      .then((response) => setUsers(response))
      .catch(() => setError('Error al obtener usuarios'))
  }, []);

  if (error) {
    return (
      <SafeAreaView>
        <View>
          <Text>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Users:</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.spacing}
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <User {...item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 8,
  },
  spacing: {
    gap: 8,
  }
});

export default Users