import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to register" onPress={() => router.push('/register')} />
    </View>
  )
}

export default Login;