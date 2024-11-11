import { View, Text } from "react-native";
import React from "react";
import { Appbar, TextInput } from "react-native-paper";
import { router } from "expo-router";

const index = () => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction
          onPress={() => {
            router.back();
          }}
        />
        <Appbar.Content title="Create schedule" />
        <Appbar.Action icon="send" onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{ flex: 1, backgroundColor: "#fff", padding: 24, rowGap: 16 }}
      >
        <TextInput label="Name" style={{ backgroundColor: "transparent" }} />
        <TextInput label="Email" style={{ backgroundColor: "transparent" }} />
        <TextInput
          label="Schedule"
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    </>
  );
};

export default index;
