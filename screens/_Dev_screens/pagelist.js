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
            <Button
                title="Go to Redifinição"
                onPress={() => navigation.navigate("Redefinicao")}
            />

            <Button
                title="Go to SobreNos"
                onPress={() => navigation.navigate("Sobrenos")}
            />
            <Button
                title="Go to Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Go to recuperar senha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="Go to login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Go to avaliacao"
                onPress={() => navigation.navigate("Avalicao_tela")}
            />
            <Button
                title="Tela de profile"
                onPress={() => navigation.navigate("ProfileScreen")}
            />
            <Button
                title="go to PerguntasFrequentes"
                onPress={() => navigation.navigate("PerguntasFrequentes")}
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