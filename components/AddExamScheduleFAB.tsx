import { router } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddExamScheduleFAB = () => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => router.push("/schedule/new/")}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AddExamScheduleFAB;
