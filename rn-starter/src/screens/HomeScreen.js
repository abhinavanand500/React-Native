import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hi Abhinav</Text>
            <Button
                title='Go to Components Demo'
                onPress={() => {
                    navigation.navigate("Components");
                }}
            />
            <Button
                title='Go to ListScreen'
                onPress={() => {
                    navigation.navigate("List");
                }}
            />
            <Button
                title='Go to ImageScreen'
                onPress={() => {
                    navigation.navigate("ImageScreen");
                }}
            />
            <Button
                title='Counter Screen'
                onPress={() => {
                    navigation.navigate("Counter");
                }}
            />
            <Button
                title='Color Screen'
                onPress={() => {
                    navigation.navigate("Color");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
