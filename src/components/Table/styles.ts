import { TextProps, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ChevronComponent from "../../../assets/svg/chevron";

export interface ListProps extends TextProps {
  fontSize?: string;
  fontWeight?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  paddingLeft?: string;
  display?: boolean;
}

const TableContainer = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

const TableHeaderContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.BLUE_10};
  padding-left: 14px;
  padding-right: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_10_NEUTRAL};
  height: 48px;
  margin-top: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
`;

const TableHeaderText = styled.Text`
  flex-grow: 0.02;
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H2.FONT_SIZE};
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.H2.FONT_WEIGHT};
  padding-right: 24px;
`;

const TableListContainer = styled.View`
  border-width: 1px;
  border-top-width: 0px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_10_NEUTRAL};
  padding-left: 14px;
  padding-right: 14px;
`;

const TableListNames = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE_NEUTRAL};
  height: 60px;
  align-items: center;
`;

const TableListDataContainer = styled.View<ListProps>`
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  padding-bottom: 16px;
  display: ${({ display }) => (display ? "flex" : "none")};
`;

const TableListDataText = styled.Text<ListProps>`
  width: 50%;
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_SIZE};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.TYPOGRAPHY.H3.FONT_WEIGHT};
  text-align: ${({ textAlign }) => textAlign || "left"};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_10_NEUTRAL};
  border-style: dashed;
  margin-bottom: 8px;
  display: ${({ display }) => (display ? "none" : "flex")};
`;

const TableListText = styled.Text<ListProps>`
  font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT_FAMILY};
  color: ${({ theme }) => theme.COLORS.BLACK_NEUTRAL};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_SIZE};
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.H3.FONT_WEIGHT};
  padding-left: ${({ paddingLeft }) => paddingLeft || "16px"};
`;

const TableViewIcon = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const StyledChevron = styled(ChevronComponent)`
  transform: ${({ isRotating }) =>
    isRotating ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.5s;
`;

export {
  TableContainer,
  TableHeaderContainer,
  TableHeaderText,
  TableListContainer,
  TableListNames,
  TableListText,
  TableViewIcon,
  TableListDataContainer,
  TableListDataText,
  StyledChevron,
};
