import {
  View,
  Text,
} from "react-native";

import { Trophy } from "lucide-react-native";

interface Props {
  title: string;
  description: string;
}

export function AchievementCard({
  title,
  description,
}: Props) {
  return (
    <View className="bg-[#1E293B] rounded-3xl p-4 flex-1 mx-1">
      <Trophy
        size={30}
        color="#F98128"
      />

      <Text className="text-white font-bold mt-3">
        {title}
      </Text>

      <Text className="text-white/60 text-xs mt-1">
        {description}
      </Text>
    </View>
  );
}