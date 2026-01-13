import { Image, Pressable, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#f4f",
      }}
    >
      <Text style={{ fontSize: 50, fontWeight: "bold" , color: "#c1e758", textAlign: "center"}}>Hello David</Text>

      <Image source={require("../assets/images/dave.jpg")} style={{ width: 200, height: 200, alignSelf: "center" }} />
      <TextInput
        placeholder="Type here..."
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          margin: 20,
          paddingLeft: 10,
          backgroundColor: "#fff",
        }}
      />

      <Pressable
        onPress={() => alert("Button Pressed!")}
        style={{
          backgroundColor: "#4CAF50",
          padding: 10,
          margin: 20,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Press Me</Text>
      </Pressable>

      <TouchableOpacity
        onPress={() => alert("TouchableOpacity Pressed!")}
        style={{
          backgroundColor: "#2196F3",
          padding: 10,
          margin: 20,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Touch Me</Text>
      </TouchableOpacity>




    </SafeAreaView>
  );
}
