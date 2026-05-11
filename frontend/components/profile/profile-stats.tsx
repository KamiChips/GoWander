import {
  View,
  Text,
} from "react-native";

import {
  MapPin,
  Calendar,
  Heart,
} from "lucide-react-native";

const STATS = [
  {
    label: "Países",
    value: "12",
    icon: MapPin,
  },
  {
    label: "Viajes",
    value: "8",
    icon: Calendar,
  },
  {
    label: "Favoritos",
    value: "156",
    icon: Heart,
  },
];

export function ProfileStats() {
  return (
    <View className="flex-row justify-between px-6 pb-6">
      {STATS.map((stat) => {
        const Icon = stat.icon;

        return (
          <View
            key={stat.label}
            className="flex-1 bg-white/20 rounded-2xl p-4 mx-1 items-center"
          >
            <Icon
              size={20}
              color="white"
            />

            <Text className="text-white text-2xl font-bold mt-2">
              {stat.value}
            </Text>

            <Text className="text-white/70 text-xs mt-1">
              {stat.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}