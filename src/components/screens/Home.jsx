import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import React from "react";

import Fontawesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";
import Ionic from "react-native-vector-icons/Ionicons";

const postInfo = [
  {
    id: 1,
    postTitle: "mr shermon",
    postPersonImage: require("../../storage/images/userProfile.png"),
    postImage: require("../../storage/images/post1.jpg"),
    likes: 765,
    isLiked: false,
  },
  {
    id: 2,
    postTitle: "chillhouse",
    postPersonImage: require("../../storage/images/profile5.jpg"),
    postImage: require("../../storage/images/post2.jpg"),
    likes: 345,
    isLiked: false,
  },
  {
    id: 3,
    postTitle: "Tom",
    postPersonImage: require("../../storage/images/profile4.jpg"),
    postImage: require("../../storage/images/post3.jpg"),
    likes: 734,
    isLiked: false,
  },
  {
    id: 4,
    postTitle: "The_Groot",
    postPersonImage: require("../../storage/images/profile3.jpg"),
    postImage: require("../../storage/images/post4.jpg"),
    likes: 875,
    isLiked: false,
  },
];

export default function Home() {
  const [loaded] = useFonts({
    Montserrat: require("../../../assets/fonts/Lobster-Regular.ttf"),
  });
  if (!loaded) return null;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.wrapper}>
        <Fontawesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text style={styles.text}>Instagram</Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>
      <ScrollView>
        <Stories />
        {postInfo.map((item) => (
          <Post key={item.id} post={item} />
        ))}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic name="ios-reload-circle-sharp" style={{fontSize : 60, opacity : 0.2}} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: 25,
    fontWeight: "500",
  },
});
