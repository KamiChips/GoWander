import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import {
  MapPin,
  DollarSign,
  Star,
} from "lucide-react-native";

import { SwipeCardData } from "./types";
import { TagChip } from "./TagChip";

import  COLORS  from "@/constants/theme";

const SCREEN_WIDTH =
  Dimensions.get("window").width;

interface Props {
  card: SwipeCardData;

  onSwipe: (
    direction:
      | "left"
      | "right"
      | "up"
  ) => void;

  isFirst: boolean;
}

export function SwipeCard({
  card,
  onSwipe,
  isFirst,
}: Props) {
  const translateX =
    useSharedValue(0);

  const translateY =
    useSharedValue(0);

  const rotate =
    useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      if (!isFirst) return;

      translateX.value =
        event.translationX;

      translateY.value =
        event.translationY;

      rotate.value =
        interpolate(
          event.translationX,
          [-200, 200],
          [-15, 15]
        );
    })
    .onEnd(() => {
      if (translateX.value > 120) {
        runOnJS(onSwipe)(
          "right"
        );
      } else if (
        translateX.value < -120
      ) {
        runOnJS(onSwipe)(
          "left"
        );
      } else if (
        translateY.value < -120
      ) {
        runOnJS(onSwipe)("up");
      }

      translateX.value =
        withSpring(0);

      translateY.value =
        withSpring(0);

      rotate.value =
        withSpring(0);
    });

  const animatedStyle =
    useAnimatedStyle(() => ({
      transform: [
        {
          translateX:
            translateX.value,
        },
        {
          translateY:
            translateY.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    }));

  return (
    <GestureDetector
      gesture={gesture}
    >
      <Animated.View
        style={animatedStyle}
        className="absolute w-full h-full"
      >
        <View className="flex-1 bg-white rounded-[32px] overflow-hidden">
          {/* IMAGE */}
          <View className="h-[65%]">
            <Image
              source={{
                uri: card.image,
              }}
              className="w-full h-full"
              resizeMode="cover"
            />

            <View className="absolute inset-0 bg-black/30" />

            {/* TYPE */}
            <View className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
              <Text className="text-xs font-semibold">
                {card.type ===
                "destination"
                  ? "Destino"
                  : "Actividad"}
              </Text>
            </View>

            {/* INFO */}
            <View className="absolute bottom-0 left-0 right-0 p-6">
              <Text className="text-white text-4xl font-bold">
                {card.name}
              </Text>

              <View className="flex-row items-center mt-2">
                <MapPin
                  size={16}
                  color="white"
                />

                <Text className="text-white ml-2">
                  {card.location}
                </Text>
              </View>

              <View className="flex-row mt-3">
                <View className="flex-row items-center mr-4">
                  <Star
                    size={16}
                    color={
                      COLORS.accent
                    }
                    fill={
                      COLORS.accent
                    }
                  />

                  <Text className="text-white ml-1">
                    {card.rating}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <DollarSign
                    size={16}
                    color="white"
                  />

                  <Text className="text-white">
                    {card.price}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* CONTENT */}
          <View className="flex-1 p-6">
            <View className="flex-row flex-wrap mb-3">
              {card.tags.map(
                (tag) => (
                  <TagChip
                    key={tag}
                    label={tag}
                  />
                )
              )}
            </View>

            <Text className="text-gray-500 leading-6">
              {card.description}
            </Text>

            <TouchableOpacity className="mt-4">
              <Text
                style={{
                  color:
                    COLORS.accent,
                }}
                className="font-semibold"
              >
                Ver más detalles
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}