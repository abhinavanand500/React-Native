import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
    const friends = [
        { name: "Abhinav", key: "1" },
        { name: "Kshitij", key: "2" },
        { name: "Sumit", key: "3" },
        { name: "Saurav", key: "4" },
        { name: "Yashashwee", key: "5" },
    ];
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text key={item.key} style={styles.textStyle}>
                        {item.name}
                    </Text>
                );
            }}
        />
    );
    // return (
    //     <Text>
    //         List Screens
    //     </Text>
    // )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 40,
    },
});

export default ListScreen;
