import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BellNotificationComponent(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_7304_628)"
        stroke="#1C1C1C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M23.333 23.145a2.534 2.534 0 002.534-2.525 2.673 2.673 0 00-.788-1.892l-1.679-1.68v-4.99A7.39 7.39 0 0016 4.666a7.392 7.392 0 00-7.388 7.39v4.987l-1.679 1.68a2.675 2.675 0 00-.789 1.892 2.533 2.533 0 002.533 2.525l14.656.004zM14.028 27.333h3.943" />
      </G>
      <Defs>
        <ClipPath id="clip0_7304_628">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BellNotificationComponent;
