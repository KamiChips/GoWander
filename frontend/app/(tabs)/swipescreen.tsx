import { useState } from "react";

import {
  View,
  Text,
} from "react-native";

import {
  Heart,
} from "lucide-react-native";

import { SwipeCard } from "@/components/swipe/SwipeCard";
import { SwipeHeader } from "@/components/swipe/SwipeHeader";
import { SwipeActions } from "@/components/swipe/SwipeActions";

import { SwipeCardData } from "@/components/swipe/types";

import COLORS from "@/constants/theme";

//interface Props {
//  cards: SwipeCardData[];
//}
const MOCK_CARDS: SwipeCardData[] = [
  {
    id: 1,
    type: "destination",
    name: "Santorini",
    location: "Grecia",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    rating: 4.9,
    price: "$2,500",
    tags: ["Playa", "Romántico"],
    description:
      "Hermosas vistas y atardeceres.",
  },
  {
    id: 2,
    type: "destination",
    name: "Tokio",
    location: "Japón",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    rating: 4.8,
    price: "$3,200",
    tags: ["Ciudad", "Cultura"],
    description:
      "Tecnología y tradición.",
  },
];

export default function SwipeScreen(/*{
  cards,
}: Props*/) {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [liked, setLiked] =
    useState<number[]>([]);

  const currentCard =
    MOCK_CARDS[currentIndex];

  const handleSwipe = (
    direction:
      | "left"
      | "right"
      | "up"
  ) => {
    if (!currentCard) return;

    if (
      direction === "right" ||
      direction === "up"
    ) {
      setLiked((prev) => [
        ...prev,
        currentCard.id,
      ]);
    }

    setCurrentIndex(
      (prev) => prev + 1
    );
  };

  if (
    currentIndex >= MOCK_CARDS.length
  ) {
    return (
      <View className="flex-1 items-center justify-center px-6 bg-white">
        <View
          className="w-24 h-24 rounded-full items-center justify-center mb-6"
          style={{
            backgroundColor:
              COLORS.accent,
          }}
        >
          <Heart
            size={42}
            color="white"
          />
        </View>

        <Text className="text-3xl font-bold mb-3">
          ¡Genial!
        </Text>

        <Text className="text-gray-500 text-center">
          Has seleccionado{" "}
          {liked.length} destinos
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#F5F7FB]">
      <SwipeHeader
        currentIndex={
          currentIndex
        }
        total={MOCK_CARDS.length}
      />

      <View className="flex-1 items-center justify-center px-4">
        {MOCK_CARDS
          .slice(
            currentIndex,
            currentIndex + 2
          )
          .reverse()
          .map((card, index) => (
            <SwipeCard
              key={card.id}
              card={card}
              isFirst={index === 1}
              onSwipe={
                handleSwipe
              }
            />
          ))}
      </View>

      <SwipeActions
        onLeft={() =>
          handleSwipe("left")
        }
        onRight={() =>
          handleSwipe("right")
        }
        onSuperLike={() =>
          handleSwipe("up")
        }
      />
    </View>
  );
}