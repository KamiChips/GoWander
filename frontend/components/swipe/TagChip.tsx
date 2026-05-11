import { Text, View } from "react-native";
import '../../global.css';

interface Props {
  label: string;
}

export function TagChip({
  label,
}: Props) {
  return (
    <View className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2">
      <Text className="text-xs text-gray-700">
        {label}
      </Text>
    </View>
  );
}