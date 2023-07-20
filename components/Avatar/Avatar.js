import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import styles from "./Avatar.styles.js";

const Avatar = () => {
  return (
    <View style={styles.add}>
      <TouchableOpacity style={styles.addBtn}>
        <Feather name="plus" size={13} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;