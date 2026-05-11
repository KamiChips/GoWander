import {
  TouchableOpacity,
  Text,
} from "react-native";

interface Props {
  label: string;
  emoji: string;
  selected: boolean;
  onPress: () => void;
}

export function TravelStyleCard({
  label,
  emoji,
  selected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        w-[48%]
        p-4
        rounded-2xl
        mb-3
        items-center
        ${
          selected
            ? "bg-white"
            : "bg-white/20"
        }
      `}
    >
      <Text className="text-3xl mb-2">
        {emoji}
      </Text>

      <Text
        className={`font-medium ${
          selected
            ? "text-[#7C3AED]"
            : "text-white"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}