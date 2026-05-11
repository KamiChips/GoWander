import {
  View,
  Text,
  Pressable,
} from "react-native";

import { router } from "expo-router";

export default function AuthFooter() {
  return (
    <View className="flex-row justify-center mt-10">
      <Text className="text-white/80">
        ¿No tienes cuenta?
      </Text>

      <Pressable
        onPress={() =>
          router.push("/(auth)/signup")
        }
      >
        <Text className="text-white underline ml-2 font-semibold">
          Regístrate aquí
        </Text>
      </Pressable>
    </View>
  );
}