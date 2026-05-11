import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react-native";

import Animated, {
  FadeInUp,
} from "react-native-reanimated";

interface Props {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  isFormValid: boolean;

  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;

  onTogglePassword: () => void;
  onSubmit: () => void;
}

export default function LoginForm({
  email,
  password,
  showPassword,
  isLoading,
  isFormValid,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
}: Props) {
  return (
    <Animated.View
      entering={FadeInUp.delay(300)}
      className="px-6"
    >
      {/* EMAIL */}
      <View className="mb-4">
        <Text className="text-white/90 mb-2 ml-1">
          Correo electrónico
        </Text>

        <View className="h-14 rounded-2xl bg-white/20 flex-row items-center px-4">
          <Mail
            size={20}
            color="rgba(255,255,255,0.7)"
          />

          <TextInput
            value={email}
            onChangeText={onEmailChange}
            placeholder="tu@email.com"
            placeholderTextColor="rgba(255,255,255,0.5)"
            keyboardType="email-address"
            autoCapitalize="none"
            className="flex-1 ml-3 text-white"
          />
        </View>
      </View>

      {/* PASSWORD */}
      <View className="mb-2">
        <Text className="text-white/90 mb-2 ml-1">
          Contraseña
        </Text>

        <View className="h-14 rounded-2xl bg-white/20 flex-row items-center px-4">
          <Lock
            size={20}
            color="rgba(255,255,255,0.7)"
          />

          <TextInput
            value={password}
            onChangeText={onPasswordChange}
            placeholder="••••••••"
            placeholderTextColor="rgba(255,255,255,0.5)"
            secureTextEntry={!showPassword}
            className="flex-1 ml-3 text-white"
          />

          <TouchableOpacity
            onPress={onTogglePassword}
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

      {/* FORGOT */}
      <View className="items-end mt-3">
        <TouchableOpacity>
          <Text className="text-white/80 underline">
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        disabled={
          !isFormValid || isLoading
        }
        onPress={onSubmit}
        className={`h-14 rounded-full items-center justify-center mt-8 ${
          isFormValid && !isLoading
            ? "bg-white"
            : "bg-white/20"
        }`}
      >
        {isLoading ? (
          <ActivityIndicator color="#26459F" />
        ) : (
          <Text
            className={`text-lg font-semibold ${
              isFormValid
                ? "text-[#26459F]"
                : "text-white/50"
            }`}
          >
            Iniciar sesión
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}