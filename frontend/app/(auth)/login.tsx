import { useState } from "react";
import {
  ScrollView,
  Alert,
} from "react-native";

import { router } from "expo-router";

import {GradientBackground} from "@/components/common/gradient-background";

import LoginHeader from "@/components/auth/login-header";
import LoginForm from "@/components/auth/login-form";
import SocialButtons from "@/components/auth/social-buttons";
import AuthFooter from "@/components/auth/auth-footer";

export default function LoginScreen() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      // backend login here

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      router.replace(
        "/(onboarding)/onboarding"
      );
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un problema al iniciar sesión"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    email.length > 0 &&
    password.length >= 6;

  return (
    <GradientBackground>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
        }}
      >
        <LoginHeader />

        <LoginForm
          email={email}
          password={password}
          showPassword={showPassword}
          isLoading={isLoading}
          isFormValid={isFormValid}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onTogglePassword={() =>
            setShowPassword(
              !showPassword
            )
          }
          onSubmit={handleLogin}
        />

        <SocialButtons />

        <AuthFooter />
      </ScrollView>
    </GradientBackground>
  );
}