import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  activeTab: "trips" | "public";
  setActiveTab: (
    tab: "trips" | "public"
  ) => void;
}

export function ProfileTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <View className="flex-row border-b border-white/10">
      <TouchableOpacity
        onPress={() =>
          setActiveTab("trips")
        }
        className={`flex-1 py-4 items-center ${
          activeTab === "trips"
            ? "border-b-2 border-[#F98128]"
            : ""
        }`}
      >
        <Text
          className={`font-semibold ${
            activeTab === "trips"
              ? "text-[#F98128]"
              : "text-white/60"
          }`}
        >
          Mis Viajes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setActiveTab("public")
        }
        className={`flex-1 py-4 items-center ${
          activeTab === "public"
            ? "border-b-2 border-[#F98128]"
            : ""
        }`}
      >
        <Text
          className={`font-semibold ${
            activeTab === "public"
              ? "text-[#F98128]"
              : "text-white/60"
          }`}
        >
          Públicos
        </Text>
      </TouchableOpacity>
    </View>
  );
}