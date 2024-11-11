import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { Appbar } from "react-native-paper";
import AddExamScheduleFAB from "@/components/AddExamScheduleFAB";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.Content
          title={<Text style={{ fontSize: 16 }}>CDM Exams</Text>}
        />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <AddExamScheduleFAB />
    </View>
  );
};

export default _layout;
