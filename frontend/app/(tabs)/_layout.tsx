import { Tabs } from "expo-router";
import {
  House,
  Heart,
  User,
  Compass,
} from "lucide-react-native";

import Colors from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#111827",
          borderTopWidth: 0,
          height: 85,
          paddingBottom: 20,
          paddingTop: 10,
        },

        tabBarActiveTintColor:
          Colors.accent,

        tabBarInactiveTintColor:
          "#94A3B8",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <House
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="swipescreen"
        options={{
          title: "Explorar",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Compass
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Heart
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <User
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}