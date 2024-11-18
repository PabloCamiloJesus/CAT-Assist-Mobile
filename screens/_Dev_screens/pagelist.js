import React from 'react'
import { StyleSheet, ScrollView, View, Button } from 'react-native'
import Loading from '../loading/loading'

const PageList = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container2}>
            <Button
                title="Abrir tela de Splash"
                style={styles.button}
                onPress={() => navigation.navigate("Splash")}
            />
            <Button
                title="Abrir tela de Recepcao"
                style={styles.button}
                onPress={() => navigation.navigate("Recepcao")}
            />
            <Button
                title="Abrir tela de Redefinição de senha"
                style={styles.button}
                onPress={() => navigation.navigate("Redefinicao")}
            />
            <Button
                title="Abrir tela de SobreNos"
                style={styles.button}
                onPress={() => navigation.navigate("Sobrenos")}
            />
            <Button
                title="Abrir tela de Cadastro"
                style={styles.button}
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Abrir tela de recuperar senha"
                style={styles.button}
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="Abrir tela de login"
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Abrir tela de avaliacao"
                style={styles.button}
                onPress={() => navigation.navigate("Avalicao_tela")}
            />
            <Button
                title="Abrir tela de perfil"
                style={styles.button}
                onPress={() => navigation.navigate("ProfileScreen")}
            />
            <Button
                title="Abrir tela de Perguntas Frequentes"
                style={styles.button}
                onPress={() => navigation.navigate("FAQScreen")}
            />
            <Button
                title="Abrir tela de Chat"
                style={styles.button}
                onPress={() => navigation.navigate("ChatScreen")}
            />
            <Button
                title="Abrir tela de Chatbot"
                style={styles.button}
                onPress={() => navigation.navigate("ChatbotScreen")}
            />
            <Button
                title="Abrir tela de carregando"
                style={styles.button}
                onPress={() => navigation.navigate("Loading")}
            />
            </View>
        </ScrollView>
    )
}

export default PageList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        paddingTop: 50,
    },
    container2: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        paddingBottom: 100
    },
    button: {
        backgroundColor: "#fff",
        color: "#000"
    }
})