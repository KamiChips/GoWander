import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function SocialButtons() {
  return (
    <View className="px-6">
      {/* DIVIDER */}
      <View className="flex-row items-center my-8">
        <View className="flex-1 h-[1px] bg-white/20" />

        <Text className="mx-4 text-white/70">
          o continúa con
        </Text>

        <View className="flex-1 h-[1px] bg-white/20" />
      </View>

      <TouchableOpacity className="h-14 rounded-2xl bg-white/20 items-center justify-center mb-3">
        <Text className="text-white font-medium">
          Continuar con Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="h-14 rounded-2xl bg-white/20 items-center justify-center">
        <Text className="text-white font-medium">
          Continuar con Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}