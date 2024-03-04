import { Text } from 'react-native';

export function Human({ firstName, lastName, age, car, children, isHappy }) {
	return (
		<>
			<Text style={{ fontSize: 20 }}>
				Je suis {lastName} {firstName} et j'ai {age} ans
			</Text>
			<Text style={{ fontSize: 20 }}>
				Ma voiture est une {car.brand} elle roule au max à {car.maxSpeed}
			</Text>
			<Text>{isHappy ? 'texte si content' : 'texte si pas content'}</Text>
			{children}
		</>
	);
}
