import {
  TeamSearchContainer,
  TeamSearchInputText,
  TeamSearchInputViewText,
  TeamTitle,
} from "./styles";
import SearchIcon from "../../../assets/svg/search";
import { useTheme } from "styled-components/native";

interface TeamSearchInputProps {
  onChangedInput: (text: string) => void;
}

export function TeamSearchComponent({ onChangedInput }: TeamSearchInputProps) {
  const { COLORS } = useTheme();

  return (
    <TeamSearchContainer>
      <TeamTitle>Funcionários</TeamTitle>
      <TeamSearchInputViewText>
        <SearchIcon />
        <TeamSearchInputText
          onChangeText={onChangedInput}
          placeholder="Pesquisar"
          placeholderTextColor={COLORS.BLACK_NEUTRAL}
        />
      </TeamSearchInputViewText>
    </TeamSearchContainer>
  );
}
