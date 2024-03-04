import { SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlexDemo } from './components/FlexDemo/FlexDemo';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
				{/* 				
        <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
        <View style={{ backgroundColor: 'red', flex: 1 }}></View>
        */}
				<FlexDemo />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
