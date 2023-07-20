import React, { useState } from "react";
import Container from "../../components/Container/Container";
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
import styles from "./LoginScreen.styles.js";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [state, setstate] = useState(initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const chengHidePassword = () => setHidePassword(!hidePassword);
  const chengIsShowKeyboard = () => setIsShowKeyboard(true);
  const emailHandler = (value) =>
    setstate((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setstate((prevState) => ({ ...prevState, password: value }));
  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
    console.log(state);
    setstate(initialState);
    navigation.navigate("Home");
  };

  const keyboardHide = () => {
    setHidePassword(true);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const { email, password } = state;
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      {/* Використовуємо ScrollView з flex: 1, щоб форма займала весь доступний простір */}
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={emailHandler}
                onFocus={chengIsShowKeyboard}
                placeholder="E-mail address"
              />
              <View style={styles.passwordField}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={hidePassword}
                  value={password}
                  onChangeText={passwordHandler}
                  onFocus={chengIsShowKeyboard}
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
              <Text style={styles.btnTitle}>Sign In</Text>
            </TouchableOpacity>
            <Text
              style={{ ...styles.limk, marginBottom: isShowKeyboard ? 0 : 144 }}
              onPress={() => navigation.navigate("Registration")}
            >
              Don't have an account? Sign Up
            </Text>
          </View>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
