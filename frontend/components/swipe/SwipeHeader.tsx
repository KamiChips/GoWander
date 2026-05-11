import { View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import  COLORS  from "@/constants/theme";

interface Props {
  currentIndex: number;
  total: number;
}

export function SwipeHeader({
  currentIndex,
  total,
}: Props) {
  const progress =
    (currentIndex / total) * 100;

  const animatedStyle =
    useAnimatedStyle(() => ({
      width: withTiming(
        `${progress}%`,
        { duration: 300 }
      ),
    }));

  return (
    <View className="px-5 pt-20 pb-5">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-2xl font-bold text-black">
          Explorar
        </Text>

        <Text className="text-gray-500">
          {currentIndex + 1} / {total}
        </Text>
      </View>

      <View className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <Animated.View
          style={[
            animatedStyle,
            {
              height: 4,
              backgroundColor:
                COLORS.accent,
            },
          ]}
        />
      </View>
    </View>
  );
}