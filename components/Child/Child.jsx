import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/css/app.style';

export function Child({ Action }) {
	function surClic(){
		Action("Nizaar");
		}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={surClic}>
				<Text style={{ fontSize: 40 }}>Cliquez ici </Text>
			</TouchableOpacity>
		</View>
	);
}