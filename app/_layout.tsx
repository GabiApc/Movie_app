import { Stack } from 'expo-router';
import './globals.css';
import { StatusBar } from 'react-native';

export default function RootLayout() {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='(tabs)'
					options={{
						headerShown: false,
						statusBarStyle: 'light',
						statusBarTranslucent: true,
						statusBarHidden: false,
						statusBarBackgroundColor: 'transparent',
					}}
				/>
				<Stack.Screen
					name='movies/[id]'
					options={{
						headerShown: false,
						statusBarStyle: 'light',
						statusBarTranslucent: true,
						statusBarHidden: false,
						statusBarBackgroundColor: 'transparent',
					}}
				/>
			</Stack>
		</>
	);
}
