import { HeaderContainer } from "./styles";
import { AvatarComponent } from "../Avatar";
import BellNotificationComponent from "../../../assets/svg/bell-notification 1";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <AvatarComponent size={45} />
        <BellNotificationComponent />
      </HeaderContainer>
    </>
  );
}
