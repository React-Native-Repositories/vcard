import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { hp, wp } from "../../../utils/dimensions"
import { colors } from "../../common/colors"

function TermsSvgComponent(props) {
  return (
    <Svg
      data-name="security-24px (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={wp(25)}
      height={hp(25)}
      viewBox="0 0 25 25"
      {...props}
    >
      <Path data-name="Path 3987" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 3988"
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
        fill={colors.tabMenuActive}
      />
    </Svg>
  )
}

export default TermsSvgComponent
