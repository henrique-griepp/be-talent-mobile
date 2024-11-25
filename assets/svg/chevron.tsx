import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChevronComponent(props: any) {
  return (
    <Svg
      width={20}
      height={11}
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 1l8.5 9 8.5-9"
        stroke="#0500FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronComponent;
