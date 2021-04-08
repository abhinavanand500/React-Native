import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return { ...state, count: state.count + action.payload };
        case "DECREASE":
            return { ...state, count: state.count - action.payload };
        default:
            return { ...state };
    }
};
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    console.log(state);
    return (
        <View>
            <Button
                title='Increase'
                onPress={() => dispatch({ type: "INCREASE", payload: 1 })}
            />

            <Text style={styles.aa}>Current Count : {state.count}</Text>
            <Button
                title='Decrease'
                onPress={() => dispatch({ type: "DECREASE", payload: 1 })}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    aa: {
        textAlign: "center",
    },
});

export default CounterScreen;
