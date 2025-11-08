import { Stack } from "expo-router";

const UsersLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Users", headerShown: false }} />
      <Stack.Screen name="[id]" />
    </Stack>
  )
}

export default UsersLayout;