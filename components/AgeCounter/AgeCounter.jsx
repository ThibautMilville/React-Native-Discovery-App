import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/css/app.style';
import { s } from './AgeCounter.style';
import { useState } from 'react';

export function AgeCounter() {
	const[age, setAge] = useState(30);

	function increaseAge() {
		setAge(age + 1);
		console.log('dans increaseAge : ', age);
	}
	console.log(age);
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={increaseAge}
				style={s.increaseButton}>
				<Text style={s.increaseText}>Augmenter</Text>
			</TouchableOpacity>
			<Text style={{ fontSize: 40 }}>J'ai {age} ans</Text>
		</View>
	);
}
