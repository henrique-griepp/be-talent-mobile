import styled from "styled-components/native";
import { Text } from "react-native";

const TeamSearchContainer = styled.View`
  width: auto;
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
`;

const TeamTitle = styled(Text)`
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H1.FONT_SIZE};
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.H1.FONT_WEIGHT};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
`;

const TeamSearchInputViewText = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_05_NEUTRAL};
  margin-top: 15px;
  height: 48px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10_NEUTRAL};
`;

const TeamSearchInputText = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_SIZE};
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_WEIGHT};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
  padding-right: 20px;
`;

export {
  TeamTitle,
  TeamSearchContainer,
  TeamSearchInputViewText,
  TeamSearchInputText,
};
