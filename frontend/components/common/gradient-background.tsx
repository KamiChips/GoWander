import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children: ReactNode;
}

export function GradientBackground({
  children,
}: Props) {
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
      {children}
    </LinearGradient>
  );
}