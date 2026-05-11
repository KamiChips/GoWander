import {
  TouchableOpacity,
  Text,
} from "react-native";

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function InterestChip({
  label,
  selected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        px-5
        py-3
        rounded-full
        mr-3
        mb-3
        ${
          selected
            ? "bg-white"
            : "bg-white/20"
        }
      `}
    >
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