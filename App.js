import { SafeAreaView, Alert, Text, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Child } from './components/Child/Child';

export default function App() {
	function sayHello(nom) {
    Alert.alert('Bonjour ' + nom + ' !');
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ backgroundColor: 'green', flex: 1 }}>
				{/* 				
        <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
        <View style={{ backgroundColor: 'red', flex: 1 }}></View>
        */}
				<Child Action={sayHello} />
        <Text style={{textAlign: 'center', color: 'white'}}>{(Platform.OS === 'android' ? 'Running on Android' : 'Running on iOS') + ' v.' + Platform.Version}</Text>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
