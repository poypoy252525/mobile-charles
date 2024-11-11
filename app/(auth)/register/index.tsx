import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import Logo from "@/assets/images/CDM Logo.png";

const index = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 16 }}
    >
      <ScrollView>
        <View style={{ alignItems: "center", rowGap: 8 }}>
          <Image source={Logo} style={{ width: 100, height: 100 }} />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Register</Text>
        </View>
        <View style={{ padding: 24, rowGap: 12 }}>
          <TextInput label="Full name" mode="outlined" />
          <TextInput label="Age" mode="outlined" />
          <TextInput label="Phone Number" mode="outlined" />
          <TextInput label="Previous School" mode="outlined" />
          <TextInput label="Strand" mode="outlined" />
          <TextInput label="Preferred Course" mode="outlined" />
          <TextInput label="Email" mode="outlined" />
          <TextInput label="Password" mode="outlined" />
          <TextInput label="Confirm password" mode="outlined" />
          <Button mode="contained" onPress={() => {}}>
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
