import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PerguntasFrequentes = ({navigation}) => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // perguntas e respostas
  const questions = [
    
    {
      question: "O que é a Luna?",
      answer: `A Luna é o chatbot do CAT no SESI Santo André. Ela foi desenvolvida para complementar e facilitar a interação dos usuários com o sistema do CAT, automatizando parte do atendimento. A Luna oferece suporte rápido e eficiente, ajudando tanto clientes quanto funcionários, e está disponível 24/7 para responder a dúvidas.`
    },
    {
      question: "Quanto custa para utilizar a Luna?",
      answer: `A Luna é totalmente gratuita e acessível para todos os usuários, tornando-a uma ferramenta extremamente útil para quem busca suporte rápido e eficiente.`
    },
    {
      question: "Como faço a carteirinha?",
      answer: "Leve no CAT SESI Santo André os documentos originais: \n \n RG; \n Comprovante de residência; \n CPF; \n Carteira de trabalho;\n Foto 3x4 colorida;\n Certidão de casamento;\n Atestado médico clínico (comprovando que pode praticar atividade física); \n Atestado médico dermatológico para utilização das piscinas.;"
    },
    {
      question: "Qual horário a secretaria está aberta?",
      answer: "Terça a sexta: 8h às 11h30 e das 14h às 19h \n \n Sábado : 8h30 às 13h (senhas distribuídas até as 11h) \n \n Feriados: 8h às 12h (senhas distribuídas até as 11h) e das 13h30 (senhas distribuídas até as 14h) às 15h - sujeito a alteração.",
    },
    {
      question: "Quais são os horários da academia?",
      answer: `De segunda a sexta, exceto feriado \n \n Manhã: 6h10 às 12h \n \n Tarde: 15h às 21h \n \n Sábado, exceto feriado \n \n 8h às 13h \n \n Domingos e feriados \n \n Fechada`,
      
    },
    {
      question: "Que horário o CAT está aberto?",
      answer:  `Pista de Caminhada, Quadra coberta e Campo de Futebol Segunda a sexta, das 7h às 21h. Sábado, das 8h às 17h Domingo e Feriado, 8h30 às 16h30. `,
    },
    {
      question: "Como funciona o SESI Esportes?",
      answer: "O horário de atendimento é de segunda a sexta, das 9h às 17h.",
    },
    {
      question: "Como funciona o sistema do Sesi?",
      answer: "O horário de atendimento é de segunda a sexta, das 9h às 17h.",
    },
    {
      question: "Quais são os planos?",
      answer: `Básico: Acesso às piscinas, quadras, campos, playgrounds e áreas livres. \n \n Modalidades: Esse plano é para você que quer praticar uma modalidade especial disponível no CAT, além de poder usar os benefícios do plano básico. Vagas limitadas para contratação. \n \n Musculação: Nesta opção, você pode utilizar a academia do CAT com musculação, fazer as aulas coletivas de ginástica, além dos benefícios do plano básico. Vagas limitadas para contratação. \n\n Studio: Contempla duas aulas por semana no Pilates Studio, além dos benefícios do plano básico. Vagas limitadas para contratação. \n\n Plus: O plano para quem quer utilizar tudo o que os três planos acima oferecem: piscinas, quadras, campos, playgrounds, áreas livres, academia, aulas coletivas e uma das modalidades especiais oferecidas conforme disponibilidade da unidade. Vagas limitadas para contratação. \n\n Diária Você pode aproveitar toda a estrutura de lazer, pagando a diária para visitantes aos finais de semana, feriados e durante as férias escolares. O valor do Day Use é de R$ 45,00. A compra deverá ser feita antecipadamente na Secretaria da unidade, consulte o horário de atendimento. Para utilizar a piscina, é necessário apresentar o atestado dermatológico.`,
    },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  return (
    <ScrollView>   
    <View style={styles.container}>
    <Text style={styles.titulo}>Perguntas frequentes</Text>

    
      
      {questions.map((item, index) => (
        <View key={index}>
          {/* Dropdown Header */}
          <TouchableOpacity style={styles.dropdown} onPress={() => toggleDropdown(index)}>
            <Text style={styles.dropdownText}>{item.question}</Text>
            <Icon name={openIndex === index ? "keyboard-arrow-up" : "keyboard-arrow-right"} size={24} color="black" style={styles.iconRight} />
          </TouchableOpacity>

          {/* Dropdown Content */}
          {openIndex === index && (
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownContentText}>{item.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButtonText: {
  fontSize: 40,

  },
  titulo: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: '20%',
    height: '100%',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 15, // Adiciona espaçamento entre os dropdowns
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    fontSize: 15,
    
    
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  dropdownContent: {
    width: '100px',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15, // Espaço extra após a resposta
    padding: 20,
    
  },
  dropdownContentText: {
    color: '#000',
    fontSize: 15,
  },
});

export default PerguntasFrequentes;
