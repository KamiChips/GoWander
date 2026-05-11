import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import {
  Plane,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react-native";

import Animated, {
  FadeInDown,
  FadeInUp,
  ZoomIn,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [acceptTerms, setAcceptTerms] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert(
        "Error",
        "Las contraseñas no coinciden"
      );
      return;
    }

    if (!acceptTerms) {
      Alert.alert(
        "Error",
        "Debes aceptar los términos y condiciones"
      );
      return;
    }

    try {
      setIsLoading(true);

      // fake request
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      await AsyncStorage.setItem(
        "autenticated",
        "true"
      );

      router.replace(
        "/(onboarding)/onboarding"
      );
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un problema al crear la cuenta"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    name.length > 0 &&
    email.length > 0 &&
    password.length >= 6 &&
    confirmPassword.length >= 6 &&
    password === confirmPassword &&
    acceptTerms;

  return (

    <LinearGradient
      colors={[
        "#26459F",
        "#F98128",
        "#DD3164",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"    
      style={{flex:1}}
    >
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* HEADER */}
        <Animated.View
          entering={FadeInDown.duration(600)}
          className="pt-20 px-6 items-center"
        >
          <Animated.View
            entering={ZoomIn.delay(200)}
            className="mb-5"
          >
            <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
              <Plane
                size={40}
                color="white"
              />
            </View>
          </Animated.View>

          <Text className="text-4xl font-bold text-white mb-2">
            Crear cuenta
          </Text>

          <Text className="text-white/80 text-base">
            Comienza tu aventura hoy
          </Text>
        </Animated.View>

        {/* FORM */}
        <Animated.View
          entering={FadeInUp.delay(300)}
          className="px-6 mt-10"
        >
          {/* NAME */}
          <View className="mb-4">
            <Text className="text-white mb-2 ml-1">
              Nombre completo
            </Text>

            <View className="bg-white/20 rounded-2xl flex-row items-center px-4 h-14">
              <User
                size={20}
                color="rgba(255,255,255,0.7)"
              />

              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Tu nombre"
                placeholderTextColor="rgba(255,255,255,0.5)"
                className="flex-1 ml-3 text-white"
              />
            </View>
          </View>

          {/* EMAIL */}
          <View className="mb-4">
            <Text className="text-white mb-2 ml-1">
              Correo electrónico
            </Text>

            <View className="bg-white/20 rounded-2xl flex-row items-center px-4 h-14">
              <Mail
                size={20}
                color="rgba(255,255,255,0.7)"
              />

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="tu@email.com"
                placeholderTextColor="rgba(255,255,255,0.5)"
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 ml-3 text-white"
              />
            </View>
          </View>

          {/* PASSWORD */}
          <View className="mb-4">
            <Text className="text-white mb-2 ml-1">
              Contraseña
            </Text>

            <View className="bg-white/20 rounded-2xl flex-row items-center px-4 h-14">
              <Lock
                size={20}
                color="rgba(255,255,255,0.7)"
              />

              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Mínimo 6 caracteres"
                placeholderTextColor="rgba(255,255,255,0.5)"
                secureTextEntry={!showPassword}
                className="flex-1 ml-3 text-white"
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff
                    size={20}
                    color="rgba(255,255,255,0.7)"
                  />
                ) : (
                  <Eye
                    size={20}
                    color="rgba(255,255,255,0.7)"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* CONFIRM PASSWORD */}
          <View className="mb-2">
            <Text className="text-white mb-2 ml-1">
              Confirmar contraseña
            </Text>

            <View
              className={`rounded-2xl flex-row items-center px-4 h-14 ${
                confirmPassword &&
                password !== confirmPassword
                  ? "bg-red-500/20 border border-red-400"
                  : "bg-white/20"
              }`}
            >
              <Lock
                size={20}
                color="rgba(255,255,255,0.7)"
              />

              <TextInput
                value={confirmPassword}
                onChangeText={
                  setConfirmPassword
                }
                placeholder="Repite tu contraseña"
                placeholderTextColor="rgba(255,255,255,0.5)"
                secureTextEntry={
                  !showConfirmPassword
                }
                className="flex-1 ml-3 text-white"
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff
                    size={20}
                    color="rgba(255,255,255,0.7)"
                  />
                ) : (
                  <Eye
                    size={20}
                    color="rgba(255,255,255,0.7)"
                  />
                )}
              </TouchableOpacity>
            </View>

            {confirmPassword &&
              password !== confirmPassword && (
                <Text className="text-red-300 mt-2 ml-1 text-sm">
                  Las contraseñas no coinciden
                </Text>
              )}
          </View>

          {/* TERMS */}
          <View className="flex-row items-start mt-5">
            <Checkbox
              value={acceptTerms}
              onValueChange={setAcceptTerms}
              color={
                acceptTerms
                  ? "#ffffff"
                  : undefined
              }
            />

            <Text className="text-white/80 ml-3 flex-1 leading-5">
              Acepto los términos y condiciones
              y la política de privacidad
            </Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            disabled={
              !isFormValid || isLoading
            }
            onPress={handleSignup}
            className={`h-14 rounded-full items-center justify-center mt-8 ${
              isFormValid && !isLoading
                ? "bg-white"
                : "bg-white/20"
            }`}
          >
            {isLoading ? (
              <ActivityIndicator color="#7C3AED" />
            ) : (
              <Text
                className={`font-semibold text-lg ${
                  isFormValid
                    ? "text-purple-600"
                    : "text-white/50"
                }`}
              >
                Crear cuenta
              </Text>
            )}
          </TouchableOpacity>

          {/* DIVIDER */}
          <View className="flex-row items-center my-8">
            <View className="flex-1 h-[1px] bg-white/20" />

            <Text className="mx-4 text-white/70">
              o regístrate con
            </Text>

            <View className="flex-1 h-[1px] bg-white/20" />
          </View>

          {/* GOOGLE */}
          <TouchableOpacity className="bg-white/20 h-14 rounded-2xl items-center justify-center mb-3">
            <Text className="text-white font-medium">
              Continuar con Google
            </Text>
          </TouchableOpacity>

          {/* FACEBOOK */}
          <TouchableOpacity className="bg-white/20 h-14 rounded-2xl items-center justify-center">
            <Text className="text-white font-medium">
              Continuar con Facebook
            </Text>
          </TouchableOpacity>

          {/* LOGIN */}
          <View className="flex-row justify-center mt-10">
            <Text className="text-white/80">
              ¿Ya tienes cuenta?
            </Text>

            <Pressable
              onPress={() =>
                router.push(
                  "/(auth)/login"
                )
              }
            >
              <Text className="text-white font-semibold ml-2 underline">
                Inicia sesión
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}