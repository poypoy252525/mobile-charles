import * as React from "react";
import { Appbar } from "react-native-paper";
import { Text } from "react-native";
import { Stack } from "expo-router";

const MyComponent = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" />
    <Stack.Screen
      name="schedule/new/index"
      options={{
        presentation: "transparentModal",
        animation: "ios",
      }}
    />
  </Stack>
);

export default MyComponent;
