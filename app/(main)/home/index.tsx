import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import ScheduleIllustration from "@/assets/images/schedule.png";
import { Button } from "react-native-paper";
import { router } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        rowGap: 24,
      }}
    >
      <Image
        source={ScheduleIllustration}
        style={{ width: "100%", height: 200 }}
      />
      <Button
        mode="text"
        style={{ width: "80%" }}
        onPress={() => {
          router.push(`/schedule/new`);
        }}
      >
        Create
      </Button>
    </View>
  );
};

export default index;
