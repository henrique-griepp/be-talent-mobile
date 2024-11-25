import styled from "styled-components/native";

const AvatarContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_05_NEUTRAL};
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_SIZE};
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_WEIGHT};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
`;
export { AvatarContainer, AvatarText };
