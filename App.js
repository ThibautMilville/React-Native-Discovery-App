import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView } from 'react-native';
import { Human } from './components/Human/Human';
import { styles } from './assets/css/app.style';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style='auto' />
				<Human
					lastName={'John'}
					firstName={'Smith'}
					age={30}
					car={{ brand: 'Citroen', maxSpeed: 180 }}
					isHappy={true}
					doSomething={function () {
						console.log('Passage dans doSomeThing');
					}}>
					<Image
						style={{ height: 200, width: 300 }}
						source={{ uri: 'https://picsum.photos/200/300' }}
					/>
				</Human>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
