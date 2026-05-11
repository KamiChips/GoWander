import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  Heart,
  Share2,
} from "lucide-react-native";

import { router } from "expo-router";

import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
}

export function TripCard({
  trip,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        router.push({
  pathname: "/(tabs)/trip/[id]",
  params: {
    id: trip.id,
  },
})
      }
      className="bg-[#1E293B] rounded-3xl overflow-hidden mb-4 w-[48%]"
    >
      <View className="relative">
        <Image
          source={{
            uri: trip.image,
          }}
          className="w-full h-40"
          resizeMode="cover"
        />

        <View className="absolute inset-0 bg-black/30" />

        {trip.isPublic && (
          <View className="absolute top-3 right-3 bg-black/30 p-2 rounded-full">
            <Share2
              size={14}
              color="white"
            />
          </View>
        )}

        <View className="absolute bottom-3 left-3">
          <Text className="text-white font-bold text-lg">
            {trip.destination}
          </Text>

          <Text className="text-white/80 text-xs">
            {trip.dates}
          </Text>
        </View>
      </View>

      {trip.likes !== undefined && (
        <View className="flex-row items-center px-3 py-3">
          <Heart
            size={14}
            color="#DD3164"
          />

          <Text className="text-white/70 text-xs ml-1">
            {trip.likes} likes
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}