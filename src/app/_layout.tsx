import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar barStyle={'default'} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
