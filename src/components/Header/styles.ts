import styled from "styled-components/native";

const HeaderContainer = styled.View`
  flex-direction: row;
  height: 80px;
  margin: 32px 20px 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const NotificationContainer = styled.View`
  position: relative;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const NotificationBadge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: blue;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

export { HeaderContainer, NotificationContainer, NotificationBadge, BadgeText };
