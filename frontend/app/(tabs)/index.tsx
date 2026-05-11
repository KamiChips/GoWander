import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

const isLoading = false;
const isAuthenticated = true;
const hasCompletedOnboarding = true;

export default function Index() {
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  // Usuario autenticado pero onboarding incompleto
  if (!hasCompletedOnboarding) {
    return <Redirect href="/(onboarding)/onboarding" />;
  }

  // Usuario listo
  return <Redirect href="/(tabs)/swipescreen" />;
}