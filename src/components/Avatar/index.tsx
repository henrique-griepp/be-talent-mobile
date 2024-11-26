import { AvatarContainer, AvatarText } from "./styles";
import { Image } from "expo-image";

interface AvatarInterface {
  size: number;
  flexGrow?: number;
  source?: string;
}
export function AvatarComponent({ size, source }: AvatarInterface) {
  return (
    <AvatarContainer style={{ width: size, height: size }}>
      {source?.trim() === "" || source === undefined ? (
        <AvatarText>CG</AvatarText>
      ) : (
        <Image
          source={source}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      )}
    </AvatarContainer>
  );
}
