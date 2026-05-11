import { useState } from "react";

import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { GradientBackground } from "@/components/common/gradient-background";

import { ProfileHeader } from "@/components/profile/profile-header";

import { ProfileStats } from "@/components/profile/profile-stats";

import { ProfileTabs } from "@/components/profile/profile-tabs";

import { TripCard } from "@/components/profile/trip-card";

import { AchievementCard } from "@/components/profile/achievement-card";

import { Trip } from "@/types/trip";

import { trips } from "@/mocks/trips";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] =
    useState<
      "trips" | "public"
    >("trips");

  const filteredTrips =
    activeTab === "trips"
      ? trips
      : trips.filter(
          (trip) => trip.isPublic
        );

  return (
    <GradientBackground>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        <ProfileHeader
          name="Viajero Aventurero"
          email="viajero@email.com"
        />

        <ProfileStats />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <View className="px-4 mt-6 flex-row flex-wrap justify-between">
          {filteredTrips.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
            />
          ))}
        </View>

        <View className="px-4 mt-8 pb-10">
          <Text className="text-white text-xl font-bold mb-4">
            Logros
          </Text>

          <View className="flex-row">
            <AchievementCard
              title="Explorador"
              description="5+ países visitados"
            />

            <AchievementCard
              title="Popular"
              description="50+ likes"
            />
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}