import { View, Text } from "react-native";
import { Plane } from "lucide-react-native";

import Animated, {
  FadeInDown,
  ZoomIn,
} from "react-native-reanimated";

export default function LoginHeader() {
  return (
    <Animated.View
      entering={FadeInDown.duration(600)}
      className="pt-20 pb-8 px-6 items-center"
    >
      <Animated.View
        entering={ZoomIn.delay(200)}
        className="mb-4"
      >
        <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
          <Plane
            size={40}
            color="white"
          />
        </View>
      </Animated.View>

      <Text className="text-4xl font-bold text-white mb-2">
        Bienvenido
      </Text>

      <Text className="text-white/80 text-center">
        Inicia sesión para continuar tu aventura
      </Text>
    </Animated.View>
  );
}