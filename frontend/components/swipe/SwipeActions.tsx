import {
  View,
  TouchableOpacity,
} from "react-native";

import {
  Heart,
  Star,
  X,
} from "lucide-react-native";

import  COLORS  from "@/constants/theme";

interface Props {
  onLeft: () => void;
  onRight: () => void;
  onSuperLike: () => void;
}

export function SwipeActions({
  onLeft,
  onRight,
  onSuperLike,
}: Props) {
  return (
    <View className="flex-row items-center justify-center gap-5 py-6">
      <TouchableOpacity
        onPress={onLeft}
        className="w-16 h-16 rounded-full bg-white items-center justify-center"
        style={{
          borderWidth: 2,
          borderColor:
            COLORS.destructive,
        }}
      >
        <X
          size={30}
          color={COLORS.destructive}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onSuperLike}
        className="w-14 h-14 rounded-full bg-white items-center justify-center"
        style={{
          borderWidth: 2,
          borderColor:
            COLORS.secondary,
        }}
      >
        <Star
          size={24}
          color={COLORS.secondary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onRight}
        className="w-16 h-16 rounded-full items-center justify-center"
        style={{
          backgroundColor:
            COLORS.accent,
        }}
      >
        <Heart
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}