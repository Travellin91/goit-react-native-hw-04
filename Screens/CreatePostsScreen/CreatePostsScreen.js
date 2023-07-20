import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./CreatePostsScreen.styles.js";

const initialState = {
  image: "",
  name: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const imageHandler = () =>
    setState((prevState) => ({ ...prevState, image: "path" }));
  const nameHandler = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const locationdHandler = (value) =>
    setState((prevState) => ({ ...prevState, location: value }));
  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    navigation.navigate("PostsScreen");
  };
  const handleDel = () => setState(initialState);
  const { name, location } = state;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.imageBox}>
          <TouchableOpacity
            style={styles.cameraButton}
            activeOpacity={0.8}
            onPress={imageHandler}
          >
            <Feather name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Upload a photo</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={nameHandler}
            placeholder="Name..."
            autoCapitalize="none"
          />
          <View style={styles.locationField}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            <TextInput
              style={{ ...styles.input, ...styles.locationInput }}
              onChangeText={locationdHandler}
              placeholder="Location..."
              autoCapitalize="none"
              value={location}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.btnTrashBox}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnTrash}
            onPress={handleDel}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;