import React from "react";
import { useLinkTo } from "@react-navigation/native";
import { View, Text } from "react-native";
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import styles from "./ProfileScreen.styles.js";
import HeaderButton from "../../components/Button/Button";

const ProfileScreen = () => {
  const linkTo = useLinkTo();
  return (
    <Container>
      <Avatar />
      <View style={styles.logOut}>
        <HeaderButton name={"log-out"} onPress={() => linkTo("/Login")} />
      </View>
      <Text style={styles.profileTitle}>Yevhenii Malinovkyi</Text>
    </Container>
  );
};

export default ProfileScreen;