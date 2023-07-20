import { View, ImageBackground, Dimensions } from "react-native";
import styles from "./Container.styles.js";

const Container = ({ children }) => {
  const { height, width } = Dimensions.get("window");

  return (
    <ImageBackground
      style={{ ...styles.image, width: width, height: height }}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.box}>{children}</View>
      </View>
    </ImageBackground>
  );
};

export default Container;