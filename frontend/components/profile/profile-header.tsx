import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  User,
  Settings,
} from "lucide-react-native";

import Animated, {
  FadeInDown,
} from "react-native-reanimated";

interface Props {
  name: string;
  email: string;
}

export function ProfileHeader({
  name,
  email,
}: Props) {
  return (
    <Animated.View
      entering={FadeInDown.duration(600)}
      className="px-6 pt-20 pb-8"
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center">
          <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
            <User
              size={40}
              color="white"
            />
          </View>

          <View className="ml-4">
            <Text className="text-2xl font-bold text-white">
              {name}
            </Text>

            <Text className="text-white/80 mt-1">
              {email}
            </Text>
          </View>
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-full bg-white/20 items-center justify-center">
          <Settings
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}