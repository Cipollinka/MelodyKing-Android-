import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import App from '../App';

const OnBoard = ({ navigation }) => {

    const [isClick, setClick] = React.useState(false);

    if (isClick) return <App />

  return (
    <View style={styles.container}>
        <Image style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}} source={require('./src/Slice3.jpeg')}/>
        <View style={{position: 'absolute', bottom: 10, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFFa1', marginHorizontal: 10, borderRadius: 20}}>
        <Text style={styles.title}>Welcome to Сrazy Time AdmiralsHistoryQuiz!</Text>
        <Text style={styles.description}>
          Learn more about famous admirals and their history. Ready to test your knowledge?
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => setClick(true)}
        >
            <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1a3a6b',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#3a4a6b',
  },
  button: {
    backgroundColor: '#1a3a6b',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnBoard;