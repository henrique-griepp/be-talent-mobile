import {
  TeamSearchContainer,
  TeamSearchInputText,
  TeamSearchInputViewText,
  TeamTitle,
} from "./styles";
import SearchIcon from "../../../assets/svg/search";
import { useTheme } from "styled-components/native";

export function TeamSearchComponent() {
  const { COLORS } = useTheme();

  return (
    <TeamSearchContainer>
      <TeamTitle>Funcionários</TeamTitle>
      <TeamSearchInputViewText>
        <SearchIcon />
        <TeamSearchInputText
          placeholder="Pesquisar"
          placeholderTextColor={COLORS.BLACK_NEUTRAL}
        />
      </TeamSearchInputViewText>
    </TeamSearchContainer>
  );
}
