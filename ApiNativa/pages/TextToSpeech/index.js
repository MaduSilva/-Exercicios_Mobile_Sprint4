import React, { useState } from 'react';
import { Text, View, StyleSheet, Button , StatusBar , TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        borderRadius: 6
    },
})

export default function TextToSpeech() {
    const [text , setText] = useState('');

    const speak = () =>{
        Speech.speak(text);
    }

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={ t => setText(t)} style={styles.input}/>
          <Button title="Pressione para falar" onPress={() => speak()} />
          <Text>Digite seu texto para falar</Text>
        </View>
        );
}


