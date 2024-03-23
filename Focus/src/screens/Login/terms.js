import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Terms() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <ScrollView scrollEnabled = {true} nestedScrollEnabled={true}>
      <SafeAreaView>

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImgTerms}/>

    
      <View style={styles.termsContent}>

        <Text style={styles.titleTerms}>Política de Privacidade</Text>

        <Text style={styles.textTerms}>Este aplicativo é mantido e operado por AUTH.</Text>
        <Text style={styles.textTerms}>Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso aplicativo. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</Text>

        <Text style={styles.textTerms}>
          Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:</Text>
        <Text style={styles.textTerms}>•  Quem deve utilizar nosso aplicativo;</Text>
        <Text style={styles.textTerms}>• Quais dados coletamos e o que fazemos com eles;</Text>
        <Text style={styles.textTerms}>• Seus direitos em relação aos seus dados pessoais; e</Text>
        <Text style={styles.textTerms}>• Como entrar em contato conosco.</Text>

        <Text style={styles.subtitleTerms}>1. Quem pode utilizar nosso aplicativo?</Text>
        <Text style={styles.textTerms}>Nosso aplicativo somente deve ser utilizado por pessoas que tenham, pelo menos, 8 (oito) anos de idade, sendo que a utilização por pessoa com menos de 18 (dezoito) anos somente será possível mediante o consentimento de pelo menos um de seus pais ou responsável.</Text>

        <Text style={styles.subtitleTerms}>2. Dados que coletamos e seus motivos</Text>
        <Text style={styles.textTerms}>• Informações de Conta: Coletamos informações de conta, como nome de usuário, endereço de e-mail e senha, para criar e gerenciar contas de usuário.</Text>
        <Text style={styles.textTerms}>• Informações de Perfil: Podemos coletar informações de perfil, como nome, foto de perfil e informações pessoais adicionais que você escolher fornecer, para personalizar sua experiência no aplicativo.</Text>
        <Text style={styles.textTerms}>• Dados de Uso: Coletamos informações sobre como você interage com o aplicativo, como suas ações, preferências e histórico de uso, para melhorar nossos serviços e personalizar a experiência do usuário.</Text>

        <Text style={styles.subtitleTerms}>3. Como usamos seus dados?</Text>
        <Text style={styles.textTerms}>Utilizamos os dados pessoais coletados para os seguintes fins:</Text>

        <Text style={styles.textTerms}>• Criar e gerenciar contas de usuário.</Text>
        <Text style={styles.textTerms}>• Personalizar a experiência do usuário.</Text>
        <Text style={styles.textTerms}>• Melhorar nossos serviços.</Text>
        <Text style={styles.textTerms}>• Facilitar a comunicação entre nós e o usuário</Text>
        <Text style={styles.textTerms}>• Cumprir obrigações legais e regulatórias.</Text>

        <Text style={styles.subtitleTerms}>4. Seus direitos</Text>
        <Text style={styles.textTerms}>Você tem o direito de acessar, corrigir e excluir seus dados pessoais. Você também pode optar por sair ou limitar o uso de determinados dados.</Text>

        <Text style={styles.subtitleTerms}>5. Atualizações</Text>
        <Text style={styles.textTerms}>A presente versão desta Política de Privacidade foi atualizada pela última vez em: 18/10/2023.
          Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adaptá-las às eventuais alterações feitas em nosso aplicativo, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.
          Sempre que houver uma modificação, nossos usuários serão notificados acerca da mudança.</Text>

        <Text style={styles.subtitleTerms}>5. Contato</Text>
        <Text style={styles.textTerms}>Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos entre em contato com nosso Encarregado de Proteção de Dados Pessoais, pelo canal mencionados abaixo.</Text>
        <Text style={styles.textTerms }>E-mail: empresaauth@gmail.com</Text>

        <TouchableOpacity style = {styles.buttonTerms} onPress={() => navigation.goBack()}>
          <Text style = {styles.textButton}>Voltar</Text>
        </TouchableOpacity>

      </View>

      <Image source={require('../../images/loadingScreen/logoAuth.png')} style = {styles.logoAuth}/>
      </SafeAreaView>
    </ScrollView>
    </View>

  );

}
