import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' src={require("../images/forest.jpg")} />
            <ImageDetail title='Beach' src={require("../images/beach.jpg")} />
            <ImageDetail
                title='Mountain'
                src={require("../images/mountain.jpg")}
            />
        </View>
    );
};
const style = StyleSheet.create({});

export default ImageScreen;
