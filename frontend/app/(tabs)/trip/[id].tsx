import {
  View,
  Text,
 Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import {
  ArrowLeft,
  MapPin,
  Calendar,
  Heart,
} from "lucide-react-native";

import { trips } from "@/mocks/trips";

export default function TripDetailsScreen() {
  const { id } =
    useLocalSearchParams<{
      id: string;
    }>();

  const trip = trips.find(
    (t) => t.id === id
  );

  if (!trip) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-white text-lg">
          Viaje no encontrado
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-background">
      {/* IMAGE */}
      <View className="relative">
        <Image
          source={{ uri: trip.image }}
          className="w-full h-[380px]"
          resizeMode="cover"
        />

        {/* OVERLAY */}
        <View className="absolute inset-0 bg-black/30" />

        {/* BACK BUTTON */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-16 left-5 w-11 h-11 rounded-full bg-black/40 items-center justify-center"
        >
          <ArrowLeft
            size={22}
            color="white"
          />
        </TouchableOpacity>

        {/* DESTINATION INFO */}
        <View className="absolute bottom-8 left-6 right-6">
          <Text className="text-white text-4xl font-bold">
            {trip.destination}
          </Text>

          <View className="flex-row items-center mt-3">
            <Calendar
              size={16}
              color="white"
            />

            <Text className="text-white/80 ml-2">
              {trip.dates}
            </Text>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <View className="px-6 py-8">
        {/* STATUS */}
        <View className="self-start px-4 py-2 rounded-full bg-accent mb-6">
          <Text className="text-white font-medium">
            {trip.status}
          </Text>
        </View>

        {/* DESCRIPTION */}
        <Text className="text-white text-2xl font-bold mb-4">
          Sobre el viaje
        </Text>

        <Text className="text-zinc-400 leading-7 text-base">
          Descubre una experiencia inolvidable llena de cultura,
          aventura y paisajes increíbles.
          Este viaje fue diseñado para ofrecer momentos únicos
          y memorias para toda la vida.
        </Text>

        {/* STATS */}
        <View className="flex-row mt-8 gap-4">
          <View className="flex-1 bg-card rounded-3xl p-5">
            <MapPin
              size={24}
              color="#F98128"
            />

            <Text className="text-white text-2xl font-bold mt-3">
              12
            </Text>

            <Text className="text-zinc-400 mt-1">
              Lugares
            </Text>
          </View>

          <View className="flex-1 bg-card rounded-3xl p-5">
            <Heart
              size={24}
              color="#DD3164"
            />

            <Text className="text-white text-2xl font-bold mt-3">
              {trip.likes ?? 0}
            </Text>

            <Text className="text-zinc-400 mt-1">
              Likes
            </Text>
          </View>
        </View>

        {/* ACTION BUTTON */}
        <TouchableOpacity className="h-14 rounded-full bg-primary items-center justify-center mt-10">
          <Text className="text-white text-lg font-semibold">
            Ver itinerario
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}