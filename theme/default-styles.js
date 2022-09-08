import { Platform } from "react-native";
import { ThemeColors } from "./index";

const defaultStyles = {
  colors: ThemeColors,
  text: {
    // fontSize: 18,
    fontFamily: Platform.OS === "android" ? "GoogleSans-Regular" : "GoogleSans-Regular",
    // color: ThemeColors.dark,
  },
  padding: 20,
  paddingTop: 15,
  headerIconSize: 4,
};

export default defaultStyles;
