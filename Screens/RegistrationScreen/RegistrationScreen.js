import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import {
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import styles from "./RegistrationScreen.styles.js";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const Registr = ({ navigation }) => {
  const [state, setstate] = useState(initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const chengHidePassword = () => setHidePassword(!hidePassword);
  const loginHandler = (value) =>
    setstate((prevState) => ({ ...prevState, login: value }));
  const emailHandler = (value) =>
    setstate((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setstate((prevState) => ({ ...prevState, password: value }));
  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    console.log(state);
    setstate(initialState);
    navigation.navigate("Home");
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
  };
  const { login, email, password } = state;
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ScrollView
        contentContainerStyle={styles.keyboard}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Avatar />
          <View style={styles.form}>
            <Text style={styles.formTitle}>Registration</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                value={login}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={loginHandler}
                placeholder="Login"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                value={email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={emailHandler}
                placeholder="E-mail address"
                inputMode="email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.passwordField}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={hidePassword}
                  value={password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                />
                <TouchableOpacity
                  style={styles.showBtn}
                  onPress={chengHidePassword}
                >
                  <Text style={styles.showBtnTitle}>Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.btnTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ ...styles.limk, marginBottom: isShowKeyboard ? 0 : 78 }}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Sign In
          </Text>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Registr;
