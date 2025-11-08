import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const isLoguedIn = true; // TODO: replace with real auth logic

  return (
    <>
      <Stack>
        <Stack.Protected guard={isLoguedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'transparentModal', headerShown: false }} />
          <Stack.Screen name="modal2" options={{ presentation: 'transparentModal', headerShown: false }} />
          <Stack.Screen name="crear" options={{ headerShown: true, title: 'Crear usuario', headerBackTitle: 'Volver' }}/>
        </Stack.Protected>
        <Stack.Protected guard={!isLoguedIn}>
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
