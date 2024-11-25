import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function CircleComponent(props: any) {
  return (
    <Svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={4.5} cy={4.5} r={4} fill="#1C1C1C" />
    </Svg>
  );
}

export default CircleComponent;
