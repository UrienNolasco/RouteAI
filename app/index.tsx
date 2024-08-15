import {useState} from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, StatusBar, TextInput, Platform, Pressable, ScrollView, ActivityIndicator } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export default function Index() {

  const [city, setCity] = useState("");
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1"/>
      <Text style={styles.heading}>Route AI</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade de Destino</Text>
        <TextInput style={styles.input} placeholder="Ex: Porto Alegre, RS"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}> {days.toFixed()} </Text> dias</Text>

        <Slider
          minimumValue={1}
          maximumValue={31}
          minimumTrackTintColor="#F1A10A"
          maximumTrackTintColor="#000000"
          thumbTintColor="#F1A10A"
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Gerar roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#F1A10A "/>
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom:16 }} style={styles.containerScroll} showsVerticalScrollIndicator={false}>
        {loading &&(
          <View style={styles.content}>
          <Text style={styles.title}>Carregando roteiro...</Text>
          <ActivityIndicator size="large" color="#F1A10A"/>
        </View>             
        )}

        {travel && (
          <View style={styles.content}>
          <Text style={styles.title}>Roteiro da viagem 👇</Text>
          <Text>{travel}</Text>
        </View>        
        )}
      </ScrollView>

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
    margin: 16,
    backgroundColor: '#F1A10A',
    width: '90%',
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8,  
    gap: 10,
    marginBottom: 24
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  content:{
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14
  },
  containerScroll:{
    width: '90%',
  }
});
