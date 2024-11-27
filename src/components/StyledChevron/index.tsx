import { useEffect, useState } from "react";
import { Animated } from "react-native";
import ChevronComponent from "../../../assets/svg/chevron";

interface StyledChevronProps {
  isRotating?: boolean;
}
export function StyledChevron({ isRotating = false }: StyledChevronProps) {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isRotating ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isRotating, rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <ChevronComponent />
    </Animated.View>
  );
}
