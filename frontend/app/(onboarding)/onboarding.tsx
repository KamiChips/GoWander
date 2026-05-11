import { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Slider from "@react-native-community/slider";

import {
  useRouter,
} from "expo-router";

import {
  Plane,
  ChevronRight,
} from "lucide-react-native";

import Animated, {
  FadeInDown,
  FadeInRight,
  ZoomIn,
} from "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";

import {
  INTERESTS,
  TRAVEL_STYLES,
} from "@/constants/onboarding";

import { TravelStyleCard } from "@/components/onboarding/travel-style-card";

import { InterestChip } from "@/components/onboarding/interest-chip";

import { ProgressFooter } from "@/components/onboarding/progress-footer";

export default function OnboardingScreen() {
  const router = useRouter();

  const [step, setStep] =
    useState(0);

  const [budget, setBudget] =
    useState(1000);

  const [selectedStyles, setSelectedStyles] =
    useState<string[]>([]);

  const [
    selectedInterests,
    setSelectedInterests,
  ] = useState<string[]>([]);

  const toggleStyle = (id: string) => {
    setSelectedStyles((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const toggleInterest = (
    interest: string
  ) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter(
            (i) => i !== interest
          )
        : [...prev, interest]
    );
  };

  const canContinue = () => {
    if (step === 1)
      return selectedStyles.length > 0;

    if (step === 2)
      return (
        selectedInterests.length > 0
      );

    return true;
  };

  const handleContinue = () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    router.replace("/(tabs)");
  };

  return (
    <LinearGradient
      colors={[
        "#26459F",
        "#F98128",
        "#DD3164",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {/* STEP 0 */}
      {step === 0 && (
        <Animated.View
          entering={FadeInDown.duration(
            500
          )}
          className="flex-1 items-center justify-center px-6"
        >
          <Animated.View
            entering={ZoomIn.delay(200)}
            className="mb-8"
          >
            <View className="w-24 h-24 rounded-full bg-white/20 items-center justify-center">
              <Plane
                size={48}
                color="white"
              />
            </View>
          </Animated.View>

          <Text className="text-4xl font-bold text-white mb-4 text-center">
            GoWander
          </Text>

          <Text className="text-xl text-white/90 text-center mb-12 max-w-sm">
            Descubre tu próxima aventura
          </Text>

          <TouchableOpacity
            onPress={() => setStep(1)}
            className="bg-white px-8 py-4 rounded-full flex-row items-center gap-2"
          >
            <Text className="text-[#7C3AED] font-semibold text-lg">
              Comenzar
            </Text>

            <ChevronRight
              size={20}
              color="#7C3AED"
            />
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <Animated.ScrollView
          entering={FadeInRight.duration(
            400
          )}
          className="flex-1 px-6 pt-16"
        >
          <Text className="text-3xl font-bold text-white mb-2">
            ¿Cuál es tu presupuesto?
          </Text>

          <View className="bg-white/20 rounded-3xl p-6 mb-8 mt-6">
            <Text className="text-center text-4xl font-bold text-white mb-4">
              ${budget}
            </Text>

            <Slider
              minimumValue={200}
              maximumValue={5000}
              step={100}
              value={budget}
              onValueChange={setBudget}
            />
          </View>

          <View className="flex-row flex-wrap justify-between">
            {TRAVEL_STYLES.map(
              (style) => (
                <TravelStyleCard
                  key={style.id}
                  label={style.label}
                  emoji={style.emoji}
                  selected={selectedStyles.includes(
                    style.id
                  )}
                  onPress={() =>
                    toggleStyle(style.id)
                  }
                />
              )
            )}
          </View>
        </Animated.ScrollView>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Animated.ScrollView
          entering={FadeInRight.duration(
            400
          )}
          className="flex-1 px-6 pt-16"
        >
          <Text className="text-3xl font-bold text-white mb-6">
            ¿Qué te interesa?
          </Text>

          <View className="flex-row flex-wrap">
            {INTERESTS.map(
              (interest) => (
                <InterestChip
                  key={interest}
                  label={interest}
                  selected={selectedInterests.includes(
                    interest
                  )}
                  onPress={() =>
                    toggleInterest(
                      interest
                    )
                  }
                />
              )
            )}
          </View>
        </Animated.ScrollView>
      )}

      {step > 0 && (
        <ProgressFooter
          step={step}
          canContinue={canContinue()}
          onPress={handleContinue}
        />
      )}
    </LinearGradient>
  );
}