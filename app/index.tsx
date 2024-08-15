import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, StatusBar, TextInput, Platform, Pressable } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1"/>
      <Text style={styles.heading}>Route AI</Text>

      <View style={styles.form}>
        <Text style={styles.label}>
          Cidade de Destino
        </Text>
        <TextInput style={styles.input} placeholder="Digite a cidade de destino"/>
        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}> 10 </Text> dias</Text>

        <Slider
          minimumValue={1}
          maximumValue={31}
          minimumTrackTintColor="#F1A10A"
          maximumTrackTintColor="#000000"
          thumbTintColor="#F1A10A"
        />
      </View>

      <Pressable style={styles.buttom}>
        <Text style={styles.buttomText}>Gerar roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#F1A10A "/>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#F1F1F1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading:{
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? StatusBarHeight : 54,
  },
  form:{
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  input:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94A3B8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16 ,
  },
  days:{
    color: '#F1A10A',
    fontWeight: 'bold',
  },
  button:{

  },
  buttonText:{
    
  },
});
