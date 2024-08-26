import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const PageList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Splash"
                onPress={() => navigation.navigate("Splash")}
            />
            <Button
                title="Go to Recepcao"
                onPress={() => navigation.navigate("Recepcao")}
            />
        </View>
    )
}

export default PageList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        opacity: 0.6,
    },
})