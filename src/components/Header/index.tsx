import {
  BadgeText,
  HeaderContainer,
  NotificationBadge,
  NotificationContainer,
} from "./styles";
import { AvatarComponent } from "../Avatar";
import BellNotificationComponent from "../../../assets/svg/bell-notification 1";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <AvatarComponent size={45} />
        <NotificationContainer>
          <BellNotificationComponent />
          <NotificationBadge>
            <BadgeText>2</BadgeText>
          </NotificationBadge>
        </NotificationContainer>
      </HeaderContainer>
    </>
  );
}
