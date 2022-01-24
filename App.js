import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import React from "react";
import { SafeAreaView } from 'react-native-web';

export default function App() {

  const [number, setNumber] = React.useState('');
  const [result, setResult] = React.useState('');
  const [random, setRandom] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [guesses, setGuesses] = React.useState(0);

  const checkGuess = () => {

    const totalGuesses = guesses + 1;
    setGuesses(totalGuesses);

    if (number == random) {
      Alert.alert("You guessed the correct number! It took " + totalGuesses + " guesses")
    } else if (number > random) {
      setResult('Your guess ' + number + ' is too high');
    } else {
      setResult('Your guess ' + number + ' is too low');
    } 
  }

  return (

    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      
      <TextInput
          style={styles.input}
          onChangeText={number => setNumber(number)}
          value={number}
          placeholder="Type your guess here"
          keyboardType="numeric"
        />
        <Text>{result}</Text>
      <View style={{ flexDirection: "row" }}>
      <Button
        title="Make a guess"
        color="#2196F3"
        onPress={checkGuess}
      />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
