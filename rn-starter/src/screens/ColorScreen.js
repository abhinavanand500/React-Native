import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const ColorScreen = () => {
    const [color, setColor] = useState([]);
    return (
        <View>
            <Button title='Add a color' />
            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: randomRGB(),
                }}
            />
        </View>
    );
};
const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
    aa: {
        textAlign: "center",
    },
});
export default ColorScreen;