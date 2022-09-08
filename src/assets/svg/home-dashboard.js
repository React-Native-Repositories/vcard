import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../../utils/dimensions';

function DashboardSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={wp(24)}
      height={hp(24)}
      viewBox="0 0 24 24"
      {...props}>
      <Path data-name="Path 45474" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 45475"
        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default DashboardSvgComponent;
