import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { hp, wp } from "../../../utils/dimensions"
import { colors } from "../../common/colors"

function PrivacySvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={wp(25)}
      height={hp(25)}
      viewBox="0 0 25 25"
      {...props}
    >
      <Path data-name="Rectangle 2466" fill="none" d="M0 0H24V24H0z" />
      <Path
        data-name="Path 3986"
        d="M12 3.19l7 3.11V11a10.473 10.473 0 01-7 9.93A10.473 10.473 0 015 11V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2zm0 4h2v6h-2z"
        fill={colors.violet}
      />
    </Svg>
  )
}

export default PrivacySvgComponent
