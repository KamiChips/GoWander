import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { ChevronRight } from "lucide-react-native";

interface Props {
  step: number;
  canContinue: boolean;
  onPress: () => void;
}

export function ProgressFooter({
  step,
  canContinue,
  onPress,
}: Props) {
  return (
    <View className="p-6 bg-white/10">
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-2">
          {[1, 2].map((i) => (
            <View
              key={i}
              className={`h-1.5 w-8 rounded-full ${
                step >= i
                  ? "bg-white"
                  : "bg-white/30"
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={onPress}
          disabled={!canContinue}
          className={`px-8 py-3 rounded-full flex-row items-center gap-2 ${
            canContinue
              ? "bg-white"
              : "bg-white/20"
          }`}
        >
          <Text
            className={`font-semibold ${
              canContinue
                ? "text-[#7C3AED]"
                : "text-white/50"
            }`}
          >
            {step === 2
              ? "Comenzar"
              : "Continuar"}
          </Text>

          <ChevronRight
            size={20}
            color={
              canContinue
                ? "#7C3AED"
                : "rgba(255,255,255,0.5)"
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}