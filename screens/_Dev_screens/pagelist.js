import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const PageList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Abrir tela de Splash"
                onPress={() => navigation.navigate("Splash")}
            />
            <Button
                title="Abrir tela de Recepcao"
                onPress={() => navigation.navigate("Recepcao")}
            />
            <Button
                title="Abrir tela de Redefinição de senha"
                onPress={() => navigation.navigate("Redefinicao")}
            />
            <Button
                title="Abrir tela de SobreNos"
                onPress={() => navigation.navigate("Sobrenos")}
            />
            <Button
                title="Abrir tela de Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Abrir tela de recuperar senha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="Abrir tela de login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Abrir tela de avaliacao"
                onPress={() => navigation.navigate("Avalicao_tela")}
            />
            <Button
                title="Abrir tela de perfil"
                onPress={() => navigation.navigate("ProfileScreen")}
            />
            <Button
                title="Abrir tela de Perguntas Frequentes"
                onPress={() => navigation.navigate("FAQScreen")}
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