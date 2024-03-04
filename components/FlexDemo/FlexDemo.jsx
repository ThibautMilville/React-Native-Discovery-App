import { s } from './FlexDemo.style';
import { View } from 'react-native';

export function FlexDemo() {
	return (
		<View style={ s.container }>
			<View style={s.box1} />
			<View style={s.box2} />
			<View style={s.box3} />
		</View>
	);
}
